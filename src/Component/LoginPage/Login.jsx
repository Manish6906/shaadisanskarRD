import React, { useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { RiLockPasswordLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import ballon from '../../assets/Images/ballon.png';
import Image16 from '../../assets/Images/Image16.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  let API = import.meta.env.VITE_APP_API_URL;
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${API}user/login`, {
        identifier,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('userProfile', JSON.stringify(user));

      toast.success("उपयोगकर्ता सफलतापूर्वक लॉगिन हुआ");
      setTimeout(() => {
        navigate(`/userprofile`);
      }, 2000);
    } catch (err) {
      toast.error("लॉगिन असफल रहा");
      setError(err?.response?.data?.message || 'लॉगिन असफल रहा');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative p-4 sm:p-6 lg:p-16 flex flex-col items-center bg-rose-100 min-h-screen">

      {/* ऊपर बायाँ तीर */}
      <div className="absolute top-4 left-4 cursor-pointer z-10">
        <Link to="/">
          <BsFillArrowLeftCircleFill className="text-[#DE5353] text-3xl sm:text-4xl" />
        </Link>
      </div>

      {/* ऊपर दाएँ - हेडिंग और साइन अप */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2 sm:gap-4 flex-wrap justify-end">
        <h1 className="text-sm sm:text-lg font-semibold text-gray-800">शादी में नए हैं?</h1>
        <button className="text-[#DE5353] px-4 sm:px-6 py-2 rounded-full border-[#DE5353] border-2 font-semibold text-sm sm:text-base">
          <Link to="/register/step-one">मुफ़्त साइन अप करें</Link>
        </button>
      </div>

      {/* मुख्य सामग्री */}
      <div className="w-full max-w-6xl flex flex-col gap-6 sm:gap-10 mt-24 px-2 sm:px-6">

        {/* हेडिंग */}
        <div className="text-center text-black">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">सर्वश्रेष्ठ जीवनसाथी खोज मंच से जुड़ें</h2>
          <p className="text-2xl sm:text-3xl md:text-4xl mt-2">सिर्फ़ कुछ क्लिक में!</p>
        </div>

        {/* इमेज + फॉर्म */}
        <div className="flex flex-col lg:flex-row overflow-hidden shadow-xl rounded-2xl">

          {/* इमेज सेक्शन */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src={Image16}
              alt="चित्रण"
              className="w-full h-72 sm:h-[500px] object-cover rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl"
            />
          </div>

          {/* फॉर्म सेक्शन */}
          <form onSubmit={handleLogin} className="w-full lg:w-1/2 bg-black text-white flex flex-col justify-center relative px-6 py-8 space-y-6 rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl">
            <ToastContainer />

            {/* गुब्बारा */}
            <img
              src={ballon}
              alt="गुब्बारा आइकन"
              className="absolute top-0 md:-top- md:-left-6 w-20 h-20 md:w-30 md:h-30"
            />

            {/* मोबाइल या ईमेल */}
            <div className="relative">
              <label htmlFor="identifier" className="block text-xl mb-2">मोबाइल नंबर / ईमेल आईडी</label>
              <input
                id="identifier"
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-black bg-white"
              />
            </div>

            {/* पासवर्ड */}
            <div className="relative">
              <label htmlFor="password" className="block text-xl mb-2">पासवर्ड</label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-black bg-white"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute top-13 right-4 text-gray-400"
              >
                {showPassword ? <RiEyeOffLine size={20} /> : <RiEyeLine size={20} />}
              </button>
            </div>

            {/* पासवर्ड भूल गए */}
            <div className="flex justify-end text-sm sm:text-base">
              <Link to="/forget-password">
                <span className="text-[#DE5353] hover:underline">पासवर्ड भूल गए?</span>
              </Link>
            </div>

            {/* लॉगिन बटन */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full sm:w-1/2 bg-[#EB5757] cursor-pointer text-white py-2 rounded-full text-xl"
                disabled={loading}
              >
                {loading ? "लॉग इन हो रहा है..." : "लॉग इन करें"}
              </button>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
