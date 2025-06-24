import React from 'react'

const Backend = () => {
  return (
    <div className='skills-content'>
      <h3 className='skills-title'>Backend Developer</h3>
      <div className='skills-box'>

        {/* Group 1 */}
        <div className='skills-group'>
          <div className='skills-data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills-name'>Node.js</h3>
              <span className='skills-level'>Intermediate</span>
            </div>
          </div>

          <div className='skills-data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills-name'>Express.js</h3>
              <span className='skills-level'>Intermediate</span>
            </div>
          </div>

          <div className='skills-data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills-name'>Java</h3>
              <span className='skills-level'>Basic</span>
            </div>
          </div>
          </div>

          

        {/* Group 2 */}
        <div className='skills-group'>
          <div className='skills-data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills-name'>MongoDB</h3>
              <span className='skills-level'>Intermediate</span>
            </div>
          </div>
        
          <div className='skills-data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills-name'>MySQL</h3>
              <span className='skills-level'>Intermediate</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Backend

