import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
// import picture from "../../assets/Images/Group 22.png";
import Logo2 from '../../assets/Images/Shaadi Sanskar 2.png';


function SecondFooter() {
  return (
    <div className="bg-[#53321B] p-6 gilda-display-regular  sm:p-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between text-white">
      {/* Left: Logo */}
      <div className="flex justify-center md:justify-start">
        <img src={Logo2} alt="Logo2" className="w-24 sm:w-28 md:w-32" />
      </div>

      {/* Center: Social Icons */}
      <div className="flex justify-center gap-4 flex-wrap">
        {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, idx) => {
          const hoverColors = [
            "hover:text-[#E1306C]", // Instagram
            "hover:text-[#1877F2]", // Facebook
            "hover:text-[#1DA1F2]", // Twitter
            "hover:text-[#0077B5]", // LinkedIn
          ];

          return (
            <div
              key={idx}
              className={`bg-[#D8C1A6] text-[#4B2B14] rounded-full p-3 text-xl transition hover:scale-105 ${hoverColors[idx]}`}
            >
              <Icon />
            </div>
          );
        })}
      </div>

      {/* Right: Contact */}
      <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
        <h3 className="text-xl sm:text-2xl font-normal mr-3">Contact us</h3>
        <input
          type="email"
          placeholder="Enter Your Email"
          aria-label="Email"
          className="w-64 p-2 border border-white rounded-full bg-transparent text-white placeholder:text-white focus:outline-none"
        />
      </div>
    </div>
  );
}

export default SecondFooter;
 