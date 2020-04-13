# committed by Christina Thambirajah
# Date : 17/03/2020
# Final accuracy recorded for model is 84.2%
import pickle
import numpy as np

from Data_Science.FeatureExtraction.Finding_keywords import find_keywords
from Data_Science.TextPreprocessing.PreProcessing import preprocessing_fe


# the function is used to predict the cluster of the reviews passed
def clusterReviews(preprocessed_reviews):
    filename = 'MLModels\\TfidfVect.pk'
    # load the vectorizer that was previously saved
    vectorizer = pickle.load(open(filename, 'rb'))
    # used to convert words from Test data into a matrix of integers
    Test = vectorizer.transform(preprocessed_reviews)
    # save the vectorizer
    with open(filename, 'wb') as vec_file:
        pickle.dump(vectorizer, vec_file)
    vec_file.close()
    # load the MLP model previously saved
    filename = 'MLModels\\MLP_Model.sav'
    model = pickle.load(open(filename, 'rb'))
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
        #finding the number of words in a preprocessed review by splitting the sentence
        # at each space " " and then finding the length of the returned array
        word_count = len(preprocessed_reviews[i].split(" "))
        #if after preprocessing a review is empty or a space or if the number of words in
        # a review is less than or equal then the cluster type is Common (0)
        if preprocessed_reviews[i] == "" or preprocessed_reviews[i] == " " or word_count <= 3:
            predicted_labels_knn[i] = 0
    #the result array is used to store the cluster type as a string
    result = []
    #used to store reviews that are further preprocessed to find the keywords of the review
    fe_preprocessedReviews = []
    for i in range(len(preprocessed_reviews)):
        #preprocess the review further and append it to the array
        fe_preprocessedReviews.append(preprocessing_fe(preprocessed_reviews[i]))
        #The cluster name of the reviews is identified by using the predicted label which is a number that corresponds to the position of the cluster name in the true_test_labels array
        result.append((true_test_labels[np.int(predicted_labels_knn[i])]))
    #the list of keywords that are identified are stored in an array
    keywords_list = find_keywords(fe_preprocessedReviews)
    #The predicted label results, the list of keywords and the array of reviews that were further preprocessed are returned.
    return {"cluster_Results": result, "keywords": keywords_list, "fe_preprocessedReviews": fe_preprocessedReviews}
