import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ProfileFour = () => {
  let API = import.meta.env.VITE_APP_API_URL;
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    age: "",
    height: "",
    maritalstatus: "",
    bloodgroup: "",
    city: "",
    community: "",
    gothram: "",
    mothertongue: "",
  });

  const navigate = useNavigate();
  let a = JSON.parse(localStorage.getItem("userProfile"));
  let userId = a._id;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${API}api/profileget/${userId}`);
        const data = response.data.data;

        setProfile({
          age: data.age,
          height: data.height?.toUpperCase() || "",
          maritalstatus: data.maritalStatus?.toUpperCase() || "",
          bloodgroup: data.bloodgroup?.toUpperCase() || "",
          city: data.city?.toUpperCase() || "",
          community: data.community?.toUpperCase() || "",
          gothram: data.gothram?.toUpperCase() || "",
          mothertongue: data.mothertongue?.toUpperCase() || "",
        });
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value.toUpperCase() }));
  };

  const handleSave = async () => {
    try {
      const updatedData = {
        age: profile.age,
        height: profile.height,
        maritalStatus: profile.maritalstatus,
        bloodgroup: profile.bloodgroup,
        city: profile.city,
        gothram: profile.gothram,
        mothertongue: profile.mothertongue,
      };

      await axios.put(`${API}api/profileupdate/${userId}`, updatedData);
      setIsEditing(false);
      navigate("/userprofile");
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <div className="relative bg-[#FF5A60] rounded-2xl p-4 sm:p-6 w-full max-w-4xl mx-auto text-white">
      {isEditing ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black">
          <input
            name="age"
            value={profile.age}
            onChange={handleInputChange}
            placeholder="Age"
            className="border p-2 rounded"
          />
          <input
            name="height"
            value={profile.height}
            onChange={handleInputChange}
            placeholder="Height in cm"
            className="border p-2 rounded"
          />
          <input
            name="maritalstatus"
            value={profile.maritalstatus}
            onChange={handleInputChange}
            placeholder="Marital Status"
            className="border p-2 rounded"
          />
          <input
            name="bloodgroup"
            value={profile.bloodgroup}
            onChange={handleInputChange}
            placeholder="Blood Group"
            className="border p-2 rounded"
          />
          <input
            name="city"
            value={profile.city}
            onChange={handleInputChange}
            placeholder="City"
            className="border p-2 rounded"
          />
          <input
            name="gothram"
            value={profile.gothram}
            onChange={handleInputChange}
            placeholder="Gothram"
            className="border p-2 rounded"
          />
          <input
            name="mothertongue"
            value={profile.mothertongue}
            onChange={handleInputChange}
            placeholder="Mother Tongue"
            className="border p-2 rounded"
          />
          <div className="col-span-1 sm:col-span-2 flex justify-end gap-4 mt-4">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-[#4ac429] text-white rounded"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
          <div className="space-y-6 w-full sm:w-1/2">
            <div className="flex">
              <span className="w-32">Age / Height</span>
              <span className="mr-2">:</span>
              <span>
                {profile.age || "-"} / {profile.height || "-"}
              </span>
            </div>
            <div className="flex">
              <span className="w-32">Marital Status</span>
              <span className="mr-2">:</span>
              <span>{profile.maritalstatus || "-"}</span>
            </div>
            <div className="flex">
              <span className="w-32">Blood Group</span>
              <span className="mr-2">:</span>
              <span>{profile.bloodgroup || "-"}</span>
            </div>
          </div>

          <div className="space-y-6 w-full sm:w-1/2">
            <div className="flex">
              <span className="w-40">City</span>
              <span className="mr-2">:</span>
              <span>{profile.city || "-"}</span>
            </div>
            <div className="flex">
              <span className="w-40">Gothram</span>
              <span className="mr-2">:</span>
              <span>{profile.gothram || "-"}</span>
            </div>
            <div className="flex">
              <span className="w-40">Mother Tongue</span>
              <span className="mr-2">:</span>
              <span>{profile.mothertongue || "-"}</span>
            </div>
          </div>
        </div>
      )}

      {!isEditing && (
        <button
          onClick={handleEditClick}
          className="absolute top-2 right-2 bg-black cursor-pointer text-white text-sm px-2 py-1 rounded-full flex items-center gap-1"
        >
          <FontAwesomeIcon icon={faPen} className="text-xs" />
          Edit
        </button>
      )}
    </div>
  );
};

export default ProfileFour;
