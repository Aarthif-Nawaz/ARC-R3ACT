import pandas as pd
from TextPreProcessing import text_preprocessing

#write all reviews to csv
data = pd.read_csv(r'pickme100.csv')
df = pd.DataFrame(data, columns=['text'],dtype = str)
print(df)

test_sentences = []
for i, row in df.iterrows():
    test_sentences.append(df['text'].loc[i])

test_clean_sentence = []
for test in test_sentences:
    test_sentence= text_preprocessing(test)
    test_clean_sentence.append(test_sentence)

df['Preprocessed_text'] = test_clean_sentence
df.to_csv("pickme100.csv")
df.to_csv("results.csv")
print("check Preprocessed_text in results.csv and pickme_allreviews_6167.csv")




train = pd.read_csv(r'trainingData.csv')
df_train = pd.DataFrame(train, columns=['text'])

train_sentences = []
for i, row in df.iterrows():
    train_sentences.append(df['text'].loc[i])

train_clean_sentence = []
for train in train_sentences:
    train_sentence= text_preprocessing(train)

    train_clean_sentence.append(train_sentence)


df_train['Preprocessed_text'] = train_clean_sentence
df_train.to_csv("trainingData.csv")
print("check Preprocessed_text in trainingData.csv")
