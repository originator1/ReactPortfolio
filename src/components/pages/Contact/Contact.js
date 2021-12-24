import React from 'react';
import '../Contact/Contact.css'
import { Stack, Button, Card } from 'react-bootstrap';


function Contact() {
  

  return (
    <div className="contact warning">
      <Button className="lard">Github</Button>
      <Button>LinkedIn</Button>
      <Button>Twitter</Button>
      <Button>Email Me!</Button>
    </div>
  );
}

export default Contact;
