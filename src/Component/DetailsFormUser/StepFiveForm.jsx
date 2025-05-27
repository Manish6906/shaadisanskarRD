import React from "react";
import InputField from "./InputField";
import { toast } from 'react-toastify';

const StepFiveForm = ({ formData, handleChange, onNext, onBack }) => {
  const handleNext = () => {
    toast.success("Step five completed!");
    setTimeout(() => {
      onNext();
    }, 1500);
  };

  const handleBack = () => {
    toast.info("🔙 Going back to the previous step.");
    onBack();
  };

  return (
    <div className=" shadow-md rounded-3xl px-8 py-10 mt-6  transition-all duration-300">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4 tracking-wide">💼 Professional Details</h2>
        <p className="text-gray-600 text-sm italic">Tell us about your current job and employer.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputField
          label="Job/Business"
          name="workingwith"
          value={formData.workingwith}
          onChange={handleChange}
        />
        <InputField
          label="Working As"
          name="workingas"
          value={formData.workingas}
          onChange={handleChange}
        />
        <InputField
          label="Employer Name"
          name="employername"
          value={formData.employername}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          className="px-6 py-3 bg-gray-600 cursor-pointer text-white rounded-full hover:bg-gray-700 shadow-lg transform hover:scale-105 transition duration-300"
        >
          ⬅ Back
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-3 cursor-pointer bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg transform hover:scale-105 transition duration-300"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default StepFiveForm;
