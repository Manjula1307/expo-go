# 🏥 Expo-Go Medical Technologies

A full-stack concept platform for a medical equipment company — a marketing/storefront-style React frontend backed by a Node.js/Express/MongoDB API handling authentication, user profiles, and product management.

## 📂 GitHub Repository

https://github.com/Manjula1307/expo-go

---

## 📖 Overview

Expo-Go is a medical equipment showcase and storefront concept. The frontend presents company information, a product catalog with cart functionality, and a multi-step checkout flow. The backend independently exposes a REST API for user authentication, profile management, and product CRUD operations backed by MongoDB.

---

## ✨ Features

### Working

* **Authentication** — Registration and login with bcrypt password hashing and JWT issuance
* **User profiles** — Authenticated users can fetch and update their profile (name, mobile, profile picture)
* **Informational pages** — Home, About, Services, Contact, and Inventory pages with scroll-triggered animations (AOS)
* **Shopping cart** — Add-to-cart and cart view/quantity management on the client
* **Multi-step checkout UI** — Address entry → order summary → card details (Stripe Elements) flow
* **Product management API** — Standalone REST endpoints to create, list, and delete products, with MongoDB persistence

### In progress

* **Admin role enforcement** — The `isAdmin` middleware checks for a `role` field that isn't currently included in the JWT payload, so admin-gated routes (add/delete product) don't yet pass for any user, including admins
* **Order persistence** — The order-creation endpoint expects fields (`_id`, `username`) that aren't present on the decoded token, so orders don't reliably save yet
* **Payment completion** — The Stripe card step on the frontend calls a `create-payment-intent` endpoint that isn't currently active on the deployed backend, so checkout doesn't complete end-to-end yet
* **Catalog integration** — The product list shown to shoppers is currently a static array on the frontend; it isn't yet connected to the backend Product collection
* **Admin UI** — The product CRUD API has no corresponding admin-facing form yet

---

## 🛠️ Tech Stack

### Frontend
* React 19 + React Router v7
* Create React App
* AOS (scroll animations)
* Lottie (lottiefiles) for delivery animation
* Stripe Elements (card UI)
* Fetch API for HTTP requests

### Backend
* Node.js + Express 5
* MongoDB + Mongoose
* JWT authentication
* bcryptjs for password hashing
* CORS, dotenv

### Deployment
* Render (Frontend)
* Render (Backend)
* MongoDB Atlas

---

## 🏗️ System Architecture

```
Frontend (React, CRA)
   ↓
REST API (Node.js + Express)
   ↓
MongoDB (Mongoose models)
```

---

## 🗄️ Data Models

| Model | Fields |
|---|---|
| User | username, email, password (hashed), role, name, mobile, profilePic |
| Product | name, description, category, price, imageUrl |
| Order | userId, username, items, totalPrice, createdAt |
| Admin | username, password |

---

## 📁 Project Structure

```text
expo-go
│
├── frontend
│   ├── src
│   │   ├── components       # Page & feature components
│   │   ├── animations        # Lottie JSON files
│   │   ├── assets            # Product & inventory images
│   │   └── App.js
│   └── package.json
│
├── backend
│   ├── models                # User, Product, Order, Admin
│   ├── routes                # auth, user, products, orders, payment
│   ├── middlewares            # JWT auth, admin check
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Manjula1307/expo-go.git
cd expo-go
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

## Environment Variables

### Backend (.env)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Log in and receive a JWT |

### User

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/user/profile | Get current user's profile |
| PUT | /api/user/profile | Update current user's profile |

### Products

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/products | List all products (public) |
| POST | /api/products/add | Add a product (admin-gated) |
| DELETE | /api/products/:id | Delete a product (admin-gated) |

### Orders

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/orders | Place an order |
| GET | /api/orders | Get current user's orders |

---

## Roadmap

* Include `role` (and other needed fields) in the JWT payload so admin gating and order creation work end-to-end
* Wire the frontend product catalog to the live `/api/products` endpoint instead of the static array
* Re-enable and test the `/api/payment/create-payment-intent` route on the deployed backend
* Build an admin-facing UI for product management
* Remove the duplicate backend copy and stray files from the repository

---

## Author

Manjula

Full Stack Developer | React.js | Node.js | MongoDB

LinkedIn: https://www.linkedin.com/in/manjula-satapathi

GitHub: https://github.com/Manjula1307

---

## License

This project is built for educational and portfolio purposes.
