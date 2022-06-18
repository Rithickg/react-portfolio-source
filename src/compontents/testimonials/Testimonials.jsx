import React from 'react'
import "./testimonials.css"
import AVT from '../../assets/img3.png'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
  avatar: AVT,
  name:'Bob',
  review:'sdf jksgfuks sej jsp jepjiff fshjbs;euf zjkeghwjk uisehhfo jkshew iwandji jkrahkjbg shejsf aiwyrefb jksefhys cakjaw'
},
{
  avatar: AVT,
  name:'Ram',
  review:'sdf jksgfuks sej jsp jepjiff fshjbs;euf zjkeghwjk uisehhfo jkshew iwandji jkrahkjbg shejsf aiwyrefb jksefhys cakjaw'
},
{
  avatar: AVT,
  name:'Sugan',
  review:'sdf jksgfuks sej jsp jepjiff fshjbs;euf zjkeghwjk uisehhfo jkshew iwandji jkrahkjbg shejsf aiwyrefb jksefhys cakjaw'
}
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className='container testimonials__container'>
      {
        data.map(({avatar,name,review},index)=>{
          return(
          <SwiperSlide key={index} className="testimonial">
        <div className="client__avatar">
          <img src={avatar} alt={name} />
        </div>
        <h5 className='client__name'>{name}</h5>
          <small className='client__review'>{review}</small>
      </SwiperSlide>
          )})
      }
      </Swiper>
      </section>
  )
}

export default Testimonials