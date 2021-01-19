import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  changeHandler = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} autoComplete='off'>
        <input
          value={this.state.inputValue}
          onChange={this.changeHandler}
          type='text'
          name='todo'
          required
        ></input>
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
