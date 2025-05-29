import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

export default function DetailFive() {
  let API = import.meta.env.VITE_APP_API_URL;

  const [profile, setProfile] = useState({
    highestqualification: '',
    collegesattended: '',
    annualincome: '',
    workingwith: '',
    workingas: '',
    employername: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    highestqualification: '',
    collegesattended: '',
    annualincome: '',
    workingwith: '',
    workingas: '',
    employername: ''
  });

  // प्रोफ़ाइल डेटा को लाने के लिए useEffect
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        const userId = userProfile?._id;
        const response = await axios.get(`${API}api/profileget/${userId}`);
        const data = response.data.data;

        setProfile(data);
        setEditData(data); // एडिट फॉर्म के लिए डेटा सेट करें
      } catch (error) {
        console.error("प्रोफ़ाइल प्राप्त करने में त्रुटि:", error);
      }
    };

    fetchProfile();
  }, []);

  // प्रोफ़ाइल को सेव करें
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
              शिक्षा और करियर
            </h1>
          </div>
          <div className='flex sm:justify-center'>
            <div
              onClick={() => setIsEditing(true)}
              className='flex items-center w-1/3 sm:w-full mt-2 md:mt-0 gap-2 bg-black rounded-full text-white px-4 py-1 cursor-pointer hover:bg-gray-800 transition'
            >
              <FaPencilAlt />
              <span>संपादित करें</span>
            </div>
          </div>
        </div>

        {/* अंदर का सेक्शन */}
        <div className='py-3'>
          <div className='bg-white text-black p-4 rounded-md md:px-10'>
            <div className='md:flex md:justify-between md:items-start gap-10'>
              {/* बाईं ओर */}
              <div className='flex flex-col space-y-3'>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>उच्चतम योग्यता:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.highestqualification}
                      onChange={(e) => setEditData({ ...editData, highestqualification: e.target.value.toUpperCase() })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.highestqualification}</span>
                  )}
                </p>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>कॉलेज का नाम:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.collegesattended}
                      onChange={(e) => setEditData({ ...editData, collegesattended: e.target.value.toUpperCase() })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.collegesattended}</span>
                  )}
                </p>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>वार्षिक आय:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.annualincome}
                      onChange={(e) => setEditData({ ...editData, annualincome: e.target.value.toUpperCase() })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.annualincome}</span>
                  )}
                </p>
              </div>

              {/* दाईं ओर */}
              <div className='flex flex-col space-y-3'>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>कार्यरत संस्था:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.workingwith}
                      onChange={(e) => setEditData({ ...editData, workingwith: e.target.value.toUpperCase() })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.workingwith}</span>
                  )}
                </p>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>पद:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.workingas}
                      onChange={(e) => setEditData({ ...editData, workingas: e.target.value.toUpperCase() })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.workingas}</span>
                  )}
                </p>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>नियोक्ता का नाम:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.employername}
                      onChange={(e) => setEditData({ ...editData, employername: e.target.value.toUpperCase() })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.employername}</span>
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
