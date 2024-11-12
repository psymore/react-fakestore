# Fakestore E-commerce Project

Created with Vite + React.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Built With](#built-with)

## About the Project

This is an e-commerce application built using React, Zustand for state management, and the Fakestore API for fetching product data. The project implements a fully functional shopping platform where users can filter products by categories, price range, and rating. The front end is built using modern web development technologies and designed for both desktop and mobile devices.

## Features

- Product listing from the [Fakestore API](https://fakestoreapi.com)
- Price and rating filters for categories
- Responsive design with mobile-first layout
- Zustand for global state management
- Persistent filters based on category
- Component-based architecture for easy scalability

## Folder Structure
Here is a brief overview of the folder structure of this project:

```
├── src
│   ├── components          # Reusable UI components
│   ├── pages               # Application page components
│   ├── store               # Zustand store for managing state
│   ├── utils               # Utility functions
│   ├── styles              # Global styles and theme configurations
│   ├── App.js              # Main application component
│   └── index.js            # Entry point of the application
├── public                  # Static files (HTML, images, etc.)
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Built With
- React.js – JavaScript library for building user interfaces
- [Zustand](https://zustand-demo.pmnd.rs/) – Small and fast state management solution for React
- MUI (Material UI) – UI component library for styling
- [Fakestore API](https://fakestoreapi.com) – Free API providing e-commerce product data
