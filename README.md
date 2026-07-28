# SkyCart - E-Commerce Web Application 🛒

SkyCart is a modern, responsive, full-stack single-page e-commerce dashboard built with **React**, **Tailwind CSS**, and **Lucide Icons**. It includes user authentication, product filtering, search functionality, and an interactive slide-out cart drawer with dynamic state management.

---

## ✨ Features

- **🔐 User Authentication**: Toggle between Login and Sign Up views with instant session creation and logout support.
- **📱 Fully Responsive Design**: Built mobile-first using Tailwind CSS for seamless viewing on phones, tablets, and desktop devices.
- **🔍 Real-Time Search**: Search through products dynamically by title or keyword.
- **🏷️ Category Filtering**: Filter items easily across categories (Clothing, Electronics, Accessories).
- **🛍️ Interactive Cart Drawer**:
  - Slide-out side menu with backdrop blur.
  - Add items to cart with automatic duplicate grouping.
  - Increment/decrement product quantities.
  - Remove individual items or clear the cart.
  - Real-time subtotal calculation and badge count.

---

## 📁 Project Structure

```text
skycart/
├── public/
├── src/
│   ├── assets/
│   ├── data/
│   │   └── products.js         # Sample product & category data
│   ├── components/
│   │   ├── auth/
│   │   │   └── AuthScreen.jsx  # Login & Sign Up forms
│   │   ├── layout/
│   │   │   ├── Header.jsx      # Navigation bar & search
│   │   │   └── HeroBanner.jsx  # Promo banner
│   │   ├── products/
│   │   │   ├── CategoryFilter.jsx # Category buttons & mobile search
│   │   │   ├── ProductCard.jsx    # Individual item card
│   │   │   └── ProductGrid.jsx    # Grid display for products
│   │   └── cart/
│   │       ├── CartDrawer.jsx  # Slide-out cart overlay
│   │       └── CartItem.jsx    # Item row inside cart
│   ├── App.jsx                 # Main application state & logic
│   ├── main.jsx                # React DOM entry point
│   └── index.css               # Tailwind CSS imports
├── package.json
├── tailwind.config.js
└── README.md