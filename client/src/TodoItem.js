import React from 'react';

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span
        className="todo-task"
        onClick={() => onToggle(todo._id, !todo.completed)}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => { if (e.key === 'Enter') onToggle(todo._id, !todo.completed); }}
      >
        {todo.task}
      </span>
      <button className="todo-delete-button" onClick={() => onDelete(todo._id)} aria-label="Delete task">
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
