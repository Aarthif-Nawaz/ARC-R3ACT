#Author - Safiyyah Thur Rahman
#Purpose - Predict the Overall Sentiment of the App using SVM.SVR and the Vader Lexicon
#install - pickle, sklearn
import csv
import pickle
# file which contains the pre-processed reviews
from math import floor

import numpy as np
from sklearn.metrics import mean_squared_error, r2_score

from TextPreprocessing.PreProcessing import pre_processing_labelled_data


def predict_sentiment(filename):
    ##the final sentiment score given by any app will be -2, -1, 0, 1, 2
    sentiment_score = [-2, -1, 0, 1, 2]
    ##using the index the rating will be identified and 1 being the most negative and 5 being the most positive
    star_rating = [1, 2, 3, 4, 5]
    # all the records in the file are converted to a 2d array
    file = open("CSVFiles\TestData.csv", 'r')
    data = list(csv.reader(file, delimiter=','))
    #stores the test reviews which are preprocessed
    testData = []
    #stores the scores that were predicted using the vader lexicon
    testLabel = []
    # append the pre-processed the review and the sentiment, to trainData and trainLabel
    for i in range(0, len(data)):
        #data that is further prerpocessed to predict the sentiment score using the model
        testData.append(pre_processing_labelled_data(data[i][0]))
        #append the scores calculated by vader lexicon
        testLabel.append(float(data[i][1]))
    #overall sentiment score predicted by the model
    ovrll_sentiment = 0
    filename = 'Models\\vectorizer.pk'
    #loads the vectorizer
    count_vect = pickle.load(open(filename, 'rb'))
    #maps the words to document-term matrix.
    X_test_counts = count_vect.transform(testData)
    #save the vectorizer to the file
    with open(filename, 'wb') as vec_file:
        pickle.dump(count_vect, vec_file)
    vec_file.close()
    #load the model from the file
    filename = 'Models\\trained_model.sav'
    loaded_model = pickle.load(open(filename, 'rb'))
    #predict the scores using the model and the vectorized data
    predicted = loaded_model.predict(X_test_counts)
    #save the model
    pickle.dump(loaded_model, open(filename, 'wb'))
    #add the predicted scores to ovrll_sentiment variable
    for k in range(len(predicted)):
        ovrll_sentiment += float(predicted[k])
    #multiply by 2 to get -2, -1, 0, 1 or 2
    senti_score = floor(ovrll_sentiment / len(data))
    #find the rating using the index of the calculated senti_score
    index = sentiment_score.index(senti_score)
    #convert the predicted list to an array
    predicted = np.array(predicted)
    print(ovrll_sentiment)
    print("Overall rating in a range of 1 to 5: " + str(star_rating[index]))
    #used to validate the model
    #higher r2score means the model is good
    print("r2_score : ", r2_score(testLabel, predicted))
    # lower mse means the model is good
    print("mean square error : ", mean_squared_error(testLabel, predicted))
