# Author - Safiyyah Thur Rahman
# Purpose - Classify reviews and saves in db
# pip install pymongo, pandas
import pymongo
import sys
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

from pandas.io.json import json_normalize
# words that are not considered as keyowrds even if identified
from FeatureExtraction import FeatureExtraction
from MLPModel import MLPModel
from PreProcess import PreProcess
from SentimentAnalysis import SentimentAnalysis


class PlayStoreAppReviewClassifier:
    # used to classify the reviews and used invoke the function used to identified the clusters of the reviews
    def classify_reviews(self):
        # checking if the user has passed the appName and appId
        if len(sys.argv) == 3:
            notKeywords = ["driver", "rider", "fix", "issue", "problem", "application", "app", "not", "nt"]
            # retrieve the collection from the db
            collection = db["MobileApplications"]
            appId = sys.argv[1]
            # find all the mobile application which has the appId as the passed name
            mbDetails = collection.find_one({"appId": appId})
            # initializing 4 arrays 3 is used to store the preprocessed
            # text at different levels of preprocessing and 1 used to
            # store the sentiment which used to identified the r2_score
            lexicon_sentiment = []
            svr_preprocessed = []
            lexicon_preprocessed = []
            cluster_preprocessed = []
            reviews = []
            i = 0
            if mbDetails is not None:
                reviewsFound = mbDetails["reviewsArray"]
                for review in reviewsFound:
                    reviews.append(review)
                    # the text is preprocessed at 2 different level,
                    # the first is de_emojized and the next removes the emojis and then preprocesses.
                    lexicon_preprocessed.append(PreProcess.pre_process_review(review["text"], "lexicon"))
                    cluster_preprocessed.append(PreProcess.pre_process_review(review["text"], "cluster"))
                    # calling the calc_lexicon_sentiment to calculate the lexicon sentiment of a review
                    sentiment = self.__calc_lexicon_sentiment(lexicon_preprocessed[i])
                    # append the sentiment calculated by the lexicon sentiment analyzer
                    lexicon_sentiment.append(sentiment)
                    # the preprocessed text is further preprocessed to find the sentiment using the svr model
                    svr_preprocessed.append(PreProcess.pre_process_review(lexicon_preprocessed[i], "svr"))
                    i += 1
                # predict the sentiment of the preprocessed text
                predicted_results = SentimentAnalysis.predict_sentiment(svr_preprocessed, lexicon_sentiment)
                # predict the cluster the reviews belong to
                clusteredResult = MLPModel.clusterReviews(cluster_preprocessed)
                # save the array of predicted sentiment
                predicted = predicted_results["predicted"]
                # save the clusters identified
                clusters = clusteredResult["cluster_Results"]
                # save the keywords extracted
                keywords = clusteredResult["keywords"]
                # save the preprocessed text that is sent to extract the keywords
                fe_preprocessedReviews = clusteredResult["fe_preprocessedReviews"]
                # insert the preprocessed and modified reviews
                try:
                    mbDetails = self.__insert_reviews(mbDetails, reviews, predicted, lexicon_sentiment, clusters, keywords,
                                                    fe_preprocessedReviews,
                                                    appId)
                    # insert the overall sentiment of the mobile app and other details
                    mbDetails = self.__insert_mobile_app_details(mbDetails, predicted_results)
                    # the name of the app is often identified as a keyword hence it is added to the array above
                    appName = sys.argv[2]
                    notKeywords + list(appName.split(" "))
                    # identify and save the bugFixes and the featureRequests
                    self.__identifyKeywordsAndSave(appId, mbDetails, ["BugFixes", "FeatureRequests"], notKeywords)
                    return "Done"
                except:
                    return "The object is null"
            else: 
                return "mbDetails not there"
        else:
            return "Argument Error"
            

    def __insert_reviews(self, mbDetails, reviews, predicted, lexicon_sentiment, clusters, keywords,
                         fe_preprocessedReviews,
                         appId):
        pre_processedReviews = []
        i = 0
        for review in reviews:
            sentiment = predicted[i]
            # based on the predicted sentiment the polarity is determined
            polarity = "neutral"
            if sentiment > 0:
                polarity = "positive"
            elif sentiment < 0:
                polarity = "negative"
            # the json object is created
            pre_processed_review = {"_id": review["_id"], "userName": review["userName"],
                                    "date": review["date"],
                                    "text": review["text"], "version": review["version"],
                                    "rating": review["rating"],
                                    "thumbsUp": review["thumbsUp"],
                                    "lexicon_sentiment": lexicon_sentiment[i], "svr_sentiment": sentiment,
                                    "polarity": polarity,
                                    "cluster": clusters[i]}
            if clusters[i] != "Common":
                # if the cluster predicted is either BugFixes or FeatureRequests
                # then the keywords key value pair and the preprocessed text is
                # appended to the json objet created above
                pre_processed_review.update(
                    {"keywords": keywords[i], "fe_preprocessedReview": fe_preprocessedReviews[i]})
            # append the json objects to an array
            pre_processedReviews.append(pre_processed_review)
            i += 1
        if mbDetails is not None:
            mbDetails.pop("reviewsArray")
            mbDetails.update({"reviewsArray": pre_processedReviews})
            # return the updated dict
            return mbDetails

    def __calc_lexicon_sentiment(self, review):
        vaderSentimentAnalyzer = SentimentIntensityAnalyzer()
        # get the polarity scores from the vader Sentiment Analyzer. This returns neu, neg and pos scores
        result = vaderSentimentAnalyzer.polarity_scores(review)
        # the score of the results["neg"] is positive hence to make
        # it negative to get the overall sentiment it is multiplied to -1
        negScore = -1 * result["neg"]
        posScore = result["pos"]
        # add the pos and neg score to get an overall score for the sentiment
        sentiment = posScore + negScore
        return sentiment

    def __insert_mobile_app_details(self, mbDetails, predicted_results):
        # the json object parsed is used to store the app details
        if mbDetails is not None:
            mbDetails.update({'overall_sentiment': predicted_results['overall_sentiment'],
                              'rating_calculated': predicted_results['rating'],
                              'r2_score_of_senti_prediction': predicted_results['r2_score'],
                              'mean_square_error_of_senti_prediction': predicted_results[
                                  'mean_square_error']})
            return mbDetails

    def __identifyKeywordsAndSave(self, appId, mbDetails, clusterNames, notKeywords):
        #retrieve the collection from the db
        collection = db["MobileApplications"]
        for clusterName in clusterNames:
            reviews = mbDetails["reviewsArray"]
            df = json_normalize(reviews)
            clusteredReviews = df[df["cluster"] == clusterName]
            # # used to concatenate the all the keywords in selectedReviews array
            totalReviewSentence = ""
            # # makes accessing the selected reviews easier
            reviewsFound = []
            # # this for loop is used to populate the array and the string variable
            for i in range(len(clusteredReviews["_id"])):
                reviewsFound.append(clusteredReviews.iloc[i])
                sentence = PreProcess.listToString(clusteredReviews["keywords"].iloc[i])
                totalReviewSentence = totalReviewSentence + sentence + " "
            #find the keywords
            keywords = self.__find_top_keywords(clusteredReviews, totalReviewSentence, notKeywords)
            # stores the ids of the reviews that contain a particular keyword
            keywordsReviewIDs = []
            # stores the overall sentiment of the cluster for each keyword
            sentimentKeywords = []
            # for loop is used to iterate through the keywords identified
            for keyword in keywords:
                reviewIDs = []
                sentimentKeyword = 0
                for i in range(len(clusteredReviews["keywords"])):
                    setWords = set(clusteredReviews["keywords"].iloc[i])
                    if keyword in setWords:
                        # adding the overall sentiment of a keyword by using the predicted sentiment of each review
                        sentimentKeyword += clusteredReviews["svr_sentiment"].iloc[i]
                        reviewIDs.append(clusteredReviews["_id"].iloc[i])
                sentimentKeywords.append(sentimentKeyword)
                keywordsReviewIDs.append(reviewIDs)
            clusteredIds = self.__insert_clustered_reviews(keywordsReviewIDs, keywords, sentimentKeywords, df)
            # create the json object used to store the app details
            if mbDetails is not None:
                mbDetails.update({clusterName: clusteredIds})
        # insert the array
        collection.delete_one({"appId": appId})
        collection.insert_one(mbDetails)

    def __find_top_keywords(self, df, totalReviewSentence, notKeywords):
        # identify the top features of the selectedReviews
        results = FeatureExtraction.find_keywords_sentence(df["fe_preprocessedReview"], totalReviewSentence)
        doc = PreProcess.nlp(PreProcess.listToString(results))
        keywords = []
        # used to remove some keywords identified
        for token in doc:
            if ((
                    # keywords accepted are only keywords that are nouns and
                    # the keywords that are not in the array or if the keyword is the word location
                    token.pos_ == "NOUN" and token.text not in notKeywords) or token.text == 'location'):
                keywords.append(token.text)
        return keywords

    def __insert_clustered_reviews(self, keywordsReviewIDs, keywords, sentimentKeywords, df):
        i = 0
        # idNum is used to calculate the id
        idNum = 1
        clusteredReviews = []
        # used to an array of json objects
        for group in keywordsReviewIDs:
            clusterReview = {"_id": str(idNum), "keyword": keywords[i], "reviewIDs": group,
                             "sentiment_score": sentimentKeywords[i]}
            idNum += 1
            clusteredReviews.append(clusterReview)
            i += 1
        setIDs = set()
        # used to identify the ids of the reviews that are not grouped according to the keyword extracted
        for reviewIDs in keywordsReviewIDs:
            for reviewID in reviewIDs:
                setIDs.add(reviewID)
        remainingID = []
        sentimentScore = 0
        # calculating the sentiment of the non grouped reviews
        for i in range(len(df["_id"])):
            if df["_id"].iloc[i] not in setIDs:
                remainingID.append(df["_id"].iloc[i])
                sentimentScore += df["svr_sentiment"][i]
        keyword = ""
        clusterReview = {"_id": str(idNum), "keyword": keyword, "reviewIDs": remainingID,
                         "sentiment_score": sentimentScore}
        clusteredReviews.append(clusterReview)
        return clusteredReviews


# make connection with the cluster in mongo cloud
message = "fine"
try:
    client = pymongo.MongoClient(
        "mongodb://User:1234@r3act-shard-00-00-rludw.mongodb.net:27017,r3act-shard-00-01-rludw.mongodb.net:27017,r3act-shard-00-02-rludw.mongodb.net:27017/test?ssl=true&replicaSet=R3ACT-shard-0&authSource=admin&retryWrites=true&w=majority")
    # retrieve the db from the cluster
    db = client['ARC']
    # #make an object of the class and call the classify_reviews function
    playStoreARC = PlayStoreAppReviewClassifier()
    message = playStoreARC.classify_reviews()
except:
    message = "DB Error"
finally:
print(str(message))
sys.stdout.flush()
