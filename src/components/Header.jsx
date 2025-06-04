import React from "react";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="header flex justify-between items-center h-[100px] bg-zinc-100 text-white p-4">
      <div className="logo w-[80px] h-[80px]">
        <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-r from-[#5f0101] to-[#ba0000] shadow-lg flex items-center justify-center">
          <span className="text-3xl font-bold text-white tracking-wider">
            JG
          </span>
        </div>
      </div>
      <Navbar />
    </header>
  );
};
