from flask import request, jsonify, request
import os
from models import Users, create_user, auth_user, jwt_user, get_all_users, search_users
from app import app
import jwt

secret = os.getenv("SECRET_KEY") or 'secret_key'


@app.route('/')
def index():
    return jsonify({'msg': 'hello'}), 200


@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        create_user(data["username"], data["email"], data["password"])
        res = auth_user(data["username"],data["password"])
        return jsonify({"msg": f'{data["username"]}', "id": res, "token": jwt_user(data["username"])})
    except Exception as e: 
        return jsonify({'msg': f'{e}'}), 401

@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':    
        data = request.get_json()
        res = auth_user(data["username"],data["password"])
        if res:
            return jsonify({"msg": f'{data["username"]}', "id": res, "token": jwt_user(data["username"])})
        else:
            return jsonify({'msg': f'{res}',}), 401

@app.route('/users/<username>', methods=['GET'])
def user(username):
    try:
        auth = request.headers["Authorization"].split()[1]
        token = jwt.decode(auth, secret, algorithms=["HS256"])
        if token["username"] == username:
            user = Users.query.filter_by(username=username).first()
            return jsonify({'msg': f'{token}', 'user' : f'{user}'}), 200
        else:
            return jsonify({'msg': 'not authorized'}), 401 
    except Exception as e: 
            return jsonify({'msg': f'{e}'}), 401

@app.route('/users', methods=['GET'])
def get_users():
    res =  get_all_users()
    newRes = list(map(lambda x: {"username":x.username, "id": x.id}, res))
    return jsonify({'users': newRes}), 200

@app.route('/users/search/<query>', methods=['GET'])
def search_users_route(query):
    res =  search_users(query)
    newRes = list(map(lambda x: {"username":x.username, "id": x.id}, res))
    return jsonify({'users': newRes}), 200
   