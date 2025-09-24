import React from "react";
import {
  FiHome,
  FiUsers,
  FiCreditCard,
  FiSearch,
  FiBell,
  FiSettings,
  FiEdit2,
} from "react-icons/fi";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import lawn from "../assets/lawn.png";
import prof from "../assets/prof.png";
import prof1 from "../assets/prof1.png";
import prof2 from "../assets/prof2.png";
import prof3 from "../assets/prof3.png";
import prof4 from "../assets/prof4.png";
import prof5 from "../assets/prof5.png";
import prof6 from "../assets/prof6.png";
import prof7 from "../assets/prof7.png";
import prof8 from "../assets/prof8.png";
const users = [
  {
    id: 1,
    name: "Esther Howard",
    email: "esther@email.com",
    location: "United States",
    joinDate: "12/06/2022",
    image: prof,
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    email: "brooklyn@email.com",
    location: "United States",
    joinDate: "12/06/2022",
    image: prof1,
  },
  {
    id: 3,
    name: "Guy Hawkins",
    email: "ghawkins@email.com",
    location: "United States",
    joinDate: "12/06/2022",
    image: prof2,
  },
  {
    id: 4,
    name: "Bessie Cooper",
    email: "bessie@email.com",
    location: "United States",
    joinDate: "12/06/2022",
    image: prof3,
  },
  {
    id: 5,
    name: "Albert Flores",
    email: "albert@email.com",
    location: "United States",
    joinDate: "12/06/2022",
    image: prof4,
  },
  {
    id: 6,
    name: "Darlene Robertson",
    email: "darlene@email.com",
    location: "United States",
    joinDate: "12/06/2022",
    image: prof5,
  },
  {
    id: 7,
    name: "Floyd Miles",
    email: "floyd@email.com",
    location: "United States",
    joinDate: "12/06/2022",
    image: prof6,
  },
  {
    id: 8,
    name: "Dianne Russell",
    email: "dianne@email.com",
    location: "United States",
    joinDate: "12/06/2022",
    image: prof7,
  },
  {
    id: 9,
    name: "Jerome Bell",
    email: "jerome@email.com",
    location: "United States",
    joinDate: "12/06/2022",
    image: prof8,
  },
];
const User = () => {
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
          <a href="#" className="flex items-center gap-3 text-[#454545]">
            <FiCreditCard /> Subscription
          </a>
        </nav>
      </div>
      <div className=" bg-[#121418] text-white p-8">
        <h2 className="text-3xl font-bold mb-8">Users Info</h2>

        <div className="flex flex-wrap gap-6 w-4xl">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-[#191B20] rounded-xl p-6 flex flex-col items-center relative w-full sm:w-[48%] lg:w-[30%]"
            >
              <img
                src={user.image}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover  "
              />
              <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <FiEdit2 />
              </button>
              <h3 className="mt-4 text-lg font-semibold">{user.name}</h3>
              <p className="text-gray-400 text-sm">{user.email}</p>

              <div className="mt-4 text-sm text-gray-400 flex justify-between w-full px-2">
                <div className="flex flex-col -ml-4">
                  <span className="text-gray-300 font-medium">Location:</span>
                  <span>{user.location}</span>
                </div>

                <div className="flex flex-col -mr-4 ">
                  <span className="text-gray-300 font-medium ">Join Date:</span>
                  <span>{user.joinDate}</span>
                </div>
              </div>
            </div>
          ))}
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

export default User;
