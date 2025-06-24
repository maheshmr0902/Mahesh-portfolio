import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY >= 80) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav-container container">
        <a href="#home" className="nav-logo">
          Mahesh
        </a>

        <div className={toggle ? 'nav-menu show-menu' : 'nav-menu'}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => setActiveNav('#home')}
                className={`nav-link ${activeNav === '#home' ? 'active-link' : ''}`}
              >
                <i className="uil uil-estate nav-icon"></i> Home
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={`nav-link ${activeNav === '#about' ? 'active-link' : ''}`}
              >
                <i className="uil uil-user nav-icon"></i> About
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#skills"
                onClick={() => setActiveNav('#skills')}
                className={`nav-link ${activeNav === '#skills' ? 'active-link' : ''}`}
              >
                <i className="uil uil-file-alt nav-icon"></i> Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#services"
                onClick={() => setActiveNav('#services')}
                className={`nav-link ${activeNav === '#services' ? 'active-link' : ''}`}
              >
                <i className="uil uil-briefcase-alt nav-icon"></i> Services
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav('#portfolio')}
                className={`nav-link ${activeNav === '#portfolio' ? 'active-link' : ''}`}
              >
                <i className="uil uil-scenery nav-icon"></i> Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={`nav-link ${activeNav === '#contact' ? 'active-link' : ''}`}
              >
                <i className="uil uil-message nav-icon"></i> Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav-close" onClick={() => setToggle(false)}></i>
        </div>

        <div className="nav-toggle" onClick={() => setToggle(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;


