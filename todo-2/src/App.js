import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import { initialState, reducer } from './reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Reduced Todo List</h1>
      <TodoForm />
      <TodoList tasks={state} />
    </div>
  );
}

export default App;
