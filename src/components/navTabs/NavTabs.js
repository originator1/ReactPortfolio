import React from 'react';

import { Navbar, Container } from 'react-bootstrap'
import "./NavTabs.css";
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {

   function handleNavToggle(e) {
      
      let myNav = window.document.getElementById('navv')
      console.log(myNav.style)
      if (myNav.style.display == "") {
         console.log(myNav)
         return myNav.style.display="none"
         
         
      } else {
          return myNav.style.display=""
         

      }
   }


  return (
    
    
     <Navbar expand="sm" className="mainNav">
        <a href="#home" onClick={(e) => handleNavToggle(e)} class="pull-left iconBtn"><img src="./apple-touch-icon.png" style={{height: "7vh"}} /></a> 
        <div className="linkBox" id="navv">
         
           <Navbar.Brand
              href="#home"
              style={{ fontStyle: "italic" }}
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</Navbar.Brand>

           <Navbar.Brand
              href="#Portfolio"
              style={{ fontStyle: "italic" }}
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Work</Navbar.Brand>

           <Navbar.Brand
              href="#contact"
              style={{ fontStyle: "italic" }}
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>About</Navbar.Brand>

        </div>
        
     </Navbar>
    
  );

}






export default NavTabs;
