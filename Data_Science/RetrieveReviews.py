import pymongo
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

from Data_Science.Classification.ClassifyTest import clusterReviews
from Data_Science.FeatureExtraction.Finding_keywords import find_keywords_sentence
from Data_Science.SentimentAnalysis.PredictOverallSentiment import predict_sentiment
from Data_Science.TextPreprocessing.PreProcessing import reg_preprocessing, pre_processing_labelled_data, \
    cluster_pre_processing
from pandas.io.json import json_normalize
from Data_Science.TextPreprocessing.PreProcessing import listToString, nlp

notKeywords = ["driver", "rider", "fix", "issue", "problem", "application", "app"]


def classifyReviews(appName):
    notKeywords.append(appName.lower())
    client = pymongo.MongoClient(
        "mongodb+srv://User:1234@r3act-rludw.mongodb.net/test?retryWrites=true&w=majority")
    db = client['Safiyyah_ARC']
    collection = db["Reviews"]
    reviews = collection.find({})
    lexicon_sentiment = []
    svr_preprocessed = []
    lexicon_preprocessed = []
    pre_processedReviews = []
    cluster_preprocessed = []
    i = 0
    vaderSentimentAnalyzer = SentimentIntensityAnalyzer()
    for review in reviews:
        print(i)
        lexicon_preprocessed.append(reg_preprocessing(review["text"], True))
        cluster_preprocessed.append(cluster_pre_processing(review["text"]))
        result = vaderSentimentAnalyzer.polarity_scores(lexicon_preprocessed[i])
        negScore = -1 * result["neg"]
        posScore = result["pos"]
        # add the pos and neg score to get an overall score for the sentiment
        sentiment = posScore + negScore
        lexicon_sentiment.append(sentiment)
        svr_preprocessed.append(pre_processing_labelled_data(lexicon_preprocessed[i]))
        i += 1
    predicted_results = predict_sentiment(svr_preprocessed, lexicon_sentiment)
    clusteredResult = clusterReviews(cluster_preprocessed)
    predicted = predicted_results["predicted"]
    i = 0
    clusters = clusteredResult["cluster_Results"]
    keywords = clusteredResult["keywords"]
    fe_preprocessedReviews = clusteredResult["fe_preprocessedReviews"]
    reviews = collection.find({})
    for review in reviews:
        print(i)
        sentiment = predicted[i]
        polarity = "neutral"
        if sentiment > 0:
            polarity = "positive"
        elif sentiment < 0:
            polarity = "negative"
        pre_processed_review = {"_id": review["_id"], "userName": review["userName"],
                                "date": review["date"],
                                "text": review["text"], "version": review["version"],
                                "rating": review["rating"],
                                "thumbsUp": review["thumbsUp"],
                                "lexicon_preprocessed": lexicon_preprocessed[i],
                                "svr_preprocessed": svr_preprocessed[i],
                                "lexicon_sentiment": lexicon_sentiment[i], "svr_sentiment": sentiment,
                                "polarity": polarity,
                                "cluster": clusters[i]}
        if clusters[i] != "Common":
            pre_processed_review.update({"keywords": keywords[i], "fe_preprocessedReview": fe_preprocessedReviews[i]})
        pre_processedReviews.append(pre_processed_review)
        i += 1
    collection.delete_many({})
    x = collection.insert_many(pre_processedReviews)
    print(x.inserted_ids)
    collection = db["MobileApplicationDetails"]
    apps = collection.find_one()
    # "appId": apps["appId"],
    mbDetails = {"_id": apps["_id"],
                 "title": apps["title"],
                 "summary": apps["summary"],
                 "installs": apps["installs"],
                 "scoreText": apps["scoreText"],
                 "reviews": apps["reviews"],
                 "priceText": apps["priceText"],
                 "developer": apps["developer"],
                 "genre": apps["genre"],
                 "icon": apps["icon"], 'overall_sentiment': predicted_results['overall_sentiment'],
                 'rating_calculated': predicted_results['rating'],
                 'r2_score_of_senti_prediction': predicted_results['r2_score'],
                 'mean_square_error_of_senti_prediction': predicted_results['mean_square_error']}
    collection.delete_many({})
    collection.insert_one(mbDetails)
    identifyKeywordsAndSave("BugFixes", notKeywords)
    identifyKeywordsAndSave("FeatureRequests", notKeywords)


# df1 = json_normalize(remainingReviews) result=find_keywords_review(df1["fe_preprocessedReview"]) for i in range (
# len(result)): foundKeyWordFlag=False keyword="" for j in range(len(result[i])): if(result[i][j]!="app" and result[
# i][j]!="fix" and result[i][j]!="issue" and result[i][j]!="problem" and result[i][j]!="driver" and result[i][
# j]!="instagram" and result[i][j]!="rider" and result[i][j]!="face" and result[i][j]!="not"): keyword=result[i][j]
# foundKeyWordFlag=True if foundKeyWordFlag: finalBugFix = {"_id": str(idNum), "keyword": keyword, "reviewIDs": [
# remainingID[i]], "sentiment_score": df1["svr_sentiment"][i]} idNum+=1

def identifyKeywordsAndSave(clusterName, notKeywords):
    client = pymongo.MongoClient(
        "mongodb+srv://User:1234@r3act-rludw.mongodb.net/test?retryWrites=true&w=majority")
    db = client['Safiyyah_ARC']
    collection = db["Reviews"]
    query = {"cluster": clusterName}
    bugFixes = collection.find(query)
    bugFixSentence = ""
    foundBugFixes = []
    i = 0
    for bugFix in bugFixes:
        print(i)
        foundBugFixes.append(bugFix)
        sentence = listToString(bugFix["keywords"])
        bugFixSentence = bugFixSentence + sentence + " "
        i += 1
    df = json_normalize(foundBugFixes)
    results = find_keywords_sentence(df["fe_preprocessedReview"], bugFixSentence)
    doc = nlp(listToString(results))
    bugFixKeywords = []
    for token in doc:
        if ((
                token.pos_ == "NOUN" and token.text not in notKeywords) or token.text == 'location'):
            bugFixKeywords.append(token.text)
    bugFixKeywordReviewIDs = []
    sentimentGrouping = []
    for bugFixKeyword in bugFixKeywords:
        reviewIDs = []
        sentimentBugFixKeyword = 0
        if bugFixKeyword != "app":
            for i in range(len(df["keywords"])):
                setWords = set(df["keywords"][i])
                if bugFixKeyword in setWords:
                    sentimentBugFixKeyword += df["svr_sentiment"][i]
                    reviewIDs.append(df["_id"][i])
        sentimentGrouping.append(sentimentBugFixKeyword)
        bugFixKeywordReviewIDs.append(reviewIDs)
    i = 0
    idNum = 1
    finalizedBugFix = []
    for group in bugFixKeywordReviewIDs:
        if bugFixKeywords[i] != "app":
            finalBugFix = {"_id": str(idNum), "keyword": bugFixKeywords[i], "reviewIDs": group,
                           "sentiment_score": sentimentGrouping[i]}
            idNum += 1
            finalizedBugFix.append(finalBugFix)
        i += 1
    setIDs = set()
    for reviewIDs in bugFixKeywordReviewIDs:
        for bugFixKeyword in reviewIDs:
            setIDs.add(bugFixKeyword)
    remainingID = []
    sentimentScore = 0
    for i in range(len(df["_id"])):
        if df["_id"][i] not in setIDs:
            remainingID.append(df["_id"][i])
            sentimentScore += df["svr_sentiment"][i]
    _id = str(idNum)
    keyword = ""
    finalBugFix = {"_id": str(idNum), "keyword": keyword, "reviewIDs": remainingID, "sentiment_score": sentimentScore}
    finalizedBugFix.append(finalBugFix)
    collection = db[clusterName]
    collection.delete_many({})
    collection.insert_many(finalizedBugFix)


classifyReviews("Instagram")
