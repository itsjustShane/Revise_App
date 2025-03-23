from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configure the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///surgery.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define the database model
class Surgery(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    surgery = db.Column(db.String(100), nullable=False)
    appointment_date = db.Column(db.String(20), nullable=False)

# Initialize the database
with app.app_context():
    db.create_all()

# Route to handle form submission
@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    print("Received Data: ", data)
    new_entry = Surgery(**data)
    db.session.add(new_entry)
    db.session.commit()
    return jsonify({"message": "Data saved successfully!"}), 201

if __name__ == '__main__':
    app.run(debug=True)