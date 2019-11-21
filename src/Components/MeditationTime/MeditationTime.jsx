import React from 'react';
import '../App.css';



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
      <i className="fas fa-arrow-left"></i>
      <i className="fas fa-times"></i>
      	<h1>{`How long
       would you like
        to meditate
        now?`}</h1>
        {meditationLengthSelector}
     	</div>
  	);

}


export default MeditationTime;