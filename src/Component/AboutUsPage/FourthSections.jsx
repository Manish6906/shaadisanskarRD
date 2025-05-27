import React from 'react';
import sunimage from '../../assets/Images/sunimage.png';
import Filter from '../../assets/Images/Filter.png';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function FourthSections() {
  const navigate = useNavigate();
   
  
   const viewProfile = () => {
    navigate("/allprofile");
  };
  
  
    
 
  return (
    <div
      className="relative w-full h-[32rem] sm:h-[28rem]" // increased height
      style={{
        backgroundImage: `url(${sunimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Filter Image over the background */}
      <img
        src={Filter}
        alt="Filter"
        className="absolute -top-0 left-0 w-3/4 sm:w-1/2  lg:h-[28rem]  z-10"
      />

      {/* Text Content */}
      <div className="absolute top-1/6 left- lg:left-12 lg:top-1/3 lg:left-16 xl:top-1/2 xl:left-20 transform -translate-y-1/2 z-20 text-black max-w-xs sm:max-w-md px-2">
        <h1 className="text-xl sm:text-3xl font-medium mb-2">
          Best Ways Find Your True
        </h1>
        <h2 className="text-2xl sm:text-4xl font-semibold mb-4 text-[#EB5757]">
          Sole Mate
        </h2>
        
        <button className="bg-[#EB5757] text-white cursor-pointer px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base"
        onClick={viewProfile}>
          Join Now
        </button>
        
      </div>
    </div>
  );
}

export default FourthSections;
