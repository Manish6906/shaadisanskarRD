import React from "react";
import { IoIosChatbubbles } from "react-icons/io";

// Image imports
import image1 from "../../assets/Images/Rectangle 268.png";
import image2 from "../../assets/Images/Rectangle 271.png";
import image3 from "../../assets/Images/Rectangle 274.png";
import image4 from "../../assets/Images/Rectangle 277.png";
import image5 from "../../assets/Images/Rectangle 280.png";
import image6 from "../../assets/Images/Rectangle 283.png";
import image7 from "../../assets/Images/Rectangle 286.png";
import image8 from "../../assets/Images/Rectangle 289.png";
import image9 from "../../assets/Images/Rectangle 292.png";

const profiles = [
  {
    name: "Kuldeep kaur",
    image: image1,
    onlineStatus: "Online 1 day ago",
    age: "21 yrs",
    height: "4'6''",
    zodiac: "Gemini",
    language: "Punjabi",
    religion: "Sikh, Gursikh",
    education: "Bachelors degree in Finance",
    maritalStatus: "Never Married",
    city: "Chandigarh",
    profession: "Finance Professional",
    income: "Earns Upto INR 1 Lakh annually",
  },
  {
    name: "Rammu",
    image: image2,
    onlineStatus: "Online 1 day ago",
    age: "21 yrs",
    height: "4'6''",
    zodiac: "Gemini",
    language: "Punjabi",
    religion: "Sikh, Gursikh",
    education: "Bachelors degree in Finance",
    maritalStatus: "Never Married",
    city: "Chandigarh",
    profession: "Finance Professional",
    income: "Earns Upto INR 1 Lakh annually",
  },
  {
    name: "Simran Kaur",
    image: image3,
    onlineStatus: "Online 1 day ago",
    age: "21 yrs",
    height: "4'6''",
    zodiac: "Gemini",
    language: "Punjabi",
    religion: "Sikh, Gursikh",
    education: "Bachelors degree in Finance",
    maritalStatus: "Never Married",
    city: "Chandigarh",
    profession: "Finance Professional",
    income: "Earns Upto INR 1 Lakh annually",
  },
  {
    name: "Harjit Kaur",
    image: image4,
    onlineStatus: "Online 1 day ago",
    age: "21 yrs",
    height: "4'6''",
    zodiac: "Gemini",
    language: "Punjabi",
    religion: "Sikh, Gursikh",
    education: "Bachelors degree in Finance",
    maritalStatus: "Never Married",
    city: "Chandigarh",
    profession: "Finance Professional",
    income: "Earns Upto INR 1 Lakh annually",
  },
  {
    name: "pavneet Kaur",
    image: image5,
    onlineStatus: "Online 1 day ago",
    age: "21 yrs",
    height: "4'6''",
    zodiac: "Gemini",
    language: "Punjabi",
    religion: "Sikh, Gursikh",
    education: "Bachelors degree in Finance",
    maritalStatus: "Never Married",
    city: "Chandigarh",
    profession: "Finance Professional",
    income: "Earns Upto INR 1 Lakh annually",
  },
  {
    name: "Richa",
    image: image6,
    onlineStatus: "Online 1 day ago",
    age: "21 yrs",
    height: "4'6''",
    zodiac: "Gemini",
    language: "Punjabi",
    religion: "Sikh, Gursikh",
    education: "Bachelors degree in Finance",
    maritalStatus: "Never Married",
    city: "Chandigarh",
    profession: "Finance Professional",
    income: "Earns Upto INR 1 Lakh annually",
  },
  {
    name: "Riya",
    image: image7,
    onlineStatus: "Online 1 day ago",
    age: "21 yrs",
    height: "4'6''",
    zodiac: "Gemini",
    language: "Punjabi",
    religion: "Sikh, Gursikh",
    education: "Bachelors degree in Finance",
    maritalStatus: "Never Married",
    city: "Chandigarh",
    profession: "Finance Professional",
    income: "Earns Upto INR 1 Lakh annually",
  },
  {
    name: "Tanya",
    image: image8,
    onlineStatus: "Online 1 day ago",
    age: "21 yrs",
    height: "4'6''",
    zodiac: "Gemini",
    language: "Punjabi",
    religion: "Sikh, Gursikh",
    education: "Bachelors degree in Finance",
    maritalStatus: "Never Married",
    city: "Chandigarh",
    profession: "Finance Professional",
    income: "Earns Upto INR 1 Lakh annually",
  },
  {
    name: "Sanya",
    image: image9,
    onlineStatus: "Online 1 day ago",
    age: "21 yrs",
    height: "4'6''",
    zodiac: "Gemini",
    language: "Punjabi",
    religion: "Sikh, Gursikh",
    education: "Bachelors degree in Finance",
    maritalStatus: "Never Married",
    city: "Chandigarh",
    profession: "Finance Professional",
    income: "Earns Upto INR 1 Lakh annually",
  },
];

const FirstMatch = () => {
  return (
    <div className="p-4 md:p-8 jost">
      <h2 className="text-xl md:text-2xl font-normal mb-5 text-center md:mr-56 mx-auto px-4 gilda-display-regular">
        New Members who match most of your Preferences
      </h2>
      <div className="space-y-6">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="bg-[#FF5A60] p-4 rounded-xl flex flex-col md:flex-row items-center md:items-start justify-between shadow-md max-w-full md:max-w-3xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start w-full">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full sm:w-32 h-48 rounded-lg object-cover"
              />
              <div className="text-white text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-normal">
                  {profile.name}
                </h3>
                <p className="text-xs md:text-sm flex items-center justify-center sm:justify-start mt-1">
                  <IoIosChatbubbles className="text-amber-50 mr-1" />
                  {profile.onlineStatus}
                </p>
                <div className="h-px bg-white my-2  w-140"></div>
                <div className="text-xs md:text-sm space-y-1 mt-3">
                  <div>
                    {profile.age}, {profile.height}, {profile.zodiac}
                  </div>
                  <div>{profile.language}</div>
                  <div>{profile.religion}</div>
                  <div>{profile.education}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center sm:items-end mt-4 sm:mt-0 text-white text-xs md:text-sm w-full sm:w-auto">
            <button className="bg-white text-black font-normal px-6 py-0.5 rounded-md mb-2 hover:bg-black hover:text-white transition duration-300">
              Follow
            </button>


              <div className="space-y-1 mt-5 sm:mt-10 text-center sm:text-right md:text-left">
                <div>{profile.maritalStatus}</div>
                <div>{profile.city}</div>
                <div>{profile.profession}</div>
                <div>{profile.income}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 text-xl">
        You can check out these Recently Joined profiles that meet many of your
        Preferences.
      </div>
    </div>
  );
};

export default FirstMatch;
