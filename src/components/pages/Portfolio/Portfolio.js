import React from 'react';
import woImage from '../Portfolio/leverageWo.jpg'
import expenseTrackerImg from '../Portfolio/ExpenseTracker.jpg'
import fitnessTrack from '../Portfolio/fitnessTracker.jpg'
import jester from '../Portfolio/jesterImg.jpg'
import sips from '../Portfolio/sips2.jpg'
import "../Portfolio/Portfolio.css"



export default function Portfolio() {

  return (
    <div className="portContainer"> 
    
      <div className="portfolioPage" style={{fontFamily: "'Fjalla One', sans-serif", backgroundColor: "#beb5af"}}>
        <h5>Below are a few projects I started over the past 3 months while attending UTA coding bootcamp:</h5>
        <em>🔘Click image to view deployed application.</em>
        <em>🔘Click Github link to view repository.</em>
      </div>
      <div className="projectLinks">  
       
        <div className="eachProject">
          <h4 style={{ textAlign: "center", color: "rgb(14, 71, 80)", fontWeight: "800"}}>Little Sips Coffee</h4>
          <h5 style={{ textAlign: "center", textDecoration: "none", color: "white" }}>Firebase User Auth Template / React </h5>
          <a href="https://userauth-development-9ea7a.web.app/" target="_blank">
            <img className="projectImg" src={sips} alt="Little Sips Coffee"></img>
          </a>
          <a href="https://github.com/originator1/firebase-react-userAuth/tree/main/firebase-userauth-routing" target="_blank" className="projectCaption">Github Link</a>
        </div>
        
        <div className="eachProject">
          <h4 style={{ textAlign: "center", color: "rgb(14, 71, 80)", fontWeight: "800"}}>Leverage</h4>
          <h5 style={{ textAlign: "center", textDecoration: "none", color: "white" }}>MySQL / Handlebars / Bcrypt</h5>
          <a href="https://leveragewo.herokuapp.com/" target="_blank">
            <img className="projectImg" src={woImage} alt="Workour Application"></img>
          </a>
          <a href="https://github.com/originator1/Leverage" target="_blank" className="projectCaption">Github Link</a>
        </div>

        <div className="eachProject">
          <h4 style={{ textAlign: "center", color: "rgb(14, 71, 80)", fontWeight: "800"}}>Jester</h4>
          <h5 style={{ textAlign: "center", textDecoration: "none", color: "white" }}>MongoDB / GraphQL / JWT </h5>
          <a href="https://jesterapp.herokuapp.com" target="_blank">
            <img className="projectImg" src={jester} alt="Jester App"></img>
          </a>
          <a href="https://github.com/originator1/jester" target="_blank" className="projectCaption">Github Link</a> 
        </div>

        <div className="eachProject">
          <h4 style={{ textAlign: "center", color: "rgb(14, 71, 80)", fontWeight: "800"}}>Expense Tracker</h4>
          <h5 style={{ textAlign: "center", textDecoration: "none", color: "white" }}>IndexedDB / Service Workers</h5>
          <a href="https://afternoon-peak-77835.herokuapp.com/" target="_blank">
            <img className="projectImg" src={expenseTrackerImg} alt="Expense Tracker Application"></img>
          </a>
          <a href="https://github.com/originator1/ExpenseTracker" target="_blank" className="projectCaption">Github Link</a> 
        </div>

        <div className="eachProject">
          <h4 style={{ textAlign: "center", color: "rgb(14, 71, 80)", fontWeight: "800"}}>Workout Tracker</h4>
          <h5 style={{ textAlign: "center", textDecoration: "none", color: "white" }}>MongoDB / Mongoose / Express.js</h5>
          <a href="https://shielded-crag-20600.herokuapp.com/" target="_blank">
            <img className="projectImg" src={fitnessTrack} alt="Fitness Tracker Application"></img>
          </a>
          <a href="https://github.com/originator1/TrackMyWorkout" target="_blank" className="projectCaption">Github Link</a> 
        </div>
      </div>
    </div>
  );
}
