import csv
import pickle

from TextPreprocessing.PreProcessing import pre_processing_labelled_data

# file which contains the pre-processed reviews
file = open('../CSVFiles/LabelledData.csv', 'r')
# all the records in the file are converted to a 2d array
data = list(csv.reader(file, delimiter=','))
trainData = []
trainLabel = []
print(len(data))
# # append the pre-processed the review and the sentiment, to trainData and trainLabel
for j in range(202000,404401):
    print(j)
    trainData.append(pre_processing_labelled_data(data[j][0]))
    trainLabel.append(data[j][1])
# upload the vectorizer from the file
filename = '../Models/vectorizer.pk'
count_vect = pickle.load(open(filename, 'rb'))
X_train_counts = count_vect.fit_transform(trainData)
# store the vectorizer
with open(filename, 'wb') as vec_file:
    pickle.dump(count_vect, vec_file)
vec_file.close()
#loaded_model = svm.SVR()
# load the model from file and train and store the model in the same file
filename = '../Models/trained_model.sav'
loaded_model = pickle.load(open(filename, 'rb'))
#train the model
loaded_model.fit(X_train_counts, trainLabel)
#store the model
pickle.dump(loaded_model, open(filename, 'wb'))
