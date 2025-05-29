import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SettingEleven() {
  const [isHidden, setIsHidden] = useState(false); // false का मतलब प्रोफ़ाइल दिख रही है

  const handleToggleHide = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div className="px-4 py-10 jost bg-[#FFCCA8] flex items-center justify-center">
      <div className="w-full space-y-8">

        {/* मुख्य शीर्षक */}
        <h1 className="text-2xl font-bold text-black">
          प्रोफ़ाइल हटाएं
        </h1>

        {/* प्रोफ़ाइल छुपाने का कार्ड */}
        {/* <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">
              {isHidden ? 'प्रोफ़ाइल दिखाएं' : 'प्रोफ़ाइल छुपाएं'}
            </h2>
            <button
              onClick={handleToggleHide}
              className="px-5 py-1.5 rounded-full cursor-pointer  bg-[#FF5A60] text-white text-sm font-medium"
            >
              {isHidden ? 'दिखाएं' : 'छुपाएं'}
            </button>
          </div>
          <p className="text-sm text-gray-600">
            {isHidden
              ? 'आपकी प्रोफ़ाइल फिलहाल छुपी हुई है।'
              : 'आपकी प्रोफ़ाइल फिलहाल दिख रही है।'}
          </p>
          <p className="text-sm text-gray-600">
            {isHidden
              ? 'जब आप अपनी प्रोफ़ाइल दिखाएंगे, तो आप फिर से Shaadi.com पर दिखाई देंगे और दूसरों के साथ संवाद कर सकेंगे।'
              : 'जब आप अपनी प्रोफ़ाइल छुपाएंगे, तो आप Shaadi.com पर दिखाई नहीं देंगे और न ही निमंत्रण या संदेश भेज सकेंगे।'}
          </p>
        </div> */}

        {/* प्रोफ़ाइल हटाने का कार्ड */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">प्रोफ़ाइल हटाएं</h2>
            <Link to="/delete">
              <button className="px-5 py-1.5 rounded-full cursor-pointer bg-[#FF5A60] text-white text-sm font-medium hover:bg-red-500 transition">
                हटाएं
              </button>
            </Link>
          </div>
          <p className="text-sm text-gray-600">Shaadi.com से अपनी प्रोफ़ाइल हटाएं</p>
          <p className="text-sm text-gray-600">
            आप स्थायी रूप से अपनी सारी प्रोफ़ाइल जानकारी, मेल-जोल, और खरीदी गई सदस्यता खो देंगे।
          </p>
        </div>

      </div>
    </div>
  );
}

export default SettingEleven;
