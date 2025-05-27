import React, { useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { RiLockPasswordLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import ballon from '../../assets/Images/ballon.png';
import Image16 from '../../assets/Images/Image16.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  let API= import.meta.env.VITE_APP_API_URL
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

      toast.success("User Login successfully");
      setTimeout(() => {
        navigate(`/userprofile`);
      }, 2000);
    } catch (err) {
      toast.error("Login failed");
      setError(err?.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative p-4 sm:p-6 lg:p-16 flex flex-col items-center bg-rose-100 min-h-screen">

      {/* Top Left Arrow */}
      <div className="absolute top-4 left-4 cursor-pointer z-10">
        <Link to="/">
          <BsFillArrowLeftCircleFill className="text-[#DE5353] text-3xl sm:text-4xl" />
        </Link>
      </div>

      {/* Top Right Heading + Sign Up */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2 sm:gap-4 flex-wrap justify-end">
        <h1 className="text-sm sm:text-lg font-semibold text-gray-800">New to Shaadi?</h1>
        <button className="text-[#DE5353] px-4 sm:px-6 py-2 rounded-full border-[#DE5353] border-2 font-semibold text-sm sm:text-base">
          <Link to="/register/step-one">Sign Up Free</Link>
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl flex flex-col gap-6 sm:gap-10 mt-24 px-2 sm:px-6">

        {/* Heading */}
        <div className="text-center text-black">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Join the Best Matchmaking Platform</h2>
          <p className="text-2xl sm:text-3xl md:text-4xl mt-2">Just a Few Clicks!</p>
        </div>

        {/* Image + Form */}
        <div className="flex flex-col lg:flex-row overflow-hidden shadow-xl rounded-2xl">

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src={Image16}
              alt="Illustration"
              className="w-full h-72 sm:h-[500px] object-cover rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl"
            />
          </div>

          {/* Form Section */}
          <form onSubmit={handleLogin} className="w-full lg:w-1/2 bg-black text-white flex flex-col justify-center relative px-6 py-8 space-y-6 rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl">
            <ToastContainer />

            {/* Balloon */}
            <img
              src={ballon}
              alt="Balloon Icon"
              className="absolute top-0 md:-top- md:-left-6 w-20 h-20 md:w-30 md:h-30"
            />

            {/* Identifier */}
            <div className="relative">
              <label htmlFor="identifier" className="block text-xl mb-2">Mobile No / Email ID</label>
              <input
                id="identifier"
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-black bg-white"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label htmlFor="password" className="block text-xl mb-2">Password</label>
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

            {/* Forgot Password */}
            <div className="flex justify-end text-sm sm:text-base">
            <Link to="/forget-password">
              <a href="#" className="text-[#DE5353] hover:underline">Forgot Password?</a>
              </Link>
            </div>

            {/* Login Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full sm:w-1/2 bg-[#EB5757] cursor-pointer text-white py-2 rounded-full text-xl"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
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
