# Author - Safiyyah Thur Rahman
# Purpose - Labelling the data
# pip install csv, pickle, vaderSentiment, nltk
import csv

import pandas as pd
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

from PreProcessing import *
from RetrieveReviews import getReviews


def label_reviews(file_name, packageName, size):
    review_list = getReviews(packageName, size)
    train_data = [[0] * 2] * len(review_list)
    vaderSentimentAnalyzer = SentimentIntensityAnalyzer()
    for i in range(len(review_list)):
        print(i)
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


# label_reviews("LabelledData.csv", "com.instagram.android", "10000")
# label_reviews("LabelledData.csv", "com.snapchat.android", "10000")
# label_reviews("LabelledData.csv", "com.ubercab", "20000")
# label_reviews("LabelledData.csv", "com.viber.voip", "20000")
# label_reviews("LabelledData.csv", "com.zhiliaoapp.musically", "20000")
# label_reviews("LabelledData.csv", "com.imo.android.imoim", "10000")
# label_reviews("LabelledData.csv", "com.zhiliaoapp.musically", "20000")
# label_reviews("LabelledData.csv", "org.videolan.vlc", "20000")
# label_reviews("LabelledData.csv", "wp.wattpad", "20000")
# label_reviews("LabelledData.csv", "com.netmarble.btsw", "10000")
# label_reviews("LabelledData.csv", "com.microsoft.office.powerpoint", "10000")
# label_reviews("LabelledData.csv", "com.sec.android.app.sbrowser", "10000")
# label_reviews("LabelledData.csv", "com.google.android.youtube", "10000")
# label_reviews("LabelledData.csv", "com.microsoft.office.word", "10000")
# label_reviews("LabelledData.csv", "com.microsoft.office.excel", "10000")
# label_reviews("LabelledData.csv", "com.microsoft.office.officehubrow", "10000")
# label_reviews("LabelledData.csv", "com.microsoft.launcher", "10000")
# label_reviews("LabelledData.csv", "com.microsoft.emmx", "10000")
# label_reviews("LabelledData.csv", "com.microsoft.office.onenote", "10000")
# label_reviews("LabelledData.csv", "com.microsoft.math", "10000")
label_reviews("TestLabelledData.csv", "com.microsoft.office.outlook", "10000")


