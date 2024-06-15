**Car wash Booking System Backend**

This is a simple car wash booking system backend. It is built with Node.js, Express.js, and MongoDB. It is a RESTful API that allows users to book car wash services.

## Features

- User can create an account
- User can login
- User can book a car wash service
- User can view all car wash services
- User can view all car wash services by category
- Admin can create a car wash service
- Admin can view all car wash services
- Admin can create time slots for car wash services
- Admin can view all time slots
- User can book a time slot
- Admin can view all bookings

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt

## Installation

1. Clone the repository

```bash
git clone https://github.com/kolinabir/car-wash-service-backend
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables

```bash
NODE_ENV = development

PORT = 5000
DATABASE_URL = mongodb://localhost:27017/carwashbooking


bycryptSalt = 10


JWT_SECRET = zLxM2rP5tUwX8qA1bVn4mC7dFgH3jK6oD9sG2hJ5kN8zLxM2rP5tUwX8qA1bVn4mC7dFgH3jK6oD9sG2hJ5kN8
```

4. Start the server

```bash
npm run dev
```



## API Endpoints

### Auth Routes


