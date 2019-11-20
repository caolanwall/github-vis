import React, {Component} from 'react';
import './App.css';
import Form from './Form.js';
import Homepage from './Homepage.js'
const Octokit = require("@octokit/rest");
const octokit = new Octokit();

class App extends Component {
  constructor() {
    super();
    this.state = {
      username:'',
      password:'',
      submit: false,
      info: '',
      repos: ''
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
    octokit.authenticate({username: this.state.username, password: this.state.password, type: "basic"});

    octokit.users.getAuthenticated().then(result => {
      this.setState({
      info : result.data
    })
    });
    octokit.repos.list().then(result => {
      this.setState({
      repos : result.data,
      submit: true
    });
  });
    //console.log(this.state.repos);
  }
  
  render(){
    return (
    <div>
    <div>
        {!this.state.submit ? 
        (< Form 
        onChange={this.handleChange} 
        onSubmit={this.handleSubmit} />
        ) : (
          <Homepage repos= {this.state.repos} info= {this.state.info} />
        ) }
      </div>
      
      </div>
      
    );
  }
}

export default App;
