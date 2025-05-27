import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

function DetailTwo() {
  let API= import.meta.env.VITE_APP_API_URL
  const [profile, setProfile] = useState({
    growup: '',
    diet: '',
    healthinformation: '',
    disability: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...profile });

  // Fetch profile data on component mount
  let a = JSON.parse(localStorage.getItem("userProfile"))
  let userId= a._id;
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${API}api/profileget/${userId}`);
        setProfile(response.data.data); // Assuming response contains the necessary fields
        setEditData(response.data.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleSave = async () => {
    try {
      // Update profile data with PUT request
      await axios.put(`${API}api/profileupdate/${userId}`, editData);
      setProfile(editData); // Update local profile state
      setIsEditing(false); // Exit editing mode
    } catch (error) {
      console.error("Error updating profile data:", error);
    }
  };

  return (
    <div className='px-5 py-5'>
      <div className='bg-[#FFE7D6] p-5 rounded-md'>
        <div className='md:flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <LuDot className='text-4xl text-red-600' />
            <h1 className='text-red-600 text-base md:text-xl font-bold'>
              Basic & Lifestyle
            </h1>
          </div>
          <div className='flex sm:justify-center'>
            <div
              onClick={() => setIsEditing(true)}
              className='flex items-center mt-2 md:mt-0 gap-2  w-1/3 sm:w-full bg-black cursor-pointer rounded-full text-white px-4 py-1 hover:bg-gray-800 transition'
            >
              <FaPencilAlt />
              <span>Edit</span>
            </div>
          </div>
        </div>

        {/* Inner Section */}
        <div className='py-3'>
          <div className='bg-white text-black p-4 rounded-md md:px-10'>
            <div className='md:flex md:justify-between md:items-start gap-10'>
              {/* Left Column */}
              <div className='flex flex-col space-y-3'>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Grew up in:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.growup}
                      onChange={(e) => setEditData({ ...editData, growup: e.target.value.toUpperCase() })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.growup}</span>
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Diet:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.diet}
                      onChange={(e) => setEditData({ ...editData, diet: e.target.value.toUpperCase() })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.diet}</span>
                  )}
                </p>
              </div>

              {/* Right Column */}
              <div className='flex flex-col space-y-3'>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Health Information:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.healthinformation}
                      onChange={(e) => setEditData({ ...editData, healthinformation: e.target.value.toUpperCase() })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.healthinformation}</span>
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Disability:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.disability}
                      onChange={(e) => setEditData({ ...editData, disability: e.target.value.toUpperCase() })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.disability}</span>
                  )}
                </p>
              </div>
            </div>

            {isEditing && (
              <div className="mt-4 flex justify-end gap-4">
                <button onClick={() => setIsEditing(false)} className="px-4 cursor-pointer py-2 bg-gray-300 rounded">
                  Cancel
                </button>
                <button onClick={handleSave} className="px-4 py-2 bg-[#FF5A60] cursor-pointer text-white rounded">
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailTwo;
