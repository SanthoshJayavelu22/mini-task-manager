# 📝 Mini Task Manager Application

A **full-stack task management application** with user authentication, built with **React.js frontend** and **Node.js backend**.

---

## 📂 Project Structure

```
task-manager/
├── client-frontend/     # React.js frontend application
└── backend/             # Node.js backend API
```

---

## 🚀 Quick Start Guide

### Prerequisites

* **Node.js** (v18 or higher)
* **MongoDB** (local installation or MongoDB Atlas)
* **npm** or **yarn** package manager

---

### 1️⃣ Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend server:

* Development mode:

```bash
npm run dev
```

👉 The backend server will run at: **[http://localhost:5000](http://localhost:5000)**

---

### 2️⃣ Frontend Setup

Navigate to the frontend directory:

```bash
cd client-frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend development server:

```bash
npm run dev
```

👉 The frontend application will run at: **[http://localhost:5174](http://localhost:5174)**

---

### 3️⃣ Database Setup

* Install MongoDB locally OR use **MongoDB Atlas**
* Ensure the MongoDB service is running
* The application will automatically create the database

---

## 📱 Application Features

### 🔐 Authentication

* ✅ User registration with validation
* ✅ Secure login with **JWT tokens**
* ✅ Password hashing with **bcrypt**
* ✅ Protected routes

### 📋 Task Management

* ✅ Add new tasks
* ✅ View all tasks with filtering
* ✅ Mark tasks as complete/incomplete
* ✅ Edit task titles
* ✅ Delete tasks
* ✅ Search and filter tasks

### 🎨 User Interface

* ✅ Modern, responsive design
* ✅ Dark theme with gradient backgrounds
* ✅ Real-time updates
* ✅ Loading states and error handling
* ✅ Mobile-friendly design

---

## 🔧 API Endpoints

### Authentication

* `POST /api/auth/register` → User registration
* `POST /api/auth/login` → User login
* `GET /api/auth/me` → Get current user

### Tasks

* `GET /api/tasks` → Get user's tasks
* `POST /api/tasks` → Create new task
* `PUT /api/tasks/:id` → Update task
* `DELETE /api/tasks/:id` → Delete task

---

## 🛠️ Technology Stack

### Frontend

* **React.js** – UI framework
* **Redux Toolkit** – State management
* **React Router** – Navigation
* **Tailwind CSS** – Styling
* **Axios** – HTTP client
* **Vite** – Build tool

### Backend

* **Node.js** – Runtime environment
* **Express.js** – Web framework
* **MongoDB** – Database
* **Mongoose** – ODM
* **JWT** – Authentication
* **bcryptjs** – Password hashing
* **Express Validator** – Input validation

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 💡 Author

Developed by **Santhosh Jayavelu** 🚀
