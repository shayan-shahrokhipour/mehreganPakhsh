# Mehregan Pakhsh | Frontend

A responsive Persian e-commerce frontend for automotive spare parts, built with React and Vite.

## Overview

Mehregan Pakhsh is an online store focused on automotive hydraulic hoses and spare parts. The frontend provides product browsing, product details, search, filtering, pagination, and a shopping cart integrated with the backend API.

## Features

- Responsive layout for desktop and mobile devices
- Product catalog fetched from the backend API
- Product details pages
- Product search and filtering
- Paginated product listing
- Shopping cart connected to the backend API
- Add, remove, and update product quantities
- Cart subtotal and price display
- Customer information form
- Order tracking interface
- Authentication and OTP interface
- Loading and error states
- About Us and Contact Us pages
- Custom 404 page
- Persian language and right-to-left (RTL) layout

## Tech Stack

- **React** — UI development
- **Vite** — Development server and build tooling
- **React Router** — Client-side routing
- **Context API** — Shared application state
- **useReducer** — State management
- **Axios** — HTTP requests to the backend API
- **CSS Modules** — Component-level styling
- **React Icons** — Icons
- **React Spinners** — Loading indicators

## Project Structure

```text
src/
├── components/
│   ├── Basket/
│   ├── Header/
│   ├── Hero/
│   ├── Main/
│   ├── cards/
│   ├── footer/
│   └── modals/
├── context/
│   ├── CartContext.jsx
│   └── ContextProvider.jsx
├── Pages/
├── Loading/
├── assets/
├── App.jsx
├── App.css
├── index.css
└── main.jsx

public/
└── products/
    └── products.json
```


## API Integration

The frontend communicates with the backend through Axios.

Current API integration includes:
- Product catalog retrieval
- Shopping cart operations

Order submission, payment gateway integration, and complete OTP authentication are separate integration tasks and should not be considered complete until implemented and tested end to end.

## Language and Layout

The interface is designed primarily for Persian-speaking users and uses a right-to-left (RTL) layout.

## Project Status

The frontend is under active development. Features and API integrations are being completed and tested incrementally.

## License

No license has been specified for this project.
