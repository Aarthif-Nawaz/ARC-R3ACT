#committed by Christina Thambirajah
#Date : 17/03/2020
#Final accuracy recorded for model is 84.2%
import pickle

import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
#A Neural Network Classifier based of Multi Layer Perceptron
from sklearn.neural_network import MLPClassifier

def clusterReviews():
    #code to get preprocessed training reviews from csv
    path = pd.read_csv(r'E:\2nd Year\SDGP\ARC-R3ACT\Data_Science\CSVFiles\trainingData.csv')
    df_train = pd.DataFrame(path, columns=['Preprocessed_text'],dtype=str)

    train_sentences = []
    for i, row in df_train.iterrows():
        print(i)
        train_sentences.append(df_train['Preprocessed_text'].loc[i])

    #used to convert words from training data into a matrix of integers
    vectorizer = TfidfVectorizer(stop_words='english')
    X = vectorizer.fit_transform(train_sentences)
    filename='E:\\2nd Year\SDGP\ARC-R3ACT\Data_Science\Models\\TfidfVect.pk'
    with open(filename, 'wb') as vec_file:
        pickle.dump(vectorizer, vec_file)
    vec_file.close()
    # manual assignment of true labels for 360 training sentences
    y_train = np.zeros(360)
    y_train[121:240] = 1
    y_train[241:360] = 2

    # classification model with Multi Layer Perceptron
    model = MLPClassifier(solver='lbfgs', alpha=1e-5, random_state=1,max_iter =1000).fit(X,y_train)
    filename = 'E:\\2nd Year\SDGP\ARC-R3ACT\Data_Science\Models\\MLP_Model.sav'
    with open(filename, 'wb') as model_file:
        pickle.dump(model, model_file)
    model_file.close()

clusterReviews()