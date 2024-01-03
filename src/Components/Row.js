import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios";
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"


const base_url="https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerurl, SetTrailerurl] = useState("")
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerurl) {
    SetTrailerurl("")
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          SetTrailerurl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
  }
}

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={()=>handleClick(movie)}
            className={`row__poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={ {padding:"40px"}}>
        {trailerurl && <YouTube videoId={trailerurl} opts={opts}/>}
      </div> 
    </div>
  );
}

export default Row;
