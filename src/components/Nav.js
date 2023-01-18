import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Nav.css"

export default function Nav() {

  const [show,setShow] = useState(false);

    useEffect(()=>{
      window.addEventListener("scroll",()=>{
        if(window.scrollY>50) {
          setShow(true);
        }else{
          setShow(false);
        }
      });
      return()=>{
        window.removeEventListener("scroll",()=>{});
      };
    },[]);

  const [searchValue,setsearchValue] = useState("");
  const navigate = useNavigate();
  
  const handleChange = (e)=>{
    setsearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show &&"nav__black"}`}>
      <img 
      alt="Netflix logo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/300px-Netflix_2015_logo.svg.png"
      className="nav__logo"
      onClick={() => (window.location.href = "/")}>
      </img>

      <input
      value={searchValue}
      onChange={handleChange}
      className='nav__input'
      type='text'
      placeholder="영화 검색"></input>

      <img
      alt="User logged"
      src="https://occ-0-993-3187.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
      className="nav__avatar">
      </img>
    </nav>
  );
}
