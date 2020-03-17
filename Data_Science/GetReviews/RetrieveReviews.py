# Author - Ridmi Amasha Naidu
# Purpose - Retrieve reviews from the third party API
import pymongo
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

from Data_Science.TextPreprocessing.PreProcessing import reg_preprocessing, pre_processing_labelled_data


def getReviews(packageName, size):
    # # Step one for every Python app that talks over the web
    # # $ pip install requests
    # # Connecting with nodenpm package to extract app reviews
    import requests
    import sys
    #
    # # calls to the api from nodenpm package
    resp = requests.get("http://localhost:3000/api/apps/" + packageName + "/reviews/?num=" + size)
    #
    # # checks if the api works; returns 200
    print(resp.status_code)
    #
    # # UnicodeEncodeError: 'UCS-2' codec can't encode characters in position 2142-2142: Non-BMP character not supported in Tk
    # # This error doesnt come at python 3.8
    # # non_bmp_map = dict.fromkeys(range(0x10000, sys.maxunicode + 1), 0xfffd)
    #
    # # all the emojis has been converted into readable string
    decoded_json = resp.json()
    results = decoded_json["results"]
    reviews = []
    i = 0
    vaderSentimentAnalyzer = SentimentIntensityAnalyzer()
    while i < len(results):
        print(i)
        lexicon_preprocessed = reg_preprocessing(results[i]["text"])
        result = vaderSentimentAnalyzer.polarity_scores(lexicon_preprocessed)
        negScore = -1 * result["neg"]
        posScore = result["pos"]
        # add the pos and neg score to get an overall score for the sentiment
        sentiment = posScore + negScore
        polarity = "neutral"
        if (sentiment > 0):
            polarity = "positive"
        elif (sentiment < 0):
            polarity = "negative"
        svr_preprocessed = pre_processing_labelled_data(lexicon_preprocessed)
        review = {"_id": str(i + 1), "userName": results[i]["userName"], "date": results[i]["date"],
                  "text": results[i]["text"], "version": results[i]["version"],
                  "lexicon_preprocessed": lexicon_preprocessed, "svr_preprocessed": svr_preprocessed,
                  "sentiment": sentiment, "polarity": polarity}
        reviews.append(review)
        i += 1

    client = pymongo.MongoClient(
        "mongodb+srv://User:1234@r3act-rludw.mongodb.net/test?retryWrites=true&w=majority")
    db = client['Safiyyah_ARC']
    collection = db["Reviews"]
    x = collection.insert_many(reviews)
    # print list of the _id values of the inserted documents:
    print(x.inserted_ids)


#     print(reviews)
# converting String to json
# final_dict = eval(decoded_json)
# results = final_dict['results']
# review_list = []
# for d in results:
#     review = d['text']
#     review_list.append(review)

# return review_list


getReviews("com.ubercab", "10000")
