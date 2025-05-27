import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

function DetailFour() {
  let API= import.meta.env.VITE_APP_API_URL
  const [profile, setProfile] = useState({
    motherdetails: "Details about mother",
    fatherdetails: "Details about father",
    familylocation: "Location",
    nosisters: 2,
    nobrothers: 1,
    familyfinancialstatus: "Middle Class"
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

  // Fetch profile data when component mounts
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
        console.error("Error fetching profile:", error);
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
              Family Details
            </h1>
          </div>
          <div className='flex sm:justify-center'>
            <div
              onClick={() => setIsEditing(true)}
              className='flex items-center mt-2 w-1/3 sm:w-full md:mt-0 gap-2 bg-black rounded-full text-white px-4 py-1 cursor-pointer hover:bg-gray-800 transition'
            >
              <FaPencilAlt />
              <button
                
                className="bg-balck   text-white cursor-pointer rounded-md"
              >
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Inner Section */}
        <div className='py-3'>
          <div className='bg-white text-black p-4 rounded-md md:px-10'>
            <div className='md:flex md:justify-between md:items-start gap-10'>
              {/* Left Column */}
              <div className='flex flex-col space-y-3'>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>Mother Details:</span>
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
                  <span className='font-semibold min-w-[150px]'>Father Details:</span>
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
                  <span className='font-semibold min-w-[150px]'>Family Location:</span>
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

              {/* Right Column */}
              <div className='flex flex-col space-y-3'>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>No. of Sisters:</span>
                  {isEditing ? (
                    <input
                      type="number"
                      value={editData.nosisters}
                      onChange={(e) => setEditData({ ...editData, nosisters: e.target.value.toUpperCase() })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.nosisters}</span>
                  )}
                </p>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>No. of Brothers:</span>
                  {isEditing ? (
                    <input
                      type="number"
                      value={editData.nobrothers}
                      onChange={(e) => setEditData({ ...editData, nobrothers: e.target.value.toUpperCase() })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.nobrothers}</span>
                  )}
                </p>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>Family Financial Status:</span>
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
                  Cancel
                </button>
                <button onClick={handleSave} className="px-4 py-2 bg-[#FF5A60] cursor-pointer text-white rounded">
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

export default DetailFour;
