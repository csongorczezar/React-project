import React from 'react';
import '../App.css';

function MeditationGoal() {

	const goalTimes = ["15 MINS", "30 MINS", "45 MINS", "60 MINS", "90 MINS"];

  	const goalTimeButtons = goalTimes.map(period =>
   			<button className="longButton">{period}</button>
    );

  	return (
     	<div className="App">
      	<h1>{`What is your
       daily meditation
        goal?`}</h1>
      {goalTimeButtons}
     	</div>
  	);

}

export default MeditationGoal;