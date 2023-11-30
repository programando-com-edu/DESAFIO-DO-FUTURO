// src/components/iPhone13.js
import React from "react";
import "./iPhone13.css";
import { RiHomeLine } from "react-icons/ri";
import { UserRound, PlayCircle } from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const IPhone13 = ({ classes = "", children }) => {
  const { pathname } = useLocation();

  return (
    <div className={`iphone-13 ${classes}`}>
      <div className="h-[732px] overflow-auto no-scroll pb-8 bg-gray-200">
        {children}
      </div>
      <div className="absolute rounded-b-xl bottom-0 py-3 border-t border-gray-300 bg-gray-200 w-[343px] grid grid-cols-3 place-items-center text-2xl">
        <Link
          to="/video"
          className={`flex flex-col items-center text-sm ${
            pathname === "/video" ? "text-pallete-100" : "text-pallete-200"
          }`}
        >
          <PlayCircle size={28} />
          Videos
        </Link>
        <Link
          to="/"
          className={`flex flex-col items-center text-sm ${
            pathname === "/" ? "text-pallete-100" : "text-pallete-200"
          }`}
        >
          <RiHomeLine size={28} />
          Início
        </Link>
        <div className={`flex flex-col items-center text-sm text-pallete-200`}>
          <UserRound size={28} />
          Conta
        </div>
      </div>
    </div>
  );
};

export default IPhone13;
