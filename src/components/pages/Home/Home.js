import React from 'react';
import "../Home/AboutMe.css";
import profilePic from "./img3.JPG"

import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
export default function Home() {

  return(
    <Card className="aboutMe" style={{ textAlign: 'center', background: 'none', border: 'none' }}>
      <Card.Img variant="top"  id="cardImg"src={profilePic} style={{alignSelf: 'center'}} />
      <Card.Body id="cardBody">
          <h1>Full-Stack Web Developer</h1>
      </Card.Body>
      
      <ListGroup className="list-group-flush infoList" id="cardList" style={{ background: 'none', fontFamily: " 'Poppins', sans-serif" }}>
        <ListGroupItem className="listItems" style={{ background: 'none' }}>- Based in Austin, Tx</ListGroupItem>
        <ListGroupItem className="listItems" style={{ background: 'none' }}>- Specialize in MERN stack</ListGroupItem>
        <ListGroupItem className="listItems" style={{ background: 'none' }}>- Passionate technologist</ListGroupItem>
        <ListGroupItem className="listItems" style={{ background: 'none' }}>- Recent graduate of UT Austin<br></br>Full Stack Coding Bootcamp</ListGroupItem>
      </ListGroup>

      <Card.Body>
        <Button id="resBtn" href="https://drive.google.com/file/d/16NyFFz9oATRT53skEg2VzKFVy8dWOYzG/view?usp=sharing" target="_blank">Resume</Button>
      </Card.Body>
    </Card>
  )
}




