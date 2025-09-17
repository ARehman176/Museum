import React from 'react'
import logo from '../assets/logo.png'
import { FiSearch, FiUpload } from "react-icons/fi";
import { Icon } from "@iconify/react";
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";
const Login = () => {
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
                   <a href="/" className="hover:text-yellow-400">
                   
                   </a>
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

             <div>
                 <div className="min-h-screen bg-[#121418] text-white px-6 py-10 flex flex-col lg:flex-row justify-center">
         <div className="w-full lg:w-2/4 lg:mr-12">
          <h2 className="text-2xl font-semibold mb-8">
            Login to Account
          </h2>

          {/* Personal Information */}
          <div className="mb-6 pb-6">
            <h3 className="text-lg font-medium mb-4">Sign-in Information</h3>
            <hr className="border-gray-700  max-w-xl  " />
            <div className="flex flex-col md:flex-col md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label className="block mb-1 text-sm mt-5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-xl px-3 py-2 bg-[#1e1e1e] border border-gray-700 rounded text-white"
                />
              </div>
              <div className="mt-5">
                <label className="block mb-1 text-sm">
                  password <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-xl px-3 py-2 bg-[#1e1e1e] border border-gray-700 rounded text-white"
                />
              </div>
            </div>
          </div>
             <Link
  to="/Forget"
  className=" text-[#21A8F3] flex flex-col ml-113"
>
  Forget Password?
</Link>
              <button className='mt-10 border-1 p-2  ml-107 bg-white text-black'> Create an account </button>
          </div>
      

        {/* Social Sign-up Section */}
        <div className="w-full lg:w-1/3 mt-10 lg:mt-0">
          <h3 className="text-lg font-medium mb-2 mt-16">Social Sign up</h3>
          <hr className="border-gray-700  max-w-xl  " />
          <p className="text-sm text-gray-300 mb-4 mt-5">
            Link your social account and Sign up in seconds.
          </p>

          <div className="flex flex-row space-x-2 mt-10">
            <button className="flex items-center justify-center space-x-2 bg-[#3b5998] text-white px-4 py-2 rounded hover:opacity-90 transition w-full max-w-[180px]">
              <Icon icon="ic:outline-facebook" className="text-xl" />
              <span>Facebook</span>
            </button>

            <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#F4B950] via-pink-500 to-[#C73E86] to-l-[#6F5EEB] text-white px-4 py-2 rounded hover:opacity-90 transition w-full max-w-[180px]">
              <Icon icon="skill-icons:instagram" className="text-xl" />
              <span>Instagram</span>
            </button>

            <button className="flex items-center justify-center space-x-2 bg-[#1DA1F2] text-white px-4 py-2 rounded hover:opacity-90 transition w-full max-w-[180px]">
              <Icon icon="mdi:twitter" className="text-xl" />
              <span>Twitter</span>
            </button>
          </div>
        </div>
      </div>
             </div>
             <Footer />
    </div>
  )
}

export default Login
