import React from 'react';
import '../App.css';
import Dashboard from '../Dashboard/Dashboard'
import { NavLink } from 'react-router-dom';




function MeditationTime() {

	const timeChoices = ["5 MINS", "15 MINS"];
	const meditationLengthSelector = timeChoices.map(time =>
   		<div>
   			<button className="roundButton">-</button>
   			{time}
   			<button className="roundButton">+</button>
   		</div>
    );

	return (
     	<div className="App">
      
      	<h1>{`How long
       would you like
        to meditate
        now?`}</h1>
        {meditationLengthSelector}
     	</div>
  	);

}


export default MeditationTime;