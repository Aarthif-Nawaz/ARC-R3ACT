#this onr work when you give indexes one by one, but im having trouble passing the whole dataframe. Can you please try and fix knn.py

#import dependencies
import pandas as pd
import numpy as np
from sklearn import preprocessing, decomposition, model_selection, metrics, pipeline
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.cluster import KMeans
import nltk
from nltk.stem.wordnet import WordNetLemmatizer
from sklearn.neighbors import KNeighborsClassifier
from nltk.corpus import stopwords
import sqlite3
from sqlite3 import Error
import string
import re
from collections import Counter


data = pd.read_csv (r'pickme_allreviews_6167.csv')
df = pd.DataFrame(data, columns= ['text'],dtype=str)

#add a column for the word count
#df['word_count'] = df['text'].apply(lambda x: len(str(x).split(" ")))
path = "trainingData.txt"
fpNew = open(path,'r',encoding='UTF8')

stop = set(stopwords.words('english'))
exclude = set(string.punctuation) 
lemma = WordNetLemmatizer()

# Cleaning the text sentences so that punctuation marks, stop words & digits are removed  
def clean(doc):
    stop_free = " ".join([i for i in doc.lower().split() if i not in stop])
    punc_free = ''.join(ch for ch in stop_free if ch not in exclude)
    normalized = " ".join(lemma.lemmatize(word) for word in punc_free.split())
    processed = re.sub(r"\d+","",normalized)
    y = processed.split()
    return y


print("There are 6167 reviews of following three classes on which K-means clustering is performed"\
         " is performed : \n1. Common \n2.Bug Fix \n3.Feature Request")

train_clean_sentences = []
fp = fpNew
for line in fp:
    line = line.strip()
    cleaned = clean(line)
    cleaned = ' '.join(cleaned)
    train_clean_sentences.append(cleaned)
       
vectorizer = TfidfVectorizer(stop_words='english')
X = vectorizer.fit_transform(train_clean_sentences)


# Creating true labels for 100 training sentences 
y_train = np.zeros(100)
y_train[0:49] = 0
y_train[50:74] = 1
y_train[75:99] = 2

# Clustering the document with KNN classifier
modelknn = KNeighborsClassifier(n_neighbors=5)
modelknn.fit(X,y_train)

# Clustering the training 30 sentences with K-means technique
modelkmeans = KMeans(n_clusters=3, init='k-means++', max_iter=200, n_init=100)
modelkmeans.fit(X)

test_sentences=[]
for i, row in df.iterrows():
    test_sentences .append(df['text'].loc[i])

test_clean_sentence = []
for test in test_sentences:
    cleaned_test = clean(test)
    cleaned = ' '.join(cleaned_test)
    cleaned = re.sub(r"\d+","",cleaned)
    test_clean_sentence.append(cleaned)
    
Test = vectorizer.transform(test_clean_sentence) 

true_test_labels = ['Common','Bug_fix','Feature Request']
predicted_labels_knn = modelknn.predict(Test)
predicted_labels_kmeans = modelkmeans.predict(Test)

z = []
for i, row in df.iterrows():
    z.append((true_test_labels[np.int(predicted_labels_knn[i])]))

df['cluster'] = z
df.to_csv("results.csv")
print("check results.csv for clusters")
