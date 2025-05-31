import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function SettingEight() {
  let API = import.meta.env.VITE_APP_API_URL;
  const [selectedReason, setSelectedReason] = useState('');
  const [customReason, setCustomReason] = useState('');
  const navigate = useNavigate();

  const reasons = [
    "अन्य वेबसाइट्स या सेवाएँ",
    "ऑफ़लाइन मैचमेकर",
    "रिश्तेदार और दोस्त",
    "अन्य कारण"
  ];

  const handleContinue = () => {
    if (!selectedReason) {
      toast.warning("कृपया जारी रखने के लिए एक कारण चुनें।");
    } else if (selectedReason === "अन्य कारण" && !customReason.trim()) {
      toast.warning("कृपया अपना कारण दर्ज करें।");
    } else {
      const reasonToSend = selectedReason === "अन्य कारण" ? customReason.trim() : selectedReason;
      toast.success("कारण चुना गया है");
      setTimeout(() => {
        navigate('/confirm', { state: { reason: reasonToSend } });
      }, 1500);
    }
  };

  return (
    <div className="flex items-center jost justify-center px-4 py-6">
      <ToastContainer />
      <div className="relative w-full max-w-md bg-[#FF5A60] shadow-md rounded-xl p-6 space-y-6">

        {/* बैक एरो + स्किप */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <div className="bg-black p-2 rounded-full cursor-pointer">
            <ArrowLeft className="text-white w-4 h-4"
              onClick={() => navigate("/setting")} />
          </div>
          <span className="text-white text-sm sm:text-base cursor-pointer font-normal">छोड़ें</span>
        </div>

        {/* दिल का आइकन */}
        <div className="flex justify-center mt-14 sm:mt-20">
          <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full">
            <FaHeart className="text-red-500 text-4xl" />
          </div>
        </div>

        {/* शीर्षक */}
        <div className="text-center px-2">
          <h1 className="text-lg sm:text-xl font-semibold text-white">
            आप अपनी प्रोफ़ाइल क्यों हटाना चाहते हैं?
          </h1>
        </div>

        {/* कारण विकल्प */}
        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <label
              key={index}
              className={`flex items-center space-x-3 border border-white rounded-full px-4 py-2 cursor-pointer transition ${selectedReason === reason ? 'bg-white text-[#FF5A60]' : 'bg-[#FF5A60]'
                }`}
            >
              <input
                type="radio"
                name="deleteReason"
                value={reason}
                checked={selectedReason === reason}
                onChange={() => {
                  setSelectedReason(reason);
                  if (reason !== "अन्य कारण") setCustomReason('');
                }}
                className="appearance-none w-4 h-4 border-2 border-white rounded-full checked:bg-white checked:border-white transition"
              />
              <span className={`text-sm sm:text-base ${selectedReason === reason ? 'text-[#FF5A60]' : 'text-white'}`}>
                {reason}
              </span>
            </label>
          ))}

          {/* यदि "अन्य कारण" चुना गया हो तो टेक्स्टएरिया */}
          {selectedReason === "अन्य कारण" && (
            <textarea
              value={customReason}
              onChange={(e) => setCustomReason(e.target.value)}
              placeholder="कृपया अपना कारण बताएं..."
              className="w-full mt-2 p-3 rounded-lg border resize-none text-white border-white focus:outline-none"
            />
          )}
        </div>

        {/* कंटिन्यू बटन */}
        <div className="flex justify-center sm:justify-end pt-2">
          <button
            onClick={handleContinue}
            className="bg-black text-white font-semibold px-6 py-2 cursor-pointer rounded-full w-full sm:w-auto"
          >
            जारी रखें
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingEight;
