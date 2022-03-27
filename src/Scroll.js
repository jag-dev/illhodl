import { useEffect, useState } from "react";
import './css/Scroll.css';

function Scroll() {
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  
  return (
    <button id="scroll" onClick={scrollToTop}>&#x21e7;</button>
  );
}

export default Scroll;