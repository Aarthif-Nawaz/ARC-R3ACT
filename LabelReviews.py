# Author - Safiyyah Thur Rahman
# Purpose - Labelling the data
# pip install csv, pickle, vaderSentiment, nltk
import csv

import pandas as pd
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

from PreProcessing import *
from RetrieveReviews import getReviews


def label_reviews(file_name, packageName, size):
    reviews = pd.read_csv(r'reviews.csv')
    review_list = pd.DataFrame(reviews, columns=['id', 'userName', 'userImage', 'date', 'score', 'scoreText', 'url', 'title','text'])
    # review_list = getReviews(packageName, size)
    train_data = [[0] * 2] * len(review_list)
    vaderSentimentAnalyzer = SentimentIntensityAnalyzer()
    for i in range(7549,len(review_list)):
        print(i)
        preProcessedText = text_pre_processing(review_list['text'].iloc[i])
        results = vaderSentimentAnalyzer.polarity_scores(preProcessedText)
        negScore = -1 * results["neg"]
        posScore = results["pos"]
        sentiment = posScore + negScore
        train_data[i][0] = preProcessedText
        train_data[i][1] = sentiment
        with open('TestLabelledData.csv', 'a', newline='') as file:
            writer = csv.writer(file, delimiter=",")
            writer.writerow(train_data[i])
        file.close()


# label_reviews("LabelledData.csv", "com.instagram.android", "10000")
# label_reviews("LabelledData.csv", "com.snapchat.android", "20000")
label_reviews("LabelledData.csv", "com.whatsapp", "20000")
