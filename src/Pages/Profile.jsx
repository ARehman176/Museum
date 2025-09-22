import React from "react";
import logo from "../assets/logo.png";
import { FiSearch, FiUpload } from "react-icons/fi";
import placeholder from "../assets/placeholder.png";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
const Profile = () => {
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
        {/* Sidebar */}
        <aside className="w-1/ bg-[#121418] p-6 ml-60 mt-10">
          <nav className="space-y-6">
            <div className="text-lg font-semibold text-white border-l-4 border-white pl-3">
              My Profile
            </div>
            <Link to="/Password">
              <div className="text-gray-400 hover:text-white cursor-pointer mt-7">
                Password
              </div>
            </Link>
            <Link to="/Curator">
             <div className="text-gray-400 hover:text-white cursor-pointer mt-7">
              Curator
            </div>
            </Link>
           
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10">
          <h1 className="text-3xl font-bold mb-6 ml-40 mt-5">My Account</h1>

          {/* Profile Picture */}
          <div className="mb-10 ml-40 ">
            <h2 className="text-xl font-semibold mb-5  ">Profile Picture</h2>
            <hr className="w-40 text-[#454545]  " />
            <img
              src={placeholder} // Replace this with the actual image path
              alt="Profile"
              className="w-28 h-28 rounded-full mt-5"
            />
          </div>

          {/* Personal Info Form */}
          <div className="space-y-6 flex">
            <div className="flex flex-col space-y-6 ml-130 -mt-55">
              <h2 className="text-xl font-semibold">Personal Information</h2>
              <hr className="text-[#454545] -mt-1" />
              {/* First Name */}
              <div className="flex flex-col w-sm">
                <label className="mb-1 text-gray-400">First Name</label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full bg-[#191B20] text-white px-3 py-2 pr-16 rounded-md focus:outline-none"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-400 hover:underline">
                    Edit
                  </button>
                </div>
              </div>

              {/* Last Name */}
              <div className="flex flex-col w-sm">
                <label className="mb-1 text-gray-400">Last Name</label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full bg-[#191B20] text-white px-3 py-2 pr-16 rounded-md focus:outline-none"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-400 hover:underline">
                    Edit
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col w-sm">
                <label className="mb-1 text-gray-400">Email</label>
                <input
                  type="email"
                  defaultValue="JohnDoe@email.com"
                  className="bg-[#191B20] text-white px-3 py-2 rounded-md focus:outline-none"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col w-sm">
                <label className="mb-1 text-gray-400">Phone No.</label>
                <input
                  type="text"
                  className="bg-[#191B20] text-white px-3 py-2 rounded-md focus:outline-none"
                />
              </div>

              {/* Entity Name (Optional) */}
              <div className="flex flex-col w-sm">
                <label className="mb-1 text-gray-400">
                  Entity Name{" "}
                  <span className="text-sm text-gray-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="bg-[#191B20] text-white px-3 py-2 rounded-md focus:outline-none"
                />
              </div>

              {/* Zip Code */}
              <div className="flex flex-col w-sm">
                <label className="mb-1 text-gray-400">Zip code</label>
                <input
                  type="text"
                  className="bg-[#191B20] text-white px-3 py-2 rounded-md focus:outline-none"
                />
              </div>

              {/* Country */}
              <div className="flex flex-col w-sm">
                <label className="mb-1 text-gray-400">Country</label>
                <select className="bg-[#191B20] text-white px-3 py-2 rounded-md focus:outline-none">
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Pakitan</option>
                  <option>India</option>
                </select>
              </div>
            </div>

            {/* Save Button */}

            <div className="mt-138 -ml-37 ">
              <button className="bg-gray-300 text-black font-semibold px-6 py-2 rounded hover:bg-gray-400 cursor-pointer">
                Save Changes
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
