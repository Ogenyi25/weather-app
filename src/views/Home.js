import React, { useState } from 'react';

const api = {
  key: "cdd4fcfe35cc4dae33762c62765ddcf5",
  base: "https://api.openweathermap.org/data/2.5/"
}
console.log(api.key)

const Home =()=> {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  {/*- Function to handle the search-*/ }
  const search = e => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

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
    <div>
    <div className={(typeof weather.main != "undefined")
     ? ((weather.main.temp < 16)
      ? 'app-cold' 
      : 'app-warm')
    : 'app-default'}>
      <div className="main">
        <div className="welcome-note">
          <div className="title">WEATHER CHECKER APP</div>
          <div className="notes">
            Enter a location name to get weather details.
          </div>
        </div>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter city name"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temperature">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather">
                {weather.weather[0].main}
              </div>
            </div>
          </div>
        ) : ('')}
      </div>
    </div>
    </div>
  );
}

export default Home;
