import React from "react";
import girl1 from "../../assets/Images/Rectangle 394 (1).png";
import smallflower from "../../assets/Images/jnbdjb 1.png";
import smallflower1 from "../../assets/Images/jnbdjb 2.png";

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
        हमारी  <span className="text-red-600 italic">कहानी</span>
      </h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center relative z-10">
        {/* Story Card */}
        <div className="bg-gradient-to-br from-white via-red-50 to-pink-100 w-[90%] sm:w-[320px] h-[400px] rounded-[45%] border border-gray-300 shadow-2xl px-6 py-10 text-center rotate-[4deg] transition-transform duration-500 hover:scale-105 z-10">
          <div className="text-red-600 text-6xl mb-2">❧❧❧</div>
          <h3 className="text-xl font-semibold italic">जब हम पहली बार मिले</h3>
          <p className="text-red-600 text-sm mt-1 mb-3">12 फ़रवरी 2023</p>
          <p className="text-[13px] text-gray-700 leading-relaxed">
            उस दिन कुछ ख़ास था। पहली बार मिले, बातें कीं, और महसूस हुआ कि यही वो रिश्ता है जिसकी हमें तलाश थी।वहीं से हमारी ज़िंदगी की सबसे खूबसूरत कहानी की शुरुआत हुई।
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
