import React from "react";
import {
  FiHome,
  FiUsers,
  FiCreditCard,
  FiSearch,
  FiBell,
  FiArrowLeft,
} from "react-icons/fi";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import lawn from "../assets/lawn.png";
const Userinfo = () => {
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
          <a
            href="Userinfo"
            className="flex items-center gap-3 hover:text-white"
          >
            <FiUsers /> Users
          </a>
          <a
            href="/Subscribe"
            className="flex items-center gap-3 text-[#454545]"
          >
            <FiCreditCard /> Subscription
          </a>
        </nav>
      </div>

      <div className="w-4xl bg-[#121418] text-white p-8">
        <div className="flex items-center gap-2 mb-8">
          <FiArrowLeft className="text-xl cursor-pointer ml-5" />
          <h2 className="text-2xl font-bold ">Users Info</h2>
        </div>

        <div className="space-y-6 max-w-md ml-13">
          <div>
            <h3 className="text-lg font-semibold">UserPersonal Information</h3>
            <hr className="text-[#454545] my-2" />
          </div>

          <div>
            <label className="block mb-1 text-sm">First Name</label>
            <input
              type="text"
              defaultValue="John"
              className="w-full p-2 rounded bg-[#454545] border-gray-700 focus:outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Last Name</label>
            <input
              type="text"
              defaultValue="Doe"
              className="w-full p-2 rounded bg-[#454545] border-gray-700 focus:outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              defaultValue="JohnDoe@email.com"
              className="w-full p-2 rounded bg-[#454545] border border-gray-700 focus:outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Phone No.</label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full p-2 rounded bg-[#454545] border border-gray-700 focus:outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">
              Entity Name <span className="text-gray-500">(Optional)</span>
            </label>
            <input
              type="text"
              placeholder="Enter entity name"
              className="w-full p-2 rounded bg-[#454545] border border-gray-700 focus:outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Zip code</label>
            <input
              type="text"
              placeholder="Enter zip code"
              className="w-full p-2 rounded bg-[#454545] border border-gray-700 focus:outline-nonefocus:border-gray-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Country</label>
            <select
              defaultValue="United Kingdom"
              className="w-full p-2 rounded bg-[#454545] border border-gray-700 focus:outline-none focus:border-gray-500"
            >
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>Pakistan</option>
              <option>india</option>
            </select>
          </div>
        </div>

        <div className="space-y-6 max-w-md mt-12 ml-13">
          <div>
            <h3 className="text-lg font-semibold">Change/Reset Password</h3>
            <hr className="text-[#454545] my-2" />
          </div>

          <div>
            <label className="block mb-1 text-sm">
              New Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full p-2 rounded bg-[#454545] border border-gray-700 focus:outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full p-2 rounded bg-[#454545] border border-gray-700 focus:outline-none focus:border-gray-500"
            />
          </div>

          <button className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400 transition ml-75">
            Save Changes
          </button>
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

export default Userinfo;
