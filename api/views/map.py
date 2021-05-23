from flask import request, jsonify
import requests
from models import Markers, create_marker, delete_marker
from app import app
import os 

@app.route('/maps/marker', methods=['POST'])
def create_marker_route():
    data = request.get_json()
    marker = create_marker(data['title'], data['desc'],
                           data['position_lat'], data['position_long'],
                           data['holiday_id'])
    return jsonify({**data, "id": marker.id})

@app.route('/maps/marker/<id>', methods=['DELETE'])
def delete_marker_route(id):
    msg = delete_marker(id)
    return jsonify({"msg": msg, "marker_id": id})

@app.route('/maps/search/<query>', methods=['GET'])
def search_loc(query):
    key = os.getenv("positionstack") or '2c4949f89d834d48f63e15ee66bace22'
    r = requests.get(f'http://api.positionstack.com/v1/forward?access_key={api_key}&query={query}')
    return r.json()

