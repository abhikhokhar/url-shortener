# URL Shortener 

A simple yet powerful **URL Shortener** built with **Node.js**, **Express**, and **MongoDB**. This project enables users to shorten long URLs, track link visits, and ensure secure access with **JWT authentication**.

## Features 🌟
- **Shorten long URLs** instantly
- **Track click analytics** for each link
- **JWT authentication** for secure access
- **MongoDB database** for storing links & user data
- **Beautiful and responsive UI**

## Technologies Used 🛠️
- **Node.js** - Backend runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database for storing URLs
- **Mongoose** - Object Data Modeling (ODM) for MongoDB
- **EJS** - Template engine for dynamic HTML rendering
- **JWT (JSON Web Token)** - Authentication & security
- 

## API Routes 🌍
### Public Routes
- `POST /user/signup` - Register a new user
- `POST /user/login` - Authenticate user & get JWT token

### Protected Routes (Require JWT)
- `POST /url` - Shorten a new URL
- `GET /:shortId` - Redirect to the original URL

## Folder Structure 📂
```
url-shortener/
│-- controllers/       # Logic for handling routes
│-- models/            # Mongoose schemas
│-- routes/            # Express routes
│-- views/             # EJS templates for UI
│-- public/            # Static assets (CSS, JS, images)
│-- app.js             # Main server file
│-- package.json       # Dependencies & scripts
```

## Contributing 🤝
Feel free to contribute by forking the repository and submitting pull requests. All contributions are welcome! 😊


