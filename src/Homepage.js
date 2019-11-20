import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Charts from './components/Charts.js'
import * as d3 from "d3";

const imgStyle = {
  width: "200px",
  height: "200px"
};
var array = [];
var langArray = [];
var lang, pang, langs = '';
var i = 0;

class Homepage extends Component {
    getLanguages (){
    for(i =0; i < this.props.repos.length; i++){
      lang = this.props.repos[i].language;
      if (!array.includes(lang) && lang != null){
        array.push(lang);
      }
    }
    return array;
  }
  stringifyLanguages (){
    this.countLanguages();
    langs = this.getLanguages();
    pang = langs.join(', ')
    return pang;
  }

  countLanguages(){
    var a = [], b = [], array= [], prev;
    for(var i =0; i < this.props.repos.length; i++){
      if(this.props.repos[i].language != null)
      langArray.push(this.props.repos[i].language);
      
    }
    console.log(langArray);
    langArray.sort();
    for ( var i = 0; i < langArray.length; i++ ) {
        if ( langArray[i] !== prev ) {
            a.push(langArray[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = langArray[i];
    }
    for(var j =0; j<a.length; j++){
      array.push([a[j], b[j]])
    }
    console.log(array);
    return array;
  }
  

  render () {
  return (
    
    <Container>
      <Row>
        <Col md={{ span: 3}}><img src={this.props.info.avatar_url}
               alt="Profile" style={imgStyle}/>
               <p></p>
              <p> {this.props.info.login}</p>
              <p> {this.props.info.bio}</p>
               </Col>
        <Col md={{ span: 3}}>
          <p> Followers: {this.props.info.followers}</p>
          <p> Repos: {this.props.repos.length}</p>
          <Charts />
        </Col>
        <Col>
          <p> Following: {this.props.info.following}</p>
          <p> Languages: {this.stringifyLanguages()}</p>
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

