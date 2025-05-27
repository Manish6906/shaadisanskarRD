import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';

function ProfileThree({ onUpload }) {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setIsUploading(true); // Show loading indicator

    try {
      await onUpload(files); // Assume this is a promise (e.g., axios call)
    } catch (err) {
      console.error('Upload error:', err);
    } finally {
      setIsUploading(false); // Hide loading after upload
    }
  };

  return (
    <div className="relative w-full h-72 sm:h-80 md:h-96 mt-4 flex justify-center items-center rounded-2xl p-4 sm:p-6">
      {/* Background Card */}
      <div className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden bg-[#FF5A60] shadow-xl z-10 transform rotate-[15deg] translate-x-4 sm:translate-x-6 md:translate-x-8"></div>

      {/* Foreground Card */}
      <label htmlFor="photo-upload" className="cursor-pointer absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl z-20 bg-[#FF5A60] flex items-center justify-center">
        <div className='flex flex-col justify-center items-center text-white'>
          {isUploading ? (
            <>
              <FaSpinner className="animate-spin text-white text-5xl sm:text-6xl md:text-7xl" />
              <h1 className="text-sm sm:text-base mt-2">Uploading...</h1>
            </>
          ) : (
            <>
              <MdAdd className="text-white text-6xl sm:text-7xl md:text-9xl" />
              <h1 className="text-sm sm:text-base md:text-lg mt-2">Add Photos</h1>
            </>
          )}
        </div>
        <input id="photo-upload" type="file" multiple onChange={handleFileChange} className="hidden" accept="image/*" />
      </label>
    </div>
  );
}

export default ProfileThree;
