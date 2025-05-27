import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SettingEleven() {
  const [isHidden, setIsHidden] = useState(false); // false means profile is visible

  const handleToggleHide = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div className="px-4 py-10 jost bg-[#FFCCA8] flex items-center justify-center">
      <div className="w-full space-y-8">

        {/* Main Title */}
        <h1 className="text-2xl font-bold text-black">
          Delete Profile
        </h1>

        {/* Hide Profile Card */}
        {/* <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">
              {isHidden ? 'Unhide Profile' : 'Hide Profile'}
            </h2>
            <button
              onClick={handleToggleHide}
              className="px-5 py-1.5 rounded-full cursor-pointer  bg-[#FF5A60] text-white text-sm font-medium"
            >
              {isHidden ? 'Unhide' : 'Hide'}
            </button>
          </div>
          <p className="text-sm text-gray-600">
            {isHidden
              ? 'Your profile is currently hidden.'
              : 'Your profile is currently visible.'}
          </p>
          <p className="text-sm text-gray-600">
            {isHidden
              ? 'When you unhide your profile, you will become visible again on Shaadi.com and be able to interact with others.'
              : 'When you hide your profile, you will not be visible on Shaadi.com. You will neither be able to send invitations or messages.'}
          </p>
        </div> */}

        {/* Delete Profile Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Delete Profile</h2>
            <Link to="/delete">
            <button className="px-5 py-1.5 rounded-full cursor-pointer bg-[#FF5A60] text-white text-sm font-medium hover:bg-red-500 transition">
              Delete
            </button>
            </Link>
          </div>
          <p className="text-sm text-gray-600">Delete your Profile from Shaadi.com</p>
          <p className="text-sm text-gray-600">
            You will permanently lose all profile information, match interactions, and paid memberships.
          </p>
        </div>

      </div>
    </div>
  );
}

export default SettingEleven;
