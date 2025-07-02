const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Add a todo
router.post('/', async (req, res) => {
  const newTodo = new Todo({ task: req.body.task, completed: false });
  await newTodo.save();
  res.json(newTodo);
});

// Update a todo
router.put('/:id', async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(
    req.params.id,
    { completed: req.body.completed, task: req.body.task },
    { new: true }
  );
  res.json(updated);
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
