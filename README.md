# Mehregan Pakhsh | E-Commerce Platform

A full-featured e-commerce platform for automotive hydraulic steering hoses, built with React and integrated with a custom Django REST API backend.

The platform provides a complete shopping experience, including product browsing, shopping cart management, OTP-based authentication, order creation, and online payment integration.

## Overview

Mehregan Pakhsh is a real-world e-commerce project developed collaboratively by two developers.

- **Frontend:** Developed with React.
- **Backend:** Developed independently with Django REST Framework.

The frontend communicates with the backend through REST APIs to handle products, authentication, shopping carts, orders, and payments.

## Tech Stack

### Frontend
- React 19
- JavaScript (ES6+)
- Vite
- React Router DOM
- Context API
- useReducer
- Axios
- CSS Modules
- React Icons

### Backend Integration
- Django REST Framework
- JWT Authentication
- PostgreSQL
- Redis
- Celery
- Zarinpal Payment Gateway

## Features

### Product Catalog
- Dynamic product listing
- Paginated product loading
- Product detail pages
- Product information and pricing

### Shopping Cart
- Server-side shopping cart management
- Guest cart support
- Add, update, and remove cart items
- Cart synchronization with backend
- Dynamic price calculation

### Authentication
- Mobile number authentication
- OTP verification
- Access and refresh token management
- Axios interceptors for authentication

### Order Management
- Customer information collection
- Order creation through backend APIs
- Order details and invoice information
- Server-side price and inventory validation

### Payment
- Zarinpal payment integration
- Payment request handling
- Payment callback processing
- Payment result handling

## Architecture

The frontend uses React Context API and useReducer to manage application state and separate major business responsibilities.

Main application contexts include:

- ProductContext
- CartContext
- AuthProvider
- OrderProvider
- PaymentProvider

Axios instances are used to communicate with backend services, with request interceptors handling authentication and guest cart identification.

## Project Structure

## Project Structure

```text
mehreganPakhsh/
│
├── public/
│   ├── ABOUTUS/                 # About us page images
│   ├── authentication/          # Authentication page assets
│   ├── orderTrack/              # Order tracking assets
│   ├── products/                # Product catalog data (JSON)
│   ├── favicon.svg
│   └── ...
│
├── src/
│   │
│   ├── assets/
│   │   ├── iranyekan/           # Custom Persian font
│   │   └── ...
│   │
│   ├── components/
│   │   ├── Basket/              # Shopping cart components
│   │   ├── Header/              # Desktop and mobile navigation
│   │   ├── Hero/                # Homepage hero section
│   │   ├── Main/                # Homepage content sections
│   │   ├── cards/               # Product cards
│   │   ├── footer/              # Footer components
│   │   ├── modals/              # Dialogs and modal components
│   │   ├── Information.jsx      # Customer information form
│   │   └── Pagination.jsx       # Product pagination
│   │
│   ├── context/
│   │   ├── ContextProvider.jsx  # Product state management
│   │   ├── CartContext.jsx      # Shopping cart state
│   │   ├── AuthProvider.jsx     # Authentication state
│   │   ├── OrderProvider.jsx    # Order management
│   │   └── PaymentProvider.jsx  # Payment state management
│   │
│   ├── Pages/
│   │   ├── Aboutus.jsx          # About us page
│   │   ├── Authentication.jsx   # OTP authentication
│   │   ├── Calltous.jsx         # Contact page
│   │   ├── Payment.jsx          # Payment page
│   │   ├── PaymentResult.jsx    # Payment result handling
│   │   ├── ProductDetails.jsx   # Product details page
│   │   ├── TrackOrder.jsx       # Order tracking page
│   │   ├── CheckTrackOrder.jsx  # Order lookup page
│   │   └── Page404.jsx          # Not found page
│   │
│   ├── Loading/
│   │   └── Loading.jsx          # Loading component
│   │
│   ├── services/
│   │   └── api.js               # Axios instances and interceptors
│   │
│   ├── App.jsx                  # Application routes and providers
│   ├── App.css                  # Application styles
│   ├── index.css                # Global styles
│   └── main.jsx                 # Application entry point
│
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── vercel.json
```

### Architecture Overview

- **Components:** Reusable UI components organized by functionality.
- **Pages:** Application pages and user-facing workflows.
- **Context:** Centralized state management using React Context API and useReducer.
- **Services:** API communication and Axios configuration.
- **Assets:** Images, icons, and custom fonts.
- **Public:** Static assets and product catalog data.



## Environment Configuration

Configure the backend API base URL in the Axios service configuration before running the application.

Production and development environments should use their respective API endpoints.

## Development Team

**Frontend Development:** Shayan Shahrokhipour

**Backend Development:** Collaboratively developed by a separate backend developer.

## Project Status

The initial e-commerce implementation is developed, with deployment preparation and final production testing in progress.

Additional features and improvements will be introduced based on real business requirements and user feedback.
