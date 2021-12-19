import React from 'react';
import "../Home/AboutMe.css";
import profilePic from "./profilepic.jpeg"

export default function Home() {
  return (
    <div className="aboutMeContainer">
      <span id="emoji" className="col">🙋‍♂️</span>
      <small id="im">I'm</small>
      <h1 id="yourName">James</h1> 
      {/* <img id="homePic" className="card" src={profilePic} alt="profile picture" /> */}
      <div className="myPic">Image Here</div>
      <ul id="aboutMe">
        <li>👉 Full Stack Web Developer</li>
        <li>👉 Specialize in MERN stack</li>
        <li>👉 UT Austin Coding Bootcamp Graduate</li>
        <hr />
        {/* My name is James Garinger, I have just recently graduated from the full-stack
        coding bootcamp held by University of Texas, Austin. During my time in the bootcamp
        I have discovered a real passion for problem solving and the rewards of persistence. 
        In the last three months I have refined my skills in many different aspects of the Web Development ecosystem. Learning with 
        hands on projects building multiple applications and tools to make working with these languages efficient
        and relevant to the always changing environment we participate in.  */}
      </ul>
    </div>
  );
}

// https://news.disney.com/pixar-video-backgrounds-available
