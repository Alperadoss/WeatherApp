import React, { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import "./App.css";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
