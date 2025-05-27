import React, { useEffect, useState } from 'react';
import Image17 from '../../assets/Images/Image17.png';
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SeetingTwelve = () => {
  const [emailOTP, setEmailOTP] = useState('');
  const [phoneOTP, setPhoneOTP] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover jost bg-center flex items-center justify-center"
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

        <form >
         
          <div className="mb-4">
            <label className="block font-medium text-white">Email OTP:</label>
            <input
              type="text"
              
            //   title="OTP must be a 4-digit number"
              className="w-full border  bg-[#FFFFFF] rounded p-2"
             
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium  text-white">Phone OTP:</label>
            <input
              type="text"
              
            //   title="OTP must be a 4-digit number"
              className="w-full border rounded bg-[#FFFFFF] p-2"
              
            />
          </div>
          <Link to="/profiledelete">
          <button
            type="submit"
            className="w-full bg-black text-white py-2 cursor-pointer  rounded-xl font-semibold"
            disabled={loading}
          >

            {loading ? 'Verifying...' : 'Verify'}
          </button>
          </Link>

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

export default SeetingTwelve;
