import React from "react";
// 🖼️ Image imports (unique only)
import profile2 from "../../assets/Images/Rectangle 192.png";
import images2 from "../../assets/Images/Background Remover.png";
import images3 from "../../assets/Images/Full Family.png";
import image4 from "../../assets/Images/Graduation Cap.png";
import image5 from "../../assets/Images/Search for Love.png";
import image6 from "../../assets/Images/Ellipse 93.png";
import image7 from "../../assets/Images/403022_business man_male_user_avatar_profile_icon 2.png";
import image8 from "../../assets/Images/Natural Food.png";
import images1 from "../../assets/Images/Vegetarian Food.png";
import image9 from "../../assets/Images/ballon2 2.png";
import image10 from "../../assets/Images/Group 274 (1).png";
import image11 from "../../assets/Images/Group 273.png";
// import image12 from "../../assets/Images/Rectangle 192 (1).png"

// 🎨 FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faComment,
  faChild,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";

// 🔔 Other Icons
import { Mail, Phone } from "lucide-react";
import { RiUserSearchFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SecondProfile = () => {
  const preferences = [
    { label: "Age", value: "21 to 24" },
    { label: "Height", value: "4' 5\"(134cm) to 5' 5\"(165cm)" },
    { label: "Marital Status", value: "Never Married" },
    { label: "Religion / Community", value: "Arora, Jat, Gursikh, Khatri" },
    { label: "Mother Tongue", value: "Punjabi, English" },
    { label: "Country Living in", value: "Canada, India" },
  ];

  return (
    <div className="jost">
      <div className=" bg-white p-6 flex flex-col  ">
        {/* Heading */}
        <div className="relative w-full">
          <div className="text-5xl font-serif font-extralight text-black w-fit space-y-3 gilda-display-regular">
            <p>Here are Today's top</p>
            <p>Matches for you. Connect</p>
            <p>with them now!</p>
          </div>

          <div className="absolute top-0 -right-4 -mt-2">
  <img
    src={image9}
    alt="heart"
    className="w-30 h-30 sm:w-25 sm:h-25  md:w-40 md:h-40 lg:w-60 lg:h-60 "
  />
</div>



        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center space-x-8 mb-4 mt-14">
  <button className="flex items-center justify-center cursor-pointer rounded-4xl bg-[#FFCCAB] h-12 w-24">
    <img src={image10} alt="Previous button" className="w-15 h-16" />
  </button>

   <Link to="/thirdProfile">
  <button className="flex items-center justify-center cursor-pointer rounded-4xl bg-[#FFCCAB] h-12 w-24">
    <img src={image11} alt="Next button" className="w-16 h-16" />
  </button>
  </Link>
</div>

  

        {/* Profile Card */}
        <div className="flex flex-col md:flex-row items-start justify-center bg-[#FFCCAB] p-6 rounded-2xl shadow-lg  max-w-4xl mx-auto relative space-y-6 md:space-y-0 md:space-x-6">
  {/* Left Side: Image */}
  <div className="flex flex-col items-center w-full md:w-auto">
    {/* Profile Image */}
    <img
      src={profile2}
      alt="Profile"
      className="w-48 md:w-64 h-auto rounded-xl object-cover z-10"
    />

  </div>

  {/* Right Side: Profile Details */}
  <div className="text-left w-full md:w-3/5">
    <h2 className="text-lg font-semibold mt-2 md:mt-0">
      Harman{" "}
      <FontAwesomeIcon icon={faLock} className="text-[#FF5A60] ml-2" />
    </h2>
    <p className="text-sm text-red-500">
      <FontAwesomeIcon icon={faComment} className="text-[#FF5A60] mr-1" />
      Online 1 day ago
    </p>

    <hr className="my-3" />

    <div className="grid grid-cols-2 gap-y-2 text-sm">
      <span>21 yrs, 4' 6", Gemini</span>
      <span>Never Married</span>
      <span>Punjabi</span>
      <span>Chandigarh</span>
      <span>Sikh, Gursikh</span>
      <span>Finance Professional</span>
      <span>Bachelors degree in Finance</span>
      <span>Earns Upto INR 1 Lakh annually</span>
    </div>

    <div className="mt-4 flex justify-end">
      <button className="bg-[#FF5A60] hover:bg-[#ff3b5f] text-white font-medium px-4 py-2 rounded-full">
        Connect Now
      </button>
    </div>
  </div>
</div>

      </div>

      <div className="max-w-2xl mx-auto p-4 bg-[#FFCCA8] rounded-xl shadow-md text-[#5A1D0D]">
        {/* Header */}
        <div className="relative mb-4">
          <div className="flex flex-wrap justify-between items-center">
            <h2 className="text-2xl font-semibold text-[#FF5A60] mr-4 border-b-2 border-[#FF5A60]">
              Detailed Profile
            </h2>
            <h2 className="text-2xl font-semibold text-black">
              Partner Preferences
            </h2>
          </div>
          <div className="absolute left-[125px] right-0 bottom-0 border-b-2 border-black"></div>
        </div>

        {/* About */}
        <div className="flex flex-wrap items-start gap-4 mb-6">
          {/* Circle with vertical line */}
          <div className="flex flex-col items-center">
            <div className="w-13 h-13 border-2 border-[#FF5A60] rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faComment} className="text-[#FF5A60]" />
            </div>
            <div className="w-px h-38 bg-[#FF5A60]" />
          </div>

          {/* Text content */}
          <div className="w-full md:w-2/3">
    <h3 className="text-xl font-semibold mb-2 text-[#000000]">
      About Jazzleen D
    </h3>
    <p className="text-sm leading-relaxed text-[#000000]">
      It feels good to introduce myself. Honesty and integrity are the guiding values of my life.
      I am looking for a simple and sober person who will be with me in all phases of life.
      Thanks for going through my profile. I want ki koi mughe itna pyaar kare jitna kisi ne kisi
      se n kra ho jo memo princess treatment de meko support mre mera sath de meri family ki respect
      kre mei uaki family ki respect kru meko Western clothes wear krna bhut psnd hai meko clubs
      concerts jane ka bhut shonk Hai i want to be a businesswomen.
    </p>
  </div>
        </div>

        {/* Hobbies */}
        <div className="flex flex-wrap items-start space-x-4 mb-10">
          {/* Icon and line */}
          <div className="flex flex-col items-center">
            <div className="relative w-13 h-13 border-2 border-[#FF5A60] rounded-full flex items-center justify-center bg-[#FCD0B2]">
              <FontAwesomeIcon
                icon={faChild}
                className="text-[#FF5A60] text-2xl z-10"
              />
              <div className="absolute inset-1 border-2 border-dotted border-[#FF5A60] rounded-full" />
            </div>
            <div className="w-px h-20 bg-[#FF5A60]" />
          </div>

          {/* Title and chips */}
          <div>
            <h3 className="text-2xl font-normal text-[#000000] mb-6">
              Hobbies & Interests
            </h3>
            <div className="flex gap-3 mb-2 flex-wrap">
              {["Photography", "Acting", "Dancing"].map((item) => (
                <span
                  key={item}
                  className="bg-[#FF5A60] text-white px-4 py-1 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap">
              {["Movies", "Music"].map((item) => (
                <span
                  key={item}
                  className="bg-[#FF5A60] text-white px-4 py-1 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-wrap items-start gap-4 mb-10">
  {/* Icon and line */}
  <div className="flex flex-col items-center">
    <div className="relative w-13 h-13 border-2 border-[#FF5A60] rounded-full flex items-center justify-center bg-[#FCD0B2]">
      <RiUserSearchFill className="text-[#FF5A60] text-2xl z-10" />
    </div>
    <div className="w-px h-40 bg-[#FF5A60]" />
  </div>

  {/* Contact Details */}
  <div className="flex-1 min-w-[260px] relative">
    <h3 className="text-xl font-normal mb-2 text-[#000000]">
      Contact Details
    </h3>
    <div className="bg-[#FFFFFF] text-black rounded-xl p-4 shadow-sm">
      <div className="flex items-start mb-3">
        <Phone className="w-4 h-4 mr-2 mt-1 text-[#FF5A60]" />
        <div>
          <p className="text-sm font-medium">Contact Number</p>
          <p className="text-base">+91 8287X XXXXX</p>
        </div>
      </div>
      <div className="flex items-start mb-3">
        <Mail className="w-4 h-4 mr-2 mt-1 text-[#FF5A60]" />
        <div>
          <p className="text-sm font-medium">Email ID</p>
          <p className="text-base">XXXXXXXXXX@gmail.com</p>
        </div>
      </div>
    </div>

    {/* Upgrade Now text */}
    <div className="absolute top-full right-0 mt-3 flex items-center text-sm">
      <div className="w-6 h-6 rounded-full border-2 border-amber-50 flex items-center justify-center mr-2">
        <FontAwesomeIcon
          icon={faUnlock}
          className="text-[#FF5A60] text-[15px]"
        />
      </div>
      <span className="text-[#FF5A60] font-semibold mr-1">
        Upgrade Now
      </span>
      <span className="text-black">to view details</span>
    </div>
  </div>
</div>


        {/* Lifestyle */}
        <div className="flex flex-wrap items-start space-x-2 mb-7">
          {/* Icon and line */}
          <div className="flex flex-col items-center">
            <div className="relative w-13 h-13 border-2 border-[#FF5A60] rounded-full flex items-center justify-center bg-[#FCD0B2]">
              <img src={image8} alt="leaf" />
            </div>
            <div className="w-px h-40 bg-[#FF5A60]" />
          </div>

          {/* Title and chips */}
          <div className="w-full md:w-auto">
            <h3 className="text-2xl font-normal text-[#000000] mb-6">
              Lifestyle
            </h3>
            <div className="relative right-2  flex mt-18">
              <img
                src={images1}
                alt="veg"
                className="bg-amber-50 rounded-full w-8"
              />
              <h1 className="text-[#000000] ml-4">Vegetarian</h1>
            </div>
          </div>
        </div>

        {/* Background */}
        <div className="flex flex-wrap items-start space-x-2 mb-7">
          {/* Icon and line */}
          <div className="flex flex-col items-center">
            <div className="relative w-13 h-13 border-2 border-[#FF5A60] rounded-full flex items-center justify-center bg-[#FCD0B2]">
              <img src={images2} alt="background" />
            </div>
            <div className="w-px h-40 bg-[#FF5A60]" />
          </div>

          {/* Title */}
          <div className="w-full md:w-auto">
            <h3 className="text-2xl font-normal text-[#000000] mb-6">
              Background
            </h3>
            <div className="space-y-2">
              <p className="text-[#000000]">Sikh, Punjabi</p>
              <p className="text-[#000000]">Arora</p>
              <p className="text-[#000000]">
                Lives in Chandigarh, Punjab, India
              </p>
            </div>
          </div>
        </div>

        {/* Family */}
        <div className="flex flex-wrap items-start space-x-4 mb-7">
          {/* Icon and line */}
          <div className="flex flex-col items-center">
            <div className="relative w-13 h-13 border-2 border-[#FF5A60] rounded-full flex items-center justify-center bg-[#FCD0B2]">
              <img src={images3} alt="faimly" />
            </div>
            <div className="w-px h-47 bg-[#FF5A60]" />
          </div>

          {/* Family Details */}
          <div className="w-full md:w-auto">
            <h3 className="text-2xl font-normal text-[#000000] mb-4">
              Family Details
            </h3>
            <div className="space-y-2">
              <p className="text-[#000000]">
                Father has passed away, Mother is a homemaker
              </p>
              <p className="text-[#000000]">1 Brother</p>
              <p className="text-[#000000]">Chandigarh, Punjab, India</p>
              <p className="text-[#000000]">Family Financial Status</p>
              <p className="text-[#000000]">
                Middle - Annual family income is 10-30 lakhs
              </p>
              <p className="text-[#FF5A60] font-bold">Show more</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="flex flex-wrap items-start space-x-4 mb-7">
          {/* Icon and line */}
          <div className="flex flex-col items-center">
            <div className="relative w-13 h-13 border-2 border-[#FF5A60] rounded-full flex items-center justify-center bg-[#FCD0B2]">
              <img src={image4} alt="education" className="w-8 h-8" />
            </div>
            <div className="w-px h-28 bg-[#FF5A60]" />
          </div>

          {/* Education Details */}
          <div className="w-full md:w-auto">
            <h3 className="text-2xl font-normal text-[#000000] mb-4">
              Education & Career
            </h3>
            <div className="space-y-2">
              <p className="text-[#000000]">
                Customer Support / BPO / KPO Professional
              </p>
              <p className="text-[#000000]">
                <span className="font-bold">Self: </span> Earns Upto INR 1 Lakh
                annually
              </p>
              <p className="text-[#000000]">
                <span className="font-bold">Family:</span> Earns INR 10-30 lakhs
                annually
              </p>
            </div>
          </div>
        </div>

        {/* Matches */}
        <div className="flex flex-wrap items-start space-x-4 mb-7">
          {/* Icon and line */}
          <div className="flex flex-col items-center">
            <div className="relative w-13 h-13 border-2 border-[#FF5A60] rounded-full flex items-center justify-center bg-[#FCD0B2]">
              <img src={image5} alt="matches" />
            </div>
            <div className="w-px h-135 bg-[#FF5A60]" />
          </div>

          {/* Profile Matches */}
          <div>
  <h3 className="text-2xl font-normal text-[#000000] mb-4 text-center md:text-left">
    What She is looking for
  </h3>

  <div className="bg-peach-100 p-6 rounded-lg max-w-4xl mx-auto text-[#FF5A60]">
    {/* Top section with Her Preferences and You Match */}
    <div className="flex   justify-between items-center md:items-start mb-6 gap-6">
      {/* Her Preferences - Left */}
      <div className="flex flex-col items-center md:items-start">
        <img
          src={image6}
          alt="Her Preferences"
          className="rounded-full w-20 h-20"
        />
        <p className="text-black font-semibold mt-2">Her Preferences</p>
      </div>

      {/* You Match - Right */}
      <div className="flex flex-col items-center md:items-end">
        <img
          src={image7}
          alt="You Match"
          className="rounded-full w-20 h-20"
        />
        <p className="text-black font-semibold mt-2">You Match</p>
        
      </div>
      
    </div>
    <div className="bg-[#FF5A60] text-white px-4 py-1 rounded-full font-semibold mt-2 text-sm text-center">
          You match 7/7 of her Preferences
        </div>

    {/* Preferences list with checkmarks */}
    <div className="grid grid-cols-2  justify-between gap-4 mt-6 text-sm">
      {/* Labels and values */}
      <div className="md:col-span-1 space-y-6">
        {preferences.map((item, index) => (
          <div key={index}>
            <p className="font-semibold">{item.label}</p>
            <p className="text-black">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Checkmarks aligned right */}
      <div className="flex flex-col  items-end space-y-9 gap-4 md:space-y-6 ">
        {preferences.map((_, index) => (
          <span key={index} className="text-green-500 text-xl">✔️</span>
        ))}
      </div>
    </div>
  </div>
</div>

          
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <button className="bg-[#FF5A60] hover:bg-[#ff3b5f] text-white font-medium px-4 py-2 rounded-full">
          Back to top
        </button>
      </div>
    </div>
  );
};

export default SecondProfile;
