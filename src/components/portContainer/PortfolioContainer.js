import React, { useState } from 'react';
import NavTabs from '../navTabs/NavTabs';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import Resume from '../pages/Resume/Resume';
import Portfolio from '../pages/Portfolio/Portfolio';
import Footer from '../footer/Footer'
import "../../images/reset.css"
import "./portfolioContainer.css"

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  console.log("base", currentPage);
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
      console.log(currentPage);
    }
    if (currentPage === 'Contact') {
      console.log("inside contact", currentPage);
      return <Contact />;
      
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="mainBackground">
        {/*passing the currentPage from state and the function to update it */}
      <div className="topBox">
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/*calling the renderPage method which will return a component  */} 
        {renderPage()}
      </div>    
      
      <Footer />
    </div>
  );
}
