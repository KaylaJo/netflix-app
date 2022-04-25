import React from "react";

const api_key = "4bb02057b03105e016159ce427638d9e";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchTopRated: `/movies/top_rated?api_key=${api_key}&language=en-US`,
  fetchActionMovies: `/discover/movies?api_key=${api_key}&with_genre=28`,
  fetchComedyMovies: `/discover/movies?api_key=${api_key}&with_genre=35`,
  fetchHorrorMovies: `/discover/movies?api_key=${api_key}&with_genre=27`,
  fetchRomanceMovies: `/discover/movies?api_key=${api_key}&with_genre=10749`,
  fetchDocumentaries: `/discover/movies?api_key=${api_key}&with_genre=99`,
};

export default requests;
