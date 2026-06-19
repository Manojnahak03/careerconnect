# 🚀 CareerConnect

> A Full-Stack MERN Job Portal that connects job seekers with recruiters through a modern, responsive, and secure platform.

![MERN](https://img.shields.io/badge/MERN-Stack-green)
![React](https://img.shields.io/badge/React-19-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-success)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 🌟 Overview

CareerConnect is a modern job portal built using the MERN Stack. Recruiters can create and manage job postings, while job seekers can browse available opportunities through an intuitive and responsive interface.

---

## ✨ Features

🔐 Secure Authentication (JWT)

👤 User Registration & Login

💼 Create New Job Listings

📋 View All Available Jobs

✏️ Update Existing Jobs

🗑️ Delete Job Posts

🔍 Search Jobs by Title or Company

📱 Fully Responsive Design

⚡ Fast REST API Integration

🎨 Clean and Modern UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt.js

### Database
- MongoDB
- Mongoose

---

## 📂 Project Structure

```bash
CareerConnect
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/CareerConnect.git
cd CareerConnect
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside backend folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 📡 API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Jobs

```http
GET    /api/jobs
GET    /api/jobs/:id
POST   /api/jobs
PUT    /api/jobs/:id
DELETE /api/jobs/:id
```

---

## 🎯 Future Improvements

- Resume Upload Feature
- Apply for Jobs
- Recruiter Dashboard
- Candidate Dashboard
- Email Notifications
- Admin Panel
- Cloudinary Integration

---

## 📸 Screenshots

### Home Page
<img width="100%" alt="Home" src="YOUR_SCREENSHOT_LINK"/>

### Job Listings
<img width="100%" alt="Jobs" src="YOUR_SCREENSHOT_LINK"/>

### Create Job
<img width="100%" alt="Create Job" src="YOUR_SCREENSHOT_LINK"/>

---

## 👨‍💻 Author

**Manojkumar Nahak**

B.Sc IT Student | MERN Stack Developer | AI Enthusiast

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and share it with others!

---

## 📜 License

This project is licensed under the MIT License.
