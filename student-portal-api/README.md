# Student Portal API

A RESTful API built with Node.js, Express, and MongoDB for creating and managing student accounts.

## Features

- Create a student account with a name, registration number, and email
- Retrieve student details by ID
- Update the student name only
- Permanently delete a student account
- Validate request data and handle duplicate records
- MVC project structure

## Setup

```bash
npm install
```

Make sure MongoDB is running locally. The default database is `studentportal`.

You can override the connection and port with environment variables:

```bash
MONGO_URI=mongodb://127.0.0.1:27017/studentportal PORT=5000 npm start
```

## Endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/api/students` | Create a student |
| GET | `/api/students/:id` | Get a student |
| PUT | `/api/students/:id` | Update the student name |
| DELETE | `/api/students/:id` | Delete a student |

### Create request

```json
{
  "name": "Ada Lovelace",
  "regNo": "TC-001",
  "email": "ada@example.com"
}
```