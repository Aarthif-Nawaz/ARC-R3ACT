#committed by Christina Thambirajah
#Date : 17/03/2020
#Final accuracy recorded for model is 84.2%

import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
#A Neural Network Classifier based of Multi Layer Perceptron
from sklearn.neural_network import MLPClassifier

def clusterReviews():
    #code to get preprocessed test reviews from csv
    data = pd.read_csv(r'uberEats.csv')
    df = pd.DataFrame(data, columns=['text','Preprocessed_text'], dtype=str)
    #create column for number of words in review
    df['word_count'] = df['text'].apply(lambda x: len(str(x).split(" ")))

    #code to get preprocessed training reviews from csv
    path = pd.read_csv(r'trainingData.csv')
    df_train = pd.DataFrame(path, columns=['Preprocessed_text'],dtype=str)
    

    train_sentences = []
    for i, row in df_train.iterrows():
        train_sentences.append(df_train['Preprocessed_text'].loc[i])

    #used to convert words from training data into a matrix of integers
    vectorizer = TfidfVectorizer(stop_words='english')
    X = vectorizer.fit_transform(train_sentences)
    
    # manual assignment of true labels for 360 training sentences
    y_train = np.zeros(360)
    y_train[121:240] = 1
    y_train[241:360] = 2

    # classification model with Multi Layer Perceptron
    model = MLPClassifier(solver='lbfgs', alpha=1e-5, random_state=1,max_iter =1000).fit(X,y_train)

    process_sentences = []
    for i, row in df.iterrows():
        process_sentences.append(df['Preprocessed_text'].loc[i])
        
    #used to convert words from Test data into a matrix of integers
    Test = vectorizer.transform(process_sentences)

    true_test_labels = ['Common', 'Bug_fix', 'Feature Request']
    predicted_labels_knn = model.predict(Test)

    #manually marking meaningless reviews and reviews with less that 3 words as common
    for i, row in df.iterrows():
        if(df['Preprocessed_text'].loc[i]=="nan"):
            predicted_labels_knn[i]  = 0
        elif(df['word_count'].loc[i]<=3):
            predicted_labels_knn[i]  = 0

    result = []
    for i, row in df.iterrows():
        result.append((true_test_labels[np.int(predicted_labels_knn[i])]))

    #writing results to a file names results.csv
    df = pd.DataFrame(data, columns=['text','Preprocessed_text'], dtype=str)
    df['cluster'] = result
    df.to_csv("results.csv")

clusterReviews()