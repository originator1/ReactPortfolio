import React from 'react';
import "../Home/AboutMe.css";
import profilePic from "./profilepic.jpeg"

export default function Home() {
  return (
    //main container
    <div className="aboutMeContainer">
      {/* name */}
      <h1 id="im">Full-Stack Developer</h1>
      {/* 3 point bullet intro */}
      <ul id="aboutMe">
        <li>Hi,</li>
        <li>I'm <span id="nameTarget">James</span></li>
        <li id="fsline"><span>Specialize in MERN stack</span></li>
      </ul>
      {/* image circle */}
      <div className="image" />
    </div>
  );
}

// https://news.disney.com/pixar-video-backgrounds-available


{/* <small id="im">Hi, i'm James 🙋‍♂️</small>
      <h1 id="yourName">James</h1>  */}
      {/* <img id="homePic" className="card" src={profilePic} alt="profile picture" /> */}

{/* My name is James Garinger, I have just recently graduated from the full-stack
        coding bootcamp held by University of Texas, Austin. During my time in the bootcamp
        I have discovered a real passion for problem solving and the rewards of persistence. 
        In the last three months I have refined my skills in many different aspects of the Web Development ecosystem. Learning with 
        hands on projects building multiple applications and tools to make working with these languages efficient
        and relevant to the always changing environment we participate in.  */}