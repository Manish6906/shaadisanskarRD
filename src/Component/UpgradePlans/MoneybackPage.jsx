import React from 'react';
import moneyback from '../../assets/Images/money.png.png'
import { FaUserFriends, FaLock, FaShieldAlt } from 'react-icons/fa';

const MoneybackPage = () => {
  return (
    <div className="text-center p-6 bg-white  mt-28">
      <h1 className="text-3xl text-black font-serif font-normal gilda-display-regular">The safest,smartest and the most secure</h1>
      <p className="text-xl mt-1 text-black font-normal jost ">The safest,smartest and the most secure</p>

      <div className="bg-[#f0eae1] mt-10  jost mx-auto rounded-2xl  shadow-black p-8">
        <img
          src={moneyback}
          alt="Money Back Guarantee"
          className="w-28 mx-auto mb-6"
        />

        <h2 className="text-3xl font-bold text-black ">Money Back Guarantee</h2>
        <p className="bg-[E8E0D5] mt-2 font-normal ">
          Get a full refund within 30 days if you don’t find a match
        </p>
        <div className="flex justify-around bg-[#f0e8dc] py-6 text-green-700">
      {/* Best Matches */}
      <div className="flex flex-col items-center gap-2">
        <div className="bg-[#dccdb4] p-4 rounded-full">
          <FaUserFriends className="text-green-600 text-2xl" />
        </div>
        <span className="text-sm text-green-600 text-center">Best Matches</span>
      </div>
      {/*100% Privacy  */}


      <div className="flex flex-col items-center gap-2">
        <div className="bg-[#dccdb4] p-4 rounded-full">
          <FaLock className="text-green-600 text-2xl" />
        </div>
        <span className="text-sm text-green-600 text-center">100% Privacy</span>
      </div>

      {/* Verified Profiles  */}


      <div className="flex flex-col items-center gap-2">
        <div className="bg-[#dccdb4] p-4 rounded-full">
          <FaShieldAlt className="text-green-600 text-2xl" />
        </div>
        <span className="text-sm text-green-600 text-center">Verified Profiles</span>
      </div>
        </div>
      </div>
    </div>
  );
};

export default MoneybackPage;
