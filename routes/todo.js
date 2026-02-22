const express = require('express');
const { create, read, removeTodo } = require('../controller');

const router = express.Router();

// Create POST route to create an todo
router.post('/todo/create', create);
// Create GET route to read an todo
router.get('/todos', read);
// Create DELETE route to remove an todo
router.delete('/todo/:id', removeTodo);

module.exports = router;