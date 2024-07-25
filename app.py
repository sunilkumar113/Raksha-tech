from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)


client = MongoClient('mongodb+srv://sunilkumarkumaresan:xog2QFpnSxXlzgpi@myprojects.1kv5gvj.mongodb.net/Raksha_Technologies?retryWrites=true&w=majority')
db = client['Raksha_Technologies']
collection = db['clients'] 

@app.route('/api/data', methods=['GET'])
def get_data():
    try:
        data = list(collection.find({}))
        for item in data:
            item['_id'] = str(item['_id'])
        return jsonify(data)
    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(debug=True)
