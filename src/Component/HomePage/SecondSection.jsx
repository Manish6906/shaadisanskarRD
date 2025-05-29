import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useWindowWidth } from '../../hooks/useWindowWidth';

import FloralLeft from '../../assets/Images/Zscasssc 2.png';
import FloralRight from '../../assets/Images/Zscasssc 4.png';
import Image4 from '../../assets/Images/Rectangle 329.png';
import Image5 from '../../assets/Images/Rectangle 41.png';
import Image6 from '../../assets/Images/Rectangle 41 (1).png';
import Image3 from '../../assets/Images/Property 1=Variant2.png';

const stories = [
  { id: 1, image: Image3, name: 'Ravi & Anjali', text: '“We met through this platform, and within months, we knew we were meant to be. Thank you for making our dream come true!”' },
  { id: 2, image: Image4, name: 'Aman & Shweta', text: '“We connected on this platform and instantly felt a spark. What began as a simple chat turned into a beautiful bond.”' },
  { id: 3, image: Image5, name: 'Geetanjali & Aditya', text: '“Thanks to this platform, I met Aditya—my perfect match. Our journey from strangers to soulmates began here.”' },
  { id: 4, image: Image6, name: 'Paras & Apoorva', text: '“We found love where we least expected—right here on this platform. So thankful for this journey!”' },
];

// Group stories
const groupStories = (data, perSlide) => {
  const result = [];
  for (let i = 0; i < data.length; i += perSlide) {
    result.push(data.slice(i, i + perSlide));
  }
  return result;
};

function SecondSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const width = useWindowWidth();
  const isMdUp = width >= 768;

  const groupedStories = groupStories(stories, isMdUp ? 2 : 1);

  return (
    <section className="relative px-4 py-16 overflow-hidden bg-pink-50 ">
      <h1 className="text-5xl font-serif text-center font-bold mb-20">
        <span className="text-black">Success </span>
        <span className="text-rose-600 italic">Stories</span>
      </h1>

      <img src={FloralLeft} alt="left flower" className="absolute -left-3 top-40 w-40 hidden md:block" />
      <img src={FloralRight} alt="right flower" className="absolute right-0 top-40 w-40 hidden md:block" />

      <Carousel
        selectedItem={currentSlide}
        onChange={setCurrentSlide}
        showThumbs={false}
        autoPlay
        interval={4500}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        swipeable={true}
        emulateTouch={true}
      >
        {groupedStories.map((group, index) => (
          <div key={index} className="flex flex-col items-center gap-10 md:flex-row md:justify-center py-2">
            {group.map((story) => (
              <div
                key={story.id}
                className="rounded-[60px] shadow-xl max-w-[595px] text-center px-2 py-2 sm:py-4 lg:p-4 relative border-4 border-rose-100"
              >
                <div className="relative h-[450px] w-full rounded-[50px] overflow-hidden shadow-md">
                  {/* Image with blur effect */}
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover filter blur-md"
                  />
                </div>
                <h2 className="text-2xl text-rose-600 font-semibold mt-4 font-[Dancing Script]">{story.name}</h2>
                <p className="italic text-gray-600 text-sm mt-2 font-[Jost]">{story.text}</p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>

      <div className="mt-8 flex justify-center">
        {groupedStories.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 mx-2 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide ? 'bg-rose-500 scale-110' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default SecondSection;
