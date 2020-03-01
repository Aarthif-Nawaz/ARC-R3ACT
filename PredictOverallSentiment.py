import csv
import pickle
# file which contains the pre-processed reviews
from math import floor

import numpy as np

from PreProcessing import pre_processing_labelled_data

sentiment_score = [-2, -1, 0, 1, 2]
star_rating = [1, 2, 3, 4, 5]
# label_reviews("TestLabelledData.csv", "com.olacabs.customer", "20000")
# file = open('TestLabelledData.csv', 'r')
# all the records in the file are converted to a 2d array
file = open('LabelledData.csv', 'r')
data = list(csv.reader(file, delimiter=','))
testData = []
testLabel = []
overall_sentiment = 0
print(len(data))
# append the pre-processed the review and the sentiment, to trainData and trainLabel
for i in range(1, 30000):
    testData.append(pre_processing_labelled_data(data[i][0]))
    testLabel.append(str(data[i][1]))
    overall_sentiment += float(data[i][1])
for i in range(10):
    ovrll_sentiment = 0
    filename = 'vectorizer.pk'
    count_vect = pickle.load(open(filename, 'rb'))
    X_test_counts = count_vect.transform(testData)
    with open(filename, 'wb') as vec_file:
        pickle.dump(count_vect, vec_file)
    filename = 'trained_model.sav'
    loaded_model = pickle.load(open(filename, 'rb'))
    predicted = loaded_model.predict(X_test_counts)
    pickle.dump(loaded_model, open(filename, 'wb'))
    for k in range(len(predicted)):
        ovrll_sentiment += float(predicted[k])
    ovrll_sentiment = (overall_sentiment + ovrll_sentiment) / 2
    senti_score = floor((ovrll_sentiment / len(data)) * 2)
    index = sentiment_score.index(senti_score)
    print("Overall rating in a range of 1 to 5: " + str(star_rating[index]))
    print("Test Set Accuracy : ", np.sum(predicted == testLabel) / float(len(predicted)))
