import React from "react";
import { Icon } from "@iconify/react";
import logo from "../assets/logo.png"; // Replace with your logo file

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-around items-start md:items-center mb-8 gap-76">
        <div className="mb-6 md:mb-0 ">
          <h4 className="text-lg font-semibold mb-4">Connect with us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition"
            >
              <Icon icon="mdi:linkedin" className="text-xl" />
            </a>
            <a
              href="#"
              className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition"
            >
              <Icon icon="ic:baseline-facebook" className="text-xl" />
            </a>
            <a
              href="#"
              className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition"
            >
              <Icon icon="mdi:instagram" className="text-xl" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/3 ">
          <label className="block text-sm mb-2">
            Enter your email address to receive our newsletter
          </label>
          <div className="flex">
            <input
              type="email"
              className="flex-1 px-4 py-2 text-white outline-none border-1"
            />
            <button className="bg-white text-black px-4 py-2 font-semibold ">
              Sign up
            </button>
          </div>
         <div
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="ml-85 mt-4 text-sm text-white hover:underline flex items-center cursor-pointer"
>
  Back to the top{" "}
  <Icon
    icon="material-symbols:arrow-outward"
    className="ml-1 text-sm"
  />
</div>

        </div>
      </div>

      <hr className="border-gray-700 mb-4 max-w-6xl ml-30" />

      <div className="flex flex-col md:flex-row justify-around gap-155 items-center text-sm text-gray-400">
        <img src={logo} alt="Logo" className="h-10 mb-4 md:mb-0" />
        <p>© 2022 The Museum, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
