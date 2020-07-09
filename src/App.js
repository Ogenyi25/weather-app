import React from 'react';
import './App.css';

const api = {
  key: "b7c82e170ef6e7c9b58117c56a6d8902",
  url: "https://weatherstack.com/dashboard?logged_in=1"
}

function App() {

  const dateBuilder = (d) => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


  return (
    <div className="app-warm">
      <div className="main">
        <div className="search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="search ...."
          />
        </div>
        <div className="location-box">
          <div className="location">Abuja, Nigeria</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
