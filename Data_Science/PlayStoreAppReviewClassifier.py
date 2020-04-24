# Author - Safiyyah Thur Rahman
# Purpose - Classify reviews and saves in db
# pip install pymongo, pandas


import pymongo
import sys

from datetime import datetime
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from pandas.io.json import json_normalize
from FeatureExtraction import FeatureExtraction
from MLPModel import MLPModel
from PreProcess import PreProcess
from SentimentAnalysis import SentimentAnalysis


class PlayStoreAppReviewClassifier:

    # used to classify the reviews and used invoke the function used to identified the clusters of the reviews
    def classify_reviews(self):
        # checking if the user has passed the appName and appId
        if len(sys.argv) == 3:
            # the list of keywords that should not be used to group the reviews
            notKeywords = ["driver", "rider", "fix", "issue",
                           "problem", "application", "app", "not", "nt"]
            # retrieve the collection from the db
            collection = db["MobileApplications"]
            # uses the second argument passed
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
            # ensuring the mbDetails are present and not None
            if mbDetails is not None:
                # the reviews are put in an array
                reviewsFound = mbDetails["reviewsArray"]
                for review in reviewsFound:
                    # the retrieved reviews are then added to another array
                    reviews.append(review)
                    # the text is preprocessed at 2 different level,
                    # the first is de_emojized and the next removes the emojis and then preprocesses.
                    lexicon_preprocessed.append(
                        PreProcess.pre_process_review(review["text"], "lexicon"))
                    cluster_preprocessed.append(
                        PreProcess.pre_process_review(review["text"], "cluster"))
                    # calling the calc_lexicon_sentiment to calculate the lexicon sentiment of a review
                    sentiment = self.__calc_lexicon_sentiment(
                        lexicon_preprocessed[i])
                    # append the sentiment calculated by the lexicon sentiment analyzer
                    lexicon_sentiment.append(sentiment)
                    # the preprocessed text is further preprocessed to find the sentiment using the svr model
                    svr_preprocessed.append(PreProcess.pre_process_review(
                        lexicon_preprocessed[i], "svr"))
                    i += 1
                # predict the sentiment of the preprocessed text
                predicted_results = SentimentAnalysis.predict_sentiment(
                    svr_preprocessed, lexicon_sentiment)
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
                    mbDetails = self.__insert_reviews(mbDetails, reviews, predicted, lexicon_sentiment, clusters,
                                                      keywords,
                                                      fe_preprocessedReviews)
                    # insert the overall sentiment of the mobile app and other details
                    mbDetails = self.__insert_mobile_app_details(
                        mbDetails, predicted_results)
                    # the name of the app is often identified as a keyword hence it is added to the array above
                    appName = sys.argv[2]
                    notKeywords = notKeywords + list(appName.split(" "))
                    # identify and save the bugFixes and the featureRequests
                    self.__identifyKeywordsAndSave(
                        appId, mbDetails, ["BugFixes", "FeatureRequests"], notKeywords)
                    # return done to indicate that the analysis is complete
                    return "Done"
                except:
                    # the object is null is returned if the mbDetails
                    return "The object is null"
            else:
                return "mbDetails not there"
        else:
            return "Argument Error"

    def __insert_reviews(self, mbDetails, reviews, predicted, lexicon_sentiment, clusters, keywords,
                         fe_preprocessedReviews):
        # initializing the array to save the entire reviews
        # which contain all the information of a review
        pre_processedReviews = []
        # i is used an index to iterate through some of the arrays
        i = 0
        # the loop is used to make new dicts and append it to pre_processedReviews
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
                # appended to the json object created above
                pre_processed_review.update(
                    {"keywords": keywords[i], "fe_preprocessedReview": fe_preprocessedReviews[i]})
            # append the json objects to an array
            pre_processedReviews.append(pre_processed_review)
            # increase the index by 1
            i += 1
        # to ensure the mbDetails is not None or null
        if mbDetails is not None:
            # remove the key value pair which has the key as reviewsArray
            mbDetails.pop("reviewsArray")
            # adding a new key-value pair with the same key name
            mbDetails.update({"reviewsArray": pre_processedReviews})
            # return the updated dict
            return mbDetails

    def __calc_lexicon_sentiment(self, review):
        # making a object of the SentimentIntensityAnalyzer to
        # retrieve the sentiment of a review calculated by the vader lexicon
        vaderSentimentAnalyzer = SentimentIntensityAnalyzer()
        # get the polarity scores from the vader Sentiment Analyzer. This returns neu, neg and pos scores
        result = vaderSentimentAnalyzer.polarity_scores(review)
        # the score of the results["neg"] is positive hence to make
        # it negative to get the overall sentiment it is multiplied to -1
        negScore = -1 * result["neg"]
        posScore = result["pos"]
        # add the pos and neg score to get an overall score for the sentiment
        sentiment = posScore + negScore
        # return the overall sentiment of a review
        return sentiment

    def __insert_mobile_app_details(self, mbDetails, predicted_results):
        # to ensure the mbDetails is not None or null
        if mbDetails is not None:
            # the json object parsed is used to store the app details
            mbDetails.update({'overall_sentiment': predicted_results['overall_sentiment'],
                              'rating_calculated': predicted_results['rating'],
                              'r2_score_of_senti_prediction': predicted_results['r2_score'],
                              'mean_square_error_of_senti_prediction': predicted_results[
                                  'mean_square_error']})
            return mbDetails

    def __identifyKeywordsAndSave(self, appId, mbDetails, clusterNames, notKeywords):
        # retrieve the collection from the db
        collection = db["MobileApplications"]
        # retrieve the reviewsArray value and store to the reviews array
        reviews = mbDetails["reviewsArray"]
        for clusterName in clusterNames:
            # converting the array of dicts to a DataFrame
            df = json_normalize(reviews)
            # select rows in the DataFrame that have the same cluster as the clusterName
            clusteredReviews = df[df["cluster"] == clusterName]
            # used to concatenate the all the keywords in selectedReviews array
            totalReviewSentence = ""
            # makes accessing the selected reviews easier
            reviewsFound = []
            # # this for loop is used to populate the array and the string variable
            for i in range(len(clusteredReviews["_id"])):
                # appending the selected reviews to an array
                reviewsFound.append(clusteredReviews.iloc[i])
                # converting the keywords of the selected reviews to a string and then adding it to a variable
                sentence = PreProcess.listToString(
                    clusteredReviews["keywords"].iloc[i])
                # appending the sentence made to another variable to
                # make a sentence of the keywords of the selected reviews
                totalReviewSentence = totalReviewSentence + sentence + " "
            # find the keywords
            keywords = self.__find_top_keywords(
                clusteredReviews, totalReviewSentence, notKeywords)
            # stores the ids of the reviews that contain a particular keyword
            keywordsReviewIDs = []
            # stores the overall sentiment of the cluster for each keyword
            sentimentKeywords = []
            # for loop is used to iterate through the keywords identified
            for keyword in keywords:
                reviewIDs = []
                sentimentKeyword = 0
                for i in range(len(clusteredReviews["keywords"])):
                    # making the list of keywords to a set
                    setWords = set(clusteredReviews["keywords"].iloc[i])
                    # if the keyword identified is in the setWords then the review is clustered under that keyword
                    if keyword in setWords:
                        # adding the overall sentiment of a keyword by using the predicted sentiment of each review
                        sentimentKeyword += clusteredReviews["svr_sentiment"].iloc[i]
                        # the review id of the clusteredReview is appended to an array to help
                        # identify the reviews that have been clustered
                        reviewIDs.append(clusteredReviews["_id"].iloc[i])
                # appending the sentiment of the keyword to an array that is used to store the sentiment of keyword
                sentimentKeywords.append(sentimentKeyword)
                # adding the list of review ids
                keywordsReviewIDs.append(reviewIDs)
            # the function returns an array of dicts, the dict has an id, keyword,
            # list of ids that have the keyword and the sentiment of the keyword
            clusteredIds = self.__insert_clustered_reviews(keywordsReviewIDs, keywords, sentimentKeywords,
                                                           clusteredReviews)
            # create the json object used to store the app details
            if mbDetails is not None:
                mbDetails.update({clusterName: clusteredIds})
                mbDetails.update({"date_uploaded": str(datetime.now())})
                # delete the document which has the appId as the value stored in the variable called appId
                collection.delete_one({"appId": appId})
                # then the mbDetails dict is appended to the collection as a document
                collection.insert_one(mbDetails)

    def __find_top_keywords(self, df, totalReviewSentence, notKeywords):
        # identify the top features of the selectedReviews
        results = FeatureExtraction.find_keywords_sentence(
            df["fe_preprocessedReview"], totalReviewSentence)
        # tokenizing the data after converting the array results to a string
        doc = PreProcess.nlp(PreProcess.listToString(results))
        keywords = []
        # used to remove or keep some keywords identified based on the conditions given
        for token in doc:
            # keywords accepted are only keywords that are nouns and
            # the keywords that are not in the array or if the keyword is the word location or status
            if ((
                    token.pos_ == "NOUN" and token.text not in notKeywords) or token.text == 'location' or token.text == 'status'):
                keywords.append(token.text)
        return keywords

    def __insert_clustered_reviews(self, keywordsReviewIDs, keywords, sentimentKeywords, df):
        # initializing the index
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
        # initializing the variable to an empty set
        setIDs = set()
        # used to identify the ids of the reviews that are not grouped according to the keyword extracted
        for reviewIDs in keywordsReviewIDs:
            # adding the review ids that are in the list to a set
            for reviewID in reviewIDs:
                setIDs.add(reviewID)
        # initializing an array to store the ids that are not clustered
        remainingID = []
        # declaring a variable used to sentiment of the non clustered reviews
        sentimentScore = 0
        # calculating the sentiment of the non grouped reviews
        for i in range(len(df["_id"])):
            # if the id is not in the set then they are added to the array
            if df["_id"].iloc[i] not in setIDs:
                remainingID.append(df["_id"].iloc[i])
                # and the sentiment of the review is added
                sentimentScore += df["svr_sentiment"].iloc[i]
        # the keyword is "" is to indicate they are not grouped
        keyword = ""
        # making a dict for the remaining reviews
        clusterReview = {"_id": str(idNum), "keyword": keyword, "reviewIDs": remainingID,
                         "sentiment_score": sentimentScore}
        # appending to an array
        clusteredReviews.append(clusterReview)
        # return the array of dicts
        return clusteredReviews


# the main program that runs when the script is called
message = "fine"
try:
    # make connection with the cluster in mongo cloud
    client = pymongo.MongoClient(
        "mongodb+srv://User:1234@r3act-rludw.mongodb.net/test?retryWrites=true&w=majority")
    # retrieve the db from the cluster
    db = client['ARC']
    # #make an object of the class and call the classify_reviews function
    playStoreARC = PlayStoreAppReviewClassifier()
    message = playStoreARC.classify_reviews()
except:
    message = "DB Error"
finally:
    # print the message variable so the when sys.stdout.flush
    print(str(message))
    sys.stdout.flush()
