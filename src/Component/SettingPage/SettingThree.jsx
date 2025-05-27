import React, { useState } from 'react';

function SettingThree() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = () => {
    // You can send `selectedOption` to your backend or handle it as needed
    alert(`Selected: ${selectedOption}`);
  };

  return (
   <div className='md:px-5'>
     <div className="bg-[#FFE7D6] p-6 jost rounded-lg shadow-md">
      <div className="md:flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h1 className="text-black text-xl font-bold">My Contact Settings</h1>
        </div>
      </div>

      {/* Inner Section */}
      <div className="py-3">
        <div className="bg-white text-black p-6 rounded-md shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-3">Contact Display Setting</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="contactSetting"
                  value="onlyPremium"
                  checked={selectedOption === 'onlyPremium'}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="appearance-none w-4 h-4 border-2 border-black rounded-full checked:bg-[#FF5A60] checked:border-[#FF5A60] transition"
                />
                <p>Only Premium Members</p>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="contactSetting"
                  value="premiumLikeYou"
                  checked={selectedOption === 'premiumLikeYou'}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="appearance-none w-4 h-4 border-2 border-black rounded-full checked:bg-[#FF5A60] checked:border-[#FF5A60] transition"
                />
                <p>Only Premium Members like you</p>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="contactSetting"
                  value="noOne"
                  checked={selectedOption === 'noOne'}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="appearance-none w-4 h-4 border-2 border-black rounded-full checked:bg-[#FF5A60] checked:border-[#FF5A60] transition"
                />
                <p>No one (Matches won't be able to call you)</p>
              </label>
            </div>
          </div>

         

          <div className="flex justify-start gap-3">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-[#FF5A60] text-black cursor-pointer rounded-full hover:bg-[#e14b52] transition"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}

export default SettingThree;
