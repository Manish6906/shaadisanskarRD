import React from 'react';
import { Link } from 'react-router-dom';
import Logo2 from '../../assets/Images/Shaadi Sanskar 2.png';

function Navbar3() {
  return (
    <div className="bg-white shadow-none sticky top-0 z-50">
      <div className="flex justify-between items-center px-2 py-1">
        {/* Logo */}
        <Link to="/">
          <div className="h-20 flex items-center">
            <img
              src={Logo2}
              alt="Logo2"
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        {/* Help Button */}
      
        <button className="bg-[#DE5353] text-white px-6 py-1 rounded-full text-sm cursor-pointer hover:bg-red-600 transition">
          Help
        </button>
       
      </div>
    </div>
  );
}

export default Navbar3;
