# To-Do List MVC (Node.js + Express + PostgreSQL + React)

This project is a full-stack to-do list application built to practice the **MVC (Model-View-Controller)** pattern with a Node.js/Express API, PostgreSQL persistence, and a React client.

## Learning Goals

- Apply MVC separation in a real project structure
- Build and expose REST-style API endpoints with Express
- Connect and query PostgreSQL from Node.js
- Integrate a React front-end with a backend API
- Manage a local full-stack development workflow

## Tech Stack

- Backend: Node.js, Express, Formidable, dotenv
- Database: PostgreSQL (`pg`)
- Frontend: React (Create React App)
- Dev tools: Nodemon, ESLint, Prettier

## Project Structure

```text
.
├── controller/
│   └── index.js
├── model/
│   ├── database.js
│   ├── todo.js
│   └── todo.sql
├── routes/
│   └── todo.js
├── view/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   └── util/index.js
│   └── package.json
├── index.js
└── package.json
```

- `model/`: DB connection + SQL operations
- `controller/`: request parsing + business logic
- `routes/`: endpoint mapping
- `view/`: React UI and API utility functions

## API Endpoints

All API routes are mounted under `/api`.

- `POST /api/todo/create` - create a new task
- `GET /api/todos` - fetch all tasks (ordered by `todo_id`)
- `DELETE /api/todo/:id` - delete a task by id

Base health/info route:

- `GET /` - returns server status + listed routes

## Database Setup

1. Create the database and table:
```sql
CREATE DATABASE todo;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(225) NOT NULL
);
```

2. You can execute the SQL from `model/todo.sql`.

## Environment Variables

Create a `.env` file in the project root:

```env
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=todo
PORT=8000
```

## Installation

1. Install backend dependencies:
```bash
npm install
```

2. Install frontend dependencies:
```bash
cd view
npm install
cd ..
```

## Run the Project

1. Start the backend (root folder):
```bash
npm start
```

2. Start the frontend (in `view`):
```bash
cd view
npm start
```

3. Open:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8000`

The React app is configured with a proxy to `http://localhost:8000`, so API calls from the UI work in development without extra CORS setup.

## MVC Flow (How It Works)

1. The user submits a task from React (`view/src/App.js`).
2. Utility functions in `view/src/util/index.js` call backend endpoints.
3. Routes (`routes/todo.js`) delegate to controller handlers.
4. Controllers (`controller/index.js`) validate/parse request data and call model functions.
5. Models (`model/todo.js`) run SQL queries through the PostgreSQL pool (`model/database.js`).
6. The response is returned to React and rendered in the UI.

## Possible Improvements

- Add update endpoint (`PUT/PATCH`) for full CRUD
- Add stricter validation and unified error messages
- Add loading/empty states and better UX feedback
- Add tests for API routes and React components
- Add Docker configuration for easier setup
