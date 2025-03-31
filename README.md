# 🎬 My Movie List - Frontend

## 📌 Project Overview

The My Movie List Frontend is a web application designed to interact with a movie database. This frontend communicates with a PostgreSQL database via a backend API.

## 🗋l Table of Contents

- [Installation & Setup](#installation--setup)
- [Features](#features)
- [Database Connection](#database-connection)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## 🛠️ Installation & Setup

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v18+ recommended)
- PostgreSQL

### Clone the Repository

```bash
git clone https://github.com/yourusername/My-Movie-List-Frontend.git
cd My-Movie-List-Frontend
```

### Install Dependencies

```bash
npm install
```

### Start the Server

```bash
npm start
```

The server should be running at: [http://localhost:5000](http://localhost:5000)

## 🌟 Features

- CRUD operations for movies
- PostgreSQL database integration
- RESTful API for seamless communication

## 🛂 Database Connection

Ensure your PostgreSQL instance is properly configured, and the credentials match the `db.js` file.

### Database Schema

```sql
CREATE TABLE movies (
    movie_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    release_year INTEGER,
    director VARCHAR(255),
    country VARCHAR(100),
    rating DECIMAL(3,1)
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    movie_id INTEGER REFERENCES movies(movie_id),
    rating INTEGER CHECK (rating BETWEEN 1 AND 5),
    comment TEXT
);
```

## 🔗 API Integration

The frontend interacts with the backend API endpoints to perform CRUD operations. Ensure the backend server is running and accessible.

## 🚀 Deployment

To deploy the frontend, ensure the environment variables are set correctly and use platforms like Render, Vercel, or Heroku.

## 📸 Screenshots

![Movie List Screenshot](Screenshot%202025-03-27%20at%207.47.54%20PM.png)

Unfortunately, the API URL was not working at the moment, so screenshots from the website could not be added as the data was not showing up.

## 🤝 Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a Pull Request.

## 🐜 License

This project is licensed under the MIT License.

