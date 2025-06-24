import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container container'>
            <h1 className='footer-title'> Mahesh</h1>
            <ul className='footer-list'>
                <li >
                    <a href='#about'
                    className='footer-link'>About</a>
                </li>
                <li >
                    <a href='#portfolio'
                    className='footer-link'>Projects</a>
                </li>
                <li  >
                    <a href='#testimonial'
                    className='footer-link'>Testimonials</a>
                </li>
            </ul>
            <div className='footer-social'>
                 <a href="https://www.facebook.com/profile.php?id=100029951168206  " className="footer-social-link" target="_blank" rel="noreferrer">
        <i className="bx bxl-facebook"></i>
      </a>
      <a href="https://www.instagram.com/mahesh_roy_mr/" className="footer-social-link" target="_blank" rel="noreferrer">
        <i className="bx bxl-instagram"></i>
      </a>
      <a href="https://x.com/MaheshRy3" className="footer-social-link" target="_blank" rel="noreferrer">
        <i className="bx bxl-twitter"></i>
      </a>
            </div>
            <span className='footer-copy'>&#169;crypticalcoder, All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
