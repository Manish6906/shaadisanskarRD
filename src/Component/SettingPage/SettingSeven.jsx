import React from 'react';
import { MdDelete } from 'react-icons/md';
import { FaChevronRight, FaArrowLeft } from 'react-icons/fa';

function SettingSeven() {
  const reasons = [
    'Found my match',
    'Taking a break',
    'Unsatisfactory Experience',
    'Other reason',
  ];

  return (
    <div className='p-2'>
    <div className="relative p-6 bg-[#FF5A60] rounded-lg max-w-xl mx-auto mt-10 text-white">
      {/* Left Arrow */}
      <div className="absolute top-4 left-4 bg-black text-white p-2 rounded-full shadow-md cursor-pointer">
        <FaArrowLeft />
      </div>

      {/* Icon and Title */}
      <div className="flex flex-col items-center mb-6">
        <div className="bg-white text-[#FF5A60] p-4 rounded-full shadow-md mb-3">
          <MdDelete className="text-3xl" />
        </div>
        <h1 className="text-xl font-semibold text-center">
          Why do you want to delete your profile?
        </h1>
      </div>

      {/* Reason Options */}
      <div className="flex flex-col gap-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-white px-4 py-3 rounded-full border border-white cursor-pointer"
          >
            <h1 className="font-medium">{reason}</h1>
            <FaChevronRight className="text-xl" />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default SettingSeven;
