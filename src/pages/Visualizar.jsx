// src/App.js
import React from 'react';
import IPhone13 from '../components/Iphone13';
import Navbar from '../components/Navbar.jsx';
import Tabs from '../components/Tabs.jsx';
import bannerDesafio from '../assets/bannerDesafio.jpeg';
import videoCover from '../assets/videoCover.png';

import { PlayCircle } from 'lucide-react';


function Visualizar() {
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
        <div className='mt-2 flex flex-col items-center gap-4'>
          <div className='relative'>
            <img src={videoCover} alt="" className='w-full' />
            <PlayCircle className='absolute top-[38%] left-[42%]' size={48} color='#f5f5f5' />
          </div>

          <Tabs />

          <div>visualizar</div>
        </div>
    </IPhone13>
  );
}

export default Visualizar;
