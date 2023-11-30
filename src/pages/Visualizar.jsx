// src/App.js
import React from 'react';
import IPhone13 from '../components/Iphone13';
import Navbar from '../components/Navbar.jsx';
import Tabs from '../components/Tabs.jsx';
import bannerDesafio from '../assets/bannerDesafio.jpeg';
import videoCover from '../assets/videoCover.png';

import { PlayCircle, Clock } from 'lucide-react';


function Visualizar() {
  return (
    <IPhone13>
        <Navbar/>
        <div className='mt-2 flex flex-col items-center gap-4'>
          <div className='relative'>
            <img src={videoCover} alt="" className='w-full' />
            <PlayCircle className='absolute top-[38%] left-[42%]' size={48} color='#f5f5f5' />
          </div>

          <Tabs />
          <div className='px-4 font-semibold '>
            <p className='text-lg'>Desafio do futuro: Marcos e Montenegro Antero têm convidado especial como “cobaia”</p>
            <div className='flex items-center  justify-between my-4'>
              <div className='flex items-center'>
                <Clock />
                <p className=' ml-2'>7 minutos</p>
              </div>
              <p className='text-sm'>Transmitido em 24/11/23</p>
            </div>

          </div>
        </div>
    </IPhone13>
  );
}

export default Visualizar;
