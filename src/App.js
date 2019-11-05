import React from 'react';
import './App.css';

function App() {
  let times = ["15 MINS", "30 MINS", "45 MINS", "60 MINS", "90 MINS"];

  const peopleLis = times.map(period =>
   <button>{period}</button>
    );

  return (
     <div className="App">
      <h1>{`What is your
       daily meditation
        goal?`}</h1>
      {peopleLis}
     </div>
  );
}

export default App;
