// src/components/StepOneForm.js
import React from "react";
import InputField from "./InputField";
import { toast } from "react-toastify";
import { FaUserEdit } from "react-icons/fa";

const StepOneForm = ({ formData, handleChange, onNext }) => {
  const handleNextClick = () => {
    if (!formData.familydetail) {
      toast.error("Please fill in all required fields!");
      return;
    }
    toast.success("Step one completed!");
    setTimeout(() => {
      onNext();
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-10">
      <div className="w-full p-10 bg-white shadow-2xl rounded-3xl">
        <div className="text-center mb-10">
          <div className="flex justify-center items-center mb-4 text-blue-600 text-4xl">
            <FaUserEdit />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Step 1: Personal Information</h2>
          <p className="text-gray-500 mt-1">Let’s get to know you better!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Family Detail" name="familydetail" value={formData.familydetail} onChange={handleChange} />
          <InputField label="Age" name="age" type="number" value={formData.age} onChange={handleChange} />
          <InputField label="Height (in cm)" name="height" type="number" value={formData.height} onChange={handleChange} />
          <InputField label="Grew Up In" name="growup" value={formData.growup} onChange={handleChange} />
          <InputField label="Blood Group" name="bloodgroup" value={formData.bloodgroup} onChange={handleChange} />
          <InputField label="Health Information" name="healthinformation" value={formData.healthinformation} onChange={handleChange} />
          <InputField label="Disability" name="disability" value={formData.disability} onChange={handleChange} />
          <InputField
            label="Gender (Male or Female)"
            name="gender"
            type="select"
            value={formData.gender}
            onChange={handleChange}
            options={[
              { label: "Select Gender", value: "" },
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
          />
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={handleNextClick}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg font-semibold py-3 px-10 rounded-full cursor-pointer shadow-lg transition-all duration-300 hover:scale-105"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepOneForm;
