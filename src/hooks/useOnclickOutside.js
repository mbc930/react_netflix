import React, { useEffect } from 'react'

export default function useOnclickOutside(ref, handler) {
  useEffect(() => {
    const listner = (event) =>{
      if(!ref.current||ref.current.contains(event.target)){
        return;
      }
      handler();
    };
    document.addEventListener("mousedown",listner);
    document.addEventListener("touchstart",listner);
    return () =>{
      document.removeEventListener("mousedown",listner);
      document.removeEventListener("touchstart",listner);
    };
  },[ref, handler]);
};