// src/App.js
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerDesafio from '../assets/bannerDesafio.jpeg';


function CustomCarousel() {
    const settings = {
        showArrows: false,
        centerMode: true,
        emulateTouch: true,
        itemPadding: '30px',
        showThumbs: false,
        showStatus: false,
        showIndicators: false 
    };
  return (
    <Carousel {...settings} className='mt-2 ml-3'>
        <div className='mx-2 h-full flex justify-center items-end flex-shrink-0 relative'>
            <img src="https://s2-ge.glbimg.com/D0Dr5Esd8DVua644sFleZiFiZr4=/0x0:1920x1080/1080x608/smart/filters:max_age(3600)/http://s01.video.glbimg.com/deo/vi/87/92/12129287" alt="" className='rounded-lg absolute' />
            <p className='z-10 text-white text-left font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Desafio do futuro: Marcos Montenegro e Antero têm convidado especial como "cobaia"</p>
        </div>
        <div className='mx-2 h-full flex justify-center items-end flex-shrink-0 relative'>
            <img src={bannerDesafio} alt="" className='rounded-lg' />
        </div>
    </Carousel>
  );
}

export default CustomCarousel;
