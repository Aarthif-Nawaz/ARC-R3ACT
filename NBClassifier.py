import csv
import pickle

from PreProcessing import pre_processing_labelled_data

# file which contains the pre-processed reviews
file = open('LabelledData.csv', 'r')
# all the records in the file are converted to a 2d array
data = list(csv.reader(file, delimiter=','))
trainData = []
trainLabel = []
print(len(data))
# append the pre-processed the review and the sentiment, to trainData and trainLabel
for i in range(1, len(data)):
    print(i)
    trainData.append(pre_processing_labelled_data(data[i][0]))
    trainLabel.append(str(data[i][1]))
# upload the vectorizer from the file
filename = 'vectorizer.pk'
count_vect = pickle.load(open(filename, 'rb'))
# count_vect = CountVectorizer()
# store vectorized data
X_train_counts = count_vect.fit_transform(trainData)
# store the vectorizer
with open(filename, 'wb') as vec_file:
    pickle.dump(count_vect, vec_file)
# loaded_model = MultinomialNB()
# load the model from file and train and store the model in the same file
filename = 'trained_model.sav'
loaded_model = pickle.load(open(filename, 'rb'))
loaded_model.fit(X_train_counts, trainLabel)
pickle.dump(loaded_model, open(filename, 'wb'))
