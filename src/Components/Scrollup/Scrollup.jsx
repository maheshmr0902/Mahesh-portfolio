import React, { useEffect } from 'react';
import './Scrollup.css';

const Scrollup = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector('.scrollup');
      if (window.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
      } else {
        scrollUp.classList.remove('show-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a href='#' className='scrollup' id='scrollup'>
      <i className='uil uil-arrow-up scrollup-icon'></i>
    </a>
  );
};

export default Scrollup;

