import React, { useState } from 'react';
import './Qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className='qualification section' id='qualification'>
      <h2 className='section-title'>Qualification</h2>
      <span className='section-subtitle'>My Personal Journey</span>

      <div className='qualification-container container'>
        <div className='qualification-tabs'>
          <div
            className={
              toggleState === 1
                ? 'qualification-button qualification-active button--flex'
                : 'qualification-button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className='uil uil-graduation-cap qualification-icon'></i>{' '}Education
          </div>
          <div
            className={
              toggleState === 2
                ? 'qualification-button qualification-active button--flex'
                : 'qualification-button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className='uil uil-briefcase-alt qualification-icon'></i>{' '}Experience
          </div>
        </div>

        <div className='qualification-sections'>
          <div className={toggleState === 1 ? 'qualification-content qualification-content-active' : 'qualification-content'}>
            <div className='qualification-data'>
              <div>
                <h3 className='qualification-title'>MCA</h3>
                <span className='qualification-subtitle'>Godavari Institute of Engineering & Technology</span>
                <div className='qualification-calendar'>
                  <i className='uil uil-calendar-alt'></i> 2022 – 2024
                </div>
              </div>
              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>
            </div>

            <div className='qualification-data'>
              <div></div>
              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>
              <div>
                <h3 className='qualification-title'>B.Sc (MPCs)</h3>
                <span className='qualification-subtitle'>Elite Degree College</span>
                <div className='qualification-calendar'>
                  <i className='uil uil-calendar-alt'></i> 2019 – 2022
                </div>
              </div>
            </div>

            <div className='qualification-data'>
              <div>
                <h3 className='qualification-title'>Intermediate</h3>
                <span className='qualification-subtitle'>Elite Junior College</span>
                <div className='qualification-calendar'>
                  <i className='uil uil-calendar-alt'></i> 2017 – 2019
                </div>
              </div>
              <div>
                <span className='qualification-rounder'></span>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 ? 'qualification-content qualification-content-active' : 'qualification-content'}>
            <div className='qualification-data'>
              <div>
                <h3 className='qualification-title'>Developer Simulation</h3>
                <span className='qualification-subtitle'>Accenture Forage Program (Virtual)</span>
                <div className='qualification-calendar'>
                  <i className='uil uil-calendar-alt'></i> June 2023
                </div>
              </div>
              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>
            </div>

            <div className='qualification-data'>
              <div></div>
              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>
              <div>
                <h3 className='qualification-title'>E-Crime File Management System</h3>
                <span className='qualification-subtitle'>MERN Stack Project (Team)</span>
                <div className='qualification-calendar'>
                  <i className='uil uil-calendar-alt'></i> Jan 2022 – Aug 2022
                </div>
              </div>
            </div>

            <div className='qualification-data'>
              <div>
                <h3 className='qualification-title'>Privacy Assurance Guardian</h3>
                <span className='qualification-subtitle'>Solo Project | Cloud + PHP + JS</span>
                <div className='qualification-calendar'>
                  <i className='uil uil-calendar-alt'></i> Dec 2023 – Sep 2024 (Ongoing)
                </div>
              </div>
              <div>
                <span className='qualification-rounder'></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Qualification;



