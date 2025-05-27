import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function SettingEight() {
  let API= import.meta.env.VITE_APP_API_URL
  const [selectedReason, setSelectedReason] = useState('');
  const [customReason, setCustomReason] = useState('');
  const navigate = useNavigate();

  const reasons = [
    "Other matching sites/services",
    "Offline matchmaker",
    "Relatives and Friends",
    "Other reason"
  ];

  const handleContinue = () => {
    if (!selectedReason) {
          toast.warning("Please select a reason to continue.");
      
    } else if (selectedReason === "Other reason" && !customReason.trim()) {
      toast.warning("Please enter your custom reason.");
     
    } else {
      const reasonToSend = selectedReason === "Other reason" ? customReason.trim() : selectedReason;
      toast.success("Reason Selected");
      setTimeout(()=>
      {
        navigate('/confirm', { state: { reason: reasonToSend } });
      },1500)
    }
  };

  return (
    <div className="flex items-center jost justify-center px-4 py-6">
     <ToastContainer />
      <div className="relative w-full max-w-md bg-[#FF5A60] shadow-md rounded-xl p-6 space-y-6">

        {/* Arrow + Skip text */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <div className="bg-black p-2 rounded-full cursor-pointer">
            <ArrowLeft className="text-white w-4 h-4"
            onClick={() => navigate("/setting")} />
          </div>
          <span className="text-white text-sm sm:text-base cursor-pointer font-normal">Skip</span>
        </div>

        {/* Heart in Circle */}
        <div className="flex justify-center mt-14 sm:mt-20">
          <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full">
            <FaHeart className="text-red-500 text-4xl" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center px-2">
          <h1 className="text-lg sm:text-xl font-semibold text-white">
            Why do you want to delete your profile?
          </h1>
        </div>

        {/* Reason Options */}
        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <label
              key={index}
              className={`flex items-center space-x-3 border border-white rounded-full px-4 py-2 cursor-pointer transition ${
                selectedReason === reason ? 'bg-white text-[#FF5A60]' : 'bg-[#FF5A60]'
              }`}
            >
              <input
                type="radio"
                name="deleteReason"
                value={reason}
                checked={selectedReason === reason}
                onChange={() => {
                  setSelectedReason(reason);
                  if (reason !== "Other reason") setCustomReason('');
                }}
                className="appearance-none w-4 h-4 border-2 border-white rounded-full checked:bg-white checked:border-white transition"
              />
              <span className={`text-sm sm:text-base ${selectedReason === reason ? 'text-[#FF5A60]' : 'text-white'}`}>
                {reason}
              </span>
            </label>
          ))}

          {/* Show textarea if "Other reason" is selected */}
          {selectedReason === "Other reason" && (
            <textarea
              value={customReason}
              onChange={(e) => setCustomReason(e.target.value)}
              placeholder="Please specify your reason..."
              className="w-full mt-2 p-3 rounded-lg border resize-none text-white border-white focus:outline-none"
            />
          )}
        </div>

        {/* Continue Button */}
        <div className="flex justify-center sm:justify-end pt-2">
          <button
            onClick={handleContinue}
            className="bg-black text-white font-semibold px-6 py-2 cursor-pointer rounded-full w-full sm:w-auto"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingEight;
