import React from 'react';
import './App.css';

function App() {
  const goalTimes = ["15 MINS", "30 MINS", "45 MINS", "60 MINS", "90 MINS"];

  const goalTimesButton = goalTimes.map(period =>
   <button>{period}</button>
    );

  return (
     <div className="App">
      <h1>{`What is your
       daily meditation
        goal?`}</h1>
      {goalTimesButton}
     </div>
  );
}

export default App;
