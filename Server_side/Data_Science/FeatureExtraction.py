# Author - N.W.R.Amasha
# Date - 2/4/2020
# Finding keywords with feature extraction
# output - gives the keywords of each categorized reviews

from sklearn.feature_extraction.text import TfidfVectorizer

class FeatureExtraction:

    @staticmethod
    def find_keywords(corpus):
        vectorizer = TfidfVectorizer(max_df=0.85, max_features=100)
        tf_idf_vector = vectorizer.fit_transform(corpus)
        features = vectorizer.get_feature_names()
        key_list = []
        for index in range(len(corpus)):
            # extract keywords from the document we want
            doc = corpus[index]
            words = FeatureExtraction.retrieveWords(vectorizer, doc, features)
            # sort the keywords in order of the given line in the corpus
            new_list = sorted(words, key=corpus[index].find)
            keyword_list = FeatureExtraction.convertToArray(new_list)
            key_list.append(keyword_list)
        return key_list

    @staticmethod
    def find_keywords_sentence(corpus, sentence):
        # the vectorizer will extract a maximum of 200 features and it will only extract keywords which have been repeated twice
        vectorizer = TfidfVectorizer(max_features=200, min_df=2)
        # used to convert words from Test data into a matrix of integers
        tf_idf_vector = vectorizer.fit_transform(corpus)
        # retrieve the features identified in all the reviews in the corpus this is alphabetical order
        features = vectorizer.get_feature_names()
        # this function is used to return the features from the feature which has the highest document frequency
        return FeatureExtraction.retrieveWords(vectorizer, sentence, features)

    # get the topn items' feature names and tf-idf score
    @staticmethod
    def extract_topn_features_from_vector(features, sorted_features, topn):
        # use top n number of items from the vector
        if topn != 0:
            sorted_features = sorted_features[:topn]

        scored_values = []
        ftr_values = []

        for index, score in sorted_features:
            scored_values.append(round(score, 3))
            ftr_values.append(features[index])

        results = {}
        for index in range(len(ftr_values)):
            results[ftr_values[index]] = scored_values[index]

        return results

    @staticmethod
    def sort_matrix(matrix):
        tuples = zip(matrix.col, matrix.data)
        return sorted(tuples, key=lambda x: (x[1], x[0]), reverse=True)

    @staticmethod
    def retrieveWords(vectorizer, doc, features):
        # give tf-idf value to the given document
        tf_idf_vector = vectorizer.transform([doc])
        # sort the tf-idf vector in descending order according to the scores
        sorted_features = FeatureExtraction.sort_matrix(tf_idf_vector.tocoo())
        # parsing 0 to retrieve all the features
        keywords = FeatureExtraction.extract_topn_features_from_vector(features, sorted_features, 0)
        # extract only the features and append it to an array
        words = FeatureExtraction.convertToArray(keywords)

        return words

    # append the labels of the given array to an array and return it
    @staticmethod
    def convertToArray(new_list):
        #initializing the array
        keyword_list = []
        #using the for loop to append the elements 
        for index in new_list:
            keyword_list.append(index)
        #returning the keyword list
        return keyword_list
