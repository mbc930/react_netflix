import axios from '../api/axios';
import React,{useEffect, useState} from 'react'
import './Row.css'
import MovieModal from './MovieModal';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Row({title, fetchUrl, isLargeRow, id}) {
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    fetchMovieData();
  },);
  
  const fetchMovieData = async () =>{
    const request = await axios.get(fetchUrl)
    setMovies(request.data.results);
  };

  const [modalOpen,setModalOpen]=useState(false);

  const [movieSelected, setMovieSelection] = useState({});

  const handleClick = (movie)=>{
    setModalOpen(true);
    setMovieSelection(movie)
  };

  return (
    <section className="row">
      {/**TITLE */}
      <h2>{title}</h2>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}

      navigation
      pagination={{ clickable: true }}
      loop = {true}
      breakpoints = {{
        1378:{
          slidesPerView:6, //한번에 보이는 슬라이드개
          slidesPerGroup:6,// 몇개씩 슬라이드 할지 결
        },
        998:{
          slidesPerView:7, //한번에 보이는 슬라이드개
          slidesPerGroup:7,// 몇개씩 슬라이드 할지 결
        },
        625:{
          slidesPerView:8, //한번에 보이는 슬라이드개
          slidesPerGroup:8,// 몇개씩 슬라이드 할지 결
        },
        0:{
          slidesPerView:9, //한번에 보이는 슬라이드개
          slidesPerGroup:9,// 몇개씩 슬라이드 할지 결
        },
      }}


    >
      {/* <div className="slider">
        <div className="slider__arrow-left">
          <span
          className="arrow"
          onClick={() => {
          document.getElementById(id).scrollLeft -= window.innerWidth/4;
          }}
          >
          {"<"}
          </span>
      </div> */}
      <div id = {id} className="row__posters">
        {/**SERVERAL ROW__POSTER */}
        {movies.map((movie)=>(
          <SwiperSlide>
            <img
              key={movie.id}
              onClick={()=>handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${'https://image.tmdb.org/t/p/original'}${isLargeRow? movie.poster_path: movie.backdrop_path}`}
              loading="lazy"
              alt={movie.name}
              ></img>
          </SwiperSlide>
        ))}
    </div>
      {/* <div className='slider__arrow-right'>
        <span
        className="arrow"
        onClick={() => {
        document.getElementById(id).scrollLeft += window.innerWidth/4;
        }}
        >
        {">"}
        </span>
      </div>

        </div> */}
      </Swiper>
        {
          modalOpen && (
            <MovieModal 
            {...movieSelected}
            setModalOpen={setModalOpen}></MovieModal>
          )
        }
      
    </section>
  )
}
