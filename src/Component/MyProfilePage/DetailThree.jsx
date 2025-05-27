import React, { useState, useEffect } from 'react';
import { LuDot } from "react-icons/lu";
import axios from 'axios';
import { FaPencilAlt } from "react-icons/fa";
function DetailThree() {
  let API= import.meta.env.VITE_APP_API_URL
  let a= JSON.parse(localStorage.getItem("userProfile"))
  const userId = a._id;  // Replace with the actual user ID
  const [profile, setProfile] = useState({
    religion: "",
    community: "",
    subCommunity: "",
    manglik: "",
    timeofbirth: "",
    cityofbirth: "",
    
  });
  const [editData, setEditData] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch profile data when the component mounts
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${API}api/profileget/${userId}`);
        setProfile(response.data.data); // Assuming the response has the profile data
        setEditData(response.data.data); // Set initial edit data
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [userId]);

  // const handleChange = (e) => {
  //   setEditData({
  //     ...editData,
  //     [e.target.name]: e.target.value
  //   });
  // };
const handleChange = (e) => {
  const { name, value } = e.target;
  setEditData({
    ...editData,
    [name]: value.toUpperCase()
  });
};

  const handleSave = async () => {
    try {
      const response = await axios.put(`${API}api/profileupdate/${userId}`, editData);
      setProfile(response.data.data); // Update the profile with the saved data
      setIsEditing(false); // Exit edit mode
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className='px-5 py-5'>
      <div className='bg-[#FFE7D6] p-5 rounded-md'>
        <div className='md:flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <LuDot className='text-4xl text-red-600' />
            <h1 className='text-red-600 text-base md:text-xl font-bold'>
              Religious Background & Astro Details
            </h1>
          </div>
          {/* Edit Button */}
          <div>
            {!isEditing ? (
              <div className='flex  w-1/3 sm:w-full  items-center mt-2 md:mt-0 gap-2 bg-black cursor-pointer rounded-full text-white px-4 py-1  hover:bg-gray-800 transition'
              onClick={() => setIsEditing(true)}
              >
                 <FaPencilAlt />
              <button
                
                className="bg-balck   text-white cursor-pointer rounded-md"
              >
                Edit
              </button>
              </div>
            ) : (
              <div className='flex items-center px-4 py-1 bg-black cursor-pointer text-white  rounded-full'
              onClick={handleSave}
              >
                 <FaPencilAlt />
              <button
                
                className=" cursor-pointer"
              >
                Save
              </button>
              </div>
            )}
          </div>
        </div>

        {/* Inner Section */}
        <div className='py-3'>
          <div className='bg-white text-black p-4 rounded-md md:px-10'>
            <div className='md:flex md:justify-between md:items-start gap-10'>
              {/* Left Column */}
              <div className='flex flex-col space-y-3'>
              <p className='md:flex'>
  <span className='font-semibold min-w-[150px]'>Religion:</span>
  {isEditing ? (
    <select
      name="religion"
      value={editData.religion}
      onChange={handleChange}
      className="border rounded-md px-10 py-2"
    >
      <option value="">Select Religion</option>
      <option value="Hindu">HINDU</option>
      <option value="Christian">CHRISTIAN</option>
      <option value="Sikh">SIKH</option>
      <option value="Buddhist">BUDDHIST</option>
      <option value="Jain">JAIN</option>
      <option value="Other">OTHER</option>
    </select>
  ) : (
    <span>{profile.religion}</span>
  )}
</p>

                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Community:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      name="community"
                      value={editData.community}
                      onChange={handleChange}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.community}</span>
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Sub Community:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      name="subCommunity"
                      value={editData.subCommunity}
                      onChange={handleChange}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.subCommunity}</span>
                  )}
                </p>
                
             
              </div>

              {/* Right Column */}
              <div className='flex flex-col space-y-3'>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Manglik / Chevvai Doshani:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      name="manglik"
                      value={editData.manglik}
                      onChange={handleChange}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.manglik}</span>
                  )}
                </p>
                
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Time of Birth:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      name="timeofbirth"
                      value={editData.timeofbirth}
                      onChange={handleChange}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.timeofbirth}</span>
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>City of Birth:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      name="cityofbirth"
                      value={editData.cityofbirth}
                      onChange={handleChange}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.cityofbirth}</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailThree;
