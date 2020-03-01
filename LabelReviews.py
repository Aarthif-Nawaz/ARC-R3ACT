# Author - Safiyyah Thur Rahman
# Purpose - Labelling the data
# pip install csv, pickle, vaderSentiment, nltk
import csv

from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

from PreProcessing import reg_preprocessing
from RetrieveReviews import getReviews


def label_reviews(file_name, packageName, size):
    review_list = getReviews(packageName, size)
    train_data = [[0] * 2] * len(review_list)
    vaderSentimentAnalyzer = SentimentIntensityAnalyzer()
    for i in range(len(review_list) - 1):
        preProcessedText = reg_preprocessing(review_list[i])
        results = vaderSentimentAnalyzer.polarity_scores(preProcessedText)
        negScore = -1 * results["neg"]
        posScore = results["pos"]
        sentiment = posScore + negScore
        train_data[i][0] = preProcessedText
        train_data[i][1] = sentiment
        with open(file_name, 'a', newline='') as file:
            writer = csv.writer(file, delimiter=",")
            writer.writerow(train_data[i])
        file.close()


label_reviews("LabelledData.csv", "com.facebook.orca", "20000")
label_reviews("LabelledData.csv", "com.instagram.android", "20000")
label_reviews("LabelledData.csv", "com.snapchat.android", "20000")
label_reviews("LabelledData.csv", "com.whatsapp", "20000")
