import React from 'react';

// Import multiple unique images
import Ellipse105 from '../../assets/Images/Ellipse 105.png';
import Ellipse106 from '../../assets/Images/Ellipse 106.png';
import Ellipse107 from '../../assets/Images/Ellipse 107.png';
import Ellipse108 from '../../assets/Images/Ellipse 108.png';
import Ellipse109 from '../../assets/Images/Ellipse 109.png';
import Ellipse110 from '../../assets/Images/Ellipse 110.png';
import Ellipse1051 from '../../assets/Images/Ellipse 105 (1).png';
import Ellipse112 from '../../assets/Images/Ellipse 105 (2).png';
import Ellipse113 from '../../assets/Images/Ellipse 106 (1).png';
import Ellipse114 from '../../assets/Images/Ellipse 106 (2).png';
import Ellipse115 from '../../assets/Images/Ellipse 106.png';
import Ellipse116 from '../../assets/Images/Ellipse 107 (1).png';
import Ellipse117 from '../../assets/Images/Ellipse 107 (2).png';
import Ellipse118 from '../../assets/Images/Ellipse 107.png';
import Ellipse119 from '../../assets/Images/Ellipse 108 (1).png';
import Ellipse120 from '../../assets/Images/Ellipse 108.png';
import Ellipse121 from '../../assets/Images/Ellipse 110 (1).png';
import Ellipse122 from '../../assets/Images/Ellipse 109 (2).png';

function FifthMatch() {
  const images = [
    Ellipse105, Ellipse106, Ellipse107, Ellipse108, Ellipse109,
    Ellipse110, Ellipse1051, Ellipse112, Ellipse113, Ellipse114,
    Ellipse115, Ellipse116, Ellipse117, Ellipse118, Ellipse119,
    Ellipse120, Ellipse121, Ellipse122
  ];

  const names = [
    'Amanpreet', 'Simran', 'Harleen', 'Navjot', 'Kiran',
    'Manpreet', 'Gurleen', 'Rajdeep', 'Paramjit', 'Amrit',
    'Harman', 'Kiranjit', 'Sukhpreet', 'Navdeep', 'Lovepreet',
    'Inderjit', 'Jaswinder', 'Baljeet'
  ];

  const locations = [
    'Mumbai, Maharashtra', 'Bangalore, Karnataka', 'Chandigarh, Punjab', 'Ludhiana, Punjab', 'Amritsar, Punjab',
    'Patiala, Punjab', 'Jalandhar, Punjab', 'Delhi, Delhi-NCR', 'Noida, Uttar Pradesh', 'Gurgaon, Haryana',
    'Hyderabad, Telangana', 'Pune, Maharashtra', 'Jaipur, Rajasthan', 'Lucknow, Uttar Pradesh', 'Indore, Madhya Pradesh',
    'Kolkata, West Bengal', 'Chennai, Tamil Nadu', 'Ahmedabad, Gujarat'
  ];

  const religions = [
    'Sikh', 'Hindu', 'Muslim', 'Christian', 'Jain',
    'Buddhist', 'Parsi', 'Jewish', 'Agnostic', 'Spiritual',
    'Hindu', 'Sikh', 'Christian', 'Muslim', 'Jain',
    'Sikh', 'Hindu', 'Christian'
  ];

  const languages = [
    'Punjabi', 'Hindi', 'English', 'Gujarati', 'Kannada',
    'Tamil', 'Telugu', 'Malayalam', 'Marathi', 'Bengali',
    'Punjabi', 'Hindi', 'English', 'Gujarati', 'Tamil',
    'Kannada', 'Telugu', 'Marathi'
  ];

  const heights = [
    "5'1\"", "5'3\"", "5'5\"", "5'7\"", "5'0\"",
    "5'2\"", "5'4\"", "5'6\"", "5'8\"", "5'9\"",
    "5'1\"", "5'3\"", "5'5\"", "5'7\"", "5'2\"",
    "5'4\"", "5'6\"", "5'8\""
  ];

  const castes = [
    'Jat', 'Brahmin', 'Rajput', 'Khatri', 'Arora',
    'Agarwal', 'Gupta', 'Kayastha', 'Saini', 'Chaudhary',
    'Yadav', 'Thakur', 'Reddy', 'Nair', 'Shetty',
    'Patel', 'Deshmukh', 'Naidu'
  ];

  // Create members array
  const members = Array.from({ length: 18 }, (_, index) => ({
    id: index + 1,
    name: names[index],
    age: Math.floor(Math.random() * (30 - 22 + 1)) + 22, // Random age between 22-30
    height: heights[index],
    religion: religions[index],
    language: languages[index],
    caste: castes[index],
    location: locations[index],
    image: images[index]
  }));

  return (
    <div className="p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Members you may like (120)</h2>
      </div>

      {/* Make 3 cards in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {members.map((member) => (
          <div key={member.id} className="flex flex-col rounded-lg shadow hover:shadow-lg transition bg-[#FF5A60] h-full">
            
            {/* Profile Section */}
            <div className="p-4">
              <img src={member.image} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h1 className="text-xl font-semibold text-center gilda-display-regular text-white">{member.name}</h1>
              <h2 className="text-center jost text-white">
                {member.age}  {member.height}  {member.religion}, {member.language} 
              </h2>
              <h3 className="text-center jost text-white">{member.caste}</h3>
              <p className="text-center jost text-white">{member.location}</p>
            </div>

            {/* Connect Section */}
            <div className="flex flex-col justify-end bg-[#FFCCAB] flex-grow rounded-b-lg p-4">
              <p className="mb-2 font-medium jost text-black text-center">Connect with her?</p>
              <div className="text-center">
                <button className="bg-[#FF5A60] jost text-white px-24 py-1 cursor-pointer rounded hover:opacity-90">
                  Yes
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default FifthMatch;
