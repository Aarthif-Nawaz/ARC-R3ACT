import pandas as pd
from Preprocessing import text_preprocessingNLP

#write all reviews to csv
data = pd.read_csv('../CSVFiles/pickme_allreviews_6167.csv')
df = pd.DataFrame(data, columns=['text'],dtype=str)

test_sentences = []
for i, row in df.iterrows():
    test_sentences.append(df['text'].dropna().loc[i])

test_clean_sentence = []
c = 1
for test in test_sentences:
    test_clean_sentence.append(str(text_preprocessingNLP(test)))
df['Preprocessed_text'] = test_clean_sentence
df.to_csv("pickme_allreviews_6167.csv",index=False)
df.to_csv("results.csv",index=False)
print("check Preprocessed_text in results.csv and pickme_allreviews_6167.csv")

train = pd.read_csv('../CSVFiles/trainingData.csv')
df = pd.DataFrame(train, columns=['Text'],dtype=str)

train_sentences = []
for i, row in df.iterrows():
    train_sentences.append(df['Text'].dropna().loc[i])

train_clean_sentence = []
for train in train_sentences:
    train_clean_sentence.append(text_preprocessingNLP(train))

df['Preprocessed_text'] = train_clean_sentence
df.to_csv("trainingData.csv",index=False)
print("check Preprocessed_text in trainingData.csv")
