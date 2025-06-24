import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tj3ydz9', 'template_w4y76qo', form.current, {
        publicKey: 'ggm4j-CLchF3pDFXQ',
      })
      e.target.reset()
    };

  return (
    <section className='contact section' id='contact'>
      <h2 className='section-title'>Get in Touch</h2>
      <span className='section-subtitle'>Contact Me</span>

      <div className='contact-container container grid'>
        {/* Contact Cards */}
        <div className='contact-content'>
          <h3 className='contact-title'>Talk to Me</h3>
          <div className='contact-info'>

            <div className='contact-card'>
              <i className='bx bx-mail-send contact-card-icon'></i>
              <h3 className='contact-card-title'>Email</h3>
              <span className='contact-card-data'>maheshmr0902@gmail.com</span>
              <a href='mailto:maheshmr0902@gmail.com' className='contact-button'>
                Write me <i className='bx bx-right-arrow-alt contact-button-icon'></i>
              </a>
            </div>

            <div className='contact-card'>
              <i className='bx bxl-whatsapp contact-card-icon'></i>
              <h3 className='contact-card-title'>WhatsApp</h3>
              <span className='contact-card-data'>+91 9640417611</span>
              <a
                href='https://api.whatsapp.com/send?phone=919640417611&text=Hello, I want more information!'
                className='contact-button'
                target='_blank'
                rel='noreferrer'
              >
                Write me <i className='bx bx-right-arrow-alt contact-button-icon'></i>
              </a>
            </div>

            <div className='contact-card'>
              <i className='bx bxl-linkedin contact-card-icon'></i>
              <h3 className='contact-card-title'>LinkedIn</h3>
              <span className='contact-card-data'>mahesh-nunnaboyina-mr</span>
              <a
                href='https://www.linkedin.com/in/mahesh-nunnaboyina-mr/'
                className='contact-button'
                target='_blank'
                rel='noreferrer'
              >
                Write me <i className='bx bx-right-arrow-alt contact-button-icon'></i>
              </a>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className='contact-content'>
          <h3 className='contact-title'>Send Me a Message</h3>
          <form ref={form} onSubmit={sendEmail}
           className='contact-form'>
            <div className='contact-form-div'>
              <label className='contact-form-tag'>Name</label>
              <input
                type='text'
                name='name'
                className='contact-form-input'
                placeholder='Insert your Name'
              />
            </div>

            <div className='contact-form-div'>
              <label className='contact-form-tag'>Email</label>
              <input
                type='email'
                name='email'
                className='contact-form-input'
                placeholder='Insert your Email'
              />
            </div>

            <div className='contact-form-div contact-form-area'>
              <label className='contact-form-tag'>Project</label>
              <textarea
                name='project'
                className='contact-form-input'
                placeholder='Write your message here'
              ></textarea>
            </div>

            <button className='button button-flex'>
              Send Message
              <svg
                className='button__icon'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352Z'
                  fill='var(--container-color)'
                ></path>
                <path
                  d='M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z'
                  fill='var(--container-color)'
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;



