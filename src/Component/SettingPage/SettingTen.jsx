import React, { useEffect } from 'react';
import { IoCheckmark } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function SettingTen() {
const navigate= useNavigate()

  useEffect(()=>
  {
    setTimeout(()=>
    {
      navigate("/register/step-one")
    },1000)
  })
  return (
    <div className="flex items-center jost justify-center min-h-screen px-4 py-16 bg-white">
      <div className="w-full max-w-md bg-[#FF5A60] text-white flex flex-col items-center space-y-6 p-6 rounded-2xl shadow-lg">

        {/* Check Icon in White Circle */}
        <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full">
          <IoCheckmark className="text-[#FF5A60] text-5xl md:text-6xl" />
        </div>

        {/* Success Message */}
        <h1 className="text-xl md:text-2xl font-semibold text-center leading-snug">
          Your profile is deleted successfully
        </h1>
      </div>
    </div>
  );
}

export default SettingTen;
