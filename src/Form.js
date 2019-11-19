// // eslint-disable-next-line
import React, {Component} from 'react';
//var GitHub = require('github-api');
//onst axios = require('axios');
//Import the bootstrap react style sheets.
//import './style.css'

class Form extends Component{
  render () {
    return (
        <form onSubmit={this.props.onSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            data-parse="uppercase"
            onChange={this.props.onChange}
            />

          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required onChange={this.props.onChange}/>

          <button onClick={this.props.onSubmit}>Login</button>
        </form>
    );
  }
}

export default Form;