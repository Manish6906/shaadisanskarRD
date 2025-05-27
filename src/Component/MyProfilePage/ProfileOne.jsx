import React, { useEffect, useState } from 'react'
import { MdPhotoCamera, MdEdit } from 'react-icons/md'
import axios from 'axios'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

function ProfileOne() {
  let API= import.meta.env.VITE_APP_API_URL
  const [editMode, setEditMode] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [gender, setGender] = useState('')
  const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl] = useState('')
  const [previewUrl, setPreviewUrl] = useState('');


  const userProfile = JSON.parse(localStorage.getItem('userProfile'))
  const userId = userProfile._id
  // console.log(userId);
  

  useEffect(() => {
    axios.get(`${API}user/${userId}`)
      .then((res) => {
        const { firstName, lastName, mobileNumber, emailId, profileImage, dob, gender } = res.data.user
        setFirstName(firstName)
        setLastName(lastName)
        setPhone(mobileNumber)
        setEmail(emailId)
        setImageUrl(profileImage)
        setDate(dob)
        setGender(gender)
        console.log(res.data.user.profileImage);
        
      })
      .catch((err) => {
        console.error('Error fetching user:', err)
      })
  }, [])

  const handleSave = () => {
  if (image) {
    // Upload image first
    const storageRef = ref(storage, `profiles/${userId}/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
      },
      (error) => {
        console.error('Upload failed:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageUrl(url);
          axios.put(`${API}user/${userId}`, {
            firstName,
            lastName,
            mobileNumber: phone,
            emailId: email,
            profileImage: url, 
            dob: date,
            gender,
          })
          .then(() => {
            setEditMode(false);
            setImage(null); 
          })
          .catch((err) => {
            console.error('Error updating user:', err);
          });
        });
      }
    );
  } else {
    axios.put(`${API}user/${userId}`, {
      firstName,
      lastName,
      mobileNumber: phone,
      emailId: email,
      profileImage: imageUrl,
      dob: date,
      gender,
    })
    .then(() => {
      setEditMode(false);
    })
    .catch((err) => {
      console.error('Error updating user:', err);
    });
  }
};

  const formatDisplayDate = (isoDate) => {
    if (!isoDate) return ''
    const dateObj = new Date(isoDate)
    return dateObj.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-[#FF5A60] rounded-2xl shadow-2xl space-y-6 max-w-xl mx-auto">
      {/* Profile Picture */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto drop-shadow-lg mb-15">
        <img
          src={previewUrl || imageUrl}
          alt="Profile"
          className="w-full h-full object-cover rounded-full "
        />
        {/* <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white rounded-full p-1 cursor-pointer">
          <MdPhotoCamera className="text-lg sm:text-xl" />
        </div> */}
        {editMode && (
  <div className="w-full flex flex-col items-center">
  <input
    type="file"
    id="file-upload"
    style={{ display: 'none' }}
    onChange={(e) => {
      const file = e.target.files[0];
      setImage(file);
      if (file) {
        setPreviewUrl(URL.createObjectURL(file));
      }
    }}
  />
  <label htmlFor="file-upload" className="w-40 max-w-xs">
    <div className="w-full text-center px-4 py-2 bg-red-800 text-white rounded hover:bg-black cursor-pointer mt-2 text-sm sm:text-base">
      Upload File
    </div>
  </label>
</div>
)}
</div>
      {/* User Info */}
      <div className="bg-[#FFE2CE] px-4 sm:px-6 py-6 sm:py-8 rounded-xl shadow-lg space-y-4">
        {/* Name */} 
        <div className="flex sm:flex-row sm:items-center justify-between gap-2">
          <div className="w-full sm:w-auto">
            {editMode ? (
              <>
                <label className="text-lg font-medium text-gray-700 mr-2">Name:</label>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    className="w-full sm:w-52 text-lg font-semibold text-black h-10 px-3 rounded border border-gray-400"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="w-full sm:w-52 text-lg font-semibold text-black h-10 px-3 rounded border border-gray-400"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                  />
                </div>
              </>
            ) : (
              <div>
                <label className="text-md font-semibold text-black mr-2">Name:</label>
                <div className="flex gap-2">
                  {firstName && (
                    <h1 className="text-xl font-semibold text-gray-600">
                      {firstName.toUpperCase()}
                    </h1>
                  )}
                  {lastName && (
                    <h1 className="text-xl font-semibold text-gray-600">
                      {lastName.toUpperCase()}
                    </h1>
                  )}
                </div>
              </div>
            )}
          </div>
          <button
            className="flex items-center cursor-pointer gap-1 text-sm sm:text-base text-black hover:text-gray-700 transition"
            onClick={() => (editMode ? handleSave() : setEditMode(true))}
          >
            <MdEdit className="text-lg" />
            {editMode ? 'Save' : 'Edit'}
          </button>
        </div>

        <div className="border-t border-gray-400" />

        {/* Phone Number */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="w-full ">
            <h2 className="text-sm font-semibold text-black">Phone Number:</h2>
            {editMode ? (
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-sm text-gray-800 h-10 px-3 rounded border border-gray-400"
              />
            ) : (
              <span className="text-sm text-gray-600">{phone}</span>
            )}
          </div>
        </div>

        <div className="border-t border-gray-400" />

        {/* Email ID */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="w-full ">
            <h2 className="text-sm font-semibold text-black">Email ID:</h2>
            {editMode ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-sm text-gray-800 h-10 px-3 rounded border border-gray-400"
              />
            ) : (
              <span className="text-sm text-gray-600">{email}</span>
            )}
          </div>
        </div>

        <div className="border-t border-gray-400" />

        {/* DOB & Gender */}
        <div className="flex  sm:flex-row sm:items-center justify-between gap-4">
  {/* Date of Birth */}
  <div className="w-full sm:w-1/2">
    <h2 className="text-sm font-semibold text-black">Date of Birth:</h2>
    {editMode ? (
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full text-sm text-gray-800 h-10 px-3 rounded border border-gray-400"
      />
    ) : (
      <span className="text-sm text-gray-600">
        {date ? formatDisplayDate(date) : "Not set"}
      </span>
    )}
  </div>

  {/* Gender */}
  <div className="w-full sm:w-1/2">
    <h2 className="text-sm font-semibold text-black">Gender:</h2>
    {editMode ? (
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="w-full text-sm text-gray-800 h-10 px-3 rounded border border-gray-400"
      >
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    ) : (
      <span className="text-sm text-gray-600">{gender || "Not set"}</span>
    )}
  </div>
</div>

      </div>
    </div>
  )
}

export default ProfileOne;


