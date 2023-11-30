// src/App.js
import React from 'react';
import IPhone13 from '../components/Iphone13';
import Navbar from '../components/Navbar.jsx';
import CustomCarousel from '../components/CustomCarousel.jsx';
import bannerDesafio from '../assets/bannerDesafio.jpeg';
import {mostRelevantData, lastWeekData, mostViewedData} from '../components/CarouselData.jsx';

function Home() {
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
    <IPhone13>
        <Navbar/>
        <div className='mt-2 flex justify-center flex-shrink-0'>
            <img src={bannerDesafio} alt="" className='rounded-lg w-[300px]' />
        </div>
        <p className='text-center text-gray-900 text-2xl mt-6 font-bold'>Vídeos</p>
        <div className='space-y-6'>
          <div>
            <p className='ml-6 text-gray-900 text-xl font-bold'>Mais relevantes</p>
            <CustomCarousel dataItems={mostRelevantData} />
          </div>

          <div>
            <p className='ml-6 text-gray-900 text-xl font-bold'>Mais vistos</p>
            <CustomCarousel dataItems={mostViewedData} />
          </div>

          <div>
            <p className='ml-6 text-gray-900 text-xl font-bold'>Últimas semanas</p>
            <CustomCarousel dataItems={lastWeekData} />
          </div>
        </div>

    </IPhone13>
  );
}

export default Home;
