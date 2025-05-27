import React from 'react';
import image1 from "../../assets/Images/Ellipse 104.png";
import image2 from "../../assets/Images/Ellipse 101.png";
import image3 from "../../assets/Images/Ellipse 103.png";
import image4 from "../../assets/Images/Ellipse 100.png";
import image5 from "../../assets/Images/Ellipse 102.png";

const SecondMatch = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div className="flex flex-wrap items-center justify-center jost gap-2 sm:gap-4">
      {/* Overlapping Images */}
      <div className="flex -space-x-5 ">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`user-${index}`}
            className="w-13 h-13 rounded-full border-2 border-white object-cover"
          />
        ))}
      </div>

      {/* Text and Number */}
      <div className="flex items-start space-x-1 sm:space-x-2">
        <span className="text-2xl sm:text-3xl md:text-5xl font-medium text-black mt-2 ml-[-4px] sm:ml-0">
          &
        </span>
        <span className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#FF5A60] mt-2">
          16
        </span>
        <span className="text-sm sm:text-base md:text-lg text-black mt-2 font-medium leading-5">
          Recently<br />Joined
        </span>
        <span className="text-3xl sm:text-5xl ml-1">›</span>
      </div>
    </div>
  );
};

export default SecondMatch;
