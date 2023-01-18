import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from '../../api/axios';
import useDebounce from '../../hooks/useDebounce';
import './Searchpage.css';

function SearchPage() {
  const navigate = useNavigate();

  const useQuery = ()=>{
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  //const searchTerm = query.get("q");
  const debounceSearchTerm = useDebounce(query.get("q"),500)
  
  const [searchResults,setsearchResults]=useState([]);

  useEffect(()=>{
    if(debounceSearchTerm){
      fetchSearchMovie(debounceSearchTerm);
    }
  },[debounceSearchTerm]);

  const fetchSearchMovie = async(debounceSearchTerm) =>{
    try{
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${debounceSearchTerm}`
      );
      setsearchResults(request.data.results);
      console.log(request)
    } catch(error){
      console.log("error",error);
    }
  };

  const renderSearchResults = ()=>{
    return searchResults.length > 0 ? (
      <section className="search-cotainer">
        {searchResults.map((movie) => {
          if(movie.backdrop_path !==null && movie.media_type !== "person"){
            const movieImageUrl = 
            "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div className="movie__column-poster"
                    onClick={()=>navigate(`/${movie.id}`)}>
                  <img src={movieImageUrl} alt = "movie" 
                  className="movie__poster"></img>
                </div>
              </div>
            );  
          }
        })}
      </section>
    ) : (
        <section className="no-results">
          <div className="no-results__text">
            <p>검색한 "{debounceSearchTerm}" 에 해당되는 영화가 없습니다.</p>
            <p>Suggestions:</p>
            <ul>
              <li>다른 키워드를 입력해주십시오.</li>
            </ul>
          </div>
        </section>
        );

  };

  return renderSearchResults();
}

export default SearchPage