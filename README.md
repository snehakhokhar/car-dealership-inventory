#  Car Dealership Inventory System

A full-stack **Car Dealership Inventory System** built using the **MERN Stack** (MongoDB, Express.js, React, Node.js). The application allows customers to browse and purchase vehicles while providing administrators with a secure dashboard to manage inventory.

This project was developed as part of the **Incubyte Software Craftsperson Assignment**.

---

#  Project Overview

The application provides:

- Secure User Authentication (JWT)
- Role-Based Authorization (User/Admin)
- Vehicle Inventory Management
- Vehicle Search & Filtering
- Vehicle Purchase System
- Inventory Restocking
- Admin Dashboard

---

#  Features

##  User Features

- Register a new account
- Login securely using JWT
- Browse all available vehicles
- Search vehicles by Make and Model
- Purchase available vehicles
- Automatic stock reduction after purchase
- Purchase button disabled when vehicle is out of stock

---

## Admin Features

- Secure Admin Login
- Add new vehicles
- View all vehicles
- Update vehicle information
- Delete vehicles
- Restock vehicle inventory

---

#  Tech Stack

## Frontend

- React (Vite)
- React Router DOM
- Tailwind CSS
- Axios

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv

---

#  Project Structure

```
## 📂 Project Structure

```text
car-dealership-inventory/
│
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   └── vehicleController.js
│   │   ├── middleware/
│   │   │   ├── adminMiddleware.js
│   │   │   └── authMiddleware.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── Vehicles.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   └── vehicleRoutes.js
│   │   ├── services/
│   │   ├── tests/
│   │   │   ├── auth.test.js
│   │   │   └── vehicle.test.js
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── jest.config.cjs
│   ├── package-lock.json
│   └── package.json
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── UpdateVehicle.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
│   
│
├── README.md
└── PROMPTS.md
```


---

#  Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/snehakhokhar/car-dealership-inventory.git

cd car-dealership-inventory
```

---

# Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```env
PORT=8000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

Run Backend

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Application URLs

```
Frontend
http://localhost:5173

Backend
http://localhost:8000
```

---

#  Demo Credentials

##  Admin Account

Use these credentials to access the Admin Dashboard.

**Email**

```
admin@gmail.com
```

**Password**

```
admin123
```

---

## 👤 User Account

You can either register a new account using the Register page or use the demo account below.

**Email**

```
test1784725163926@gmail.com
```

**Password**

```
123456
```

---

## 🔒 Admin Setup

Administrator accounts cannot be created through the registration page.

For security reasons, the admin account was created manually by assigning the user's role to **admin** in the database.

---

# 🔐 Authentication

The application uses **JWT Authentication**.

Protected routes require:

```
Authorization: Bearer <JWT_TOKEN>
```

---

# 📌 REST API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |

---

## Vehicles

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/vehicles` | Get All Vehicles |
| GET | `/api/vehicles/:id` | Get Vehicle by ID |
| GET | `/api/vehicles/search` | Search Vehicles |
| POST | `/api/vehicles` | Add Vehicle |
| PUT | `/api/vehicles/:id` | Update Vehicle |
| DELETE | `/api/vehicles/:id` | Delete Vehicle |

---

## Inventory

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/vehicles/:id/purchase` | Purchase Vehicle |
| POST | `/api/vehicles/:id/restock` | Restock Vehicle |

---

# 👥 User Roles

## User

- Register
- Login
- Browse Vehicles
- Search Vehicles
- Purchase Vehicles

---

## Admin

- Login
- Add Vehicles
- Update Vehicles
- Delete Vehicles
- Restock Vehicles
- Manage Inventory

---

# 📷 Application Screenshots

Add screenshots before submission.

Suggested screenshots:

- Login Page
- Register Page
- User Dashboard
- Search Vehicles
- Purchase Vehicle
- Admin Dashboard
- Add Vehicle
- Update Vehicle
- Delete Vehicle
- Restock Vehicle

---

# 🧪 Testing

### Backend Testing

The backend APIs were tested using **Postman**.

Verified APIs:

- User Registration
- User Login
- JWT Authentication
- Add Vehicle
- Get Vehicles
- Search Vehicles
- Update Vehicle
- Delete Vehicle
- Purchase Vehicle
- Restock Vehicle

---

### Frontend Testing

Verified functionality:

- User Authentication
- Admin Authentication
- Vehicle Search
- Purchase Vehicle
- Add Vehicle
- Update Vehicle
- Delete Vehicle
- Restock Vehicle
- Protected Routes

---

# 📊 Test Report

| Feature | Status |
|----------|--------|
| User Registration | ✅ Passed |
| User Login | ✅ Passed |
| JWT Authentication | ✅ Passed |
| Vehicle Listing | ✅ Passed |
| Vehicle Search | ✅ Passed |
| Purchase Vehicle | ✅ Passed |
| Add Vehicle | ✅ Passed |
| Update Vehicle | ✅ Passed |
| Delete Vehicle | ✅ Passed |
| Restock Vehicle | ✅ Passed |
| Admin Authorization | ✅ Passed |

---

# 🤖 My AI Usage

AI tools were used responsibly to assist in the development process while ensuring that all code was understood, reviewed, and tested before being incorporated into the project.

## AI Tool Used

- ChatGPT (OpenAI)

## How AI Helped

- Planned the project structure.
- Explained JWT authentication and authorization.
- Assisted with MongoDB Atlas connection issues.
- Helped debug backend and frontend integration.
- Suggested REST API structure.
- Assisted in React component design.
- Helped improve Tailwind CSS UI.
- Reviewed code for debugging and best practices.
- Assisted in preparing project documentation (README).

## Reflection

Using AI accelerated the development process by helping identify bugs, explain concepts, and improve code quality. Every AI-generated suggestion was reviewed, tested, and modified when necessary before being integrated into the project.

---

# 📄 PROMPTS.md

A separate **PROMPTS.md** file is included in the repository containing the AI prompts used during the development process, as required by the assignment.

---

# 🚀 Future Enhancements

- Vehicle Image Upload
- Price Sorting
- Advanced Filters
- Purchase History
- Dashboard Analytics
- Pagination
- Toast Notifications
- Dark Mode
- Automated Unit & Integration Tests
- Deployment on Render/Vercel

---

# 👩‍💻 Author

**Sneha Khokhar**

**GitHub**

https://github.com/snehakhokhar/car-dealership-inventory.git

**LinkedIn**

www.linkedin.com/in/sneha-khokhar

---

# 📄 License

This project was developed for educational purposes as part of the **Incubyte Software Craftsperson Assignment**.
