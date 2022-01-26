import React from 'react';
import woImage from '../Portfolio/leverageWo.jpg'
import WfImage from '../Portfolio/WFtracker.jpg'
import expenseTrackerImg from '../Portfolio/ExpenseTracker.jpg'
import fitnessTrack from '../Portfolio/fitnessTracker.jpg'
import jester from '../Portfolio/jesterImg.jpg'
import "../../../images/reset.css"
import "../Portfolio/Portfolio.css"



export default function Portfolio() {

  return (
    <div className="portContainer container"> 
      <div className="portfolioPage text-center" style={{fontFamily: "'Fjalla One', sans-serif"}}>
        <br/>
        <br/>
        <h1 id="portHeader">Portfolio Page</h1>
        <p className="portfolioText">∘  Below are a few projects I started over the past 3 months while attending UTA  coding bootcamp</p>
        <p className="portfolioText">∘  Each project displayed has a link to respected Github repo with deployed app link in README. </p>
      </div>
      <div className="projectLinks">  
        <a href="https://leveragewo.herokuapp.com/">
          <img className="projectImg" src={woImage} alt="Leverage Workout Application Homepage"></img>
          <caption className="projectCaption">Leverage</caption>
        </a>
        
        <a href="https://chuck2076.github.io/Weather_Wildfire_App/">
          <img className="projectImg" src={WfImage} alt="Weather And Fire Application"></img>
          <caption className="projectCaption">Weather&Wildfire</caption>
        </a>

        <a href="https://github.com/originator1/ExpenseTracker">
          <img className="projectImg" src={expenseTrackerImg} alt="Expense Tracker Application"></img>
          <caption className="projectCaption">ExpenseTracker</caption>
        </a>

        <a href="https://github.com/originator1/TrackMyWorkout">
          <img className="projectImg" src={fitnessTrack} alt="Fitness Tracker Application"></img>
          <caption className="projectCaption">FitnessTracker</caption>
        </a>

        <a href="https://github.com/originator1/jester">
          <img className="projectImg" src={jester} alt="Jester App"></img>
          <caption className="projectCaption">Jester</caption>
        </a>
      </div>
    </div>
  );
}
