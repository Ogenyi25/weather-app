import React, { useState } from 'react';
import Home from './views/Home';


function App() {

  

  return (
    <div className=" row welcome-page container-fluid">
      <div className="left-pane col-md-4">
        <div className="title">WEATHER CHECKER APP</div>
        <div className="notes">
          Enter a location name to get weather details.
        </div>
      </div>
      <div className="right-pane col-md-8">
        <Home className="home" />
      </div>
    </div>
  );
}

export default App;
