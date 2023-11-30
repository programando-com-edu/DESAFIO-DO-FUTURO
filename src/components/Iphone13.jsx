// src/components/iPhone13.js
import React from 'react';
import './iPhone13.css';
import { RiHomeLine, RiAccountCircleLine  } from "react-icons/ri";
import { FaRegPlayCircle } from "react-icons/fa";


const IPhone13 = ({classes='', children}) => {
  return (
    <div className={`iphone-13 ${classes}`}>
        <div className='h-[732px] overflow-auto no-scroll pb-4'>{children}</div>
        <div className='absolute rounded-b-xl h-12 w-[343px] grid grid-cols-3 place-items-center text-2xl'>
            <FaRegPlayCircle className='text-pallete-200' />
            <RiHomeLine className='text-pallete-100' />
            <RiAccountCircleLine className='text-pallete-200' />
        </div>
    </div>
  );
};

export default IPhone13;
