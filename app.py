from bson import ObjectId
from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from google_play_scraper import app

application = Flask(__name__)
application.config["MONGO_URI"] = "mongodb://localhost:27017/arc"
mongo = PyMongo(application)


@application.route('/')
def hello_world():
    return 'Hello World!'


@application.route('/<name>', methods=['GET'])
def update_user(name):
    result = app(
        name,
        lang='en',  # defaults to 'en'
        country='us'  # defaults to 'us'
    )
    return jsonify(result)


@application.route('/view', methods=['GET'])
def view_author():
    author = mongo.db.feature_requests
    output = []
    for a in author.find():
        output.append({'author': a['author'], 'title': a['title']})
    return jsonify(output)


@application.route('/add', methods=['POST'])
def add_author():
    star = mongo.db.feature_requests
    _json = request.json
    author = _json['author']
    title = _json['title']
    star.insert({'author': author, 'title': title})
    output = {'author': author, 'title': title}
    return jsonify({'result': output})


# post = [{"author": "Duke 6",
#          "title": "PyMongo 101-A6",
#          "tags": ["MongoDB 6", "PyMongo 6", "Tutorial 6"]
#          },
#         {"author": "Adda",
#          "title": "MongoDB 101-A7",
#          "note": "Schema free MongoDB"
#          }
#         ]
#
# post_id = database.insert(post)
#
# print(post_id)

# {
# 	"author": "User Three",
# 	"title": "PyMongo 101-A6"
# }
#
#
# {
# 	"author": "User Two",
# 	"title": "MongoDB 101-A7"
# }


@application.route('/delete/<author>', methods=['DELETE'])
def delete_author(author):
    star = mongo.db.feature_requests
    star.delete_one({'author': author})
    s = star.find_one({'author': author})
    if s:
        output = {'Author deleted successfully!': {'author': s['author'], 'title': s['title']}}
    else:
        output = "Author not found!"
    return jsonify(output)


@application.route('/update', methods=['PUT'])
def update_author():
    star = mongo.db.feature_requests
    _json = request.json
    author = _json['author']
    title = _json['title']
    star.insert({'author': author, 'title': title})

    # validate the received values
    if author and title and request.method == 'PUT':
        # save edits
        s = star.find_one({'author': author})
        star.update_one(
            {"_id": ObjectId(s['_id'])},
            {"$set":
                 {"author": author,
                  "title": title}
             })
        output = {'author': author, 'title': title}
        return jsonify({'Author updates successfully!': output})
    else:
        return "Author not found!"


if __name__ == '__main__':
    application.run()
