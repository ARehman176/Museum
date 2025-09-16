import React from 'react'
import logo from '../assets/logo.png'
import { FiSearch, FiUpload } from "react-icons/fi";
import pic from '../assets/pic.png'
import { Icon } from "@iconify/react";
import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import gallery4 from '../assets/gallery4.png';
import News from '../Components/News'
import Footer from '../Components/Footer';
const Galliries = () => {
    const galleryItems = [
  {
    image: gallery1,
    title: 'Excepteur sint occan',
    description:
      'Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.',
  },
  {
    image: gallery2,
    title: 'Nemo enim ipsame',
    description:
      'Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.',
  },
  {
    image: gallery3,
    title: 'Quis autem vel eum',
    description:
      'Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.',
  },
  {
    image: gallery4,
    title: 'Aspernatur aut oditut',
    description:
      'Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.',
  },
   {
    image: gallery1,
    title: 'Excepteur sint occan',
    description:
      'Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.',
  },
   {
    image: gallery2,
    title: 'Nemo enim ipsame',
    description:
      'Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.',
  },
   {
    image: gallery3,
    title: 'Quis autem vel eum',
    description:
      'Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.',
  },
   {
    image: gallery4,
    title: 'Aspernatur aut oditut',
    description:
      'Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.',
  },
   {
    image: gallery1,
    title: 'Excepteur sint occan',
    description:
      'Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.',
  },
   {
    image: gallery2,
    title: 'Nemo enim ipsame',
    description:
      'Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.',
  },
   {
    image: gallery3,
    title: 'Quis autem vel eum',
    description:
      'Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.',
  },
   {
    image: gallery4,
    title: 'Aspernatur aut oditut',
    description:
      'Duis aute irure reprehenderit voluptate velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.',
  },

];
  return (
    <div className='bg-black '>
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
        <div
             className="relative h-100 bg-cover bg-center"
            style={{ backgroundImage: `url(${pic})` }}
           >
             {/* Overlay for better text visibility (optional) */}
             <div className="absolute inset-0 bg-black/30"></div>
       
             <div className="relative z-10 flex items-center h-full px-6 md:px-20 ml-30  ">
                <h2 className='text-white text-6xl mt-40 font-semibold'>Excepteur sint occan</h2>
             </div>
            
           </div >
          <div className="mt-10 mb-10 ml-45">
  <a href="/" className="flex items-center text-white  space-x-1">
    <span className='hover:text-gray-400 hover:underline'>Home</span>
    <Icon icon="ri:arrow-left-s-line" className="text-white text-lg mt-1" />
    <span>Galleries</span>
  </a>
</div>

            <hr className="border-gray-700  max-w-6xl ml-46 " />
           <div className=" text-white py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="md:w-2/4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 ml-30">
            Explore more than 60 galleries at the<br/> Museum from home.
          </h2>
          <p className="text-[#929292] mb-4 ml-30">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <ul className="list-disc list-inside text-[#CACACA] space-y-2 ml-30">
            <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</li>
            <li>Suia consequuntur magni dolores eos qui ratione voluptatem</li>
            <li>Exercitationem ullam corporis suscipit laboriosam</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-1/4 mr-30">
          <h3 className="text-xl font-semibold border-b border-gray-600   pb-2 mb-4">Contact us</h3>
          <p className="text-gray-300 mb-2">
            For more information about supporting the Museum:
          </p>
          <p className="text-gray-300 mb-1">
            <span className="font-semibold">Email:</span> contact@museum.com
          </p>
          <p className="text-gray-300 mb-6">
            <span className="font-semibold">Phone:</span> +44 (0)20 7323 8933
          </p>

          <hr className="border-gray-600 mb-6 mt-10" />

          <button className="bg-white w-87 text-black px-6 py-2 flex items-center gap-2 font-medium hover:bg-gray-200 transition mt-10">
            Donate Now
            <Icon icon="ph:arrow-fat-right-fill" className="text-lg ml-44 bg-black text-white p-1" />
          </button>
        </div>
      </div>
    </div>
     <hr className="border-gray-600 mb-6 mt-10 max-w-6xl ml-45 " />
    {/* gallery section  */}
    <div className="ml-29 text-white py-12 px-6 md:px-16 max-w-7xl">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Gallery Highlights</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <div key={index} className="bg-[#23262D]  overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
              <span className="absolute bottom-2 right-2 bg-gray-700 text-sm px-2 py-0.5 rounded-full text-white opacity-90">
                Source
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      <News />
      <Footer />
    </div>
  )
}

export default Galliries
