import React from 'react';
import './App.css';
import Main from './main.js';

function App() {
  return (
     <div className="App">
      <h1>What is your</h1>
      <h1>daily meditation</h1>
      <h1>goal?</h1>
      <Main info = "15 MINS"/>
      <Main info = "30 MINS"/>
      <Main info = "45 MINS"/>
      <Main info = "60 MINS"/>
      <Main info = "90 MINS"/>
     </div>
  );
}

export default App;
