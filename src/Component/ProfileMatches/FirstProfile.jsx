import React from 'react';
import image1 from "../../assets/Images/Rectangle 180.png";
import Navbar3 from '../Navbar/Navbar3';
import hearts from '../../assets/Images/Group 211.png'; 

function FirstProfile() {
  return (
    <div
      className="relative bg-white py-1 px-1 sm:px-8 min-h-screen"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay to reduce background opacity */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />

      {/* Main Content */}
      <div className="relative z-10">

        <div className="text-center mt-36 px-4">
          <h1 className="text-5xl text-amber-50 font-serif flex justify-center items-center gap-4 flex-wrap">
            <img src={hearts} alt="heart" className="w-8 h-10 sm:w-10 sm:h-10 gilda-display-regular" />
            Today’s Perfect Matches
            <img src={hearts} alt="heart" className="w-8 h-8 sm:w-10 sm:h-10" />
          </h1>

          <h2 className="text-amber-50 text-xl font-normal mt-2 jost ">
            Explore handpicked connections made just for you today.
          </h2>

          <p className="text-amber-50 text-xl font-normal jost">
            Love could be a heartbeat away — take the first step.
          </p>

          <div className="flex justify-center mt-4">
            <button className="bg-[#EB5757] text-white px-6 py-2 rounded-full jost hover:bg-amber-50 hover:text-black transition-transform transform hover:scale-105 hover:shadow shadow-black">
              View Matches
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstProfile;
