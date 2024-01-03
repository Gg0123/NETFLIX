import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../request";

const base_url = "https://image.tmdb.org/t/p/original/"

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.netflixOriginals);
      // console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  // console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        // backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1>{movie?.title || movie?.name || movie?.origional_name}</h1>
        <div className=" banner_buttons">
          <button className=" banner_button">Play</button>
          <button className=" banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview,150)} </h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
