#Author Christina Thambirajah
#upload date:03/01/2020

import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from nltk.stem.wordnet import WordNetLemmatizer
from sklearn.neighbors import KNeighborsClassifier
from nltk.corpus import stopwords
import string
import re

#get preprocessed reviews from csv
data = pd.read_csv(r'pickme_allreviews_6167.csv')
df = pd.DataFrame(data, columns=['Preprocessed_text'], dtype=str)

path = pd.read_csv(r'trainingData.csv')
df_train = pd.DataFrame(path, columns=['Preprocessed_text'], dtype=str)


stop = set(stopwords.words('english'))
exclude = set(string.punctuation)
lemma = WordNetLemmatizer()



print("There are 6167 reviews of following three classes on which K-means clustering is performed" \
      " is performed : \n1. Common \n2.Bug Fix \n3.Feature Request")

train_sentences = []
for i, row in df_train.iterrows():
    train_sentences.append(df_train['Preprocessed_text'].loc[i])


vectorizer = TfidfVectorizer(stop_words='english')
X = vectorizer.fit_transform(train_sentences)

# Creating true labels for 100 training sentences
y_train = np.zeros(100)
y_train[0:49] = 0
y_train[50:74] = 1
y_train[75:99] = 2

# Clustering the document with KNN classifier
modelknn = KNeighborsClassifier(n_neighbors=5)
modelknn.fit(X, y_train)

test_sentences = []
for i, row in df.iterrows():
    test_sentences.append(df['Preprocessed_text'].loc[i])


Test = vectorizer.transform(test_sentences)

true_test_labels = ['Common', 'Bug_fix', 'Feature Request']
predicted_labels_knn = modelknn.predict(Test)

z = []
for i, row in df.iterrows():
    z.append((true_test_labels[np.int(predicted_labels_knn[i])]))

df['cluster'] = z
df.to_csv("results.csv")
print("check results.csv for clusters")