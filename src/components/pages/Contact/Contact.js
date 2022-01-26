import React from 'react';
import '../Contact/Contact.css'
import { Stack, Button, Card } from 'react-bootstrap';


function Contact() {
  

  return (
    <div className="contact warning">
      <Button href="https://github.com/originator1" target="_blank" style={{textAlign: "center"}}>Github</Button>
      <Button href="https://www.linkedin.com/in/james-garinger-22246421b/" target="_blank" style={{textAlign: "center"}}>LinkedIn</Button>
      <Button href="https://twitter.com" target="_blank" style={{textAlign: "center"}}>Twitter</Button>
      <Button href="mailto:jkggaringer@gmail.com" target="_blank" style={{textAlign: "center"}}>Email Me!</Button>
    </div>
  );
}

export default Contact;
