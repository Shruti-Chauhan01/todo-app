import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/todos');
      setTodos(res.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (task) => {
    try {
      await axios.post('http://localhost:5000/api/todos', { task });
      fetchTodos();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleToggle = async (id, completed) => {
    try {
      await axios.put(`http://localhost:5000/api/todos/${id}`, { completed });
      fetchTodos();
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">✨ To-Do List ✨</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
}

export default App;
