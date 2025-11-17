# 📝 React Blog App

A fully functional **Blog Management System** built with **React**, **Axios**, **Bootstrap**, and **JSON Server**.  
This project demonstrates complete **CRUD (Create, Read, Update, Delete)** operations, along with **search**, **sorting**, and **pagination** features.

---

## 📚 Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Setup](#-project-setup)
- [Folder Structure](#-folder-structure)
- [Available Scripts](#-available-scripts)
- [API Setup (JSON Server)](#-api-setup-json-server)
- [Screenshots (Optional)](#-screenshots-optional)
- [Future Enhancements](#-future-enhancements)
- [Author](#-author)

---

## 🧩 Overview
The **React Blog App** allows users to:
- Add, edit, and delete blog posts  
- View blog details  
- Search by title or author  
- Sort posts by latest, oldest, or alphabetical order  
- Browse posts through pagination  

It uses **JSON Server** as a mock REST API backend.

---

## ✨ Features

| Feature | Description |
|----------|--------------|
| ➕ **Add Blog** | Create a new blog post with title, author, and content |
| 📝 **Edit Blog** | Update an existing blog’s details |
| ❌ **Delete Blog** | Remove a blog from the list |
| 👁 **View Blog** | View full details of a selected blog |
| 🔍 **Search** | Filter blogs by title or author |
| ↕ **Sorting** | Sort by Newest, Oldest, A–Z, Z–A |
| 📄 **Pagination** | Display 5 blogs per page with navigation |
| 🎨 **Bootstrap UI** | Responsive and professional design |

---

## 🛠 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React (Vite or CRA) |
| Routing | React Router DOM |
| Styling | Bootstrap 5 |
| HTTP Client | Axios |
| Backend (Mock API) | JSON Server |
| Language | JavaScript (ES6+) |

---

## ⚙️ Project Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/react-blog-app.git
cd react-blog-app

2️⃣ Install Dependencies
npm install

3️⃣ Start JSON Server (Backend)
In a separate terminal:
npx json-server --watch db.json --port 5000

This will run your mock API at: http://localhost:5000/blogs

4️⃣ Start React App (Frontend)
npm run dev

Runs the app in development mode on http://localhost:5173


🗂 Folder Structure
Shopping_App/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── BlogList.jsx
│   │   └── BlogForm.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AddBlog.jsx
│   │   ├── EditBlog.jsx
│   │   └── BlogDetails.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── db.json
├── package.json
└── README.md
