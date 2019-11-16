// // eslint-disable-next-line
import React, {Component} from 'react';
var GitHub = require('github-api');
const axios = require('axios');
//Import the bootstrap react style sheets.
//import './style.css'

class Form extends Component {
    constructor() {
      super();
      this.state = {
        username:'',
        password:''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

   handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
   }

    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state.username);
      console.log(this.state.password);

      axios.get('https://api.github.com/users/caolanwall/repos')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

      this.setState({
          invalid: false,
          displayErrors: false,
      });
    }
  render(){
  return (
    <div>
      <h3>THIS IS WORKING</h3>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          data-parse="uppercase"
          onChange={this.handleChange}
          />

        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required onChange={this.handleChange}/>

        <button onClick={this.handleSubmit}>Login</button>
      </form>
      
    </div>
  );
  }
}
    
export default Form;