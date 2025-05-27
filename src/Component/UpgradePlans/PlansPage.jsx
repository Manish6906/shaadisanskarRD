import React from 'react';
import Navbar3 from '../Navbar/Navbar3';
import { Link } from 'react-router-dom';
import Rectangle67 from '../../assets/Images/Rectangle 67.png';


function PlanPage() {
  const plans = [
    {
      name: 'Gold',
      duration: '3 Months',
      price: '₹3499',
      monthly: '₹1166 per month',
      features: [
        'Send unlimited Messages',
        'View upto 150 contact Numbers',
        'Standout from other profiles',
      ],
    },
    {
      name: 'Diamond',
      duration: '6 Months',
      price: '₹5499',
      monthly: '₹916 per month',
      features: [
        'Send unlimited Messages',
        'View upto 300 contact Numbers',
        'Standout from other profiles',
        'Lets matches contact you directly',
      ],
    },
    {
      name: 'Platinum',
      duration: '12 Months',
      price: '₹10499',
      monthly: '₹874 per month',
      features: [
        'Send unlimited Messages',
        'View upto 600 contact Numbers',
        'Standout from other profiles',
        'Lets matches contact you directly',
      ],
    },
  ];

  return (
    <div
      className="relative bg-white py-1 px-1 jost sm:px-8"
      style={{
        backgroundImage: `url(${Rectangle67})`,
        backgroundSize: 'cover  ',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay to reduce background opacity */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />

      {/* Main Content */}
      <div className="relative z-10">
       

        <h1 className="text-center gilda-display-regular mt-96 text-6xl text-amber-50 font-serif">
          Upgrade now & Get Premium benefits
        </h1>
        <h2 className="text-center text-amber-50 jost text-2xl font-normal mt-2">
          Upgrade to any of our Premium Plans we guarantee you will find a match!
        </h2>
       
       <Link to="/dashboard">
       <div className="flex justify-center mt-4 ">
          <button className="bg-[#EB5757] cursor-pointer jost  text-white px-6 py-2 rounded-full hover:bg-amber-50 hover:text-black transition-transform transform hover:scale-105 hover:shadow shadow-black">
            Do This Later
          </button>
        </div>
       </Link>

        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 p-6 relative md:top-40 lg:top-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#E8E0D5] rounded-xl shadow-black p-6 flex flex-col items-center text-center hover:shadow hover:bg-amber-50 transition-transform transform hover:scale-105 border border-black"
            >
              <h2 className="text-3xl font-semibold mb-6">
                {plan.name}{' '}
                <span className="text-gray-950 font-normal text-xl">{plan.duration}</span>
              </h2>

              <p className="text-3xl font-bold text-black mb-1">{plan.price}</p>
              <p className="text-black mb-5">{plan.monthly}</p>

              <button className="bg-black text-white px-6 py-2 rounded-full mb-6 hover:bg-gray-800">
                Continue
              </button>

              <ul className="text-left font-light text-black space-y-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanPage;
