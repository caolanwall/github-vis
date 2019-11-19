import React, {Component} from 'react';
import './App.css';
import Form from './Form.js';
import Homepage from './Homepage.js'

const axios = require('axios');
//import bootstrap from '';
//import ShakingError from './Form.js'
//const { MyForm } = require("Form.js");

class App extends Component {
  constructor() {
    super();
    this.state = {
      username:'',
      password:'',
      submit: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

 handleChange(event){
 // const target = event.target;
  const value = event.target.value;
  const name = event.target.name;
  console.log('yurt');

  this.setState({
    [name]: value
  });
 }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.username);
    console.log(this.state.password);

    axios.get('https://api.github.com/users/'+this.state.username)
    .then(function (response) {
      console.log(response);

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

    this.setState({
        submit: true
    });
  }
  
  render(){
    return (
      <div>
        {!this.state.submit ? 
        (< Form 
        onChange={this.handleChange} 
        onSubmit={this.handleSubmit} />
        ) : (
          <Homepage />
        ) }
      </div>
    );
  }
}

export default App;
