# committed by Christina Thambirajah
# Date : 21/03/2020
# Final accuracy recorded for model is 84.2%
import pickle
import numpy as np
import pandas as pd

from sklearn.feature_extraction.text import TfidfVectorizer

# A Neural Network Classifier based of Multi Layer Perceptron
from sklearn.neural_network import MLPClassifier


# function used to train the MLP model used to cluster reviews to 3 clusters common, bug fixes and feature requests
def trainMLPModel():
    # code to get preprocessed training reviews from csv
    path = pd.read_csv("Data_Science/TrainingDataSet/trainingData.csv")
    df_train = pd.DataFrame(path, columns=['Preprocessed_text'], dtype=str)
    # used to store the reviews used to train the model
    train_sentences = []
    # saving each review in the train_sentences array
    for i, row in df_train.iterrows():
        train_sentences.append(df_train['Preprocessed_text'].loc[i])

    # used to convert words from training data into a matrix of integers
    filename = 'Data_Science/MLModels/TfidfVect.pk'
    vectorizer = TfidfVectorizer(stop_words='english')
    # vectorizer = pickle.load(open(filename, 'rb'))
    X = vectorizer.fit_transform(train_sentences)
    # saving the vectorizer
    with open(filename, 'wb') as vec_file:
        pickle.dump(vectorizer, vec_file)
    vec_file.close()
    # manual assignment of true labels for 360 training sentences
    y_train = np.zeros(360)
    y_train[121:240] = 1
    y_train[241:360] = 2
    # classification model with Multi Layer Perceptron
    model = MLPClassifier(solver='lbfgs', alpha=1e-5, random_state=1, max_iter=10000)
    filename = 'Data_Science/MLModels/MLP_Model.sav'
    # model = pickle.load(open(filename, 'rb'))
    # train the model
    model.fit(X, y_train)
    # save the model
    with open(filename, 'wb') as model_file:
        pickle.dump(model, model_file)
    model_file.close()


# call the function to train the model
trainMLPModel()
