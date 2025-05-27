import React from 'react';
import { Link } from 'react-router-dom';

function Matches({ data }) {
  return (
    <div className="p-4 bg-[#f5d4bd] border-2 border-gray-500 w-full mb-3  md:mb-5 rounded-lg shadow ">
      {data && data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...data].reverse().map((item, index) => (
            <div
              key={item._id}
              className="flex flex-col gap-3 bg-white/30 p-4 rounded-md transition duration-150 hover:scale-104"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.userId?.profileImage}
                  alt="match"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-medium text-sm">
                    {item.userId?.firstName || "Unknown"} {item.userId?.lastName || ""}
                  </h2>
                  <p className="text-xs text-gray-700">
                    Age: {item.age} | Height: {item.height} | City: {item.city}
                  </p>
                </div>
              </div>
              <div className="text-xs text-gray-700 pl-16 sm:pl-0">
                <p>Annual Income: {item.annualincome} | Blood Group: {item.bloodgroup}</p>
                <p>Religion: {item.religion} | Community: {item.community} | Diet: {item.diet}</p>
                <p>Hobbies: {item.hobbies}</p>
              </div>
              
                <div className='flex justify-center'>
                <Link to={`/profile/${item?.userId._id}`}>
                  <button className='bg-red-200 px-7 py-1  cursor-pointer hover:bg-red-300 rounded-md'>
                    View Profile
                  </button>
                  </Link>
                </div>
            
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-700 text-lg py-10">No profile</div>
      )}
    </div>
  );
}

export default Matches;
