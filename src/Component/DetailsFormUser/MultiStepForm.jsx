import React, { useState } from "react";
import StepOneForm from "./StepOneForm";
import StepTwoForm from "./StepTwoForm";
import StepThreeForm from "./StepThreeForm";
import StepFourForm from "./StepFourForm";
import StepFiveForm from "./StepFiveForm";
import StepSixForm from "./StepSixForm";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const MultiStepForm = () => {
  const navigate = useNavigate();
  const getUserIdFromLocalStorage = () => {
    const userProfile = localStorage.getItem("userProfile");
    if (userProfile) {
      try {
        const parsedProfile = JSON.parse(userProfile);
        return parsedProfile._id || parsedProfile.id || "";
      } catch {
        return "";
      }
    }
    return "";
  };

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    familydetail: "", age: "", dob: "", maritalstatus: "", height: "", growup: "", diet: "", bloodgroup: "", healthinformation: "", disability: "",
    religion: "", community: "", subcommunity: "", gothram: "", mothertongue: "", manglik: "", timeofbirth: "", cityofbirth: "",
    motherdetails: "", fatherdetails: "", familylocation: "", nosisters: "", nobrothers: "", familyfinancialstatus: "",
    highestqualification: "", collegesattended: "", annualincome: "",
    workingwith: "", workingas: "", employername: "",name:"", emailId:"",phonenumber:"", gender:"",
    userId: getUserIdFromLocalStorage()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/user/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (res.ok) {
        toast.success("Profile submitted successfully!");
        setTimeout(()=>
        {
          navigate("/login");
        },1500)
      } else {
        toast.error(result.error || "Something went wrong.");
      }
    } catch (err) {
      toast.error("Error submitting profile.");
    }
  };
  
  return (
    <div className="p-5">
    <div className=" mt-8 p-6 border rounded shadow jost">
      <ToastContainer />
      {step === 1 && <StepOneForm formData={formData} handleChange={handleChange} onNext={() => setStep(2)} />}
      {step === 2 && <StepTwoForm formData={formData} handleChange={handleChange} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
      {step === 3 && <StepThreeForm formData={formData} handleChange={handleChange} onNext={() => setStep(4)} onBack={() => setStep(2)} />}
      {step === 4 && <StepFourForm formData={formData} handleChange={handleChange} onNext={() => setStep(5)} onBack={() => setStep(3)} />}
      {step === 5 && <StepFiveForm formData={formData} handleChange={handleChange} onNext={() => setStep(6)} onBack={() => setStep(4)} />}
      {step === 6 && <StepSixForm onBack={() => setStep(5)} onSubmit={handleSubmit} />}
    </div>
    </div>
  );
};


export default MultiStepForm;
