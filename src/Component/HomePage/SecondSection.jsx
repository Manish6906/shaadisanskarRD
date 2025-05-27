import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image3 from '../../assets/Images/Image3.png';
import Image4 from '../../assets/Images/Image4.png';
import Image5 from '../../assets/Images/Image5.png';
import Image6 from '../../assets/Images/Image6.png';
import Image7 from '../../assets/Images/Group 95.png';


const stories = [
  {
    id: 1,
    image: Image3,
    name: 'Ravi & Anjali',
    text: 'I joined this platform a year ago and found Ravi within a month. I never imagined meeting someone so caring and genuine. Truly blessed to have him—thanks to this amazing platform!',
  },
  {
    id: 2,
    image: Image4,
    name: 'Aman & Shweta',
    text: 'We connected on this platform and instantly felt a spark. What began as a simple chat soon turned into a beautiful bond. Forever grateful for bringing us together!',
  },
  {
    id: 3,
    image: Image5,
    name: 'Geetanjali & Aditya',
    text: 'Thanks to this platform, I met Aditya—my perfect match. Our journey from strangers to soulmates began here, and we couldn’t be happier!',
  },
  {
    id: 4,
    image: Image6,
    name: 'Paras & Apoorva',
    text: 'We found love where we least expected—right here on this platform. Now we’re building a future together, and it all started with a single message. So thankful!',
  },
];

function SecondSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="success-stories pb-10 px-4 ">
      <h1 className="text-5xl font-bold text-center mb-14 text-rose-600 drop-shadow-md font-serif">
     
      </h1>

      <div className="mt-10">
        <Carousel
          selectedItem={currentSlide}
          onChange={(index) => setCurrentSlide(index)}
          showThumbs={false}
          autoPlay
          interval={4500}
          showStatus={false}
          showIndicators={false} // turn this off
          showArrows={false}
          swipeable={true}
          emulateTouch={true}
        >
          {stories.map((story) => (
            <div
              key={story.id}
              className="flex flex-col md:flex-row w-full transition-opacity duration-1000 ease-in-out "
            >
              {/* {/ Image Section /} */}
              <div className="relative md:w-1/2 w-full shadow-md overflow-hidden">
                <img
                  src={story.image}
                  alt={`Photo of ${story.name}`}
                  className="w-full h-[450px] object-cover transform transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-3 border-4 border-white pointer-events-none"></div>
           
              </div>

              {/* {/ Text Section /} */}
              <div
                className="relative md:w-1/2 w-full flex shadow-md items-center justify-center text-center p-4"
                style={{
                  backgroundImage: `url(${Image7})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className=" p-8  max-w-lg mx-auto space-y-4 gilda-display-regular">
                  <h2 className="text-3xl font-bold text-black ">{story.name}</h2>
                  <p className="text-gray-700 italic text-lg leading-relaxed jost">{story.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* {/ Custom Dots Below Section /} */}
        <div className="md:mt-10 flex justify-center">
          {stories.map((_, index) => {
            const isActive = index === currentSlide;
            return (
              <span
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 mx-2 rounded-full cursor-pointer transition-colors duration-300 ${
                  isActive ? 'bg-rose-500' : 'bg-gray-300'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
