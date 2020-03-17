# Authour - Aarthif Nawaz
# Purpose - To get reviews from an app searched pre process the reviews ans send it to a CSV file

# Dependencies needed to be downloaded
# pip install play-scraper
# pip install google-play-scraper
# pip install pandas
# pip install numpy
# pip insatll sklearn
import play_scraper
from google_play_scraper import reviews, Sort
import pandas as pd
import numpy as np
import csv
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import *


from Preprocessing import text_preprocessingNLP
# get the app name
app = input("Enter App Name : ")
# Search for the app
details = play_scraper.search(app)
# get the app id
app_id  = details[0]['app_id']
# get reviews from that particular app
result = reviews(
    app_id,
    lang='en', # defaults to 'en'
    country='us', # defaults to 'us'
    sort=Sort.MOST_RELEVANT, # defaults to Sort.MOST_RELEVANT
    count=10000, # defaults to 100
)
review_csv = []
for i in result:
    review = i['content'] # get only the reviews
    review_csv.append(review) # append the reviews to an array


# function to write the array of reviews to a CSV file
def write_list_to_file(guest_list, filename):
    """Write the list to csv file."""

    with open(filename, 'a', encoding="utf-8") as f:
        writer = csv.writer(f)
        for val in review_csv:
            writer.writerow([val])

write_list_to_file(review_csv,'ubereats.csv')
# Read the csv file that was created
data = pd.read_csv('ubereats.csv',encoding= 'unicode_escape')
# Create a dataframe out of it to get only the reviews
df = pd.DataFrame(data, columns=['Reviews'],dtype=str)

# use an array to get the reviews and store it
test_sentences = []
for i, row in df.iterrows():
    test_sentences.append(df['Reviews'].dropna().loc[i])
# use the array to store the pre processed reviews
test_clean_sentence = []
for test in test_sentences:
    test_clean_sentence.append(str(text_preprocessingNLP(test)))
df['Preprocessed_text'] = test_clean_sentence # create a pre processed colum and store the pre processed reviews
df.to_csv("ubereats.csv",index=False) # Convert the whole file to csv

# cv = CountVectorizer(max_features=1242)
# data = pd.read_csv('pickme_allreviews_6167.csv')
# df = pd.DataFrame(data,dtype=str)
# pre_process = df['Preprocessed_text']
# cluster = df['Clustered']
#
#
#
# test_sentences_preProcess = []
# test_sentences_cluster = []
# for i, row in df.iterrows():
#     if(pre_process.loc[i]=="nan"):
#         continue
#     else:
#         test_sentences_preProcess.append(df['Preprocessed_text'].loc[i])
# for j, row in df.iterrows():
#     if(cluster.loc[i]=="nan"):
#         continue
#     else:
#         test_sentences_cluster.append(df['Clustered'].dropna().loc[j])
# classifier = MultinomialNB()
# X = cv.fit_transform(test_sentences_preProcess).toarray()
# y = data.dropna().iloc[:,2].values
#
# classifier.fit(X,y)
#
# #np.mat(X) * np.mat(y)
#
# test_data = pd.read_csv('ola.csv')
# test_df = pd.DataFrame(test_data,dtype=str)
# test_pre_process = test_df['Preprocessed_text']
# test_pre_process_sentence = []
#
# for k, row in test_df.iterrows():
#     if(k==2000):
#         break
#     if(test_pre_process.loc[k]=="nan"):
#         continue
#     else:
#         test_pre_process_sentence.append(test_df['Preprocessed_text'].loc[k])
#
# # 0 for Feature Request
# # 1 for Bug Fix
# # 2 for Common
#
# X_test = cv.fit_transform(test_pre_process_sentence).toarray()
# y_pred = classifier.predict(X_test)
#
#
# for i in range(0,len(test_pre_process_sentence)):
#     print(test_df['Reviews'].loc[i], " ",y_pred[i])
#
#
#
#
#
