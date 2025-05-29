import React from 'react';
import { useNavigate } from 'react-router-dom';
import CoupleImage from '../../assets/Images/arto-suraj-QXEITcoqkOU-unsplash.jpg';

function FirstSection() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleStart = () => {
    navigate(token ? "/allprofile" : "/login");
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">

      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={CoupleImage}
          alt="Wedding Couple"
          className="w-full h-full object-cover opacity-100 "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      </div>

      {/* Bottom-right content with glass effect */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 max-w-sm sm:max-w-md md:max-w-lg px-4 py-6 sm:px-6 sm:py-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
          Begin Your Beautiful <span className="text-pink-400">Forever</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-gray-200">
          India’s most trusted platform for meaningful, serious, and cultural connections that last a lifetime.
        </p>
        <button
          onClick={handleStart}
          className="mt-5 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-semibold shadow-lg transition"
        >
          Find Your Match
        </button>
      </div>
    </section>
  );
}

export default FirstSection;
