import React from "react";
import logo from "../assets/logo.png";
import { FiSearch, FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
const Reset = () => {
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

      <div className="min-h-screen bg-[#121418] text-white flex">
        <aside className="w-1/ bg-[#121418] p-6 ml-60 mt-10">
          <nav className="space-y-6">
            <Link to="/Profile">
              <div className="text-gray-400 hover:text-white cursor-pointer ">
                My Profile
              </div>
            </Link>
            <div className=" hover:text-white cursor-pointer mt-7 text-lg font-semibold text-white border-l-4 border-white pl-3">
              Password
            </div>
            <div className="text-gray-400 hover:text-white cursor-pointer mt-7">
              Curator
            </div>
          </nav>
        </aside>

        <div>
          <h1 className="text-3xl font-bold mb-6 ml-40 mt-15">My Account</h1>

          <div className="mb-10 ml-40 ">
            <h2 className="text-xl font-semibold mb-5  ">
              Change/Reset Password
            </h2>
            <hr className="w-md text-[#454545]  " />
            <p className="mt-4 text-[#929292] ">
              Enter the email address you used when you joined and well <br />
              send you link to reset your password.
            </p>
          </div>
          <div className="">
            {/* Password Field */}
            <div className="flex flex-col max-w-md mb-10 ml-40">
              <label className="mb-1 text-gray-300 font-medium">
                Email<span className="text-red-500">*</span>
              </label>

              <div className="relative mt-3">
                <input
                  type="password"
                  disabled
                  className="w-full bg-transparent border border-gray-600 text-white px-3 py-2 pr-16 rounded-md focus:outline-none"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-400 hover:underline">
                  Edit
                </button>
              </div>
            </div>

            {/* Save Button */}
            <Link to="/Change">
              <button className="bg-gray-300 text-black font-semibold px-6 py-2 rounded hover:bg-gray-400 ml-100">
                Save Changes
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reset;
