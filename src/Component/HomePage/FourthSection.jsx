import React from "react";
import Image15 from "../../assets/Images/Image15.png";
import ballon from "../../assets/Images/ballon.png";
import Ellipse1 from "../../assets/Images/Ellipse1.png";
import Ellipse2 from "../../assets/Images/Ellipse2.png";
import Ellipse3 from "../../assets/Images/Ellipse3.png";
import Heart from "../../assets/Images/Heart.png";
import Ellipse4 from "../../assets/Images/Ellipse4.png";
import { Link } from "react-router-dom";

function FourthSection() {
  return (
    <div>
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-12 gilda-display-regular text-black text-center">
  Featured Prof
  <span className="relative inline-block mx-[2px]">
    <span className="inline-block">
      <svg
        className="w-[12px] h-[20px] lg:w-[18px] lg:h-[30px]"
        viewBox="0 0 6 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="3" y1="0" x2="3" y2="100" stroke="black" strokeWidth="15" />
      </svg>
    </span>
    <span className="absolute top-[-14px] sm:top-[-1px] left-1/2 transform -translate-x-1/2 text-[#EB5757] text-base sm:text-lg">
      ❤️
    </span>
  </span>
  les
</h1>


    <section className="relative  py-20 px-6 md:px-16 text-[#53321B] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 z-10 relative gilda-display-regular">
        {/* Text Content */}
        <div className="space-y-6">
        
          <h2 className="text-3xl sm:text-4xl md:text-5xl ">
       Discover Prem
            <span className="relative inline-block">
              <span className="inline-block">
                <svg className="w-[10px] h-[14px] lg:w-[15px] lg:h-[20px]" viewBox="0 0 6 100" xmlns="http://www.w3.org/2000/svg">
                  <line x1="3" y1="0" x2="3" y2="100" stroke="#53321B" strokeWidth="20" />
                </svg>
              </span>
              <span className="absolute top-[-12px] sm:top-[-8px] left-1/2 transform -translate-x-1/2  text-lg">
                ❤️
              </span>
            </span>
         num Members Ready for a Meaningful Connection
          </h2>
          <p className="text-black text-base jost">
            Looking for someone special? Explore our curated selection of genuine, verified
            members who are serious about finding love and building a lasting relationship.
            Real people. Real intentions. Real love.

          </p>
        <Link to="/userprofile">
          <button className="bg-[#DE5353] text-white px-6 py-2 cursor-pointer rounded-full  jost shadow">
            View Profile
          </button>
          </Link>
        </div>

        {/* Main Image with Floating Elements */}
        <div className="relative w-full max-w-md mx-auto">
          {/* Main Circle Image */}
          <img
            src={Image15}
            alt="Profile Highlight"
            className="rounded-full shadow-xl w-full"
          />

          {/* Floating Images Around the Circle */}
          <img
            src={ballon}
            alt="ballon"
            className="absolute top-1/2 -translate-y-1/2 -right-8 sm:-right-44 md:-right-[12.4rem] w-20 md:w-80"
          />
          <img
            src={Ellipse1}
            alt="Ellipse1"
            className="absolute top-16 -left-10 sm:top-24 sm:-left-16 w-12 sm:w-16"
          />
          <img
            src={Ellipse2}
            alt="Ellipse2"
            className="absolute top-2 -right-13 sm:top-3 sm:-right-20 transform -translate-x-1/2 w-14 sm:w-20"
          />
          <img
            src={Ellipse3}
            alt="Ellipse3"
            className="absolute -bottom-12 left-10 sm:-bottom-16 sm:left-14 w-12 sm:w-16"
          />
          <img
            src={Heart}
            alt="Heart"
            className="absolute top-10 left-2 sm:left-4 w-6 sm:w-8"
          />
          <img
            src={Ellipse4}
            alt="Ellipse4"
            className="absolute top-64 -right-1 sm:top-80 sm:-right-14 w-12 sm:w-16"
          />
        </div>
      </div>
    </section>
    </div>
  );
}

export default FourthSection;
