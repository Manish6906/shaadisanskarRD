import React, { useState } from 'react';
import { FaEyeSlash, FaArrowLeft } from 'react-icons/fa';

function SettingSix() {
  const [selectedDuration, setSelectedDuration] = useState('');

  const durations = ['1 Week', '2 Week', '3 Week'];

  return (
    <div className='p-2'>
    <div className="relative p-5 bg-[#FF5A60] rounded-lg shadow-md max-w-xl  mx-auto mt-6 text-center">
      {/* Left Arrow positioned at the top-left with black background */}
      <div className="absolute top-3 left-4 bg-black p-1 rounded-full cursor-pointer">
        <FaArrowLeft className="text-white text-lg" />
      </div>

      {/* Centered Icon and Title */}
      <div className="flex flex-col items-center mb-3 text-[#FF5A60] text-3xl">
        <div className="bg-white rounded-full p-4 shadow-md">
          <FaEyeSlash />
        </div>
        <h1 className="font-semibold text-white text-xl mt-2">Hide Profile</h1>
      </div>

      <p className="text-white mb-4">Hiding your profile will make it invisible.</p>
      {/* Thinner and smaller Horizontal Line */}
      <hr className="my-4 border-t-[1px] border-white w-3/4 mx-auto" />

      <p className="text-white font-medium mb-4">How long would you like to hide your profile for?</p>

      {/* Duration Options with dot */}
      <div className="flex flex-col items-center gap-3 mb-6 px-4">
        {durations.map((duration) => (
          <label
            key={duration}
            className="flex items-center gap-3 text-white cursor-pointer text-lg"
          >
            <input
              type="radio"
              name="hideDuration"
              value={duration}
              checked={selectedDuration === duration}
              onChange={() => setSelectedDuration(duration)}
              className={`w-6 h-6 border-2 rounded-full ${selectedDuration === duration ? 'bg-white border-white' : 'bg-[#FF5A60] border-white'} appearance-none`}
            />
            <span className={`${selectedDuration === duration ? 'text-white' : 'text-white'}`}>{duration}</span>
          </label>
        ))}
      </div>

      {/* Hide Profile Button */}
      <div className="flex justify-center">
        <button className="bg-black text-white px-6 py-2 rounded-full cursor-pointer">
          Hide My Profile
        </button>
      </div>
    </div>
    </div>
  );
}

export default SettingSix;
