import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original";

function Rows({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl]=useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts ={
    height="390",
    width="100%",
    playerVars:{
      //https://developers.google.com/youtube/player_parameters
      autoplay:1,
    },
  };
  const handleClick =

  return (
    <div className="Rows">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={()=> handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoID={tailerUrl} opt={opts}/>}
    </div>
  );
}

export default Rows;
