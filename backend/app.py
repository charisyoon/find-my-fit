from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS  # Import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Initialize CORS here

# Configure Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///offers.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Model
class Offer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    listing_id = db.Column(db.Integer)
    type = db.Column(db.String(20))  # 'money' or 'trade'
    amount = db.Column(db.Float, nullable=True)
    trade_item = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default='pending')

# Endpoint: Submit Offer
@app.route('/api/offer', methods=['POST'])
def submit_offer():
    print("Incoming Request:", request.json)  # Debugging payload
    data = request.json
    offer = Offer(
        listing_id=data.get('listing_id'),
        type=data.get('type'),
        amount=data.get('amount'),
        trade_item=data.get('trade_item')
    )
    db.session.add(offer)
    db.session.commit()
    return jsonify({"message": "Offer submitted successfully", "id": offer.id}), 201

@app.route('/')
def home():
    return "Flask backend is running!"


# Run the app and initialize the database
if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Ensure the database and tables are created
    app.run(debug=True)
