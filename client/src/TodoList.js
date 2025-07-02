import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onToggle }) {
  if (todos.length === 0) {
    return <p className="empty-list-msg">Your task list is empty! 🎉</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default TodoList;
