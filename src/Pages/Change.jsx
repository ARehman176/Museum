import React, { useState, useRef } from "react";
import { FiSearch, FiUpload } from "react-icons/fi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Change = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div>
      <nav className="bg-black text-white px-4 sm:px-6 py-3">
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

        <div className="flex flex-col sm:flex-row sm:justify-around items-center gap-4 sm:gap-0 mb-2">
          <div>
            <img src={logo} alt="Logo" className="w-16 sm:w-20" />
          </div>

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
            <div className="text-gray-400 hover:text-white cursor-pointer mt-7">
              Curator
            </div>
          </nav>
        </aside>

        <div>
          <h1 className="text-3xl font-bold mb-6 ml-20 mt-16">My Account</h1>

          <div className="mb-10 ml-20">
            <h2 className="text-xl font-semibold mb-5">
              Change/Reset Password
            </h2>
            <hr className="w-full text-[#454545]" />
            <p className="mt-4 text-[#929292]">
              Enter 6 digit code we sent to your registered email.
            </p>
          </div>

          <div className="flex flex-col items-start space-y-2 ml-20">
            <label className="text-sm font-medium text-gray-200">
              OTP Verified <span className="text-red-500">*</span>
            </label>

            <div className="flex space-x-2">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-center border-b-2 border-gray-500 bg-[#454545] text-white text-lg focus:outline-none focus:border-blue-500 rounded"
                />
              ))}
            </div>
          </div>

          <Link to="/Account">
            <button className="bg-gray-300 text-black font-semibold px-6 py-2 rounded hover:bg-gray-400 ml-65 mt-8">
              Save Changes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Change;
