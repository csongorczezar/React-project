import React from 'react';
import '../CSS/global-styles.css';
import './MeditationTime.css';
import Dashboard from '../Dashboard/Dashboard'
import { NavLink } from 'react-router-dom';




class MeditationTime extends React.Component {

  constructor() {
    super()
    this.state = {
      meditationQuestion: `How long
       would you like
        to meditate
        now?`,
      timeChoices: [15, 5],
      time: "0 MINS"
    }

    this.handleClick = this.handleClick.bind(this);
    
  }



    handleClick = (event) => {
      this.state.timeChoices.map(time =>
        this.setState({ meditationQuestion: time + ` MINS`} )
      )   
    };

   
       
    

	
render() {

  var className = this.state.meditationQuestion.length < 10 ? 'largeFont': 0;

  const meditationLengthSelector = this.state.timeChoices.map(time =>
      
      <div>
        <button className="roundButton" onClick = {this.handleClick}>-</button>
        <span>{time + ` MINS`}</span>
        <button className="roundButton" onClick = {this.handleClick}>+</button>
      </div>
    );

	return (
     	<div className="App">
      	<h1 id = "meditationQuestion" className = {className} >{this.state.meditationQuestion}</h1>
        {meditationLengthSelector}
     	</div>
  	);
}

}


export default MeditationTime;