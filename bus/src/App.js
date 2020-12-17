import React from 'react'
import Time from './Time';
import Map from './Map'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Miami Dade Bus Real Time Locations</h1>
      <Time />
      <Map />
    </div>
  );
}

export default App;
