import React, { useState, useEffect } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import axios from 'axios';

function DetailSix() {
  let API = import.meta.env.VITE_APP_API_URL;

  const [locationData, setLocationData] = useState({
    currentresidence: '',
    stateofresidence: '',
    residencystatus: '',
    zippincode: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(locationData);

  // लोकेशन डेटा प्राप्त करें जब कंपोनेंट लोड हो
  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    const userId = userProfile?._id;

    axios.get(`${API}api/profileget/${userId}`)
      .then(response => {
        setLocationData(response.data.data);
        setEditData(response.data.data); // एडिट मोड में दिखाने के लिए डेटा
      })
      .catch(error => {
        console.error('लोकेशन डेटा प्राप्त करने में त्रुटि:', error);
      });
  }, []);

  // डेटा सेव करें
  const handleSave = () => {
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    const userId = userProfile?._id;

    axios.put(`${API}api/profileupdate/${userId}`, editData)
      .then(response => {
        setLocationData(editData); // नया डेटा दिखाएं
        setIsEditing(false); // व्यू मोड में जाएं
      })
      .catch(error => {
        console.error('लोकेशन डेटा सेव करने में त्रुटि:', error);
      });
  };

  return (
    <div className='px-5 py-5'>
      <div className='bg-[#FFE7D6] p-5 rounded-md'>
        <div className='md:flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <LuDot className='text-4xl text-red-600' />
            <h1 className='text-red-600 text-base md:text-xl font-bold'>
              स्थान विवरण
            </h1>
          </div>
          <div className='flex sm:justify-center'>
            <div
              onClick={() => setIsEditing(true)}
              className='flex items-center w-1/3 sm:w-full mt-2 md:mt-0 gap-2 bg-black rounded-full text-white px-4 py-1 cursor-pointer hover:bg-gray-800 transition'>
              <FaPencilAlt />
              <span>संपादित करें</span>
            </div>
          </div>
        </div>

        {/* अंदर का सेक्शन */}
        <div className='py-3'>
          <div className='bg-white text-black p-4 rounded-md md:px-10'>
            <div className='md:flex md:justify-between md:items-start gap-10'>

              {/* बाएं कॉलम */}
              <div className='flex flex-col space-y-3'>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>वर्तमान निवास :</span>
                  {isEditing ? (
                    <input
                      type="text"
                      className="border p-2 rounded-md"
                      value={editData.currentresidence || ''}
                      onChange={(e) => setEditData({ ...editData, currentresidence: e.target.value.toUpperCase() })}
                    />
                  ) : (
                    locationData.currentresidence
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>निवास राज्य :</span>
                  {isEditing ? (
                    <input
                      type="text"
                      className="border p-2 rounded-md"
                      value={editData.stateofresidence || ''}
                      onChange={(e) => setEditData({ ...editData, stateofresidence: e.target.value.toUpperCase() })}
                    />
                  ) : (
                    locationData.stateofresidence
                  )}
                </p>
              </div>

              {/* दायां कॉलम */}
              <div className='flex flex-col space-y-3'>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>निवास स्थिति :</span>
                  {isEditing ? (
                    <input
                      type="text"
                      className="border p-2 rounded-md"
                      value={editData.residencystatus || ''}
                      onChange={(e) => setEditData({ ...editData, residencystatus: e.target.value.toUpperCase() })}
                    />
                  ) : (
                    locationData.residencystatus
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>पिन कोड :</span>
                  {isEditing ? (
                    <input
                      type="text"
                      className="border p-2 rounded-md"
                      value={editData.zippincode || ''}
                      onChange={(e) => setEditData({ ...editData, zippincode: e.target.value.toUpperCase() })}
                    />
                  ) : (
                    locationData.zippincode
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* सेव बटन */}
      {isEditing && (
        <div className="flex justify-end gap-4 mt-4">
          <button onClick={() => setIsEditing(false)} className="px-4 py-2 cursor-pointer bg-gray-300 rounded">
            रद्द करें
          </button>
          <button onClick={handleSave} className="px-4 py-2 bg-[#FF5A60] cursor-pointer text-white rounded">
            सेव करें
          </button>
        </div>
      )}
    </div>
  );
}

export default DetailSix;
