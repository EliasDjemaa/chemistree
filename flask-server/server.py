# Import necessary modules and classes from Flask and other libraries
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import secrets

# Create a Flask application
app = Flask(__name__)

# Enable CORS (Cross-Origin Resource Sharing) to allow communication between frontend and backend
CORS(app)

# Configure the Flask application to use PostgreSQL database and disable track modifications
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:<admin>@localhost/chemistree'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Create a SQLAlchemy database instance
db = SQLAlchemy(app)

# Define a User class that represents the 'users' table in the database
class User(db.Model):
    __tablename__ = 'users'  # Specify the table name

    # Define columns for the 'users' table
    user_id = db.Column(db.Integer, primary_key=True)  # Primary key column
    email = db.Column(db.String(255), unique=True, nullable=False)  # Email column with unique constraint
    hashed_password = db.Column(db.String(120), nullable=False)  # Hashed password column
    token = db.Column(db.String(120), nullable=True)  # Token column, allows NULL
    is_patient = db.Column(db.Boolean, default=True, nullable=False)  # Boolean column, default to True
    is_caregiver = db.Column(db.Boolean, default=False, nullable=False)  # Boolean column, default to False

    # Define methods for setting password, checking password, and generating token
    def set_password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.hashed_password, password)

    def generate_token(self):
        self.token = secrets.token_urlsafe(16)

# Define an endpoint for user authentication
@app.route('/api/login', methods=['POST'])
def authenticate_user():
    # Get JSON data from the request
    data = request.get_json()
    user_email = data.get('email')
    password = data.get('password')

    # Query the database to find the user by email
    user = User.query.filter_by(email=user_email).first()

    # Check if the user exists and the provided password is correct
    if user and user.check_password(password):
        # Generate a new token if the user doesn't have one
        if not user.token:
            user.generate_token()
            db.session.commit()
        # Return the token in the response
        return jsonify({'token': user.token}), 200
    else:
        # Log failed login attempt and return an error response
        print(f"Failed login attempt for email: {user_email}")
        return jsonify({'error': 'Invalid email or password'}), 401

# Define an endpoint for creating a new user
@app.route('/api/users', methods=['POST'])
def create_user():
    # Get JSON data from the request
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    is_patient = data.get('is_patient')
    is_caregiver = data.get('is_caregiver')

    # Check if email and password are provided
    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    # Check if the user with the same email already exists
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({'error': 'Email already exists'}), 400

    # Create a new user instance and set password, generate token
    new_user = User(email=email, is_patient=is_patient, is_caregiver=is_caregiver)
    new_user.set_password(password)
    new_user.generate_token()

    # Add the new user to the database and commit the transaction
    db.session.add(new_user)
    db.session.commit()

    # Return success message and the user's token in the response
    return jsonify({'message': 'User created successfully', 'token': new_user.token}), 201

# Run the Flask application if the script is executed directly
if __name__ == '__main__':
    # Create all database tables within the context of the application
    with app.app_context():
        db.create_all()
    # Run the Flask application in debug mode
    app.run(debug=True)