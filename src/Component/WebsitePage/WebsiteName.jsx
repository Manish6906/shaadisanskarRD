import React from "react";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";





const features = [
  {
    icon: <span className="text-2xl  text-[#DC8800] sm:text-3xl"><FaStar /></span>,
    title: "A New Era of Matchmaking",
    description:
      "Modern matchmaking designed for serious relationships and meaningful connections.",
  },
  {
    icon: <span className="text-2xl text-[#FF0000] sm:text-3xl"><FaHeart /></span>,
    title: "Find Your Perfect Match",
    description:
      "Advanced algorithms and personalized recommendations to help you connect with like-minded individuals.",
  },
  {
    icon: <span className="text-xl text-[#53321B] sm:text-2xl"><FaLock /></span>,
    title: "Your Privacy, Our Priority",
    description:
      "Full control over your profile, photos, and conversations—your data stays secure.",
  },
  {
    icon: <span className="text-xl text-[#379D00] sm:text-2xl"><FaCheckSquare /></span>,
    title: "Verified & Secure",
    description:
      "AI-powered verification and strict security measures to ensure a genuine matchmaking experience.",
  },
];

function WebsiteName() {
  return (
    <div className="bg-[#DE5353] text-white py-2 px-4 jost  sm:px-6 md:px-10 text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl mt-6 font-semibold mb-1">
        Why Register on Shaadi Sanskar?
      </h2>
      <div className="w-20 sm:w-28 h-1 bg-white mx-auto mb-4"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6  justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-white rounded-xl p-4 sm:p-5 flex flex-col items-center text-center gap-2"
          >
            <div className="bg-[#F7D7D7] p-3 sm:p-4 rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-base sm:text-lg font-semibold gilda-display-regular">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base font-normal">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebsiteName;
