import React from 'react';
import bgImage from '../assets/bg.PNG'; 
import { Icon } from "@iconify/react";
const Support = () => {
  return (
    <div
      className="relative bg-cover bg-center py-10 "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white bg-opacity-90 max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div className=" -mt-20">
          <h2 className="text-3xl font-bold text-gray-900">We need your support</h2>
        </div>
        <div className="flex flex-col md:flex-col items-center md:space-x-4 text-center md:text-left">
          <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-0">
            Your support is vital and helps the Museum to share the<br/> collection with the world.
          </p>
          <button className="bg-black text-white text-sm px-5 py-2  rounded hover:bg-gray-800 transition flex mr-56 space-x-2 mt-6">
  <span>Donate Funds Now</span>
  <Icon
    icon="material-symbols-light:play-arrow-rounded"
    className="text-white text-lg mt-1"
  />
</button>

        </div>
      </div>
    </div>
  );
};

export default Support;
