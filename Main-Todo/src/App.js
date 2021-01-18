import React from 'react';
import styled from 'styled-components';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Header from './components/Header';
import Footer from './components/Footer';
import data from './data';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: data,
    };
  }

  componentDidMount() {
    localStorage.setItem('list', JSON.stringify(this.state.tasks));
    this.setState({ tasks: JSON.parse(localStorage.getItem('list')) });
  }

  componentDidUpdate() {
    localStorage.setItem('list', JSON.stringify(this.state.tasks));
  }

  addTodoHandler = (todoName) => {
    const todo = {
      name: todoName,
      id: this.state.tasks.length,
      completed: false,
    };

    const newTasks = [...this.state.tasks, todo];

    this.setState({ tasks: newTasks });
  };

  toggleHandler = (todoId) => {
    this.setState({
      tasks: this.state.tasks.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  completionHandler = () => {
    const newTasks = this.state.tasks.filter((todo) => {
      return !todo.completed;
    });

    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <StyledDiv>
        <Header />
        <StyledContent>
          <h1>
            <span contentEditable>New</span>.Too.Do
          </h1>
          <TodoForm tasks={this.state.tasks} addTodo={this.addTodoHandler} />
          <TodoList
            completionHandler={this.completionHandler}
            toggleHandler={this.toggleHandler}
            tasks={this.state.tasks}
          />
        </StyledContent>
        <Footer />
      </StyledDiv>
    );
  }
}

export default App;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const StyledContent = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;
  color: #8e8d8a;

  h1 {
    font-size: 9rem;
    font-family: 'Cookie', cursive;
    color: #e98074;
    transition: 0.3s;
  }

  h1:hover {
    cursor: default;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 6rem;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 4rem;
    }
  }
`;
