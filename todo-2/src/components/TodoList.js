import React from 'react';

import Todo from './Todo';

const TodoList = ({ tasks }) => {
  return (
    <div className='wrapper'>
      <div>
        {tasks.map((task) => (
          <Todo key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
