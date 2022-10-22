
import './App.css';
import React from "react";
import Requests from './requests.js';
import Axios from './axios.js';
import Row from './Row';
import requests from './requests.js';
import Banner from './Banner.js';
import Nav from './Nav.js';

function App() {
  return (
    <div className="App">
      <Nav />
     <Banner />
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}
      />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
