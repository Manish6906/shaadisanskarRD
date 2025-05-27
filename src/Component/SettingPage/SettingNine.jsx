import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function SettingNine() {
  let API= import.meta.env.VITE_APP_API_URL
  const navigate = useNavigate();
  const location = useLocation();

  const selectedReason = location.state?.reason;

  // Get userId from localStorage
  const userProfile = JSON.parse(localStorage.getItem('userProfile'));
  let token = localStorage.getItem("token")
  const userId = userProfile?._id;
  console.log(userId);
  

  const handleCancel = () => {
    navigate("/delete");
  };

  const handleDelete = async () => {
    if (!selectedReason || !userId) {
      alert("Missing reason or user ID.");
      return;
    }

    try {
      const res = await axios.post(
  `${API}delete/delete-profile/${userId}`,
  { reason: selectedReason },
  { headers: { Authorization: `Bearer ${token}` } }
);


      if (res.status === 200) {
        alert("Profile deleted successfully.");
        localStorage.clear()
        navigate("/profiledelete");
      } else {
        alert("Something went wrong!");
      }
    } catch (err) {
      console.error("Deletion failed:", err);
      alert("Failed to delete profile.");
    }
  };

  return (
    <div className="min-h-screen flex items-center jost justify-center bg-white px-4 py-8">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white text-black rounded-2xl p-6 md:p-8 space-y-6 border border-gray-200 shadow-md">

        {/* Heading */}
        <div className="text-center space-y-3">
          <h1 className="text-xl md:text-2xl font-bold">Confirm Profile Deletion</h1>
          <p className="text-sm md:text-base text-black leading-relaxed">
            You will permanently lose all profile information,<br className="hidden sm:block" />
            match interactions, and paid membership.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 gap-4">
          <button
            onClick={handleCancel}
            className="w-full sm:w-auto rounded-full cursor-pointer text-base font-medium"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="w-full sm:w-auto rounded-full cursor-pointer text-base font-medium text-[#FF5A60]"
          >
            Delete Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingNine;
