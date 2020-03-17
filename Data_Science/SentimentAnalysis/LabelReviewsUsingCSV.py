# Author - Safiyyah Thur Rahman
# Purpose - Labelling the data using the vader lexicon
# pip install csv, pickle, vaderSentiment, nltk
import csv

import pandas as pd
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from Data_Science.TextPreprocessing.PreProcessing import *
from Data_Science.GetReviews.RetrieveReviews import getReviews


def label_reviews(file_name):
    #get the list of reviews using the file
    data = pd.read_csv('../CSVFiles/uberEats.csv')
    review_list = pd.DataFrame(data, columns=['text'], dtype=str)
    #train_data is a 2d array of a length equal to the number od reviews
    train_data = [[0] * 2] * len(review_list)
    vaderSentimentAnalyzer = SentimentIntensityAnalyzer()
    for i in range(len(review_list)):
        print(i)
        #preprocess the review
        preProcessedText = reg_preprocessing(review_list["text"].iloc[i])
        #get the polarity scores from the vader Sentiment Analyzer. This returns neu, neg and pos scores
        results = vaderSentimentAnalyzer.polarity_scores(preProcessedText)
        negScore = -1 * results["neg"]
        posScore = results["pos"]
        #add the pos and neg score to get an overall score for the sentiment
        sentiment = posScore + negScore
        #append the score and the preProcessedText to the train data array
        train_data[i][0] = preProcessedText
        train_data[i][1] = sentiment
        #save each element of the traindata to a file
        with open(file_name, 'a', newline='') as file:
            writer = csv.writer(file, delimiter=",")
            writer.writerow(train_data[i])
        file.close()

label_reviews("../CSVFiles/TestData.csv")
