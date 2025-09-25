import React from "react";
import {
  FiHome,
  FiUsers,
  FiCreditCard,
  FiSearch,
  FiBell,
} from "react-icons/fi";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import lawn from "../assets/lawn.png";
import { FiEdit2 } from "react-icons/fi";
import { FaCheck, FaTimes } from "react-icons/fa"; 

const Subscribe = () => {
  return (
    <div className="flex bg-black text-white">
      <div className="w-60 bg-[#0d0d0d] flex flex-col items-center py-8 ">
        <div className="mb-10">
          <img src={logo} alt="Logo" className="w-16 h-16 rounded-full" />
        </div>
        <nav className="flex flex-col gap-6 text-gray-300">
          <a
            href="/Dashboard"
            className="flex items-center gap-3 text-[#454545]"
          >
            <FiHome /> Dashboard
          </a>
          <a href="Userinfo" className="flex items-center gap-3 text-[#454545]">
            <FiUsers /> Users
          </a>
          <a
            href="/Editsubscribe"
            className="flex items-center gap-3 hover:text-white"
          >
            <FiCreditCard /> Subscription
          </a>
        </nav>
      </div>

      <div className="w-4xl bg-[#121418] text-white p-8">
        <h1 className="text-white font-semibold text-2xl mt-5">Subscription</h1>
        <h1 className="text-2xl font-semibold mt-5">
          Get the best pricing paln
        </h1>
        <p className="mt-3 text-[#929292]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br />
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-4xl">
            <div className="bg-[#191B20] rounded-xl p-6 flex-1 relative mt-20">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <FiEdit2 />
              </button>
              <h3 className="text-xl font-semibold">FREEMIUM</h3>
              <p className="text-3xl font-bold mt-4">
                $0<span className="text-base font-normal"> /month</span>
              </p>
              <p className="text-gray-400 text-sm mt-2">
                A 30 minute free trial for free users after that you need to buy
                a package
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-white" /> PNG Images
                </li>
                <li className="flex items-center gap-2 text-gray-500">
                  <FaCheck className="text-gray-500" /> Responsive components
                </li>
                <li className="flex items-center gap-2 text-gray-500">
                  <FaTimes className="text-gray-500" /> Constant updates
                </li>
                <li className="flex items-center gap-2 text-gray-500">
                  <FaTimes className="text-gray-500" /> Custom templates
                </li>
              </ul>

              <button className="mt-6 w-full bg-white text-black font-medium py-2 rounded hover:bg-gray-200 transition">
                Select Now
              </button>
            </div>

            <div className="bg-black rounded-xl p-6 flex-1 relative mt-20">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <FiEdit2 />
              </button>
              <h3 className="text-xl font-semibold">PREMIUM</h3>
              <p className="text-3xl font-bold mt-4">
                $20<span className="text-base font-normal"> /month</span>
              </p>
              <p className="text-gray-400 text-sm mt-2">
                you can browse as much as you can after buying this package
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-white" /> PNG Images
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-white" /> Responsive components
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-white" /> Constant updates
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-white" /> Custom templates
                </li>
              </ul>

              <button className="mt-6 w-full bg-white text-black font-medium py-2 rounded hover:bg-gray-200 transition">
                Select Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-80 bg-[#111] p-6 flex flex-col gap-6">
        <div className="flex items-center gap-4  p-4">
          <div className="flex items-center bg-[#1e1e1e] px-3 py-2 rounded-md w-64">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm text-white w-full placeholder-gray-400"
            />
          </div>

          <div className="relative bg-[#1e1e1e] p-2 rounded-md cursor-pointer">
            <FiBell className="text-gray-300 text-lg" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-lg flex flex-col items-center text-center ">
          <img src={user} alt="User" className="w-30 h-30 rounded-full mb-3" />
          <h3 className="text-lg font-semibold">Jenny Wilson</h3>
          <p className="text-gray-400 text-sm">JennyWilson@email.com</p>
          <button className="text-red-400 mt-4 hover:underline">Logout</button>
        </div>

        <div>
          <img src={lawn} alt="" className="w-67 h-70 mt-8 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
