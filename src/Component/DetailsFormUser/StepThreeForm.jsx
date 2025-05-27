import React from "react";
import InputField from "./InputField";
import { toast } from "react-toastify";
import { FaArrowLeft, FaArrowRight, FaHome } from "react-icons/fa";

const StepThreeForm = ({ formData, handleChange, onNext, onBack }) => {
  const handleNext = () => {
    toast.success("Step three completed!");
    setTimeout(() => {
      onNext();
    }, 1500);
  };

  const handleBack = () => {
    toast.info("🔙 Going back to the previous step.");
    onBack();
  };

  return (
    <div className=" border border-white shadow-md rounded-3xl px-10 py-12 mt-10 transition-all duration-500">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-blue-900 drop-shadow flex justify-center items-center gap-3 tracking-wide">
          <FaHome className="text-3xl text-blue-700" />
          Family Details
        </h2>
        <p className="text-gray-700 mt-2 text-base italic">Let us know about your wonderful family ✨</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputField
          label="Mother Details"
          name="motherdetails"
          value={formData.motherdetails}
          onChange={handleChange}
        />
        <InputField
          label="Father Details"
          name="fatherdetails"
          value={formData.fatherdetails}
          onChange={handleChange}
        />
        <InputField
          label="Family Location"
          name="familylocation"
          value={formData.familylocation}
          onChange={handleChange}
        />
        <InputField
          label="Number of Sisters"
          name="nosisters"
          type="number"
          value={formData.nosisters}
          onChange={handleChange}
        />
        <InputField
          label="Number of Brothers"
          name="nobrothers"
          type="number"
          value={formData.nobrothers}
          onChange={handleChange}
        />
        <InputField
          label="Family Financial Status"
          name="familyfinancialstatus"
          value={formData.familyfinancialstatus}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-between mt-12">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-6 py-3 cursor-pointer bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full hover:from-gray-700 hover:to-gray-800 shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
        >
          <FaArrowLeft /> Back
        </button>
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full hover:from-blue-700 hover:to-blue-900 shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
        >
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default StepThreeForm;
