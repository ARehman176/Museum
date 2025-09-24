import React from "react";
import Navbar from "../Components/Navbar";
import support from "../assets/support.png";
import { Icon } from "@iconify/react";
import donate from "../assets/donate.png";
import donate1 from "../assets/donate1.png";
import donate2 from "../assets/donate2.png";
import Footer from "../Components/Footer";
const Supportus = () => {
  const supportOptions = [
    {
      title: "Become a Member",
      description:
        "Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat sint occaecat cupidatatam.",
      imageUrl: donate,
    },
    {
      title: "Donate Now",
      description:
        "Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat sint occaecat cupidatatam.",
      imageUrl: donate1,
    },
    {
      title: "Submit Historical Content",
      description:
        "Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat sint occaecat cupidatatam.",
      imageUrl: donate2,
    },
  ];

  return (
    <div className="bg-black">
      <Navbar />
      <div
        className="relative h-100 bg-cover bg-center"
        style={{ backgroundImage: `url(${support})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 flex items-center h-full px-6 md:px-20 ml-30  ">
          <h2 className="text-white text-6xl mt-55 font-semibold ">
            Support Us
          </h2>
        </div>
      </div>
      <div className="mt-10 mb-10 ml-45">
        <a href="/" className="flex items-center text-white  space-x-1">
          <span className="hover:text-gray-400 hover:underline">Home</span>
          <Icon
            icon="ri:arrow-left-s-line"
            className="text-white text-lg mt-1"
          />
          <span>Support Us</span>
        </a>
      </div>
      <hr className="w-267 ml-45 text-[#454545]" />
      <div className=" text-white px-10 py-12 md:flex justify-around ml-22">
        <div className="md:w-2/4 mb-10 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Your support is vital and helps the Museum
            <br />
            to share the collection with the world.
          </h2>
          <p className="text-[#929292] mb-6">
            The Museum relies on support from a wide range of sources and there
            are
            <br /> many ways that you can donate to help care for and preserve
            the collection
            <br /> for future generations. You can donate as an individual, or
            through a<br /> foundation, trust or company. Your support helps us
            to do the following:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#CACACA]">
            <li>Create world-class exhibitions and gallery displays</li>
            <li>Care for, study and share the collection</li>
            <li>Engage local and global communities with what we do</li>
          </ul>
        </div>

        <div className="md:w-1/3 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact us</h3>
            <hr className="w-70 text-[#454545]" />
            <p className="text-[#CACACA] mb-2 mt-10">
              For more information about supporting <br />
              the Museum:
            </p>
            <p className="text-gray-300 mb-1">
              <strong>Email:</strong> contact@museum.com
            </p>
            <p className="text-gray-300 mb-6">
              <strong>Phone:</strong> +44 (0)20 7323 8933
            </p>
          </div>
          <hr className="w-70 text-[#454545]" />
          <div>
            <button className="bg-white text-black font-medium py-2 px-4 inline-flex items-center hover:bg-gray-200 transition w-70">
              Donate Now
              <span className="ml-32">➜</span>
            </button>
          </div>
        </div>
      </div>
      <hr className="w-267 ml-45 text-[#454545] mb-30 mt-10" />

      <div className=" text-white px-8 py-16 bg-[#121418]">
        <h2 className="text-3xl font-semibold mb-10 ml-38">Ways to support</h2>
        <div className="grid md:grid-cols-3 gap-6 w-265 ml-38">
          {supportOptions.map((option, index) => (
            <div key={index} className="bg-[#23262D]  overflow-hidden ">
              <img
                src={option.imageUrl}
                alt={option.title}
                className="  w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-400 text-sm">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Supportus;
