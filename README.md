## To-Do List MVC Application

This project implements a simple full-stack to-do list web application using the **MVC (Model-View-Controller)** architectural pattern. The application enables users to create tasks, retrieve all tasks, and delete completed tasks through a RESTful API.

---

## Objectives

- Build REST API endpoints using **Express**
- Implement separation of concerns with MVC
- Connect a PostgreSQL database to a Node.js backend
- Develop a React front-end that interacts with the API
- Run the project locally using a standard development setup

---

## Project Structure

root
├── controller
├── model
├── routes
├── view (React app)
├── index.js
├── database.js
├── todo.sql
└── package.json

- **model** — Database access and SQL logic  
- **controller** — Request handling and business logic  
- **routes** — API routing layer  
- **view** — React front-end  

---

## Setup Steps

### 1. Install Dependencies
- Install root dependencies using `npm install`
- Navigate to `view` and install front-end dependencies

### 2. Configure PostgreSQL
- Install PostgreSQL locally
- Create the database and table using `todo.sql`

### 3. Configure Environment Variables
Create a `.env` file:

DB_USER=
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=todo
PORT=8000

---

## Implementation Steps

### Model Layer

1. Move `database.js` and `todo.sql` into the **model** directory
2. Create `model/todo.js`
3. Establish a PostgreSQL connection pool
4. Implement database functions:
   - **create(description)** → insert task
   - **get()** → fetch tasks
   - **remove(id)** → delete task
5. Export model functions

---

### Controller Layer

1. Create `controller/index.js`
2. Import **formidable** and model functions
3. Implement middleware:
   - **create** → parse form and store task
   - **read** → fetch all tasks
   - **removeTodo** → delete task by id

---

### Routing Layer

1. Create `routes/todo.js`
2. Initialize Express router
3. Define endpoints:
   - `POST /todo/create`
   - `GET /todos`
   - `DELETE /todo/:id`
4. Export router

---

### View Layer

1. Create `view/src/util/index.js`
2. Implement API utilities:
   - **createTodo(todo)** → POST request
   - **getTodos()** → GET request
   - **removeTodo(id)** → DELETE request

3. Update `App.js`:
   - Implement **fetchTodos**
   - Implement **handleSubmit**
   - Implement **handleDelete**

---

## Running the Application

1. Start backend server (using nodemon)
2. Start React app inside `view`
3. Ensure backend runs before frontend
4. Access the application in the browser

---

## Result

The application demonstrates:

- Proper MVC separation
- RESTful API implementation
- Database-driven persistence
- Front-end and back-end integration
- Modular and maintainable full-stack architecture

---

## Optional Improvements

- Add update functionality (complete CRUD)
- Improve validation and error handling
- Implement pagination or filtering
- Enhance UI and state management
- Add authentication and authorization
