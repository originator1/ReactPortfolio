import React, { useState } from 'react';
import NavTabs from '../navTabs/NavTabs';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import Portfolio from '../pages/Portfolio/Portfolio';
import Footer from '../footer/Footer'

import { Container } from 'react-bootstrap'
import "./reset.css"
import "./portfolioContainer.css"

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  // console.log("base", currentPage);
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
     
    }
    if (currentPage === 'Contact') {
      // console.log("inside contact", currentPage);
      return <Contact />;
      
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Container style={{maxWidth: "100%"}} className="mainBackground">
        {/*passing the currentPage from state and the function to update it */}
      <div className="topBox">
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        
      </div>    
      <Footer />
      
    </Container>
  );
}

