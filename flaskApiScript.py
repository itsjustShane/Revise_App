# Flask API Script for reference 

from flask import Flask, jsonify, request 
from flask_cors import CORS
import mysql.connector 

app = Flask(__name__)

#Enable CORS for all routes
CORS(app)

# My SQL Database connector
def get_dp_connection():
    try:
        connection = mysql.connector.connect(
            host= "localhost",
            user = "root",
            password = "121212",
            database = "users_db"
        )
        return connection
    except mysql.connector.Error as err: 
        return None

#Root route
@app.route('/')
def home():
    return jsonify({"message": "Welcome to user API"}), 200

#Root to get all user
@app.route('/api/users', methods = ['GET'])
def get_users():
    conn = get_dp_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500

    cursor = conn.cursor(dictionary = True)
    cursor.execute('SELECT * FROM users;')
    users = cursor.fetchall()
    cursor.close()
    conn.close()

    if not users:
        return jsonify({"message": "No users found"}), 404
    
    return jsonify(users), 200

#Route to get a single user by ID
@app.route('/api/users/<int:user_id', methods = ['GET'])
def get_user(user_id):
    conn = get_dp_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500
    
    cursor = conn.cursor(dictionary = True)
    cursor.execute('SELECT * FROM users WHERE id = %s;' (user_id))
    users = cursor.fetchone()
    cursor.close()
    conn.close()

    if not users:
        return jsonify({"message": "User not found"}), 404
    
    return jsonify(user), 200

#Route to create a new user
@app.route('/api/users', methods = ['POST'])
def create_user():
    data = request.get_json()
    if not data or not all(key in data key in ["first_name", "last_name", "email", "age"]):
        return jsonify({"error": "Missing required fields"}), 400

    first_name = data['first_name']
    last_name = data['last_name']
    email = data['email']
    age = data['age']

    conn = get_dp_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500

    cursor = conn.cursor()
    try:
        cursor.execute(
            'INSERT INTO users (first_name, last_name, age)  VALUES (%s, %s, %s, %s)', 
            (first_name, last_name, age)
        )
        conn.commit()
        user_id = cursor.lastrowid
    except mysql.connector.Error as err:
        return jsonify({"error": str(err)}), 500
    finally:
        cursor.close()
        conn.close()

    return jsonify({"message":"User created successfully", "user_id": user_id}), 201

#Route update user
@app.route('/api/users/<int:user_id>', methods = ['PUT'])
def update_user(user_id):
    data = request.get_json()
    if not data:
        return jsonify({"error": " No data provided"}),400
    
    conn = get_dp_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500

    cursor = conn.cursor(dictionary = True)

    #Check if exists
    cursor.execute('SELECT * FROM users WHERE id = %s;' (user_id))
    users = cursor.fetchone()
    if not user:
        return jsonify({"error": "User not found"}),404

    #update user fields
    first_name = data.get('first_name', user['first_name'])
    last_name = data.get('last_name', user['last_name'])
    email = data.get('email', user['email'])
    age = data.get('age', user['age'])

    try:
        cursor.execute(
            'UPDATE users SET first_name = %s, last_name = %s, email = %s, age = %s, WHERE id = %s', 
            (first_name, last_name, age, user_id)
        )
        conn.commit()
    except mysql.connector.Error as err:
        return jsonify({"error": "str(err)"}), 500
    finally:
        cursor.close()
        conn.close()

    return jsonify({"message":"User update successfully"}), 200
       
#Route delete user
@app.route('/api/users/<int:user_id>', methods = ['DELETE'])
def delete_user(user_id):
    conn = get_dp_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500

    cursor = conn.cursor()
    
    #Check if exists
    cursor.execute('SELECT * FROM users WHERE id = %s;' (user_id))
    if not cursor.fetchone():
        return jsonify({"error": "User not found"}),404

    try:
        cursor.execute('DELETE FROM users WHERE id = %s', (user_id))
        connect.commit()
    except mysql.connector.Error as errr:
        return jsonify({"error": str(err)}), 500
    finally:
        cursor.close()
        conn.close()
    
    return jsonify({"error": "User deleted successfully"}), 200

if __name__== '__main__':
    app.run(debug = True)




