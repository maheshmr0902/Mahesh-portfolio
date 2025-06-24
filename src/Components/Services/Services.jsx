import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [toogleState, setToogleState] = useState(0);

  const toogleTab = (index) => {
    setToogleState(index);
  };

  return (
    <section className='services section' id='services'>
      <h2 className='section-title'>Services</h2>
      <span className='section-subtitle'>What I Offer</span>

      <div className='services-container container grid'>

        {/* Frontend Developer */}
        <div className='services-content'>
          <div>
            <i className='uil uil-web-grid services-icon'></i>
            <h3 className='services-title'>Frontend<br />Developer</h3>
          </div>
          <span className='services-button' onClick={() => toogleTab(1)}>
            View More<i className='uil uil-arrow-right services-button-icon'></i>
          </span>
          <div className={toogleState === 1 ? 'services-modal active-modal' : 'services-modal'}>
            <div className='services-modal-content'>
              <i onClick={() => toogleTab(0)} className='uil uil-times services-modal-close'></i>
              <h3 className='services-modal-title'>Frontend Development</h3>
              <p className='services-modal-description'>
                I build responsive, user-friendly interfaces using React.js, HTML5, CSS3, and modern JavaScript. My focus is on intuitive design, accessibility, and performance across devices.
              </p>
              <ul className='services-modal-services grid'>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p className='services-modal-info'>Responsive web design using React.js</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p className='services-modal-info'>Component-based UI architecture</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p className='services-modal-info'>HTML, CSS (Flexbox, Grid), Bootstrap</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p className='services-modal-info'>Interactive UI with clean animations</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Backend Developer */}
        <div className='services-content'>
          <div>
            <i className='uil uil-server-network services-icon'></i>
            <h3 className='services-title'>Backend<br />Developer</h3>
          </div>
          <span className='services-button' onClick={() => toogleTab(2)}>
            View More<i className='uil uil-arrow-right services-button-icon'></i>
          </span>
          <div className={toogleState === 2 ? 'services-modal active-modal' : 'services-modal'}>
            <div className='services-modal-content'>
              <i onClick={() => toogleTab(0)} className='uil uil-times services-modal-close'></i>
              <h3 className='services-modal-title'>Backend & API Development</h3>
              <p className='services-modal-description'>
                I develop robust and scalable server-side applications using Node.js and Express.js, and manage both SQL and NoSQL databases to ensure secure and efficient data handling.
              </p>
              <ul className='services-modal-services grid'>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p className='services-modal-info'>RESTful API development with Express.js</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p className='services-modal-info'>MongoDB and MySQL integration</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p className='services-modal-info'>User authentication using JWT</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p className='services-modal-info'>Middleware and routing logic</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Problem Solving */}
        <div className='services-content'>
          <div>
            <i className='uil uil-brain services-icon'></i>
            <h3 className='services-title'>Problem<br />Solving</h3>
          </div>
          <span className='services-button' onClick={() => toogleTab(3)}>
            View More<i className='uil uil-arrow-right services-button-icon'></i>
          </span>
          <div className={toogleState === 3 ? 'services-modal active-modal' : 'services-modal'}>
            <div className='services-modal-content'>
              <i onClick={() => toogleTab(0)} className='uil uil-times services-modal-close'></i>
              <h3 className='services-modal-title'>Problem Solving & Debugging</h3>
              <p className='services-modal-description'>
                I apply strong analytical thinking and coding skills to solve complex technical problems, debug efficiently, and optimize performance across the stack.
              </p>
              <ul className='services-modal-services grid'>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p className='services-modal-info'>Debugging JavaScript and Node.js errors</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p className='services-modal-info'>Fixing UI rendering and state bugs</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p className='services-modal-info'>Handling database query issues</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p className='services-modal-info'>Writing optimized, clean, maintainable code</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;


