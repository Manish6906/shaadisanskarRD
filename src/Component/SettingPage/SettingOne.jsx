import React, { useState } from 'react';

function SettingOne() {
  const [activeDot, setActiveDot] = useState(null); // Track which dot is clicked

  // Function to toggle the active dot
  const handleDotClick = (index) => {
    setActiveDot(index === activeDot ? null : index); // Toggle between active and inactive
  };

  return (
    <>
      <div className="p-2 md:p-4 md:px-10 jost md:py-5">
        <div className="bg-[#FFCCA8] p-2 md:py-3 md:px-5 rounded-md">
          <div className="flex justify-center gap-3 mt-3">
            <button className="px-5 py-1 cursor-pointer bg-[#FF5A60] text-white text-center rounded-full">
              Photo
            </button>
            <button className="px-5 py-1 cursor-pointer bg-black text-white text-center rounded-full">
              Settings
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-2xl font-bold ml-4 text-black">Photo</h1>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div
                    onClick={() => handleDotClick(1)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${activeDot === 1 ? 'bg-[#EB5757]' : 'bg-white'}`}
                  />
                  <p className="text-black">Visible to all Members (Recommended)</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    onClick={() => handleDotClick(2)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${activeDot === 2 ? 'bg-[#EB5757]' : 'bg-white'}`}
                  />
                  <p className="text-black">Visible to Members I like and to all Premium Members</p>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-2xl font-bold ml-4 text-black">Album</h1>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div
                    onClick={() => handleDotClick(3)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${activeDot === 3 ? 'bg-[#EB5757]' : 'bg-white'}`}
                  />
                  <p className="text-black">Visible to Members I like and to all Premium Members</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    onClick={() => handleDotClick(4)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${activeDot === 4 ? 'bg-[#EB5757]' : 'bg-white'}`}
                  />
                  <p className="text-black">Only visible to members I like</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingOne;
