import React from 'react';
import girl from '../../assets/Images/Rectangle 390.png';
import girl1 from '../../assets/Images/Rectangle 392.png';
import boy from '../../assets/Images/Rectangle 394.png';
import boy1 from '../../assets/Images/Rectangle 390 (1).png';
import girl2 from '../../assets/Images/Rectangle 392 (1).png';
import girl3 from '../../assets/Images/Rectangle 394 (1).png';
import flowerLeft from '../../assets/Images/Zscasssc 2.png';
import flowerRight from '../../assets/Images/Zscasssc 4.png';

const members = [
  { id: 1, image: girl, name: 'अंजलि,26' },
  { id: 2, image: girl1, name: 'सोनिया,28' },
  { id: 3, image: boy, name: 'वरुण,29' },
  { id: 4, image: boy1, name: 'तरुण,26' },
  { id: 5, image: girl2, name: 'अंकिता,25' },
  { id: 6, image: girl3, name: 'सिमरन कौर,24' },
];

function ThirdSection() {
  return (
    <section className="relative bg-pink-50 py-20 px-4 lg:px-20 overflow-hidden">

      {/* Side Flowers */}
      <img src={flowerLeft} alt="flower" className="absolute left-0 top-0 w-28 md:w-40" />
      <img src={flowerLeft} alt="flower" className="absolute left-0 bottom-0 w-28 md:w-40" />
      <img src={flowerRight} alt="flower" className="absolute right-0 top-0 w-28 md:w-40" />
      <img src={flowerRight} alt="flower" className="absolute right-0 bottom-0 w-28 md:w-40" />

      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold text-black font-serif">हार्टसिंक हाल ही में</h1>
        <h2 className="text-3xl text-rose-600 italic mt-2">जुड़े हुए सदस्य</h2>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-15 gap-x-10 relative z-10">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center text-center "
          >
            {/* Arch container */}
            <div className="w-48 h-64 md:w-56 md:h-72 lg:w-72 lg:h-96 p-2 hover:scale-90 cursor-pointer transition duration-200 bg-white rounded-t-full shadow-md overflow-hidden flex items-end justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover rounded-t-full blur-md"
              />
            </div>
            <div className="mt-4 w-48 md:w-56">
              <h3 className="text-lg font-medium text-rose-600">{member.name}</h3>
              {/* <p className="text-sm text-gray-700 mt-1">
                Learn from them and try to <br /> make it to this board.
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ThirdSection;
