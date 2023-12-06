// src/App.js
import React, { useState } from 'react';
import IPhone13 from '../components/Iphone13';
import Navbar from '../components/Navbar.jsx';
import CustomCarousel from '../components/CustomCarousel.jsx';
import bannerDesafio from '../assets/bannerDesafio.jpeg';
import { mostRelevantData, lastWeekData, mostViewedData, byDateData } from '../components/CarouselData.jsx';
import { X } from 'lucide-react'
function Home() {


  const [modal, setModal] = useState(false);
  return (
    <IPhone13>
      <Navbar />
      <button onClick={() => setModal(true)} className='mt-2 mx-auto flex justify-center flex-shrink-0'>
        <img src={bannerDesafio} alt="" className='rounded-lg w-[300px]' />
      </button>
      <p className='text-center text-gray-900 text-2xl mt-6 font-bold'>Vídeos</p>
      <div className='space-y-6'>
        <div>
          <p className='ml-6 text-gray-900 text-xl font-bold'>Episódios</p>
          <CustomCarousel dataItems={byDateData} />
        </div>

        <div>
          <p className='ml-6 text-gray-900 text-xl font-bold'>Mais vistos</p>
          <CustomCarousel dataItems={mostRelevantData} />
        </div>

        <div>
          <p className='ml-6 text-gray-900 text-xl font-bold'>Últimas semanas</p>
          <CustomCarousel dataItems={lastWeekData} />
        </div>
      </div>
      
      {modal && 
      <div className='absolute flex justify-center items-center top-0 h-full w-full bg-black/50'>

      <div className='h-fit w-[300px] rounded-lg bg-gray-200 flex flex-col '>
        <button  onClick={() => setModal(false)} className='w-full bg-gray-300 flex justify-end py-2 px-4 mb-2 rounded-lg'>
          <X className='text-blue' />
        </button>
        <div className='space-y-2 px-4'>
          <h1 className='font-bold text-blue'>Sobre o Desafio do Futuro</h1>
          <p className='text-sm pb-2'>O Quadro especial do Globo Esporte, Desafio do Futuro apresenta ao público um emocionante game, que vai fazer você mergulhar no mundo da Universidade de Fortaleza (UNIFOR). Os episódios exploram a estrutura física, cursos, projetos e atrações.</p>
          <p className='text-sm'>Em cada episódio os apresentadores Marcos Montenegro e Antero Neto são desafiados a conhecer e vivenciar o dia a dia da formação dos alunos dos cursos da Unifor.</p>
        </div>

        <button onClick={() => setModal(false)} className='my-4 h-10 bg-sky-600 mx-6 rounded-lg text-white'>Entendi</button>
      </div>
    </div>
      }

    </IPhone13>
  );
}

export default Home;
