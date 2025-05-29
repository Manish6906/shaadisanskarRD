import React from 'react';
import theme from '../../assets/Images/theme.png'; // Background mandap image
import couples from '../../assets/Images/couples.png'; // Ce
import group367 from '../../assets/Images/Group 367.png';


function FirstSection() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${theme})` }}
    >
      {/* Overlay for darker contrast if needed */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Centered couple image */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img
          src={couples}
          alt="Couple"
          className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[480px] drop-shadow-2xl"
        />
      </div>

      {/* Bottom content box */}
      <div className="absolute bottom-0 w-full z-20">
        <div className="bg-white/90 backdrop-blur-md rounded-t-[60px] px-6 sm:px-10 pt-10 pb-12 text-center shadow-xl">
          {/* Decorative flower icon */}
          <div className="flex justify-center mb-4">
            <div className="bg-white p-2 rounded-full shadow-md border border-gray-200">
              <img
                src={group367}
                alt="group367"
                className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] object-contain"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold gilda-display text-gray-800">
            <span className="italic font-semibold text-gray-900">
              Royal matches made with Tradition and Love
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-xl mx-auto jost font-light">
            Indian most Trusted Matrimonial platform for meaningful, cultural, and lifelong connection.
          </p>

          {/* Button */}
          <button className="mt-6 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-md transition text-sm sm:text-base">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
