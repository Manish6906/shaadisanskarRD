import React from "react";

const ProfileTwo = () => {
  return (
    <div className="flex w-full ">
      <div className="flex flex-col items-start w-full">
        {/* Red Profile Manager Box */}
        <div className="bg-[#FF5A60] text-white rounded-xl p-6 lg:px-10 lg:py-15 w-full shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Manage your Profile</h2>
          <div className="flex flex-col md:flex-row justify-between w-full gap-4 text-xl">
            <ul className="space-y-4">
              <li>● Edit Personal Profile</li>
              <li>● View Profile Status</li>
              {/* <li>● Set Contact Filters</li> */}
              {/* <li>● Edit Partner Profile</li> */}
            </ul>
            <ul className="space-y-4">
              <li>● Add Photos</li>
              <li>● Delete profile</li>
              {/* <li>● Edit Contact Details</li> */}
              {/* <li>● Edit Contact Details</li> */}
            </ul>
          </div>
        </div>

        {/* Preview Button aligned to right */}
        {/* <div className="w-full mt-4 flex justify-end">
          <button className="text-black text-xl font-medium cursor-pointer">Preview your Profile</button>
        </div> */}
      </div>
    </div>
  );
};

export default ProfileTwo;
