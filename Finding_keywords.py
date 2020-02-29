# Simple feature extraction with tfidfvectorizer
# output - gives the keywords with the preprocessing of stopwords only
from sklearn.feature_extraction.text import TfidfVectorizer
from Cluster_reviews import clustered_feature_reqs
from nltk.corpus import stopwords


#gets reviews in an aray
corpus = clustered_feature_reqs()

_stopwords = set(stopwords.words('english'))


# get the feature names and tf-idf score of top n items
def extract_topn_features_from_vector(features, sorted_features, topn=10):
    # use only topn items from vector
    sorted_features = sorted_features[:topn]

    scored_values = []
    ftr_values = []

    for index, score in sorted_features:
        fname = features[index]

        # keep track of feature name and its corresponding score
        scored_values.append(round(score, 3))
        ftr_values.append(features[index])

    results = {}
    for index in range(len(ftr_values)):
        results[ftr_values[index]] = scored_values[index]

    return results


def sort_matrix(matrix):
    tuples = zip(matrix.col, matrix.data)
    return sorted(tuples, key=lambda x: (x[1], x[0]), reverse=True)

vectorizer = TfidfVectorizer(max_df=0.85, stop_words=_stopwords,max_features=10000)
tf_idf_vector = vectorizer.fit_transform(corpus)
features = vectorizer.get_feature_names()

for n in range(len(corpus)):

    # get the document that we want to extract keywords from
    doc = corpus[n]

    # generate tf-idf for the given document
    tf_idf_vector = vectorizer.transform([doc])

    # sort the tf-idf vectors by descending order of scores
    sorted_features = sort_matrix(tf_idf_vector.tocoo())

    # extract only the top n; n here is 10
    keywords = extract_topn_features_from_vector(features, sorted_features, 20)

    print("\n===Review======")
    print(doc)
    print("\n===Keywords===")
    words = []
    for k in keywords:
        words.append(k)

    #sort the keywords in order of the given line in the corpus
    new_list = sorted(words, key=corpus[n].find)

    for i in new_list:
       print(i)






