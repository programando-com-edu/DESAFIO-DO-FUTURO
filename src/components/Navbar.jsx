// src/App.js
import React from 'react';
import logoGlobo from '../assets/logoGlobo.png';
import { FaBars, FaWifi } from "react-icons/fa";
import { FaBatteryHalf } from "react-icons/fa6";

function Navbar() {
  return (
    <div>
        <div className='flex items-center justify-between bg-gray-200 text-lg px-6 py-2 '>
            <p className='font-semibold'>9:41</p>
            <div className='flex space-x-3'>
                <FaWifi />
                <FaBatteryHalf />
            </div>
        </div>
        <div className='h-14 flex items-center justify-between mx-6'>
            <div className='flex items-center text-pallete-100 text-2xl'>
                <FaBars />
                <p className=' font-bold mb-1 ml-6'> Verdes Mares</p>
            </div>
            <img src={logoGlobo} alt="" />
        </div>
    </div>
  );
}

export default Navbar;
