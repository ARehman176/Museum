import React from "react";
import logo from "../assets/logo.png";
import { FiSearch, FiUpload } from "react-icons/fi";
import image1 from "../assets/image1.png";
import { Icon } from "@iconify/react";
import content from "../assets/content.png";
import image6 from "../assets/image6.png";
import bg from "../assets/bg.png";
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import Footer from "../Components/Footer";

const Content = () => {
  const galleryItems = [
    {
      image: gallery1,
      title: "Excepteur sint occan",
      description:
        "Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.",
    },
    {
      image: gallery2,
      title: "Nemo enim ipsame",
      description:
        "Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.",
    },
    {
      image: gallery3,
      title: "Quis autem vel eum",
      description:
        "Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.",
    },
    {
      image: gallery4,
      title: "Aspernatur aut oditut",
      description:
        "Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.",
    },
  ];
  return (
    <div className="bg-black">
      <nav className="bg-black text-white px-4 sm:px-6 py-3">
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

        <div className="flex flex-col sm:flex-row sm:justify-around items-center gap-4 sm:gap-0 mb-2">
          <div>
            <img src={logo} alt="Logo" className="w-16 sm:w-20" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium mt-2 sm:mt-1">
            <a href="/" className="hover:text-yellow-400"></a>
            <a href="/galliries" className="hover:text-yellow-400">
              Galliries
            </a>
            <a href="#" className="hover:text-yellow-400">
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
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 flex items-center h-full px-6 md:px-20 ml-50  ">
          <div className="bg-black p-6 md:p-8 max-w-sm  mt-70">
            <button className="text-white border-1 p-2">Gallery Name</button>
            <p className="mt-3 text-white text-3xl font-semibold ">
              Excepteur sint occan <br /> Lorem
            </p>
            <p className="text-white mt-5">about 2686 BC-AD 396</p>
          </div>
        </div>
      </section>
      <div className="mt-10 mb-10 ml-45">
        <a href="/" className="flex items-center text-white  space-x-1">
          <span className="hover:text-gray-400 hover:underline">Home</span>
          <Icon
            icon="ri:arrow-left-s-line"
            className="text-white text-lg mt-1"
          />
          <span>Galleries</span>
          <Icon
            icon="ri:arrow-left-s-line"
            className="text-white text-lg mt-1"
          />
          The Sir paul and Lady Ruddock Gallery
        </a>
      </div>
      <hr className="border-gray-700  max-w-6xl ml-46  " />
      <div className=" text-white py-12 px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-2/4  ml-30">
            <h2 className="text-3xl font-semibold">
              Explore the fascinating history.
            </h2>
            <img src={content} alt="" className="w-160 mt-10" />
          </div>

          <div className="md:w-1/4 mr-30 mt-25">
            <h3 className="text-xl font-semibold border-b border-gray-600   pb-2 mb-4">
              Creator Info
            </h3>
            <p className="text-gray-300 mb-2 mt-10">Created by</p>
            <p className="text-gray-300 mb-1">
              Name: <span className="text-gray-100">John Doe</span>
            </p>
            <p className="text-gray-300 mb-6">
              Email: <span className="text-gray-50">johndoe@email.com</span>
            </p>
            <p>
              phone: <span className="text-gray-100">www.linkurl.com</span>
            </p>

            <hr className="border-gray-600 mb-6 mt-10" />

            <button className="bg-white w-87 text-black px-6 py-2 flex items-center gap-2 font-medium hover:bg-gray-200 transition mt-10">
              Donate Now
              <Icon
                icon="ph:arrow-fat-right-fill"
                className="text-lg ml-44 bg-black text-white p-1"
              />
            </button>
          </div>
        </div>
      </div>

      <div className=" text-white py-5 px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-2/4  ml-30">
            <h2 className="text-3xl font-semibold leading-snug">
              Spanning over 700 Years, Room 41 traces the <br />
              Story of Europe from AD 300.
            </h2>
            <p className="mt-10 leading-7 text-[#929292]">
              The centuries AD 300–1100 witnessed great change in Europe. The
              Roman
              <br /> Empire broke down in the west, but continued as the
              Byzantine Empire in
              <br /> the east. People, objects and ideas travelled across the
              continent, while
              <br /> Christianity and Islam emerged as major religions. By 1100,
              the precursors
              <br /> of several modern states had developed.
            </p>
            <p className="mt-10 leading-7 text-[#929292]">
              Europe as we know it today was taking shape. Room 41 gives an
              overview
              <br /> of the period and its peoples. Its unparalleled collections
              range from North
              <br /> Africa to Scandinavia. The gallery's centrepiece is the
              Anglo-Saxon ship
              <br /> burial at Sutton Hoo, Suffolk – one of the most spectacular
              and important
              <br /> discoveries in British archaeology.
            </p>
          </div>

          <div className="md:w-1/4 mr-30 mt-30">
            <img src={image6} alt="" />
          </div>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center py-10 mt-15"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="bg-white bg-opacity-90 max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div className=" -mt-20">
            <h2 className="text-3xl font-bold text-gray-900">
              We need your support
            </h2>
          </div>
          <div className="flex flex-col md:flex-col items-center md:space-x-4 text-center md:text-left">
            <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-0">
              Your support is vital and helps the Museum to share the <br />
              collection with the world.
            </p>
            <button className="bg-black text-white text-sm px-5 py-2  rounded hover:bg-gray-800 transition flex mr-69 ml-10 space-x-2 mt-4">
              <span>Make a donation</span>
              <Icon
                icon="material-symbols-light:play-arrow-rounded"
                className="text-white text-lg mt-1"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="ml-29 text-white py-12 px-6 md:px-16 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          You may also be intersted in
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#23262D]  overflow-hidden shadow-lg"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Content;
