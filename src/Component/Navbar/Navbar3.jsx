import React from 'react';
// import Group from '../../assets/Images/Group 22.png'; // Make sure this image has white content
import { Link } from 'react-router-dom';
import Logo2 from '../../assets/Images/Shaadi Sanskar 2.png';


function Navbar3() {
  return (
    <div className="p-4 bg-transparent shadow-none sticky top-0 z-50 ">
      <div className="flex justify-between items-center relative -top-7">
        {/* Logo */}
        <Link to="/">
        <div className="w-auto ">
          <img
            src={Logo2}
            alt="Logo2"
            className="w-full h-30 object-contain"
          />
        </div>
        </Link>

        {/* Help Button */}
        <div>
          <button className="bg-[#DE5353] cursor-pointer text-white px-6 py-1 jost rounded-full text-sm hover:bg-red-600 transition">
            Help
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar3;
