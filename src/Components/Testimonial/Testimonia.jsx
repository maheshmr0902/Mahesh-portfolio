import React from 'react';
import './Testimonial.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Testimonial = () => {
  return (
    <section className='testimonial container section' id="testimonial">
      <h2 className='section-title'>Voices of Trust</h2>
      <span className='section-subtitle'>Testimonials from Collaborators & Mentors</span>

      <Swiper
        className='testimonial-container'
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{ clickable: true }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween:48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => (
          <SwiperSlide className='testimonial-card' key={id}>
            <img src={image} alt={title} className='testimonial-img' />
            <h3 className='testimonial-name'>{title}</h3>
            <p className='testimonial-description'>{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;

