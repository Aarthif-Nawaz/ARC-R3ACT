import csv
import pickle
# file which contains the pre-processed reviews
from math import floor

import numpy as np
from sklearn.metrics import mean_squared_error, r2_score

from TextPreprocessing.PreProcessing import pre_processing_labelled_data


def predict_sentiment(filename):
    sentiment_score = [-2, -1, 0, 1, 2]
    star_rating = [1, 2, 3, 4, 5]
    # all the records in the file are converted to a 2d array
    file = open("E:\\2nd Year\SDGP\ARC-R3ACT\CSVFiles\TestLabelledData.csv", 'r')
    data = list(csv.reader(file, delimiter=','))
    testData = []
    testLabel = []
    overall_sentiment = 0
    # append the pre-processed the review and the sentiment, to trainData and trainLabel
    for i in range(0, len(data)):
        print(i)
        testData.append(pre_processing_labelled_data(data[i][0]))
        # testData.append(data[i][0])
        testLabel.append(float(data[i][1]))
        overall_sentiment += float(data[i][1])
    ovrll_sentiment = 0
    filename = 'E:\\2nd Year\SDGP\ARC-R3ACT\Models\\vectorizer.pk'
    count_vect = pickle.load(open(filename, 'rb'))
    X_test_counts = count_vect.transform(testData)
    with open(filename, 'wb') as vec_file:
        pickle.dump(count_vect, vec_file)
    vec_file.close()
    filename = 'E:\\2nd Year\SDGP\ARC-R3ACT\Models\\trained_model.sav'
    loaded_model = pickle.load(open(filename, 'rb'))
    predicted = loaded_model.predict(X_test_counts)
    pickle.dump(loaded_model, open(filename, 'wb'))
    for k in range(len(predicted)):
        ovrll_sentiment += float(predicted[k])
    avg_ovrll_sentiment = (overall_sentiment + ovrll_sentiment) / 2
    senti_score = floor((avg_ovrll_sentiment / len(data)) * 2)
    index = sentiment_score.index(senti_score)
    predicted = np.array(predicted)
    print(predicted)
    print("Overall rating in a range of 1 to 5: " + str(star_rating[index]))
    # confidence=optunity.metrics.mse(testLabel, predicted)
    print("r2_score : ", r2_score(testLabel, predicted))
    print("mean square error : ", mean_squared_error(testLabel, predicted))
    # print("mse  : ", confidence)
