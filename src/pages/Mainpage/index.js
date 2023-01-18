import React from 'react'
import Banner from '../../components/Banner'
import Row from '../../components/Row';
import requests from '../../api/request';

function MainPage() {
  return (
    <div>
      <Banner></Banner>
      <Row
        title = "NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow></Row>
      <Row title="Trending Now" id = "TN"
      fetchUrl={requests.fetchTrending}></Row>
      <Row title="Trending Rated" id = "TR"
      fetchUrl={requests.fetchTopRated}
      isLargeRow></Row>
      <Row title="Action Movies" id = "AM"
      fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" id = "CM"
      fetchUrl={requests.fetchComedyMovies}
      isLargeRow></Row>

    </div>
  );
}

export default MainPage