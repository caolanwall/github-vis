import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const imgStyle = {
  width: "200px",
  height: "200px"
};
const array = [];
var lang = '';
var i = 0;

class Homepage extends Component {
    getLanguages (){
    for(i =0; i < this.props.repos.length; i++){
      lang = this.props.repos[i].language;
      if (!array.includes(lang) && lang != null){
        array.push(lang);
        console.log(lang);
      }
    }
    return array;
  }

  render () {
  return (
    
    <Container>
      <Row>
        <Col><img src={this.props.info.avatar_url}
               alt="Profile" style={imgStyle}/>
              <p> {this.props.info.login}</p>
              <p> {this.props.info.bio}</p>
               </Col>
        <Col>
          <p> Followers: {this.props.info.followers}</p>
          <p> Repos: {this.props.repos.length}</p>
        </Col>
        <Col>
          <p> Following: {this.props.info.following}</p>
          <p> Languages: {this.getLanguages()}</p>
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
      // <div class="d-flex flex-column">
      //   <img src={this.props.info.avatar_url}
      //             alt="Profile" style={imgStyle}/> 
      //   <div class="p-2 d-flex">
      //     <p> {this.props.info.login}</p>
      //   </div>
      //   <div class="p-2 d-flex">
      //     <p> {this.props.info.bio}</p>
      //   </div>
      //     <div class="d-flex flex-column">
      //     </div>
      //       <div class="p-2 d-flex">
      //        <p> Followers: {this.props.info.followers}</p>
      //       </div>
      //       <div class="p-2 d-flex">
      //        <p> Following: {this.props.info.following}</p>
      //       </div>
      // </div>  
  
  )
};
}

export default Homepage;

