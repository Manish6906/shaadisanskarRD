import React, { useState, useEffect } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import axios from 'axios';

function DetailSeven() {
  let API = import.meta.env.VITE_APP_API_URL;
  const [hobbies, setHobbies] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editHobbies, setEditHobbies] = useState(hobbies);

  // जब कंपोनेंट लोड हो तब शौक की जानकारी प्राप्त करें
  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    const userId = userProfile?._id;
    axios.get(`${API}api/profileget/${userId}`)
      .then(response => {
        const fetchedHobbies = response.data.data?.hobbies || '';
        setHobbies(fetchedHobbies);
        setEditHobbies(fetchedHobbies);
      })
      .catch(error => {
        console.error('शौक लोड करने में त्रुटि:', error);
      });
  }, []);

  // सेव बटन पर क्लिक करने पर शौक अपडेट करें
  const handleSave = () => {
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    const userId = userProfile?._id;
    axios.put(`${API}api/profileupdate/${userId}`, { hobbies: editHobbies })
      .then(response => {
        setHobbies(editHobbies);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('शौक सेव करने में त्रुटि:', error);
      });
  };

  return (
    <div className='px-5 py-5'>
      <div className='bg-[#FFE7D6] p-5 rounded-md'>
        <div className='md:flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <LuDot className='text-4xl text-red-600' />
            <h1 className='text-red-600 text-base md:text-xl font-bold'>
              शौक
            </h1>
          </div>
          <div className='flex sm:justify-center'>
            {!isEditing && (
              <div
                onClick={() => setIsEditing(true)}
                className='flex items-center w-1/3 sm:w-full mt-2 md:mt-0 gap-2 bg-black rounded-full text-white px-4 py-1 cursor-pointer hover:bg-gray-800 transition'
              >
                <FaPencilAlt />
                <span>संपादित करें</span>
              </div>
            )}
          </div>
        </div>

        {/* अंदर का सेक्शन */}
        <div className='py-3'>
          <div className='bg-white text-black p-4 rounded-md md:px-10'>
            {/* शौक सेक्शन */}
            <div className=''>
              {isEditing ? (
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="border p-2 rounded-md"
                    value={editHobbies}
                    onChange={(e) => setEditHobbies(e.target.value.toUpperCase())}
                    placeholder="जैसे: फोटोग्राफी, गेमिंग, हाइकिंग"
                  />
                  <div className="flex justify-end gap-4 mt-4">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 cursor-pointer bg-gray-300 rounded"
                    >
                      रद्द करें
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 cursor-pointer bg-[#FF5A60] text-white rounded"
                    >
                      सेव करें
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
