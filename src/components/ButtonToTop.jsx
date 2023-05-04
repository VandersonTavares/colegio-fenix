import { useState, useEffect } from 'react';

import { BiArrowToTop } from "react-icons/bi"

function ButtonToTop() {
  const [isVisible, setIsVisible] = useState(false);
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <button className={`${isVisible ? 'block' : 'hidden'} bg-cyan-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded fixed right-10 bottom-20`} onClick={handleScrollToTop}><BiArrowToTop size={30}/></button>
  );
}

export default ButtonToTop