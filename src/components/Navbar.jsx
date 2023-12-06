// src/App.js
import React from "react";
import logoGlobo from "../assets/logoGlobo.png";
import logo from "../assets/logo.png";
import { FaBars, FaWifi } from "react-icons/fa";
import { FaBatteryHalf } from "react-icons/fa6";

function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between text-lg px-6 py-2 ">
        <p className="font-semibold">9:41</p>
        <div className="flex space-x-3">
          <FaWifi />
          <FaBatteryHalf />
        </div>
      </div>
      <div className="h-14 flex items-center justify-between mx-6">
        <div className="flex items-center gap-2 text-pallete-100 text-lg">
          <a href="https://ge.globo.com/ce/" target="blank" className="font-extrabold">VERDES MARES</a>
        </div>
        <img src={logo} alt="" className="w-10 h-10" />
      </div>
    </div>
  );
}

export default Navbar;
