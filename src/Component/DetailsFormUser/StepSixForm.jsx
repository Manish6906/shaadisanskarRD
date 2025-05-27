import React from "react";
import { toast } from "react-toastify";

const StepSixForm = ({ onBack, onSubmit }) => {


  const handleBack = () => {
    toast.info("🔙 Going back to the previous step.");
    onBack();
  };

  const handleSubmit = () => {
      onSubmit();
  };

  return (
    <div className=" shadow-md rounded-3xl px-8 py-10 mt-8  transition-all duration-300">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-green-800 mb-4 tracking-wide">
          🎉 Submit Your Profile
        </h2>
        <p className="text-gray-600 text-sm">Almost done! Click submit to finalize your profile.</p>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          className="px-6 py-3 cursor-pointer bg-gray-600 text-white rounded-full hover:bg-gray-700 shadow-lg transform hover:scale-105 transition duration-300"
        >
          ⬅ Back
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-3 cursor-pointer bg-green-600 text-white rounded-full hover:bg-green-700 shadow-lg transform hover:scale-105 transition duration-300"
        >
          Submit ➡
        </button>
      </div>
    </div>
  );
};

export default StepSixForm;
