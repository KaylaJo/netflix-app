import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
//https://api.themoviedb.org/3/movie/550?api_key=4bb02057b03105e016159ce427638d9e
//api_key =4bb02057b03105e016159ce427638d9e

function App() {
  return (
    <div className="App">
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflix} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
