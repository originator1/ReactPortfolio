import React from 'react';
import "./NavTabs.css";
import { Navbar, Container } from 'react-bootstrap'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    
    
      <Navbar expand="lg" variant="light" bg="none">
         <Container  style={{justifyContent: 'space-around'}} className="linkBox">
            <h1 href="#home"  onClick={() => handlePageChange('Home')} id="navName">James Garinger</h1>
            <Navbar.Brand 
            href="#home"
            style={{color: "white", fontWeight: "bold", fontStyle: "italic"}}
            onClick={() => handlePageChange('Home')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</Navbar.Brand>
            
           <Navbar.Brand  
            href="#Portfolio"
            style={{color: "white", fontWeight: "bold", fontStyle: "italic"}}
            onClick={() => handlePageChange('Portfolio')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Work</Navbar.Brand>
           
           <Navbar.Brand 
            href="#contact"
            style={{color: "white", fontWeight: "bold", fontStyle: "italic"}}
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Navbar.Brand>
         </Container>
      </Navbar>
    
  );

}






export default NavTabs;
