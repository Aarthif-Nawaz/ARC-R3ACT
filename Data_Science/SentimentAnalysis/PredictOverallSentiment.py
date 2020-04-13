# Author - Safiyyah Thur Rahman
# Purpose - Predict the Overall Sentiment of the App using SVM.SVR and the Vader Lexicon
# install - pickle, sklearn
import pickle
from math import floor

import numpy as np
from sklearn.metrics import mean_squared_error, r2_score


def predict_sentiment(preprocessedReviews, testLabel):
    # the final sentiment score given by any app will be -2, -1, 0, 1, 2
    sentiment_score = [-2, -1, 0, 1, 2]
    # using the index the rating will be identified and 1 being the most negative and 5 being the most positive
    star_rating = [1, 2, 3, 4, 5]
    # overall sentiment score predicted by the model
    ovrll_sentiment = 0
    filename = 'MLModels\\vectorizer.pk'
    # loads the vectorizer
    count_vect = pickle.load(open(filename, 'rb'))
    # maps the words to document-term matrix.
    X_test_counts = count_vect.transform(preprocessedReviews)
    # save the vectorizer to the file
    with open(filename, 'wb') as vec_file:
        pickle.dump(count_vect, vec_file)
    vec_file.close()
    # load the model from the file
    filename = 'MLModels\\trained_model.sav'
    loaded_model = pickle.load(open(filename, 'rb'))
    # predict the scores using the model and the vectorized data
    predicted = loaded_model.predict(X_test_counts)
    # save the model
    pickle.dump(loaded_model, open(filename, 'wb'))
    # add the predicted scores to ovrll_sentiment variable
    for k in range(len(predicted)):
        ovrll_sentiment += float(predicted[k])
    # multiply by 2 to get -2, -1, 0, 1 or 2
    senti_score = floor((ovrll_sentiment / len(preprocessedReviews)) * 2)
    # find the rating using the index of the calculated senti_score
    index = sentiment_score.index(senti_score)
    # convert the predicted list to an array
    predicted = np.array(predicted)
    return {'overall_sentiment': ovrll_sentiment, 'predicted': predicted, 'rating': star_rating[index],
            'r2_score': r2_score(testLabel, predicted), 'mean_square_error': mean_squared_error(testLabel, predicted)}
