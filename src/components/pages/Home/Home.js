import React from 'react';
import "../Home/AboutMe.css";
import profilePic from "./img3.JPG"

// import profilePic from "./profilepic.jpeg"s
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
export default function Home() {
  // return (
  //   //main container
  //   <div className="aboutMeContainer">
  //     {/* name */}
      
  //     {/* bullet intro */}
  //     <div class="aboutMe">
  //       {/* <h1 id="titleName">James Garinger</h1> */}
  //       <content> 
  //         <p>Hi, I'm James.</p>
  //         <p>Full-Stack Developer.</p>
  //         <p>Specializing in MERN stack.</p>
  //       </content>
  //       <img src={profilePic} alt="small profile picture" id="profileImg" />
  //     </div>
  //     {/* home page image */}
  //     {/* <div className="image" /> */}
  //   </div>
  // );
  let resumeAction = () => {

  }

  return(
    <Card className="aboutMe" style={{ textAlign: 'center', background: 'none', border: 'none' }}>
      <Card.Img variant="top"  id="cardImg"src={profilePic} style={{alignSelf: 'center'}} />
      <Card.Body id="cardBody">
        {/* <Card.Title><h1 style={{fontFamily: "'Sedgwick Ave', cursive"}}>James Garinger</h1></Card.Title> */}
        
          <h1>Full-Stack Web Developer</h1>
        
      </Card.Body>
      <ListGroup className="list-group-flush infoList" id="cardList" style={{ background: 'none', fontFamily: " 'Poppins', sans-serif" }}>
        <ListGroupItem className="listItems" style={{ background: 'none' }}>- Based in Austin, Tx</ListGroupItem>
        <ListGroupItem className="listItems" style={{ background: 'none' }}>- Specialize in MERN stack</ListGroupItem>
        <ListGroupItem className="listItems" style={{ background: 'none' }}>- Passionate technologist</ListGroupItem>
        <ListGroupItem className="listItems" style={{ background: 'none' }}>- Recent graduate of UT Austin<br></br>Full Stack Coding Bootcamp</ListGroupItem>
      </ListGroup>
      {/* <Card.Body className="myInfo">
        <h1 id="infoTitle">Howdy!</h1>
        <section>
          <p>
            My name is James Garinger, I have just recently graduated from the full-stack
            coding bootcamp held by University of Texas, Austin.
          </p>
          <p>
            During my time in the bootcamp I have discovered a real passion for problem
            solving and the rewards of persistence. 
            In the last three months I have refined my skills in many different aspects of the Web Development ecosystem. 
          </p>
          <p>
            Learning with hands on projects building multiple applications and tools to make 
            working with these languages efficientand relevant to the always changing environment we participate in
          </p>
        </section>
      </Card.Body> */}
      <Card.Body>
        <Button id="resBtn" href="https://drive.google.com/file/d/16NyFFz9oATRT53skEg2VzKFVy8dWOYzG/view?usp=sharing" target="_blank">Resume</Button>
      </Card.Body>
    </Card>
  )
}




{/* <small id="im">Hi, i'm James 🙋‍♂️</small>
      <h1 id="yourName">James</h1>  */}
      {/* <img id="homePic" className="card" src={profilePic} alt="profile picture" /> */}

{/* My name is James Garinger, I have just recently graduated from the full-stack
        coding bootcamp held by University of Texas, Austin. During my time in the bootcamp
        I have discovered a real passion for problem solving and the rewards of persistence. 
        In the last three months I have refined my skills in many different aspects of the Web Development ecosystem. Learning with 
        hands on projects building multiple applications and tools to make working with these languages efficient
        and relevant to the always changing environment we participate in.  */}