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
      timeChoices: ["5 MINS", "15 MINS"],
      time: "0 MINS"
    }
  }



    handleClick = () => {
      this.state.timeChoices.map(time =>
        
        this.setState({ meditationQuestion: time })
      )
      
      
      
      
    };

	
render() {

  const meditationLengthSelector = this.state.timeChoices.map(time =>
      
      <div>
        <button className="roundButton" onClick = {this.handleClick}>-</button>
        <span>{time}</span>
        <button className="roundButton" onClick = {this.handleClick}>+</button>
      </div>
    );

	return (
     	<div className="App">
      	<h1>{this.state.meditationQuestion}</h1>
        {meditationLengthSelector}
     	</div>
  	);
}

}


export default MeditationTime;