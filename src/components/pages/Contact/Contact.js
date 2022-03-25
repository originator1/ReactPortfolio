import React from 'react';
import '../Contact/Contact.css'
import { Stack, Button, Card } from 'react-bootstrap';


function Contact() {
  

  return (
    <div className="contact">
      <main>
        
        <h4 id="portHeader" style={{textAlign: "start"}}>About Me</h4>
        <hr />
        <p></p>
        <p>
          Hi! My name is James Garinger and over the past year I have tried to understand everything about how the internet works and how systems interoperate through precise protocols and networks.
          In efforts to wrap my mind around the bigger picture from the physical layer to the application layer.
        </p >
        <br />
        <p>
          I find myself now in a place where processing speed and performance of applications makes sence. Why one would want
          a faster searching algorithm or a better way to sort their endless incoming stream of data. After learning all this, I have only came to realize how much more I still have to learn and the endless potential of paths that could be taken.
        </p>
        <br />
        <p>
          Now what I look most forward to is continuing my learning while working in a group environment, and collaborating with other individuals with similar interests and beginning my career in a field im passionate about.
        </p>
        <br />
          
        <p>
          Over the past 3 months I have attended a UT Austin full-stack web development bootcamp. Where I have been blessed to work and learn from a wide range of teachers and mentors,
          as well as an amazing cohort of bootcamp alumni. Teaching me the basics of HTML5/CSS, front-end UI frameworks, and styling fundamentals. Paired with a strong core development in JavaScript/MERN stack and OOP principles. 
        </p>
        
      </main>

      <section className="text-center">
        <Button href="https://github.com/originator1" target="_blank" style={{textAlign: "center"}}>Github</Button>
        <Button href="https://www.linkedin.com/in/james-garinger-22246421b/" target="_blank" style={{textAlign: "center"}}>LinkedIn</Button>
        <Button href="https://twitter.com" target="_blank" style={{textAlign: "center"}}>Twitter</Button>
        <Button href="mailto:jkggaringer@gmail.com" target="_blank" style={{textAlign: "center"}}>Email Me!</Button>
      </section>
    </div>
  );
}

export default Contact;
