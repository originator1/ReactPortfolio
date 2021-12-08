import React from 'react';
import woImage from '../../../src/leverageWo.jpg'
import WfImage from '../../../src/WFtracker.jpg'
import expenseTrackerImg from '../../../src/expenseTrackerImg.jpg'
import "../../styles/Portfolio.css"



export default function Portfolio() {

  return (
    <div className="portfolioPage">
      <h1>Portfolio Page</h1>
      <p>These are some projects I created with my groups while attending UT austin bootcamp</p>
      
      <a href="https://leveragewo.herokuapp.com/">
        <img src={woImage} alt="LeverageWo Application Homepage"></img>
      </a>
      
      <a href="https://chuck2076.github.io/Weather_Wildfire_App/">
        <img src={WfImage} alt="Weather And Fire Tracker Application"></img>
      </a>

      <a href="https://github.com/originator1/ExpenseTracker">
        <img src={expenseTrackerImg} alt="Weather And Fire Tracker Application"></img>
      </a>
      
    </div>
  );
}
