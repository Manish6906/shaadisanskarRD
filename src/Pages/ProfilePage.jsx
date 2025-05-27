import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import Navbar4 from "../Component/Navbar/Navbar4";
import ProfileFull from "../Component/MyProfilePage/ProfileFull";
import Footer from "../Component/FooterPage/Footer";
import DetailOne from "../Component/MyProfilePage/DetailOne";
import DetailTwo from "../Component/MyProfilePage/DetailTwo";
import DetailThree from "../Component/MyProfilePage/DetailThree";
import DetailFour from "../Component/MyProfilePage/DetailFour";
import DetailFive from "../Component/MyProfilePage/DetailFive";
import DetailSix from "../Component/MyProfilePage/DetailSix";
import DetailSeven from "../Component/MyProfilePage/DetailSeven";
import DetailFromOne from "../Component/PatnerPrefrenceDetails.jsx/DetailFromOne";
import ErrorBoundary from "../Component/ErrorBoundring/ErrorBoundary"

function ProfilePage() {
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    // Check if token exists (use your preferred method to retrieve the token)
    const token = localStorage.getItem("token"); // Or use sessionStorage/cookies depending on where the token is stored

    if (!token) {
      navigate("/login"); // Redirect to login if token is not found
    }
  }, [navigate]);

  return (
    <div className="jost ">

        <Navbar4 />
        <ErrorBoundary>
        <ProfileFull />
        <div className="md:flex items-center gap-3 p-4 md:px-7">
          <button className="bg-red-600 text-white px-5 py-1 cursor-pointer rounded-full">
            About Myself
          </button>
        </div>
        <p className="text-center text-red-500 text-sm mb-3 font-medium mt-2 animate-pulse">
          Please fill in all the details if not already filled.
        </p>

        <DetailOne />
        <DetailTwo />
        <DetailThree />
        <DetailFour />
        <DetailFive />
        <DetailSix />
        <DetailSeven />
        <div className="md:flex gap-3 p-4 md:px-7">
          <button className="bg-red-600 text-white px-5 py-1 cursor-pointer rounded-full">
            Partner Preferences
          </button>
        </div>
        <DetailFromOne />
        <div className="md:flex gap-3 p-4 md:px-7">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#FFE7D6] text-black font-bold px-5 py-1 cursor-pointer rounded-full"
          >
            Back To Top
          </button>
        </div>
        </ErrorBoundary>
        <Footer />
      
    </div>
  );
}

export default ProfilePage;
