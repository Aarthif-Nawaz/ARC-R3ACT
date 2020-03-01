#Author - N.W.R.Amasha
#Last modified Date - 3/1/2019 10:49 A.M

# Finding keywords with feature extraction
# output - gives the keywords of each categorized reviews

from sklearn.feature_extraction.text import TfidfVectorizer
from Cluster_reviews import clustered_feature_reqs, clustered_bug_fixes
from pandas.core.frame import DataFrame
import pandas as pd

# gets reviews in an aray
corpus = clustered_bug_fixes()

#get the topn items' feature names and tf-idf score
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


vectorizer = TfidfVectorizer(max_df=0.85, max_features=10000)
tf_idf_vector = vectorizer.fit_transform(corpus)
features = vectorizer.get_feature_names()

review = []
key_list = []
for n in range(len(corpus)):

    #extract keywords from the document we want
    doc = corpus[n]

    # give tf-idf value to the given document
    tf_idf_vector = vectorizer.transform([doc])

    #sort the tf-idf vector in descending order according to the scores
    sorted_features = sort_matrix(tf_idf_vector.tocoo())

    # take out the only the topn features; here n=10
    keywords = extract_topn_features_from_vector(features, sorted_features, 10)

    print("\n===Review======")
    print(doc)

    review.append(doc)
    df = pd.DataFrame(review, columns=['Reviews'])

    print("\n===Keywords===")
    words = []
    for k in keywords:
        words.append(k)

    # sort the keywords in order of the given line in the corpus
    new_list = sorted(words, key=corpus[n].find)
    keyword_list = []
    for i in new_list:
        print(i) #prints the keywords
        keyword_list.append(i)
    key_list.append(keyword_list)

df['KeyWords'] = key_list

df.to_csv("features_result.csv")
print("check features_result.csv for clusters")




