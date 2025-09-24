import React from "react";
import { FiSearch, FiUpload } from "react-icons/fi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
const Account = () => {
  return (
    <div>
      <nav className="bg-black text-white px-4 sm:px-6 py-3">
        {/* Top Right Menu */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 text-xs sm:text-sm font-medium mb-3">
          <button className="flex items-center gap-1 hover:text-yellow-400">
            <FiSearch className="text-base sm:text-lg" /> Search
          </button>
          <button className="flex items-center gap-1 hover:text-yellow-400">
            <FiUpload className="text-base sm:text-lg" /> Submit Content
          </button>
          <a href="#" className="hover:text-yellow-400">
            Donate
          </a>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row sm:justify-around items-center gap-4 sm:gap-0 mb-2">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="w-16 sm:w-20" />
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium mt-2 sm:mt-1">
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>
            <a href="/galliries" className="hover:text-yellow-400">
              Galleries
            </a>
            <a href="/Documentaries" className="hover:text-yellow-400">
              Documentaries
            </a>
            <a href="#" className="hover:text-yellow-400">
              Membership
            </a>
            <a href="#" className="hover:text-yellow-400">
              Blog
            </a>
            <a href="#" className="hover:text-yellow-400">
              Support us
            </a>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-[#121418] text-white flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[#121418] p-6 ml-60 mt-10">
          <nav className="space-y-6">
            <Link to="/Profile">
              <div className="text-gray-400 hover:text-white cursor-pointer">
                My Profile
              </div>
            </Link>
            <div className="hover:text-white cursor-pointer mt-7 text-lg font-semibold text-white border-l-4 border-white pl-3">
              Password
            </div>
            <Link to="/Curator">
              <div className="text-gray-400 hover:text-white cursor-pointer mt-7">
                Curator
              </div>
            </Link>
          </nav>
        </aside>

        <div>
          <h1 className="text-3xl font-bold mb-6 ml-20 mt-16">My Account</h1>

          <div className="mb-10 ml-20">
            <h2 className="text-xl font-semibold mb-5">
              Change/Reset Password
            </h2>
            <hr className="w-full text-[#454545]" />
            <div className="flex flex-col max-w-sm mb-10  mt-5">
              <label className="mb-1 text-gray-300 font-medium">
                New Password <span className="text-red-500">*</span>
              </label>

              <div className="relative mt-3 bg-[#191B20]">
                <input
                  disabled
                  className="w-full bg-transparent border border-gray-600 text-white px-3 py-2 pr-16 rounded-md focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mb-10  mt-5 ml-20 ">
            <label className="mb-1 text-gray-300 font-medium ">
              Confirm Password <span className="text-red-500">*</span>
            </label>

            <div className="relative mt-3 bg-[#191B20]">
              <input
                disabled
                className="w-full bg-transparent border border-gray-600 text-white px-3 py-2 pr-16 rounded-md focus:outline-none"
              />
            </div>
          </div>

          <Link to="/Account">
            <button className="bg-gray-300 text-black font-semibold px-6 py-2 rounded hover:bg-gray-400 ml-65 mt-8">
              Save Changes
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
