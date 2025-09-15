import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import image1 from '../assets/image1.png'
import gallery1 from '../assets/gallery1.png'
import gallery2 from '../assets/gallery2.png'
import gallery3 from '../assets/gallery3.png'
import gallery4 from '../assets/gallery4.png'
const Gallery = () => {
  const slides = [
    {
      id: 1,
      image: gallery1,
      title: "Excepteur sint occan",
      desc: "Duis aute irure reprehenderit voluptate velit esse cillum euca fugiat pariatur Excepteur sint occaecat cupidatat.",
    },
    {
      id: 2,
      image: gallery2,
      title: "Nemo enim ipsame",
      desc: "Duis aute irure reprehenderit volupte velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.",
    },
    {
      id: 3,
      image: gallery3,
      title: "Quis autem vel eum",
      desc: "Duis aute irure reprehenderit voluptate velit esse cillum euca fugiat pariatur Excepteur sint occaecat cupidatat.",
    },
    {
      id: 4,
      image: gallery4,
      title: "Aspernatur aut oditut",
      desc: "Duis aute irure reprehenderit voluptate velit esse cillum euca fugiat pariatur Excepteur sint occaecat cupidatat.",
    },
    {
      id: 5,
      image: gallery1,
      title: "Excepteur sint occan",
      desc: "Duis aute irure reprehenderit voluptate velit esse cillum euca fugiat pariatur Excepteur sint occaecat cupidatat.",
    },
    {
      id: 6,
      image: gallery2,
      title: "Nemo enim ipsame",
      desc: "Duis aute irure reprehenderit voluptate velit esse cillum euca fugiat pariatur Excepteur sint occaecat cupidatat.",
    },
    {
      id: 7,
      image: gallery3,
      title: "Quis autem vel eum",
      desc: "Duis aute irure reprehenderit voluptate velit esse cillum euca fugiat pariatur Excepteur sint occaecat cupidatat.",
    },
    {
      id: 8,
      image: gallery4,
      title: "Aspernatur aut oditut",
      desc: "Duis aute irure reprehenderit voluptate velit esse cillum euca fugiat pariatur Excepteur sint occaecat cupidatat.",
    },
    {
      id: 9,
      image: gallery1,
      title: "Excepteur sint occan",
      desc: "Duis aute irure reprehenderit voluptate velit esse cillum euca fugiat pariatur Excepteur sint occaecat cupidatat.",
    },
     {
      id: 10,
      image: gallery2,
      title: "Nemo enim ipsame",
      desc: "Duis aute irure reprehenderit voluptate velit esse cillum euca fugiat pariatur Excepteur sint occaecat cupidatat.",
    },
     {
      id: 11,
      image: gallery3,
      title: "Quis autem vel eum",
      desc: "Duis aute irure reprehenderit voluptate velit esse cillum euca fugiat pariatur Excepteur sint occaecat cupidatat.",
    },
     {
      id: 12,
      image: gallery4,
      title: "Aspernatur aut oditut",
      desc: "Duis aute irure reprehenderit voluptate velit esse cillum euca fugiat pariatur Excepteur sint occaecat cupidatat.",
    },
   
   
   
   
  ];

  // show 4 at a time (desktop)
  const itemsPerPage = 4;
  const totalPages = Math.ceil(slides.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const prevSlide = () => {
    setCurrentPage((prev) =>
      prev === 0 ? totalPages - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentPage((prev) =>
      prev === totalPages - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-black text-white py-10 px-6">
        
        
      <h2 className="text-4xl  mb-6 ml-40">Galleries</h2>

      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        {/* Slides wrapper */}
        
        <div
          className="flex transition-transform ease-out duration-500"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-w-full"
            >
              {slides
                .slice(
                  pageIndex * itemsPerPage,
                  pageIndex * itemsPerPage + itemsPerPage
                )
                .map((slide) => (
                  <div
                    key={slide.id}
                    className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
  onClick={prevSlide}
  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 "
>
  <FaChevronLeft />
</button>

{/* Right Button */}
<button
  onClick={nextSlide}
  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 "
>
  <FaChevronRight />
</button>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-3 h-3 rounded-full ${
                currentPage === idx ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Gallery;
