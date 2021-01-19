import React from 'react';

const Todo = ({ task }) => {
  return (
    <div className={`todo${task.completed ? ' completed' : ''}`}>
      <p>{task.item}</p>
    </div>
  );
};

export default Todo;
