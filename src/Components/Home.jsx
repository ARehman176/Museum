import React from 'react'
import image1 from '../assets/image1.png'
import { Icon } from "@iconify/react";
const Home = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
     style={{ backgroundImage: `url(${image1})` }}
    >
      {/* Overlay for better text visibility (optional) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content Box */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-20 ml-50  ">
        <div className="bg-white p-6 md:p-8 max-w-sm  mt-70">
          <h1 className="text-xl md:text-2xl font-bold text-black">
            Welcome to the<br/> Museum
          </h1>
          <p className="mt-3 text-[#23262D] text-sm md:text-base">
            Experience cultures across the<br/> globe, from the dawn of human<br/> history
            to the present
          </p>

          <button className="mt-5 bg-black text-white px-4 py-2 flex items-center justify-between gap-2 w-full rounded hover:bg-gray-900">
            <span>Plan your visit</span>
            <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
             <Icon
                          icon="material-symbols-light:play-arrow-rounded"
                          className="text-white text-lg"
                        />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
