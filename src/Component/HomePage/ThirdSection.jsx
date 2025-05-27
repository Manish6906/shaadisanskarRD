import React from 'react';
import girl from '../../assets/Images/Rectangle 390.png';
import girl1 from '../../assets/Images/Rectangle 392.png';
import boy from '../../assets/Images/Rectangle 394.png';
import boy1 from '../../assets/Images/Rectangle 390 (1).png';
import girl2 from '../../assets/Images/Rectangle 392 (1).png';
import girl3 from '../../assets/Images/Rectangle 394 (1).png';
import flower from '../../assets/Images/Zscasssc 2.png';
import flower1 from '../../assets/Images/Zscasssc 4.png';

const members = [
  { id: 1, image: girl, name: 'Anjela' },
  { id: 2, image: girl1, name: 'Sonia' },
  { id: 3, image: boy, name: 'Varun' },
  { id: 4, image: boy1, name: 'Tarun' },
  { id: 5, image: girl2, name: 'Ankita' },
  { id: 6, image: girl3, name: 'Simran Kaur' },
];

function ThirdSection() {
  return (
    <section className="relative bg-pink-50 py-20 px-8 lg:px-40 overflow-hidden">

      {/* Flower on Left Side (Top and Bottom) */}
      <img
        src={flower}
        alt="flower-left-top"
        className="absolute top-0 left-0 w-24 md:w-32 opacity-70"
      />
      <img
        src={flower}
        alt="flower-left-bottom"
        className="absolute bottom-0 left-0 w-24 md:w-32 opacity-70"
      />

      {/* Flower1 on Right Side (Top and Bottom) */}
      <img
        src={flower1}
        alt="flower1-right-top"
        className="absolute top-0 right-0 w-24 md:w-32 opacity-70"
      />
      <img
        src={flower1}
        alt="flower1-right-bottom"
        className="absolute bottom-0 right-0 w-24 md:w-32 opacity-70"
      />

      {/* Centered Flower (Top and Bottom) */}
      <img
        src={flower}
        alt="flower-center-top"
        className="absolute top-0 left-1/2 w-24 md:w-32 opacity-70 transform -translate-x-1/2"
      />
      <img
        src={flower1}
        alt="flower-center-bottom"
        className="absolute bottom-0 left-1/2 w-24 md:w-32 opacity-70 transform -translate-x-1/2"
      />

      {/* Section Header */}
      <div className="text-center mb-14 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-rose-600 gilda-display-regular">
          Heartsync Recently
        </h1>
        <h2 className="text-2xl mt-3 text-gray-700 font-medium jost">
          Joined Members
        </h2>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 z-10 relative">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white shadow-xl rounded-t-full overflow-hidden transform hover:scale-105 transition duration-300 px-6 pt-6"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-rose-600">{member.name}</h3>
              <p className="text-base text-gray-600 mt-2">
                Learn from them and try to make it to this board.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ThirdSection;
