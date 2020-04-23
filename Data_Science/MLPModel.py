# committed by Christina Thambirajah
# Date : 17/03/2020
# Final accuracy recorded for model is 84.2%
import pickle
import numpy as np
import pandas as pd
import os
from sklearn.feature_extraction.text import TfidfVectorizer

# A Neural Network Classifier based of Multi Layer Perceptron
from sklearn.neural_network import MLPClassifier

# from Data_Science.FeatureExtraction import FeatureExtraction
# from Data_Science.PreProcess import PreProcess

from FeatureExtraction import FeatureExtraction
from PreProcess import PreProcess
class MLPModel:
    
    # function used to train the MLP model used to cluster reviews to 3 clusters common, bug fixes and feature requests
    @staticmethod
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

    # the function is used to predict the cluster of the reviews passed
    @staticmethod
    def clusterReviews(preprocessed_reviews):
        dirname = os.path.dirname(__file__)
        filename = os.path.join(dirname, 'MLModels/TfidfVect.pk')
        # load the vectorizer that was previously saved
        file=open(filename, 'rb')
        vectorizer = pickle.load(file)
        file.close()
        # used to convert words from Test data into a matrix of integers
        Test = vectorizer.transform(preprocessed_reviews)
        # save the vectorizer
        with open(filename, 'wb') as vec_file:
            pickle.dump(vectorizer, vec_file)
        vec_file.close()
        # load the MLP model previously saved
        filename = os.path.join(dirname, 'MLModels/MLP_Model.sav')
        file=open(filename, 'rb')
        model = pickle.load(file)
        file.close()
        # the name of the clusters, reviews are separated to
        true_test_labels = ['Common', 'BugFixes', 'FeatureRequests']
        # predict the clusters and store the labels returned. The array returned contains values from 0-2
        # 0 - Common
        # 1 - BugFixes
        # 2 - FeatureRequests
        predicted_labels_knn = model.predict(Test)
        # save the model used to predict the labels
        with open(filename, 'wb') as model_file:
            pickle.dump(model, model_file)
        model_file.close()
        # manually marking meaningless reviews and reviews with less that 3 words as common
        for i in range(len(preprocessed_reviews)):
            # finding the number of words in a preprocessed review by splitting the sentence
            # at each space " " and then finding the length of the returned array
            word_count = len(preprocessed_reviews[i].split(" "))
            # if after preprocessing a review is empty or a space or if the number of words in
            # a review is less than or equal then the cluster type is Common (0)
            if preprocessed_reviews[i] == "" or preprocessed_reviews[i] == " " or word_count <= 3:
                predicted_labels_knn[i] = 0
        # the result array is used to store the cluster type as a string
        result = []
        # used to store reviews that are further preprocessed to find the keywords of the review
        fe_preprocessedReviews = []
        for i in range(len(preprocessed_reviews)):
            # preprocess the review further and append it to the array
            fe_preprocessedReviews.append(PreProcess.pre_process_review(preprocessed_reviews[i], "fe"))
            # The cluster name of the reviews is identified by using the predicted label which is a number that corresponds to the position of the cluster name in the true_test_labels array
            result.append((true_test_labels[np.int(predicted_labels_knn[i])]))
        # the list of keywords that are identified are stored in an array
        keywords_list = FeatureExtraction.find_keywords(fe_preprocessedReviews)
        # The predicted label results, the list of keywords and the array of reviews that were further preprocessed are returned.
        return {"cluster_Results": result, "keywords": keywords_list, "fe_preprocessedReviews": fe_preprocessedReviews}

