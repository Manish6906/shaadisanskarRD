import React from "react";

const ProfileTwo = () => {
  return (
    <div className="flex w-full ">
      <div className="flex flex-col items-start w-full">
        {/* Lal rang ka Profile Manager box */}
        <div className="bg-[#FF5A60] text-white rounded-xl p-6 lg:px-10 lg:py-15 w-full shadow-lg">
          {/* Heading: Profile ko manage karne ka section */}
          <h2 className="text-2xl font-semibold mb-4 text-center">Manage your Profile</h2>

          {/* Do column mein profile ke management options */}
          <div className="flex flex-col md:flex-row justify-between w-full gap-4 text-xl">
            {/* Pehla column: profile editing aur status */}
            <ul className="space-y-4">
              <li>● व्यक्तिगत प्रोफाइल संपादित करें (Edit Personal Profile)</li>
              <li>● प्रोफाइल की स्थिति देखें (View Profile Status)</li>
              {/* Contact filter aur partner profile ke options comment mein hain */}
            </ul>

            {/* Dusra column: photos aur profile delete karna */}
            <ul className="space-y-4">
              <li>● फोटो जोड़ें (Add Photos)</li>
              <li>● प्रोफाइल हटाएं (Delete profile)</li>
              {/* Contact details editing ke options comment mein hain */}
            </ul>
          </div>
        </div>

        {/* Preview button abhi comment mein hai, jo profile preview karne ke liye tha */}
      </div>
    </div>
  );
};

export default ProfileTwo;
