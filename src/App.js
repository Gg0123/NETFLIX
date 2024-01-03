import React, { useState } from "react";
import "./App.css";
import Row from "./Components/Row";
import requests from "./request";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <Banner />
      <Nav/>
      <Row
        title="Netflix Original"
        fetchUrl={requests.netflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.trending} />
      <Row title="Top Rated Videos" fetchUrl={requests.topRatedVideos} />
      <Row title="Action Movies" fetchUrl={requests.actionMovies} />
      <Row title="Comedy Videos" fetchUrl={requests.comedyMovies} />
      <Row title="Horror Videos" fetchUrl={requests.horrorMovies} />
      <Row title="Romance Videos" fetchUrl={requests.romanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.documentaries} />
    </>
  );
}

export default App;
