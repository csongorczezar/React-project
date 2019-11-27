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
	  		<Navigation/>
	  		<Switch>
	  			<Route path="/" component={MeditationTime} exact/>
	      		<Route path="/Dashboard" component={Dashboard}/>
	      	</Switch>	
	    </div>
    </BrowserRouter>
  );
}

export default App;
