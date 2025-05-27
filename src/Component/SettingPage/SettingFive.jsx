import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function SettingFive() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="bg-[#FFC6A8] text-black py-4 px-5 flex items-center justify-between relative">
      {/* Title */}
      <h1 className="text-2xl font-semibold">Hide/Delete Profile</h1>

      {/* Dropdown Trigger */}
      <div className="flex items-center gap-1 cursor-pointer" onClick={toggleOptions}>
        <ChevronDown className={`w-5 h-5 transition-transform ${showOptions ? 'rotate-180' : ''}`} />
      </div>

      {/* Options Menu */}
      {showOptions && (
        <div className="absolute right-5 top-full mt-2 bg-white shadow-lg rounded-2xl w-48 z-10">
          <ul className="text-sm text-black">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Hide Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete Profile</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SettingFive;
