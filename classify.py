import re
import string
import numpy as np
import pandas as pd
from nltk.corpus import stopwords
from nltk.stem.wordnet import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import accuracy_score
from sklearn.neighbors import KNeighborsClassifier
from sklearn.cluster import KMeans
from sklearn.cluster import DBSCAN
from sklearn.cluster import Birch
from collections import Counter
from sklearn.naive_bayes import *
from sklearn.linear_model import SGDClassifier
from sklearn.linear_model import LogisticRegression
from sklearn import svm
from sklearn.neural_network import MLPClassifier

def clusterReviews():
    #get preprocessed reviews from csv
    data = pd.read_csv(r'pickme100.csv')
    df = pd.DataFrame(data, columns=['text','Preprocessed_text'], dtype=str)
    df['word_count'] = df['text'].apply(lambda x: len(str(x).split(" ")))

    path = pd.read_csv(r'trainingData.csv')
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

    modelknn = KNeighborsClassifier(n_neighbors=3).fit(X,y_train)
    modelNB = MultinomialNB().fit(X,y_train)
    modelSGDC = svm.SVC(C=1.0, kernel='linear', degree=3, gamma='auto',max_iter =1000).fit(X,y_train)
    modelLR = LogisticRegression(n_jobs=1, C=1e5,max_iter =1000).fit(X,y_train)
    modelMLP = MLPClassifier(solver='lbfgs', alpha=1e-5, random_state=1,max_iter =100).fit(X,y_train)
    
    
    #testing to check accuracy
    testing = pd.read_csv(r'testData.csv')
    df_test = pd.DataFrame(testing, columns=['text','Preprocessed_text'], dtype=str)
    df_test['word_count'] = df_test['text'].apply(lambda x: len(str(x).split(" ")))


    true_test_labels = ['Common', 'Bug_fix', 'Feature Request']
    test_sentences  = []
    for i, row in df_test.iterrows():
        test_sentences.append(df_test['Preprocessed_text'].loc[i])


    Tester = vectorizer.transform(test_sentences)

    for i, row in df_test.iterrows():
        if(df_test['Preprocessed_text'].loc[i]=="nan"):
            Tester[i]  = 0
        elif(df_test['word_count'].loc[i]<=3):
            Tester[i]  = 0
        
    predicted_labelsknn = modelknn.predict(Tester)
    predicted_labelsNB = modelNB.predict(Tester)
    predicted_labelSDGC = modelSGDC.predict(Tester)
    predicted_labelsLR = modelLR.predict(Tester)
    predicted_labelMLP = modelMLP.predict(Tester)

    test_label = np.zeros(76)
    test_label[25:50] = 1
    test_label[50:75] = 2
    
    accknn = accuracy_score(test_label, predicted_labelsknn)
    accNB = accuracy_score(test_label, predicted_labelsNB)
    accSDGC = accuracy_score(test_label,predicted_labelSDGC)
    accLR = accuracy_score(test_label,predicted_labelsLR)
    accMLP= accuracy_score(test_label,predicted_labelMLP)

    
    print("accuracy of knn classifying = "+str(accknn))
    print("accuracy of NB classifying = "+str(accNB))
    print("accuracy of svm  = "+str(accSDGC))
    print("accuracy of Logistic Regression = "+ str(accLR))
    print("accuracy of Neural Networks = "+ str(accMLP))


clusterReviews()