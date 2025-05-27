import Ellipse1 from '../../assets/Images/Ellipse1.png';
import Ellipse2 from '../../assets/Images/Ellipse2.png';
import Ellipse3 from '../../assets/Images/Ellipse3.png';
import Ellipse59 from '../../assets/Images/Ellipse 59.png';
import Ellipse57 from '../../assets/Images/Ellipse 59.png';
import Matches from './Matches';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function MatchesFull() {
  let API= import.meta.env.VITE_APP_API_URL
  const matchData = [
    { img: Ellipse1, details: `22 yrs, 4' 5", Never Married, Punjabi` },
    { img: Ellipse2, details: `22 yrs, 4' 5", Never Married, Punjabi` },
    { img: Ellipse3, details: `22 yrs, 4' 5", Never Married, Punjabi` },
    { img: Ellipse57, details: `22 yrs, 4' 5", Never Married, Punjabi` },
    { img: Ellipse59, details: `22 yrs, 4' 5", Never Married, Punjabi` },
  ];


 // gets userId from URL
  const [data, setData] = useState([]);
  let a= JSON.parse(localStorage.getItem("userProfile"));
  let userId= a._id;
  // console.log(userId);
  

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get(`${API}user/opposite/${userId}`);
        setData(res.data); // Assuming res.data is an array
        // console.log(res.data);
        
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [userId]);


  return (
    <div className="bg-[#FAF4EE] jost py-6 px-4 ">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-start ">
        <div className="w-full">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 gilda-display-regular text-center">New Profiles</h2>

          <Matches data={data.slice(-3)} />
        </div>
       
        {/* <div className="w-full max-w-md">
          <h2 className="text-lg font-semibold text-gray-800 gilda-display-regular mb-3 text-center">New Matches for You</h2>
          <Matches data={matchData} />
        </div> */}
      </div>
     <div className=' py- flex justify-center md:justify-end'>
     <Link to="/allprofile">
          <button className='bg-black px-4 py-2 hover:opacity-90 cursor-pointer text-white rounded-md '>View All Profiles</button>
        </Link>
     </div>
    </div>
  );
}

export default MatchesFull;
