import React from 'react';
import './Components/App.css';



function MeditationTime() {

	const timeChoices = ["5 MINS", "15 MINS"];
	const pickYourTimes = timeChoices.map(time =>
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
        {pickYourTimes}
     	</div>
  	);

}


export default MeditationTime;