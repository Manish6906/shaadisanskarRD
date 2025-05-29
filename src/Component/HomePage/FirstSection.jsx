import React from 'react';
import theme from '../../assets/Images/theme.png'; // Background mandap image
import couples from '../../assets/Images/couples.png'; // Ce
import group367 from '../../assets/Images/Group 367.png';
import bgImage from '../../assets/Images/Group 369.png';


function FirstSection() {
  return (
    <div
      className="relative w-full  bg-cover bg-center"
     
    >
      {/* Overlay for darker contrast if needed */}
      <div className="absolute inset-0 bg-black/20 z-0" />
<img src={bgImage}  />

      {/* Bottom content box */}
      <div className="absolute bottom-0 w-full z-20">
        <div className="  px-6 sm:px-10 pt-10 pb-2 lg:pb-8 text-center shadow-xl">


          {/* Heading */}
          <h2 className="text-[8px] md:text-[20px] lg:text-2xl xl:text-4xl xl:mb-9 font-semibold gilda-display text-gray-800">
            <span className="italic font-semibold text-gray-900">
              Royal matches made with Tradition and Love
            </span>
          </h2>

          {/* Description */}
          <p className="text-[5px] sm:text-base md:text-[10px] lg:text-[15px] xl:text-2xl xl:mb-4 text-gray-600 mt-1 max-w-2xl mx-auto jost font-light">
            Indian most Trusted Matrimonial platform for meaningful, cultural, and lifelong connection.
          </p>

          {/* Button */}
          <button className="mt-2 px-2 py-1 md:px-6 md:py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-md transition text-[5px] sm:text-base">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
