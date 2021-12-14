import React from 'react';
import woImage from '../Portfolio/leverageWo.jpg'
import WfImage from '../Portfolio/WFtracker.jpg'
import expenseTrackerImg from '../Portfolio/ExpenseTracker.jpg'
import fitnessTrack from '../Portfolio/fitnessTracker.jpg'
import jester from '../Portfolio/jesterImg.jpg'
import "../Portfolio/Portfolio.css"



export default function Portfolio() {

  return (
    <div className="portContainer"> 
      <div className="portfolioPage text-center">
        <br/>
        <br/>
        <h1>Portfolio Page</h1>
        <p>This page shows many different projects I have created over the past three months attending UT Austin's Coding Bootcamp. These projects showcase a collection of different technologies I have learned.</p>
      </div>
      <div className="projectLinks container">  
        <a className="row-1 lrg" href="https://leveragewo.herokuapp.com/">
          <img className="projectImg" src={woImage} alt="Leverage Workout Application Homepage"></img>
          <caption className="projectCaption">Leverage</caption>
        </a>
        
        <a href="https://chuck2076.github.io/Weather_Wildfire_App/">
          <img className="projectImg row-2" src={WfImage} alt="Weather And Fire Application"></img>
          <caption className="projectCaption">Weather&Wildfire</caption>
        </a>

        <a href="https://github.com/originator1/ExpenseTracker">
          <img className="projectImg row-3" src={expenseTrackerImg} alt="Expense Tracker Application"></img>
          <caption className="projectCaption">ExpenseTracker</caption>
        </a>

        <a href="https://github.com/originator1/TrackMyWorkout">
          <img className="projectImg row-3" src={fitnessTrack} alt="Fitness Tracker Application"></img>
          <caption className="projectCaption">FitnessTracker</caption>
        </a>

        <a href="https://github.com/originator1/jester">
          <img className="projectImg row-3" src={jester} alt="Jester App"></img>
          <caption className="projectCaption">Jester</caption>
        </a>
      </div>
    </div>
  );
}
