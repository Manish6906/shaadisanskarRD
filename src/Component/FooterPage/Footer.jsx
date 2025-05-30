import React from "react";
import photo1 from "../../assets/Images/Rectangle 45 (1).png";
import photo2 from "../../assets/Images/Rectangle 47 (1).png";
import photo3 from "../../assets/Images/Rectangle 50 (1).png";
import photo4 from "../../assets/Images/Rectangle 48 (1).png";
import photo5 from "../../assets/Images/Rectangle 49 (1).png";
import photo6 from "../../assets/Images/Rectangle 51 (1).png";
import Logo2 from '../../assets/Images/Shaadi Sanskar 2.png';

import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: FaInstagram, url: "https://www.instagram.com/shaadi_sanskar?igsh=MW0yc3lkcm50bXNvag==" },
  { icon: FaFacebookF, url: "https://www.facebook.com/share/19Wzi4je1y/" },
];

const obj = [
  { image: photo1 },
  { image: photo2 },
  { image: photo3 },
  { image: photo4 },
  { image: photo5 },
  { image: photo6 },
];

const Footer = () => {
  return (
    <footer className="bg-[#53321B] text-[#EFE1CD] px-6 py-12 sm:px-10 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b-2 border-gray-50 pb-5">
        
        {/* Brand Section */}
        <div className="jost">
          <img src={Logo2} alt="Logo2" className="h-20 w-30 mb-2" />
          <p className="mb-1">शादी संस्कार - जहां सच्चा प्यार शुरू होता है।</p>
          <p className="mb-1">
            शादी संस्कार में, हम उन रिश्तों में विश्वास करते हैं जो सच्चे हों और उम्र भर साथ निभाएं। एक भरोसेमंद प्लेटफॉर्म से जुड़ें जहां सच्चे और अर्थपूर्ण रिश्तों की शुरुआत होती है।
          </p>
        </div>

        {/* Gallery Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 gilda-display-regular">गैलरी</h3>
          <div className="grid grid-cols-3 gap-2">
            {obj.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-20 object-cover"
              />
            ))}
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="">
          <h3 className="text-xl font-semibold gilda-display-regular lg:text-center">हमें फॉलो करें</h3>
          <div className="flex flex-wrap mt-2 lg:justify-center items-center gap-2">
            {socialLinks.map(({ icon: Icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D0BEA9] border border-[#EFE1CD] rounded-lg p-3 w-12 h-12 flex items-center justify-center hover:scale-105 transition"
              >
                <Icon className="text-[#53321B] text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 gilda-display-regular">संपर्क करें</h3>
          <input
            type="email"
            placeholder="अपना ईमेल दर्ज करें"
            aria-label="Email"
            className="w-full p-2 mb-4 border-2 border-white rounded-full bg-transparent text-white placeholder:text-white"
          />
        </div>
      </div>

      <div className="mt-3 text-[10px] sm:text-[15px] lg:text-[17px]">
        <ul className="flex justify-center items-center gap-1">
          <li className="border-r-2 border-white px-2">
            <Link to="/privacy">प्राइवेसी पॉलिसी</Link>
          </li>
          <li className="border-r-2 border-white px-2">
            <Link to="/termandcondition">नियम और शर्तें</Link>
          </li>
          <li className="px-2">
            <Link to="/refund">रद्दीकरण और रिफंड</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
