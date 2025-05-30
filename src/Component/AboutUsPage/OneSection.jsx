import React from 'react';
import emoji from '../../assets/Images/Untitled-1 2.png';

function OneSection({name}) {
  return (
    <div className="relative w-full h-60 sm:h-auto flex justify-center  items-cente bg-red-400">
      {/* Background Image */}
      <img src={emoji} alt="emoji" className="w-70 h-70 object-cover ml-170 " />

      {/* Responsive "About Us" Text */}
      <p className="absolute left-1/7 sm:right-6 md:left-10 lg:right-40 top-1/2 mt-10 transform -translate-y-1/2 
                    text-[20px] sm:text-[25px] md:text-[45px] lg:text-[45px] 
                    font-medium text-transparent bg-clip-text bg-white tracking-widest">
       {name}
      </p>
    </div>
  );
}

export default OneSection;
