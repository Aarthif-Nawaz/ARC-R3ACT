# Authour - Aarthif Nawaz
# Purpose - To get the original reviews from the database and post it to the pre processed review collection with the original review + pre processed review

# Installations - PyMongo

# Imports
import pymongo
from Preprocessing import text_preprocessingNLP

# Making a connection to our mongoserver online
client = pymongo.MongoClient("mongodb+srv://User:1234@r3act-rludw.mongodb.net/test?retryWrites=true&w=majority")
# Making a new Collection called the Preprocessed Reviews
collection = client.arc.PreProcessedReviews
# initialization of the Variables
review_array = []
pre_processed = []
# iterating through the for loop to get all the reviews send to the database
for x in client.arc.MobileAppReviews.find():
    #Converting review to a string
    review = str(x['text'])
    # Running this if statement becuase mongodb doesnt accept key values with a "." in it
    if(review.startswith(".") or review.endswith(".") or review.__contains__(".")):
        review = review.replace(".","")
    # Pre process the reviews so that you can add it to the database
    preProcessed_review = text_preprocessingNLP(review)
    # Put the reviews as a JSON object
    data_set = {
        review : preProcessed_review
    }
    # Append it to the array
    review_array.append(data_set)


# Insert it to the mongo db collection of pre processed reviews
collection.insert_many(review_array)
lists = []
# Read all the pre processed reviews
for j in client.arc.PreProcessedReviews.find():
    # Get all the values and put them into the list
    lists = list(j.values())
    # Append them to the list
    pre_processed.append(lists[1])
# Iterate over the for loop of all the pre processed reviews
for pre_processedReviews in pre_processed:
    # Print the reviews
    print(pre_processedReviews)

