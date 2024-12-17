# Project: React Frontend with Flask Backend

## Overview
This project integrates a React frontend with a Flask backend. Users can submit offers on a product details page using either a **money amount** or a **trade item**.

---

## Prerequisites
Ensure you have the following tools installed on your machine:

- **Python** (version 3.8+)
- **Node.js** and **npm** (latest versions)
- **Flask** and **Flask-CORS** Python packages

---

## Instructions to Run the Project

### 1. Set Up the Flask Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install the required Python packages:
   ```bash
   pip install flask flask-sqlalchemy flask-cors
   ```

3. Start the Flask server:
   ```bash
   python app.py
   ```

   - The Flask backend will run at: **http://127.0.0.1:5000/**
   - API endpoint for submitting offers: **http://127.0.0.1:5000/api/offer**

---

### 2. Set Up the React Frontend

1. Open a new terminal and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

   - The React app will run at: **http://localhost:3000/**
   - API requests will automatically be proxied to the Flask backend.

4. For a production build:
   ```bash
   npm run build
   ```
   - The app will be built for production and saved in the `frontend/build` directory.

---

### 3. Testing the Integration

1. Visit the React app at **http://localhost:3000/**.
2. Test submitting an offer:
   - Go to the product details page.
   - Click on **"MAKE OFFER"**.
   - Submit either a **money offer** or a **trade offer**.
3. Check the success message and verify the Flask backend logs for the submitted data.

---

### 4. Updating the React App
If you make updates to the React app:

1. Rebuild the app:
   ```bash
   npm run build
   ```

2. Restart the Flask backend to serve the updated production build.

---

## Summary of Commands

### Start the Backend:
```bash
cd backend
python app.py
```

### Start the Frontend:
```bash
cd frontend
npm start
```

### Build the React App:
```bash
cd frontend
npm run build
```

### API Endpoint:
- **Submit Offer**: `http://127.0.0.1:5000/api/offer`

---

## Folder Structure
```
project-root/
│
├── backend/              # Flask backend code
│   ├── app.py            # Flask app and routes
│   ├── models.py         # Database models
│   ├── offers.db         # SQLite database (auto-created)
│
├── frontend/             # React frontend code
│   ├── public/           # Static files
│   ├── src/              # React components
│   ├── package.json      # Frontend dependencies
│   ├── build/            # Production build
│
└── README.md             # Instructions for running the project
```

---

## Notes
- Ensure the backend and frontend run on the correct ports:
  - Flask backend: **http://127.0.0.1:5000**
  - React frontend: **http://localhost:3000**
- For production, ensure Flask serves the production build located in `frontend/build`.

---

## Troubleshooting
1. **React app shows "Failed to submit offer"**:
   - Ensure the Flask backend is running at `http://127.0.0.1:5000`.
   - Check CORS settings in `app.py`.
   - Verify the API endpoint path: `/api/offer`.

2. **Database errors**:
   - Ensure SQLite is set up correctly.
   - Delete `offers.db` and restart Flask to recreate the database.

3. **Port conflicts**:
   - Ensure no other services are running on ports 3000 (React) or 5000 (Flask).
   - Stop processes using these ports or use alternatives.