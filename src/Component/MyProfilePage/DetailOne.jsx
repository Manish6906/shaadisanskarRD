import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

function DetailOne() {
  let API = import.meta.env.VITE_APP_API_URL;
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState('');
  const a = JSON.parse(localStorage.getItem('userProfile')); // मान लिया गया है कि उपयोगकर्ता ID localStorage में संग्रहित है
  const userId = a._id;

  useEffect(() => {
    // घटक लोड होने पर उपयोगकर्ता प्रोफ़ाइल डेटा प्राप्त करें
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${API}api/profileget/${userId}`);
        setEditContent(response.data.data.familydetail || 'कोई विवरण उपलब्ध नहीं है।');
      } catch (error) {
        console.error("प्रोफ़ाइल डेटा प्राप्त करने में त्रुटि:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleSave = async () => {
    try {
      // अद्यतन सामग्री को बैकएंड पर भेजें
      await axios.put(`${API}api/profileupdate/${userId}`, {
        familydetail: editContent,
      });
      setIsEditing(false);
    } catch (error) {
      console.error("प्रोफ़ाइल डेटा अपडेट करने में त्रुटि:", error);
    }
  };

  return (
    <div className='px-5 py-2'>
      <div className='bg-[#FFE7D6] p-5 rounded-md'>
        <div className='md:flex md:justify-between'>
          <div className='flex items-center gap-2'>
            <LuDot className='text-4xl text-red-600' />
            <h1 className='text-red-600 text-base md:text-xl font-bold'>
              व्यक्तित्व, पारिवारिक विवरण, करियर, साथी की अपेक्षाएँ आदि।
            </h1>
          </div>

          {!isEditing && (
            <div className='flex sm:justify-center'>
              <div
                onClick={() => setIsEditing(true)}
                className='flex items-center gap-2 mt-2 w-1/3 sm:w-full cursor-pointer md:mt-0 bg-black rounded-full text-white px-4 md:px-6 py-1 hover:bg-gray-800 transition'
              >
                <FaPencilAlt />
                संपादित करें
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
                    रद्द करें
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-red-600 cursor-pointer text-white rounded hover:bg-red-700"
                  >
                    सहेजें
                  </button>
                </div>
              </>
            ) : (
              <p>{editContent || "अभी तक कोई विवरण जोड़ा नहीं गया है।"}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailOne;
