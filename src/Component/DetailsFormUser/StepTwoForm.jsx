import React from "react";
import InputField from "./InputField";
import { toast } from "react-toastify";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const StepTwoForm = ({ formData, handleChange, onNext, onBack }) => {
  const handleNext = () => {
    toast.success("Step two completed!");
    setTimeout(() => {
      onNext();
    }, 1500);
  };

  const handleBack = () => {
    toast.info("↩ Going back to the previous step.");
    onBack();
  };

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-2xl rounded-3xl p-10 mt-6 animate-fade-in">
      <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-8 tracking-wide">
        🌟 Religious & Birth Details
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputField label="Gothram" name="gothram" value={formData.gothram} onChange={handleChange} />
        <InputField label="Mother Tongue" name="mothertongue" value={formData.mothertongue} onChange={handleChange} />
        <InputField label="Manglik" name="manglik" value={formData.manglik} onChange={handleChange} />
        <InputField label="Time of Birth" name="timeofbirth" value={formData.timeofbirth} onChange={handleChange} />
        <InputField label="City of Birth" name="cityofbirth" value={formData.cityofbirth} onChange={handleChange} />
      </div>

      <div className="flex justify-between mt-10">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-6 py-3 cursor-pointer bg-gray-600 text-white rounded-full hover:bg-gray-700 shadow-lg transition duration-300"
        >
          <FaArrowLeft /> Back
        </button>
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-3 cursor-pointer bg-blue-700 text-white rounded-full hover:bg-blue-800 shadow-lg transition duration-300"
        >
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default StepTwoForm;
