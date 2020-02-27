#import dependencies
import pandas as pd
import numpy as np
from sklearn import preprocessing, decomposition, model_selection, metrics, pipeline
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.cluster import KMeans
import nltk
from nltk.stem.wordnet import WordNetLemmatizer
from nltk.corpus import stopwords
import sqlite3
from sqlite3 import Error

data = pd.read_excel (r'pickme_reviews.xlsx')

df = pd.DataFrame(data, columns= ['text'])
print (df)
#add a column for the word count
df['word_count'] = df['text'].apply(lambda x: len(str(x).split(" ")))
print("Word Count Median: " + str(df['word_count'].median()))



print(df['word_count'].describe())

x = df['word_count']

import re
clean_desc = []
for w in range(len(df.text)):
    desc = df['text'][w].lower()
    
    #remove punctuations
    desc = re.sub('[^a-zA-Z]', ' ', desc)
    
    #remove tags
    desc=re.sub("&lt;/?.*?&gt;"," &lt;&gt; ",desc)
    
    #remove special characters and digits
    desc=re.sub("(\\d|\\W)+"," ",desc)
    
    split_text = desc.split()
    stop = set(stopwords.words('english'))
    #Lemmatisation
    lem = WordNetLemmatizer()
    split_text = [lem.lemmatize(word) for word in split_text if not word in stop and len(word) >3] 
    split_text = " ".join(split_text)
    clean_desc.append(split_text)

    tfv = TfidfVectorizer(stop_words = stop, ngram_range = (1,1))
vec_text = tfv.fit_transform(clean_desc)

kmeans = KMeans(n_clusters=2, init='k-means++', n_init=10, max_iter=300, tol=0.0001, precompute_distances='auto', verbose=0, random_state=None, copy_x=True, n_jobs=None, algorithm='auto').fit(vec_text)


words = tfv.get_feature_names()
words[1000]

common_words = kmeans.cluster_centers_.argsort()[:,-1:-11:-1]
for num, centroid in enumerate(common_words):
    print(str(num) + ' : ' + ', '.join(words[word] for word in centroid))

lines_for_predicting = vec_text
prediction = kmeans.predict(lines_for_predicting)

print(prediction)
dfFinal = pd.DataFrame(data, columns= ['text'])
print (dfFinal)


