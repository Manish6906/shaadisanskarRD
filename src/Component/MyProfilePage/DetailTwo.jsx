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

  // घटक लोड होने पर प्रोफ़ाइल डेटा प्राप्त करें
  let a = JSON.parse(localStorage.getItem("userProfile"))
  let userId= a._id;
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${API}api/profileget/${userId}`);
        setProfile(response.data.data); // मान लिया गया है कि प्रतिक्रिया में आवश्यक फ़ील्ड हैं
        setEditData(response.data.data);
      } catch (error) {
        console.error("प्रोफ़ाइल डेटा प्राप्त करने में त्रुटि:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleSave = async () => {
    try {
      // PUT अनुरोध के साथ प्रोफ़ाइल डेटा अपडेट करें
      await axios.put(`${API}api/profileupdate/${userId}`, editData);
      setProfile(editData); // स्थानीय प्रोफ़ाइल स्टेट अपडेट करें
      setIsEditing(false); // संपादन मोड से बाहर निकलें
    } catch (error) {
      console.error("प्रोफ़ाइल डेटा अपडेट करने में त्रुटि:", error);
    }
  };

  return (
    <div className='px-5 py-5'>
      <div className='bg-[#FFE7D6] p-5 rounded-md'>
        <div className='md:flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <LuDot className='text-4xl text-red-600' />
            <h1 className='text-red-600 text-base md:text-xl font-bold'>
              बुनियादी और जीवनशैली
            </h1>
          </div>
          <div className='flex sm:justify-center'>
            <div
              onClick={() => setIsEditing(true)}
              className='flex items-center mt-2 md:mt-0 gap-2  w-1/3 sm:w-full bg-black cursor-pointer rounded-full text-white px-4 py-1 hover:bg-gray-800 transition'
            >
              <FaPencilAlt />
              <span>संपादित करें</span>
            </div>
          </div>
        </div>

        {/* अंदर का अनुभाग */}
        <div className='py-3'>
          <div className='bg-white text-black p-4 rounded-md md:px-10'>
            <div className='md:flex md:justify-between md:items-start gap-10'>
              {/* बाईं ओर का कॉलम */}
              <div className='flex flex-col space-y-3'>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>बचपन कहाँ बीता:</span>
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
                  <span className='font-semibold min-w-[150px]'>आहार:</span>
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

              {/* दाईं ओर का कॉलम */}
              <div className='flex flex-col space-y-3'>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>स्वास्थ्य जानकारी:</span>
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
                  <span className='font-semibold min-w-[150px]'>विकलांगता:</span>
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
                  रद्द करें
                </button>
                <button onClick={handleSave} className="px-4 py-2 bg-[#FF5A60] cursor-pointer text-white rounded">
                  सहेजें
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
