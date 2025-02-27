IRCTC-like Railway Management System API

This is a Node.js and PostgreSQL-based API for managing trains, bookings, and user authentication. This API will allows users to register, log in, check train availability, book seats, and view booking details. Admins can add new trains and update train details.

Table of Contents
1.Setup
2.Running the Project
3.Testing the API
4.Assumptions
5.Screenshots


## Setup

# Node.js: Install Node.js from nodejs.org.
# PostgreSQL: Install PostgreSQL from postgresql.org.
# Postman: Install Postman from postman.com for testing the API.

Steps to Set Up the Project
# Clone the repository:
# Create a .env file in the root directory and add the following environment variables:

# env

PORT=3000
DB_HOST=localhost
DB_USER=Ranjesh
DB_PASSWORD=123456789
DB_NAME=irctc1
DB_PORT=5432
JWT_SECRET=kygkjhiyguy564gtfyuy
API_KEY=55496hknkjhiukndtd
# setup Postgresql
Create a database named irctc.
Then create schema (Tables)


### Running of Project 

Start the server using : node src/server.js

## Testing the API
Using Postman
Import the Postman collection provided in the repository.

Use the collection to test the following endpoints:

Register User: POST base_url/api/auth/register

Login User: POST base_url/api/auth/login

Add Train (Admin Only): POST base_url/api/trains

Get Seat Availability: GET base_url/api/trains?source=StationA&destination=StationB

Book a Seat: POST base_url/api/bookings

Get Booking Details: GET base_url/api/bookings/:bookingId



### Assumptions
Database: The PostgreSQL database is already set up, and the user has the necessary permissions to create tables and insert data.

Environment Variables: The .env file is correctly configured with the required variables.

**Concurrency: The system handles concurrent seat bookings using database transactions to avoid race conditions.**

Admin Access: Only users with the admin role can add trains. This is enforced using role-based access control.

Error Handling: The API returns appropriate error messages for invalid requests (e.g., insufficient seats, invalid credentials).



## Screenshots
## Screenshot 1: Register User
    screenshots/Register.png

## Screenshot 2: Login User
     screenshots/login.png

## Screenshot 3: Add Train (Admin Only)
       screenshots/Admin_train.png

## Screenshot 4: Get Seat Availability
           screenshots/seats.png
         

## Screenshot 5: Book a Seat
         screenshots/bookings.png

## Screenshot 6: Get Booking Details
      screenshots/booking_details.png

      
 ------------------------- **Thanks for this Opportunity , I'm looking forward for Next round 🤞**----------------------


