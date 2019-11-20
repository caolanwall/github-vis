import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

class Form extends Component{
  render () {
    return (
      <Col md={{ span: 2, offset: 5}}>
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

          <Button size="lg" variant="primary" onClick={this.props.onSubmit}>Login</Button>
        </form>
        </Col>
    );
  }
}

export default Form;