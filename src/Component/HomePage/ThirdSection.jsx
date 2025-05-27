import React from 'react';
import Image7 from '../../assets/Images/Image7.png';
import Image8 from '../../assets/Images/Image8.png';
import Image9 from '../../assets/Images/Image9.png';
import Image10 from '../../assets/Images/Image10.png';
import Image11 from '../../assets/Images/Image11.png';
import Image12 from '../../assets/Images/Image12.png';
import Image13 from '../../assets/Images/Image13.png';
import Image14 from '../../assets/Images/Image14.png';

const members = [
  { id: 1, name: 'Aish', age: 25, image: Image7 },
  { id: 2, name: 'Aarti', age: 28, image: Image8 },
  { id: 3, name: 'Rahul', age: 23, image: Image9 },
  { id: 4, name: 'Meera', age: 31, image: Image10 },
  { id: 5, name: 'Pritam', age: 27, image: Image11 },
  { id: 6, name: 'Zara', age: 29, image: Image12 },
  { id: 7, name: 'Shweta', age: 27, image: Image13 },
  { id: 8, name: 'Sherya', age: 29, image: Image14 },
];

function ThirdSection() {
  return (
    <section className="py-5 px-4 sm:px-12 ">
      <h1 className="text-4xl sm:text-5xl  font-bold md:text-6xl lg:text-7xl mb-12 text-black text-center gilda-display-regular leading-tight">
  HeartSync Recently
  <br />
  <span className="inline-block">
    Jo
    <span className="relative inline-block ">
      <span className="inline-block">
        <svg
          className="w-[12px] h-[20px] md:h-[28px] lg:w-[18px] lg:h-[30px]"
          viewBox="0 0 6 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="3" y1="0" x2="3" y2="100" stroke="black" strokeWidth="15" />
        </svg>
      </span>
      <span className="absolute top-[-14px] sm:top-[-1px] left-1/2 transform -translate-x-1/2 text-[#EB5757] text-xl sm:text-2xl">
        ❤️
      </span>
    </span>
    ned   Members
  </span>
</h1>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-3xl gilda-display-regular shadow-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="relative mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover rounded-2xl shadow-md"
              />

              {/* Heart top-right */}
              <div className="absolute -top-3 -right-3 bg-white p-2 rounded-full shadow-md">
                <span className="text-rose-500 text-xl">❤️</span>
              </div>

              {/* Online Badge bottom-left */}
              <div className="absolute bottom-4 left-4 flex justify-center items-center gap- bg-[#DE5353] px-1  py-1 rounded-full shadow-sm">
                <span className="text-white text-xs text-center font-medium">Online</span>
                <span className="w-3 h-3 relative  left-2 right-1  bg-green-500 rounded-full"></span>
              </div>
            </div>

            <div className=" space-y-1 gilda-display-regular">
              <h2 className="text-2xl font-semibold font-cursive">
                {member.name}, {member.age}
              </h2>
              {/* <p className="text-[#53321B] text-sm jost">
                Looking for a perfect match
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ThirdSection;
