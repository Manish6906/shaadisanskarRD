import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

function DetailOne() {
  let API= import.meta.env.VITE_APP_API_URL
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState('');
  const a = JSON.parse(localStorage.getItem('userProfile')) // Assuming the userId is stored in localStorage
  const userId = a._id
  useEffect(() => {
    // Fetch user profile data on component mount
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${API}api/profileget/${userId}`);
        // console.log(response.data.data.familydetail);
        
        setEditContent(response.data.data.familydetail || 'No details available.');
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleSave = async () => {
    try {
      // Send the updated content to the backend
      await axios.put(`${API}api/profileupdate/${userId}`, {
        familydetail: editContent,
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile data:", error);
    }
  };

  return (
    <div className='px-5 py-2'>
      <div className='bg-[#FFE7D6] p-5 rounded-md'>
        <div className='md:flex md:justify-between'>
          <div className='flex items-center gap-2'>
            <LuDot className='text-4xl text-red-600' />
            <h1 className='text-red-600 text-base md:text-xl font-bold'>
              Personality, Family Details, Career, Partner Expectations, etc.
            </h1>
          </div>

          {!isEditing && (
            <div className='flex sm:justify-center'>
              <div
                onClick={() => setIsEditing(true)}
                className='flex items-center gap-2 mt-2 w-1/3 sm:w-full cursor-pointer md:mt-0 bg-black rounded-full text-white px-4 md:px-6 py-1 hover:bg-gray-800 transition'
              >
                <FaPencilAlt />
                Edit
              </div>
            </div>
          )}
        </div>

        <div className='py-3'>
          <div className='bg-white text-black p-4 rounded-md'>
            {isEditing ? (
              <>
                <textarea
                  rows={6}
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value.toUpperCase())}
                />
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-red-600 cursor-pointer text-white rounded hover:bg-red-700"
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <p>{editContent || "No details added yet."}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailOne;
