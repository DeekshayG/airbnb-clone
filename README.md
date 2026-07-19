# Airbnb Clone

A full-stack Airbnb Clone built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, and **EJS**. This project allows users to manage property listings through a clean and user-friendly interface while following RESTful API principles.

---

## Features

- View all property listings
- View detailed information for each listing
- Add new property listings
- Edit existing listings
- Delete listings
- Server-side rendering using EJS
- RESTful routing
- MongoDB database integration
- Responsive and clean UI

---

## Tech Stack

### Frontend
- HTML
- CSS
- Bootstrap
- EJS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## Project Structure

```
airbnb-clone/
│
├── models/
├── routes/
├── controllers/
├── views/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── utils/
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## RESTful Routes

| Method | Route | Description |
|---------|-------|-------------|
| GET | /listings | Display all listings |
| GET | /listings/new | Show form to create a new listing |
| POST | /listings | Create a new listing |
| GET | /listings/:id | View listing details |
| GET | /listings/:id/edit | Show edit form |
| PUT | /listings/:id | Update listing |
| DELETE | /listings/:id | Delete listing |

---

## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/airbnb-clone.git
```

### Navigate to the project folder

```bash
cd airbnb-clone
```

### Install dependencies

```bash
npm install
```

### Start MongoDB

Make sure MongoDB is running on your local machine.

### Run the application

```bash
node app.js
```

or

```bash
nodemon app.js
```

Open your browser and visit:

```
http://localhost:8080/listings
```

---



## Future Enhancements

- User Authentication
- User Authorization
- Image Upload
- Search Functionality
- Filters
- Booking System
- Reviews & Ratings
- Wishlist
- Pagination
- Responsive Design Improvements
- Cloud Deployment

---

## Learning Outcomes

This project helped me understand:

- Express.js Routing
- RESTful API Design
- CRUD Operations
- MongoDB and Mongoose
- MVC Project Structure
- Server-side Rendering with EJS
- Express Middleware
- Error Handling
- Database Integration

---

## Author

**Deekshay G**

GitHub: https://github.com/DeekshayG

---

## License

This project is developed for learning purposes and is open for educational use.
