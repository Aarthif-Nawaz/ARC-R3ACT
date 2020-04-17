#Authour - Aarthif Nawaz
#Purpose - This File is used to read reviews from CSV file and make a new column for all the pre processed reviews
import pandas as pd

#write all reviews to csv
from Data_Science.TextPreprocessing.PreProcessing import pre_process_review

data = pd.read_csv('pickme_allreviews_6167.csv')
df = pd.DataFrame(data, columns=['text'],dtype=str)

test_sentences = []
for i, row in df.iterrows():
    test_sentences.append(df['text'].dropna().loc[i])

test_clean_sentence = []
c = 1
for test in test_sentences:
    test_clean_sentence.append(str(pre_process_review(test, "cluster")))
df['Preprocessed_text'] = test_clean_sentence
df.to_csv("pickme_allreviews_6167.csv",index=False)
df.to_csv("results.csv",index=False)
print("check Preprocessed_text in results.csv and pickme_allreviews_6167.csv")

train = pd.read_csv('trainingData.csv')
df = pd.DataFrame(train, columns=['Text'],dtype=str)

train_sentences = []
for i, row in df.iterrows():
    train_sentences.append(df['Text'].dropna().loc[i])

train_clean_sentence = []
for train in train_sentences:
    train_clean_sentence.append(cluster_pre_processing(train))

df['Preprocessed_text'] = train_clean_sentence
df.to_csv("trainingData.csv",index=False)
print("check Preprocessed_text in trainingData.csv")
