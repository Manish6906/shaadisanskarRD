import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Image17 from '../../assets/Images/Image17.png';
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
const VerifyOtp = () => {
  const [emailOTP, setEmailOTP] = useState('');
  const [phoneOTP, setPhoneOTP] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate= useNavigate()
  useEffect(()=>
    {
      const token = localStorage.getItem("token");
  
      if (!token) {
        navigate("/register/step-one");
        return;
      }
    },[])


  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const token = localStorage.getItem('token'); // Assuming JWT is stored here
      const response = await axios.put(
        'http://localhost:3000/api/auth/verify-otp',
        { emailOTP, phoneOTP },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response.status);
      toast.success("EmailOTP and MobileOTP are Verify");
      if (response.status === 200) {
        // console.log("navigation........");
        
       setTimeout(()=>
      {
        navigate("/login");
      },2000)
      }

      setMessage(response.data.message);
    } catch (err) {
      toast.error("Invaild OTP");
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };


  const handleResendOTP = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3000/api/auth/resend-otp",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("OTP has been resent successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center jost  justify-center"
      style={{ backgroundImage: `url(${Image17})` }}
    >
      <div className="max-w-md w-full bg-[#EB5757] border border-gray-300 p-6 rounded-xl shadow-lg">
        <FaCircleArrowLeft
          className="text-2xl cursor-pointer mb-4 text-black"
          onClick={() => navigate(-1)}
        />

        <h2 className="text-xl font-bold mb-2 text-center text-black">
          Verify Your Mobile Number
        </h2>

        <div className="flex justify-center mb-2">
          <FaMobileAlt className="text-4xl text-white" />
        </div>

        <p className="text-center text-xl text-white mb-4">
          We have sent a 4-digit PIN to your email and phone number
        </p>

        <form onSubmit={handleSubmit}>
          <ToastContainer />
          <div className="mb-4">
            <label className="block font-medium text-white">Email OTP:</label>
            <input
              type="text"
              value={emailOTP}
              onChange={(e) => setEmailOTP(e.target.value)}
              title="OTP must be a 4-digit number"
              className="w-full border  bg-[#FFFFFF] rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium  text-white">Phone OTP:</label>
            <input
              type="text"
              value={phoneOTP}
              onChange={(e) => setPhoneOTP(e.target.value)}
              title="OTP must be a 4-digit number"
              className="w-full border rounded bg-[#FFFFFF] p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 cursor-pointer  rounded-xl font-semibold"
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Verify'}
          </button>
         
          <p className='text-center'>
  Didn't receive OTP? 
  <button 
    type="button"
    onClick={handleResendOTP} 
    className='cursor-pointer text-white underline ml-1'
    disabled={loading}
  >
    Resend PIN
  </button>
</p>


          {/* <div className="flex items-center justify-center gap-x-2 mt-4 text-sm text-white">
            <p>Didn’t receive the PIN?</p>
            <button className="underline font-medium cursor-pointer">
              Resend PIN
            </button>
          </div> */}
        </form>

        {message && <p className="mt-4 text-green-200 text-center">{message}</p>}
        {error && <p className="mt-4 text-red-200 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default VerifyOtp;
