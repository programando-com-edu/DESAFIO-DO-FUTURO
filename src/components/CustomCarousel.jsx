import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerDesafio from '../assets/bannerDesafio.jpeg';

function CustomCarousel({ dataItems }) {
    const settings = {
        showArrows: false,
        centerMode: true,
        emulateTouch: true,
        itemPadding: '30px',
        showThumbs: false,
        showStatus: false,
        showIndicators: false,
        
    };

    return (
        <Carousel {...settings} className='mt-2 ml-3'>
            {dataItems && dataItems.map(item => (
                <div key={item.id} className='mx-2 h-36 flex justify-center items-end flex-shrink-0 relative'>
                    <img src={item.link} alt="" className='absolute rounded-lg' />
                    <p className='z-10 text-sm text-white text-left font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                        {item.text}
                    </p>
                </div>
            ))}
        </Carousel>
    );
}

export default CustomCarousel;
