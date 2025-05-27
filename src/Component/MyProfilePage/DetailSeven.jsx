import React, { useState, useEffect } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import axios from 'axios';

function DetailSeven() {
  let API= import.meta.env.VITE_APP_API_URL
  const [hobbies, setHobbies] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editHobbies, setEditHobbies] = useState(hobbies);

  // Fetch hobbies on component mount
  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    const userId = userProfile?._id;
    axios.get(`${API}api/profileget/${userId}`) // Replace with your API endpoint
      .then(response => {
        const fetchedHobbies = response.data.data?.hobbies || '';
        setHobbies(fetchedHobbies); // Ensure hobbies is a string
        setEditHobbies(fetchedHobbies); // Initialize editHobbies with fetched data
      })
      .catch(error => {
        console.error('Error fetching hobbies:', error);
      });
  }, []);

  // Handle save (update the hobbies)
  const handleSave = () => {
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    const userId = userProfile?._id;
    axios.put(`${API}api/profileupdate/${userId}`, { hobbies: editHobbies }) // Replace with your API endpoint
      .then(response => {
        setHobbies(editHobbies); // Update the displayed hobbies with the edited data
        setIsEditing(false); // Switch back to view mode
      })
      .catch(error => {
        console.error('Error saving hobbies:', error);
      });
  };

  return (
    <div className='px-5 py-5'>
      <div className='bg-[#FFE7D6] p-5 rounded-md'>
        <div className='md:flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <LuDot className='text-4xl text-red-600' />
            <h1 className='text-red-600 text-base md:text-xl font-bold'>
              Hobbies
            </h1>
          </div>
          <div className='flex sm:justify-center'>
            {!isEditing && (
              <div
                onClick={() => setIsEditing(true)}
                className='flex items-center w-1/3 sm:w-full mt-2 md:mt-0 gap-2 bg-black rounded-full text-white px-4 py-1 cursor-pointer hover:bg-gray-800 transition'
              >
                <FaPencilAlt />
                <span>Edit</span>
              </div>
            )}
          </div>
        </div>

        {/* Inner Section */}
        <div className='py-3'>
          <div className='bg-white text-black p-4 rounded-md md:px-10'>
            {/* Hobbies Section */}
            <div className=''>
              {isEditing ? (
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="border p-2 rounded-md"
                    value={editHobbies}
                    onChange={(e) => setEditHobbies(e.target.value.toUpperCase())}
                    placeholder="e.g., Photography, Gaming, Hiking"
                  />
                  <div className="flex justify-end gap-4 mt-4">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 cursor-pointer bg-gray-300 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 cursor-pointer bg-[#FF5A60] text-white rounded"
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div className='flex flex-wrap pl-6 gap-2'>
  {(typeof hobbies === 'string' ? hobbies.split(",") : []).map((hobby, index) => (
    <span className='bg-rose-200 px-3 py-1 rounded-md' key={index}>
      {hobby.trim().toUpperCase()}
    </span>
  ))}
</div>

              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSeven;
