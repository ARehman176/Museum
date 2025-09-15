import React from "react";
import image2 from "../assets/image2.png";

const Gardening = () => {
  return (
    <div className="bg-black flex justify-center items-center py-20">
      <img
        src={image2}
        alt="Gardening"
        className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl h-auto"
      />
    </div>
  );
};

export default Gardening;
