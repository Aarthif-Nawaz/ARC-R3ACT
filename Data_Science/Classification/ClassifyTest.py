# committed by Christina Thambirajah
# Date : 17/03/2020
# Final accuracy recorded for model is 84.2%
import pickle

import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
# A Neural Network Classifier based of Multi Layer Perceptron
from sklearn.neural_network import MLPClassifier


def clusterReviews(preprocessed_reviews):
    filename = 'E:\\2nd Year\SDGP\ARC-R3ACT\Data_Science\Models\\TfidfVect.pk'
    vectorizer = pickle.load(open(filename, 'rb'))
    # used to convert words from Test data into a matrix of integers
    Test = vectorizer.transform(preprocessed_reviews)
    with open(filename, 'wb') as vec_file:
        pickle.dump(vectorizer, vec_file)
    vec_file.close()
    filename = 'E:\\2nd Year\SDGP\ARC-R3ACT\Data_Science\Models\\MLP_Model.sav'
    model = pickle.load(open(filename, 'rb'))
    true_test_labels = ['Common', 'Bug_fix', 'Feature Request']
    predicted_labels_knn = model.predict(Test)
    with open(filename, 'wb') as model_file:
        pickle.dump(model, model_file)
    model_file.close()
    # manually marking meaningless reviews and reviews with less that 3 words as common
    for i in range(len(preprocessed_reviews)):
        word_count = len(preprocessed_reviews[i].split(" "))
        if preprocessed_reviews[i] == "":
            predicted_labels_knn[i] = 0
        elif word_count <= 3:
            predicted_labels_knn[i] = 0

    result = []
    for i in range(len(preprocessed_reviews)):
        result.append((true_test_labels[np.int(predicted_labels_knn[i])]))

    return result
