import React from "react";
import {
  FiHome,
  FiUsers,
  FiCreditCard,
  FiSearch,
  FiBell,
  FiArrowLeft
} from "react-icons/fi";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import lawn from "../assets/lawn.png";


const Editsubscribe = () => {
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
       <div className="flex items-center gap-2 mb-8">
               <FiArrowLeft className="text-xl cursor-pointer ml-5" />
               <h2 className="text-2xl font-bold ml-4 ">Edit Subscription</h2>
             </div>
        <h1 className="text-2xl font-semibold mt-5 ml-6">
          Get the best pricing plan
        </h1>
        <p className="mt-3 text-[#929292] ml-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br />
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
       <p className="mt-10 ml-6">Edit plan Details</p>
       <hr className="w-xl mt-5 text-[#454545] ml-6"/>
        <div className=" text-white flex ">
      <div className=" p-6 rounded-md w-full max-w-md">
        {/* Plan Name */}
        <div className="mb-4">
          <label className="block mb-1">Name of Plan</label>
          <select className="w-xl p-2 bg-[#191B20]  rounded text-white">
            <option>Premium</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="mb-4">
          <label className="block mb-1">Price Range</label>
          <input
            type="text"
            className="w-xl p-2 bg-[#191B20] rounded text-white"
            value="$20 USD"
            readOnly
          />
        </div>

        {/* Offerings */}
        <div className="mb-4 w-xl">
          <p className="mb-4">Select what this plan is offering</p>
          {[
            "Sed ut perspiciatis unde omnis",
            "Nemo enim ipsam voluptate",
            "deserunt mollit anim id est laborum",
            "Duis aute irure dolor in reprehend",
          ].map((text, i) => (
            <div key={i} className="flex justify-between items-center mb-2 text-sm ">
              <span className="flex ">{i + 1}. {text}</span>
              <div className="flex space-x-6 mt-2">
                <label>
                  <input type="radio" name={`option-${i}`} className="mr-1" /> Yes
                </label>
                <label>
                  <input type="radio" name={`option-${i}`} className="mr-1" /> No
                </label>
              </div>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <button className="w-30 ml-115 bg-gray-300 text-black py-2 rounded hover:bg-gray-400 mt-4">
          Save Changes
        </button>
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

export default Editsubscribe;
