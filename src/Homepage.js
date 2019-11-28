import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Charts from './components/Charts.js'
import Pie from './components/Pie.js'
import {Card} from 'react'

const imgStyle = {
  borderRadius: "50%",
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
    langs = this.getLanguages();
    pang = langs.join(', ')
    return pang;
  }

  countLanguages(r){
    var a = [], b = [], array= [], prev;
    for(var k =0; k < this.props.repos.length; k++){
      if(this.props.repos[k].language != null)
      langArray.push(this.props.repos[k].language);
      
    }
    //console.log(langArray);
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
    if(r == true){
      console.log(a);
      return a;
    } else if (r == false){
      console.log(b);
      return b;
    }

    // for(var j =0; j<a.length; j++){
    //   array.push([a[j], b[j]])
    // }
    // console.log(array);
    return a, b;
  }
  

  render () {
  return (
    <div>
    <div className ="div2">
    
    </div>
    <Container>
      <Row>
        
      <Col md={{ span: 3}}>
      <center>
        <img src={this.props.info.avatar_url}
                alt="Profile" style={imgStyle}/>
                <p></p>
                
                <p> <h4>{this.props.info.login}</h4></p>
               
                <p> {this.props.info.bio}</p>
                </center>
      </Col>
      
      <Col md={{ span: 6}}>
          <p> Followers: <b>{this.props.info.followers}</b></p>
        
          <p> Repos: <b>{this.props.repos.length}</b></p>

        
            <Pie data={this.countLanguages(false)} labels={this.countLanguages(true)} />
            
      </Col>
      <Col>
          <p> Following: <b>{this.props.info.following}</b></p>
          <p> Languages: <b>{this.stringifyLanguages()}</b></p>
      </Col>
            
        </Row>
        <Row>
          <Col>
      
            </Col>
        </Row>

      
      
      
    </Container>  
    </div>
  )
};
}

export default Homepage;

