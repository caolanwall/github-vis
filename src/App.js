import React, {Component} from 'react';
import './App.css';
import form from './Form.js';
//const { MyForm } = require("Form.js");
class App extends Component {
  render(){
  return (
    <form onSubmit={this.handleSubmit} noValidate>
    <label htmlFor="username">Username:</label>
    <input
      id="username"
      name="username"
      type="text"
      data-parse="uppercase"
    />

    <button>Send data!</button>
    </form>
  );
}
}

export default App;
