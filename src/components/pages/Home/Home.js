import React from 'react';
import "../Home/AboutMe.css";
import profilePic from "./img3.JPG"

import { Card, ListGroup, ListGroupItem, Button, Caption } from 'react-bootstrap'
export default function Home() {

  return(
    <Card className="aboutMe" style={{ textAlign: 'center', border: 'none', backgroundColor: "#beb5af" }}>
      <Card.Img variant="top"  id="cardImg"src={profilePic} style={{alignSelf: 'center'}} />
      
      
      
      <Card.Body id="cardBody" className="">
        <ListGroup className="list-group-flush infoList" id="cardList" style={{ fontFamily: " 'Poppins', sans-serif" }}>
          <ListGroupItem className="listItems">🏠 Based in Austin, Tx</ListGroupItem>
          <ListGroupItem className="listItems">✔ MERN stack</ListGroupItem>
          <ListGroupItem className="listItems">🏫 Constantly Learning </ListGroupItem>
          <ListGroupItem className="listItems">🎓 Bootcamp Graduate</ListGroupItem>
        </ListGroup>
        <Button id="resBtn" href="https://drive.google.com/file/d/1--P2RNJfmo2GfkgFJe2dYR41dTk1KrDm/view?usp=sharing" target="_blank">Resume</Button>
      </Card.Body>
    </Card>
  )
}




