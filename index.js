const express = require('express');
require('dotenv').config();
// import routes
const todoRoutes = require('./routes/todo');

// Running express server
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server attivo',
    routes: {
      createTodo: 'POST /api/todo/create',
      listTodos: 'GET /api/todos',
      deleteTodo: 'DELETE /api/todo/:id',
    },
  });
});

// route middlewares
app.use('/api', todoRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
