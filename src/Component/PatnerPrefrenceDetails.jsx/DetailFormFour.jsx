import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

function DetailFormFour() {
  const [educationData, setEducationData] = useState({
    highestqualification: '',
    workingwith: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const userId = JSON.parse(localStorage.getItem("userProfile"))?._id;

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:3000/api/patner/${userId}`)
        .then(res => {
          if (res.data) {
            setEducationData(res.data.education || {});
          }
        })
        .catch(err => console.error("Fetch error:", err));
    }
  }, [userId]);

  const handleChange = (e) => {
    setEducationData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSave = () => {
    if (educationData?._id) {
      axios.put(`http://localhost:3000/api/patner/${userId}`, educationData)
        .then(res => {
          setEducationData(res.data);
          setIsEditing(false);
        })
        .catch(err => console.error("Update error:", err));
    } else {
      axios.post(`http://localhost:3000/api/patner`, { ...educationData, userId })
        .then(res => {
          setEducationData(res.data);
          setIsEditing(false);
        })
        .catch(err => console.error("Post error:", err));
    }
  };

  return (
    <div className='px-5 py-5'>
      <div className='bg-[#FFE7D6] p-5 rounded-md'>
        <div className='md:flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <LuDot className='text-4xl text-red-600' />
            <h1 className='text-red-600 text-base md:text-xl font-bold'>
              Education & Career
            </h1>
          </div>
          <div className='flex justify-center'>
            <div
              onClick={() => setIsEditing(!isEditing)}
              className='flex items-center mt-2 md:mt-0 gap-1 bg-black rounded-full text-white px-4 py-1 cursor-pointer hover:bg-gray-800 transition'
            >
              <FaPencilAlt />
              <span>{isEditing ? "Cancel" : "Edit"}</span>
            </div>
          </div>
        </div>

        {/* Inner Section */}
        <div className='py-3'>
          <div className='bg-white text-black p-4 rounded-md md:px-10'>
            <div className='md:flex md:justify-between md:items-start gap-10'>
              {/* Left Column */}
              <div className='flex flex-col space-y-3'>
                {['highestqualification'].map((field, index) => (
                  <p className='flex' key={index}>
                    <span className='font-semibold min-w-[150px]'>
                      {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}:
                    </span>
                    {isEditing ? (
                      <input
                        type="text"
                        name={field}
                        value={educationData[field]}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    ) : (
                      <span>{educationData[field]}</span>
                    )}
                  </p>
                ))}
              </div>

              {/* Right Column */}
              <div className='flex flex-col space-y-3'>
                {['workingwith'].map((field, index) => (
                  <p className='flex' key={index}>
                    <span className='font-semibold min-w-[150px]'>
                      {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}:
                    </span>
                    {isEditing ? (
                      <input
                        type="text"
                        name={field}
                        value={educationData[field]}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    ) : (
                      <span>{educationData[field]}</span>
                    )}
                  </p>
                ))}
              </div>
            </div>

            {isEditing && (
              <div className='mt-4 text-right'>
                <button
                  onClick={handleSave}
                  className='bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition'
                >
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

export default DetailFormFour;
