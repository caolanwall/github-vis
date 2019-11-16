// // eslint-disable-next-line
import React, {Component} from 'react';
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
    /* Handle Change
      Here write a function that is called onChange in the react
      render. It should use setState() to change the state of username
      and password.

      Identify the field being changed with "name" in the JSX element.
    */
   handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
   }

    handleSubmit(event) {
      console.log(this.state.username);
      console.log(this.state.password);
      
      event.preventDefault();
      //const form = event.target;
      //const data = new FormData(form);
        
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

        <button onClick={this.handleSubmit}>Send data!</button>
      </form>
      
    </div>
  );
  }
}
    
export default Form;