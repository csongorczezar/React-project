import React from 'react';
import '../CSS/global-styles.css';
import './MeditationTime.css';
import Dashboard from '../Dashboard/Dashboard'
import { NavLink } from 'react-router-dom';




class MeditationTime extends React.Component {

  constructor() {
    super()
    
    const timeQuestion = `How long
       would you like
        to meditate
        now?`;

    this.state = {
      meditationTime: timeQuestion,
      timeChoices: [15, 5]
    }
    
  }



    handleClick = (event) => {
      const {meditationTime, timeChoices } = this.state;
      // timeChoices.map(time =>
      //   this.setState({ meditationTime: time + ` MINS`} )
      // )   
      this.setState({meditationTime: 5 + ` MINS`})
    };

   
       
    

	
render() {

  const {meditationTime, timeChoices } = this.state;

  let meditationTimeClass = meditationTime.length < 7 ? 'largeFont': 0;

  let toggleButton = meditationTime.length < 7 ? 'showButton submitButton': 'hideButton submitButton';

  const meditationLengthSelector = timeChoices.map(time =>
      
      <div>
        <button className="roundButton" onClick={this.handleClick}>-</button>
        <p>{time} MINS</p>
        <button className="roundButton" onClick={this.handleClick}>+</button>
      </div>
    );

	return (
     	<div className="App">
      	<h1 id="meditationTime" className={meditationTimeClass}>{meditationTime}</h1>
        {meditationLengthSelector}
        <button className={toggleButton}><i class="fas fa-check"></i></button>
     	</div>
  	);
}

}


export default MeditationTime;