# How to Run GitBite

This project consists of a Django backend and a React/TypeScript frontend built with Vite. Follow the steps below to run both environments locally.

## Prerequisites
- **Node.js** (v18+ recommended)
- **Python** (v3.10+ recommended)
- **npm** (comes with Node.js)
- **pip** (comes with Python)

## 1. Running the Backend (Django)

Open a terminal and navigate to the backend directory:

```bash
cd backend
```

### Setup Virtual Environment (Optional but recommended)
```bash
# On Windows
python -m venv venv
venv\Scripts\activate

# On macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### Install Dependencies
```bash
pip install -r requirements.txt
```

### Run Migrations
```bash
python manage.py migrate
```

### Start the Server
```bash
python manage.py runserver
```
The backend API will run on `http://127.0.0.1:8000/`.

---

## 2. Running the Frontend (React + Vite)

Open a **new** terminal and navigate to the frontend directory:

```bash
cd frontend
```

### Install Dependencies
```bash
npm install
```

### Start the Development Server
```bash
npm run dev
```
The frontend will run on the URL provided in the terminal (usually `http://localhost:5173/`).

---

## Troubleshooting

- **CORS Issues:** Make sure your backend server is running while you use the frontend.
- **Environment Variables:** Check if there are `.env` files in both the frontend and backend folders. If they are missing, you may need to configure necessary variables (like API keys or local database URLs).



Email / Username: admin@example.com (or just admin)
Password: admin123