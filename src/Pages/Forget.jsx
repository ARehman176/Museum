import React from "react";
import logo from "../assets/logo.png";
import { FiSearch, FiUpload } from "react-icons/fi";
import Footer from "../Components/Footer";
const Forget = () => {
  return (
    <div>
      <nav className="bg-black text-white px-4 sm:px-6 py-3">
        {/* Top Right Menu */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 text-xs sm:text-sm font-medium mb-3 ">
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
            <a href="/" className="hover:text-yellow-400"></a>
            <a href="/galliries" className="hover:text-yellow-400">
              Galliries
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

      <div className="min-h-screen bg-[#121418] text-white px-6 py-10 flex flex-col lg:flex-row justify-center">

          <div className="w-full lg:w-2/4 ">
        <h1 className="text-white text-4xl font-semibold -ml-40 mt-10">Forgot Password</h1>
        <p className="text-xl mt-20 -ml-40 text-[#CACACA]">Forgot Password</p>
        <hr className="w-md mt-5 -ml-40 text-[#454545]"/>
        <p className="text-[#929292] mt-10 -ml-40">
            Enter the email address you used when you joined and well <br/>send you link to reset your password.
        </p>
            <div className="-ml-40 ">
                <label className="block mb-1 text-sm mt-10">
                  Email <span className="text-red-500 ">*</span>
                </label>
                <input
                  type="text"
                  className="w-md mt-2 px-3 py-2 bg-[#1e1e1e] border border-gray-700 rounded text-white"
                />
              </div>
              <button className="bg-white text-black py-1 px-2 mt-10 ml-52">
                Continue
              </button>
      </div>
      </div>
<Footer />
    
    </div>
  );
};

export default Forget;
