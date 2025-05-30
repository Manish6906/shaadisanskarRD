import React from "react";
import smallflower from "../../assets/Images/jnbdjb 1.png";
import smallflower1 from "../../assets/Images/jnbdjb 2.png";
import girl1 from '../../assets/Images/Made with insMind-e8b09888a3fe4655ae6a7ad1b89d98c3 (1).png';

const OurStoriesSection = () => {
  return (
    <div className="relative bg-pink-50 py-20 px-4 sm:px-8 lg:px-20 overflow-hidden font-jost">
      {/* Floral corners - enlarged */}
      <img
        src={smallflower}
        alt="smallflower"
        className="absolute top-20 left-0 w-32 sm:w-44 md:w-52"
      />
      <img
        src={smallflower1}
        alt="smallflower1"
        className="absolute top-20 right-0 w-32 sm:w-44 md:w-52"
      />

      {/* Section heading */}
      <h2 className="text-3xl sm:text-4xl text-center font-semibold mb-16 ">
        Our <span className="text-red-600 italic">stories</span>
      </h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center relative z-10">
        {/* Story Card */}
        <div className="bg-gradient-to-br from-white via-red-50 to-pink-100 w-[90%] sm:w-[320px] h-[400px] rounded-[45%] border border-gray-300 shadow-2xl px-6 py-10 text-center rotate-[4deg] transition-transform duration-500 hover:scale-105 z-10">
          <div className="text-red-600 text-6xl mb-2">❧❧❧</div>
          <h3 className="text-xl font-semibold italic">First Time We Meet</h3>
          <p className="text-red-600 text-sm mt-1 mb-3">12 Feb 2023</p>
          <p className="text-[13px] text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
            nulla mi tempor morbi nam ornare neque. Leo diam malesuada enim ac
            arcu urna tempor.
          </p>
          <div className="text-red-600 text-6xl mt-4">❧❧❧</div>
        </div>

        {/* Image - slightly overlapped */}
        <div className="w-[90%] sm:w-[320px] h-[400px] p-2 -ml-10 md:-ml-16 mt-[-20px] md:mt-0 overflow-hidden rounded-[45%] shadow-2xl border-4 border-white -rotate-[4deg] transition-transform duration-500 hover:scale-105 z-0">
          <img
            src={girl1}
            alt="Couple"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStoriesSection;
