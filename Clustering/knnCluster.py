import re
import string
import numpy as np
import pandas as pd
from nltk.corpus import stopwords
from nltk.stem.wordnet import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import *

def clusterReviews():
    #get preprocessed reviews from csv
    data = pd.read_csv('CSVFiles/pickme_allreviews_6167.csv')
    df = pd.DataFrame(data, columns=['text','Preprocessed_text'], dtype=str)
    df['word_count'] = df['text'].apply(lambda x: len(str(x).split(" ")))

    path = pd.read_csv(r'CSVFiles/trainingData.csv')
    df_train = pd.DataFrame(path, columns=['Preprocessed_text'],dtype=str)

    vectorizer = TfidfVectorizer(stop_words='english')

    train_sentences = []
    for i, row in df_train.iterrows():
        train_sentences.append(df_train['Preprocessed_text'].loc[i])
    X = vectorizer.fit_transform(train_sentences)
    
    # Creating true labels for 100 training sentences
    y_train = np.zeros(360)
    y_train[121:240] = 1
    y_train[241:360] = 2

    # Clustering 
    model = MultinomialNB().fit(X,y_train)

    process_sentences = []
    for i, row in df.iterrows():
        process_sentences.append(df['Preprocessed_text'].loc[i])
        

    Test = vectorizer.transform(process_sentences)

    true_test_labels = ['Common', 'Bug_fix', 'Feature Request']
    predicted_labels_knn = model.predict(Test)

    result = []
    for i, row in df.iterrows():
        if(df['Preprocessed_text'].loc[i]=="nan"):
            result.append('Common')
        elif(df['word_count'].loc[i]<=3):
            result.append('Common')
        else:
            result.append((true_test_labels[np.int(predicted_labels_knn[i])]))



    df = pd.DataFrame(data, columns=['text','Preprocessed_text'], dtype=str)
    df['cluster'] = result
    df.to_csv("CSVFiles/results.csv")

    #print("check results.csv for clusters") 

clusterReviews()
