# Authour - Aarthif Nawaz
# Testing  - Needed classify.py for Testing
# Purpose - This file is used to retrieve the classified reviews for testing purposes

import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
#A Neural Network Classifier based of Multi Layer Perceptron
from sklearn.neural_network import MLPClassifier


# This function is used to cluster reviews according to array passed from the trained and tested CSV files
def clusterReviews(trainingPreprocessed,testingPreprocessed):
    zippedList = list(zip(trainingPreprocessed, testingPreprocessed))
    testList = list(zip(testingPreprocessed))
    df = pd.DataFrame(testList,columns=['testingPreprocessed'])
    dfObj = pd.DataFrame(zippedList, columns=['trainingPreprocessed', 'testingPreprocessed'])

    df['word_count'] = df['testingPreprocessed'].apply(lambda x: len(str(x).split(" ")))
    

    train_sentences = []
    for i, row in dfObj.iterrows():
        train_sentences.append(dfObj['trainingPreprocessed'].loc[i])

    #used to convert words from training data into a matrix of integers

    vectorizer = TfidfVectorizer(stop_words='english')
    X = vectorizer.fit_transform(train_sentences)
    
    # manual assignment of true labels for 360 training sentences
    y_train = np.zeros(360)
    y_train[100:240] = 1
    y_train[241:360] = 2

    # classification model with Multi Layer Perceptron
    model = MLPClassifier(solver='lbfgs', alpha=1e-5, random_state=1,max_iter =1000).fit(X,y_train)

    process_sentences = []
    for i, row in df.iterrows():
        process_sentences.append(df['testingPreprocessed'].loc[i])
        
    #used to convert words from Test data into a matrix of integers
    Test = vectorizer.transform(process_sentences)

    true_test_labels = ['Common', 'Bug_fix', 'Feature Request']
    predicted_labels_knn = model.predict(Test)

    #manually marking meaningless reviews and reviews with less that 3 words as common
    for i, row in df.iterrows():
        if (df['testingPreprocessed'].loc[i] == "nan"):
            predicted_labels_knn[i] = 0
        elif (df['word_count'].loc[i] <= 3):
            predicted_labels_knn[i] = 0

    result = []
    for i, row in df.iterrows():
        result.append((true_test_labels[np.int(predicted_labels_knn[i])]))

    return result


