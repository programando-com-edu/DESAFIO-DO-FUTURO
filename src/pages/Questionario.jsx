// src/App.js
import React, { useState } from 'react';
import IPhone13 from '../components/Iphone13';
import Navbar from '../components/Navbar.jsx';
import Tabs from '../components/Tabs.jsx';
import Tentativas from '../components/Tentativas.jsx';
import Questoes from '../components/Questoes.jsx';
import Resultado from '../components/Resultado.jsx';
import videoCover from '../assets/videoCover.png';

import { PlayCircle } from 'lucide-react';


function Visualizar() {
  const [step, setStep] = useState(1);

  return (
    <IPhone13>
        <Navbar/>
        <div className='mt-2 flex flex-col items-center gap-4'>
          <div className='relative'>
            <img src={videoCover} alt="" className='w-full' />
            <PlayCircle className='absolute top-[38%] left-[42%]' size={48} color='#f5f5f5' />
          </div>

          <Tabs />

          {step === 1 && <Tentativas stepChange={setStep} />}
          {step === 2 && <Questoes stepChange={setStep} />}
          {step === 3 && <Resultado stepChange={setStep} />}
        </div>
    </IPhone13>
  );
}

export default Visualizar;
