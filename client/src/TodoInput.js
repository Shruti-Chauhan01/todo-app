import React, { useState } from 'react';

function TodoInput({ onAdd }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd(task.trim());
    setTask('');
  };

  return (
    <form className="todo-input-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="todo-add-button" type="submit">
        ➕ Add
      </button>
    </form>
  );
}

export default TodoInput;
