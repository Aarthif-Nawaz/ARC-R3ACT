# Author - Safiyyah Thur Rahman
# Purpose - Classify reviews and saves in db
# pip install pymongo
import pymongo
import sys
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

from pandas.io.json import json_normalize

# words that are not considered as keyowrds even if identified
from Data_Science.FeatureExtraction import FeatureExtraction
from Data_Science.MLPModel import MLPModel
from Data_Science.PreProcess import PreProcess
from Data_Science.SentimentAnalysis import SentimentAnalysis


class PlayStoreAppReviewClassifier:
    # used to classify the reviews and used invoke the function used to identified the clusters of the reviews
    def classify_reviews(self, appId, appName):
        # checking if the user has passed the appName and appId
        # if len(sys.argv)!=3:
        notKeywords = ["driver", "rider", "fix", "issue", "problem", "application", "app", "not", "nt"]
        # retrieve the collection from the db
        collection = db["Reviews"]
        # find all the reviews hence the query passed is empty {}
        reviews = collection.find({})
        # initializing 4 arrays 3 is used to store the preprocessed
        # text at different levels of preprocessing and 1 used to
        # store the sentiment which used to identified the r2_score
        lexicon_sentiment = []
        svr_preprocessed = []
        lexicon_preprocessed = []
        cluster_preprocessed = []
        i = 0
        for review in reviews:
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
        self.__insert_reviews(collection, predicted, lexicon_sentiment, clusters, keywords, fe_preprocessedReviews,
                              appId)
        # insert the overall sentiment of the mobile app and other details
       # self.__insert_mobile_app_details(predicted_results, appId)
        # # the name of the app is often identified as a keyword hence it is added to the array above
        # notKeywords.append(appName.lower())
        # # identify and save the bugFixes and the featureRequests
        # self.__identifyKeywordsAndSave(appId, "BugFixes", notKeywords)
        # self.__identifyKeywordsAndSave(appId, "FeatureRequests", notKeywords)

    def __insert_reviews(self, collection, predicted, lexicon_sentiment, clusters, keywords, fe_preprocessedReviews,
                         appId):
        pre_processedReviews = []
        i = 0
        # find all the reviews hence the query passed is empty {}
        reviews = collection.find({})
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
        collection = db["MobileApplicationDetails"]
        mbDetails=collection.find_one({"appId": appId})
        print(mbDetails)
        # if mbDetails is not None:
        #     mbDetails.append({"reviewsArray":pre_processedReviews})
        # insert the array
        # collection.delete_one({"appId": appId})
        # collection.insert_one(mbDetails)

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

    def __insert_mobile_app_details(self, predicted_results, appId):
        collection = db["MobileApplicationDetails"]
        # retrieve the app details inserted
        apps = collection.find_one({"appId": appId})
        # create the json object used to store the app details
        if apps is not None:
            apps.append({'overall_sentiment': predicted_results['overall_sentiment'],
                                            'rating_calculated': predicted_results['rating'],
                                            'r2_score_of_senti_prediction': predicted_results['r2_score'],
                                            'mean_square_error_of_senti_prediction': predicted_results[
                                                'mean_square_error']})
            # insert the array
            collection.delete_one({"appId": appId})
            collection.insert_one(apps)
            # mbDetails = {"_id": apps["_id"],
            #              "appId": apps["appId"],
            #              "title": apps["title"],
            #              "summary": apps["summary"],
            #              "installs": apps["installs"],
            #              "scoreText": apps["scoreText"],
            #              "reviews": apps["reviews"],
            #              "priceText": apps["priceText"],
            #              "developer": apps["developer"],
            #              "genre": apps["genre"],
            #              "icon": apps["icon"], 'overall_sentiment': predicted_results['overall_sentiment'],
            #              'rating_calculated': predicted_results['rating'],
            #              'r2_score_of_senti_prediction': predicted_results['r2_score'],
            #              'mean_square_error_of_senti_prediction': predicted_results['mean_square_error']}
            # # deletes the previous records
            # collection.delete_many({})
            # # insert the json object
            # collection.insert_one(mbDetails)

    def __identifyKeywordsAndSave(self, appId, clusterName, notKeywords):
        # retrieve the collection from the db
        collection = db["MobileApplicationDetails"]
        # the query variable is used to store a key value pair
        query = {"appId": appId}
        query1 = {"reviewArray": {"$elemMatch": {"cluster": clusterName}}}
        # used to find all the reviews with a value of the cluster key equal to the clusterName
        selectedReviews = collection.find(query, query1)
        # used to concatenate the all the keywords in selectedReviews array
        totalReviewSentence = ""
        # makes accessing the selected reviews easier
        reviewsFound = []
        # this for loop is used to populate the array and the string variable
        for selectedReview in selectedReviews:
            reviewsFound.append(selectedReview)
            sentence = PreProcess.listToString(selectedReview["keywords"])
            totalReviewSentence = totalReviewSentence + sentence + " "
        # convert the json object array to a multidimensional array
        df = json_normalize(reviewsFound)
        keywords = self.__find_top_keywords(df, totalReviewSentence, notKeywords)
        # stores the ids of the reviews that contain a particular keyword
        keywordsReviewIDs = []
        # stores the overall sentiment of the cluster for each keyword
        sentimentKeywords = []
        # for loop is used to iterate through the keywords identified
        for keyword in keywords:
            reviewIDs = []
            sentimentKeyword = 0
            for i in range(len(df["keywords"])):
                setWords = set(df["keywords"][i])
                if keyword in setWords:
                    # adding the overall sentiment of a keyword by using the predicted sentiment of each review
                    sentimentKeyword += df["svr_sentiment"][i]
                    reviewIDs.append(df["_id"][i])
            sentimentKeywords.append(sentimentKeyword)
            keywordsReviewIDs.append(reviewIDs)
        self.__insert_clustered_reviews(appId, keywordsReviewIDs, keywords, sentimentKeywords, df, clusterName)

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

    def __insert_clustered_reviews(self, appId, keywordsReviewIDs, keywords, sentimentKeywords, df, clusterName):
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
            if df["_id"][i] not in setIDs:
                remainingID.append(df["_id"][i])
                sentimentScore += df["svr_sentiment"][i]
        keyword = ""
        clusterReview = {"_id": str(idNum), "keyword": keyword, "reviewIDs": remainingID,
                         "sentiment_score": sentimentScore}
        clusteredReviews.append(clusterReview)
        # retrieving the table that has the clusterName
        collection = db["MobileApplicationDetails"]
        # # delete all the records
        # collection.delete_many({})
        # insert the array created
        collection.update_one({"appId": appId}, {"$set": {clusterName: clusteredReviews}})


# make connection with the cluster in mongo cloud
client = pymongo.MongoClient(
    "mongodb+srv://User:1234@r3act-rludw.mongodb.net/test?retryWrites=true&w=majority")
# retrieve the db from the cluster
db = client['ARC']
# # example how to call function
playStoreARC = PlayStoreAppReviewClassifier()
playStoreARC.classify_reviews("WEBTOON", "com.naver.linewebtoon")
