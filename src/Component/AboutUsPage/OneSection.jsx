import React from 'react';
import emoji from '../../assets/Images/emoji.png';

function OneSection({name}) {
  return (
    <div className="relative w-full h-60 sm:h-auto flex justify-center  items-center">
      {/* Background Image */}
      <img src={emoji} alt="emoji" className="w-full h-full object-cover " />

      {/* Responsive "About Us" Text */}
      <p className="absolute left-1/7 sm:right-6 md:left-10 lg:right-40 top-1/2 transform -translate-y-1/2 
                    text-[20px] sm:text-[25px] md:text-[45px] lg:text-[45px] 
                    font-medium text-transparent bg-clip-text bg-white tracking-widest">
       {name}
      </p>
    </div>
  );
}

export default OneSection;
