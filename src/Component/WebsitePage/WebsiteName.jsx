import React from "react";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";





const features = [
  {
    icon: <span className="text-2xl  text-[#DC8800] sm:text-3xl"><FaStar /></span>,
    title: "मैचमेकिंग का नया युग",
    description:
      "आधुनिक सोच के साथ बना प्लेटफॉर्म — गंभीर रिश्तों और सच्चे जुड़ाव के लिए।",
  },
  {
    icon: <span className="text-2xl text-[#FF0000] sm:text-3xl"><FaHeart /></span>,
    title: "अपना परफेक्ट मैच पाएं",
    description:
      "उन्नत एल्गोरिद्म और व्यक्तिगत सुझाव जो आपको समान सोच वाले लोगों से जोड़ते हैं।",
  },
  {
    icon: <span className="text-xl text-[#53321B] sm:text-2xl"><FaLock /></span>,
    title: "आपकी प्राइवेसी, हमारी प्राथमिकता",
    description:
      "प्रोफाइल, फोटो और बातचीत पर पूरा नियंत्रण — आपका डेटा पूरी तरह सुरक्षित।",
  },
  {
    icon: <span className="text-xl text-[#379D00] sm:text-2xl"><FaCheckSquare /></span>,
    title: "वेरिफाइड और सुरक्षित अनुभव",
    description:
      "AI द्वारा सत्यापन और सख्त सुरक्षा उपाय — ताकि आपको मिल सके एक असली, भरोसेमंद मैचमेकिंग अनुभव।",
  },
];

function WebsiteName() {
  return (
    <div className="bg-[#DE5353] text-white py-2 px-4 jost  sm:px-6 md:px-10 text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl mt-6 font-semibold mb-1">
       Shaadi Sanskar पर रजिस्टर क्यों करें?
      </h2>
      <div className="w-20 sm:w-28 h-1 bg-white mx-auto mb-4"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6  justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-white rounded-xl p-4 sm:p-5 flex flex-col items-center text-center gap-2"
          >
            <div className="bg-[#F7D7D7] p-3 sm:p-4 rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-base sm:text-lg font-semibold gilda-display-regular">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base font-normal">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebsiteName;
