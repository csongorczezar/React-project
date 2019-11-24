import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MeditationGoal from './Components/MeditationGoal/MeditationGoal';
import MeditationTime from './Components/MeditationTime/MeditationTime';
import Dashboard from './Components/Dashboard/Dashboard';
import Navigation from './Components/Navigation/Navigation';



function App() {
  

  return (
  	<BrowserRouter>
	  	<div>
	  		<Switch>
	      		<Route path="/Dashboard" component={Dashboard}/>
	      	</Switch>
	  	 	<Navigation/>
	     	<MeditationTime/>
	    </div>
    </BrowserRouter>
  );
}

export default App;
