# Student System Full Stack Application

A simple full stack Student Management System built with **Spring Boot (MVC, JPA, Hibernate)** and **MySQL** for the backend, and **React.js** with **Material UI** for the frontend. This application allows users to perform basic CRUD operations on student records via a RESTful web service.

---

## 📌 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## 📖 Introduction

This project demonstrates how to build a full stack CRUD application using a Spring Boot REST API backend and a modern React.js frontend using hooks and Material UI. It includes integration with a MySQL database to persist student data.

---

## ✨ Features

- Add new student
- View all students
- Update existing student details
- Delete student
- Full-stack architecture with REST API
- Responsive UI with Material UI
- React Hooks: `useState`, `useEffect`

---

## 🛠️ Tech Stack

### Backend
- Java
- Spring Boot (Spring MVC, JPA, Hibernate)
- MySQL
- RESTful APIs

### Frontend
- React.js (Functional Components)
- Material UI
- Fetch API (or Axios)

---

## 📦 Installation

### Prerequisites

- Java 11+
- Node.js and npm
- MySQL Server
- Maven

---

## 🧰 Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/student-system.git
   cd student-system/backend
   ```

2. **Configure MySQL database**
   Update `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   ```

3. **Build and run the Spring Boot application**
   ```bash
   mvn spring-boot:run
   ```

4. The backend should start at `http://localhost:8080`.

---

## 🎨 Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the React app**
   ```bash
   npm start
   ```

4. The frontend will run at `http://localhost:3000`.

---

## 🚀 Usage

- Visit `http://localhost:3000` in your browser.
- Use the interface to add, view, update, or delete students.
- All changes are reflected in the MySQL database.

---

## 🔌 API Endpoints (Sample)

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| GET    | /api/students      | Get all students        |
| GET    | /api/students/{id} | Get student by ID       |
| POST   | /api/students      | Add new student         |
| PUT    | /api/students/{id} | Update student by ID    |
| DELETE | /api/students/{id} | Delete student by ID    |

---

## 🧯 Troubleshooting

- Ensure MySQL server is running and accessible.
- Check CORS configuration in Spring Boot if frontend can’t reach backend.
- Use browser developer tools to inspect network errors when calling APIs.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more info.

---
