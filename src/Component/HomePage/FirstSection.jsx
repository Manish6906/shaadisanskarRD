import React from 'react';
import { useNavigate } from 'react-router-dom';
import CoupleImage from '../../assets/Images/arto-suraj-QXEITcoqkOU-unsplash.jpg';

function FirstSection() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleStart = () => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/allprofile");
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-rose-300 via-rose-400 to-rose-300 text-rose-900 min-h-screen flex items-center px-6 py-16 md:py-24 overflow-hidden">
      {/* Decorative background hearts */}
      <div className="absolute inset-0 bg-[url('/hearts.svg')] bg-repeat bg-[length:40px_40px] opacity-10 pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold border-l-8 border-pink-300 pl-6 leading-tight">
            Royal Matches<br />
            Made With <span className="text-pink-600">Tradition & Love</span>
          </h1>
          <p className="text-lg text-rose-800 max-w-md">
            India's most trusted matrimonial platform for meaningful, cultural, and lifelong connections.
          </p>
          <button
            onClick={handleStart}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transition"
          >
            Start Your Journey
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex-1">
          <div className="border-8 border-pink-300 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={CoupleImage}
              alt="Wedding Couple"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
