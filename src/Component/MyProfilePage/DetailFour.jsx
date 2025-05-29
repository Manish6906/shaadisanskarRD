import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

function DetailFour() {
  let API= import.meta.env.VITE_APP_API_URL
  const [profile, setProfile] = useState({
    motherdetails: "मां के बारे में विवरण",
    fatherdetails: "पिता के बारे में विवरण",
    familylocation: "परिवार का स्थान",
    nosisters: 2,
    nobrothers: 1,
    familyfinancialstatus: "मध्यम वर्ग"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    motherdetails: profile.motherdetails,
    fatherdetails: profile.fatherdetails,
    familylocation: profile.familylocation,
    nosisters: profile.nosisters,
    nobrothers: profile.nobrothers,
    familyfinancialstatus: profile.familyfinancialstatus
  });

  // जब कॉम्पोनेंट लोड हो तब प्रोफ़ाइल डेटा प्राप्त करें
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        const userId = userProfile?._id;
        const response = await axios.get(`${API}api/profileget/${userId}`);
        const data = response.data.data;

        setProfile(data);
        setEditData(data);
      } catch (error) {
        console.error("प्रोफ़ाइल प्राप्त करने में त्रुटि:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      const userProfile = JSON.parse(localStorage.getItem("userProfile"));
      const userId = userProfile?._id;

      await axios.put(`${API}api/profileupdate/${userId}`, editData);

      setProfile(editData);
      setIsEditing(false);
    } catch (error) {
      console.error("प्रोफ़ाइल अपडेट करने में त्रुटि:", error);
    }
  };

  return (
    <div className='px-5 py-5'>
      <div className='bg-[#FFE7D6] p-5 rounded-md'>
        <div className='md:flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <LuDot className='text-4xl text-red-600' />
            <h1 className='text-red-600 text-base md:text-xl font-bold'>
              पारिवारिक विवरण
            </h1>
          </div>
          <div className='flex sm:justify-center'>
            <div
              onClick={() => setIsEditing(true)}
              className='flex items-center mt-2 w-1/3 sm:w-full md:mt-0 gap-2 bg-black rounded-full text-white px-4 py-1 cursor-pointer hover:bg-gray-800 transition'
            >
              <FaPencilAlt />
              <button className="text-white cursor-pointer rounded-md">
                संपादित करें
              </button>
            </div>
          </div>
        </div>

        {/* अंदरूनी सेक्शन */}
        <div className='py-3'>
          <div className='bg-white text-black p-4 rounded-md md:px-10'>
            <div className='md:flex md:justify-between md:items-start gap-10'>
              {/* बाएं कॉलम */}
              <div className='flex flex-col space-y-3'>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>मां का विवरण:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.motherdetails}
                      onChange={(e) => setEditData({ ...editData, motherdetails: e.target.value.toUpperCase() })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.motherdetails}</span>
                  )}
                </p>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>पिता का विवरण:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.fatherdetails}
                      onChange={(e) => setEditData({ ...editData, fatherdetails: e.target.value.toUpperCase() })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.fatherdetails}</span>
                  )}
                </p>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>परिवार का स्थान:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.familylocation}
                      onChange={(e) => setEditData({ ...editData, familylocation: e.target.value.toUpperCase() })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.familylocation}</span>
                  )}
                </p>
              </div>

              {/* दायां कॉलम */}
              <div className='flex flex-col space-y-3'>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>बहनों की संख्या:</span>
                  {isEditing ? (
                    <input
                      type="number"
                      value={editData.nosisters}
                      onChange={(e) => setEditData({ ...editData, nosisters: e.target.value })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.nosisters}</span>
                  )}
                </p>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>भाइयों की संख्या:</span>
                  {isEditing ? (
                    <input
                      type="number"
                      value={editData.nobrothers}
                      onChange={(e) => setEditData({ ...editData, nobrothers: e.target.value })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.nobrothers}</span>
                  )}
                </p>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>आर्थिक स्थिति:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.familyfinancialstatus}
                      onChange={(e) => setEditData({ ...editData, familyfinancialstatus: e.target.value.toUpperCase() })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.familyfinancialstatus}</span>
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
                  सेव करें
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailFour;
