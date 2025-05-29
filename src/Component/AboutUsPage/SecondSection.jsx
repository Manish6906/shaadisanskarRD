import React from "react";
import Image15 from "../../assets/Images/Image15.png";
import Ellipse1 from "../../assets/Images/Ellipse1.png";
import ballon from "../../assets/Images/ballon.png";
import Ellipse2 from "../../assets/Images/Ellipse2.png";
import Ellipse3 from "../../assets/Images/Ellipse3.png";
import Ellipse4 from "../../assets/Images/Ellipse4.png";
import Heart from "../../assets/Images/Heart.png";

function SecondSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-12 px-6">
      {/* Text Section */}
      <div className="lg:w-1/2 text-left">
        <h1 className="text-4xl font-semibold mb-4 gilda-display-regular">
          प्यार सिर्फ किसी को पाने का नाम नहीं है{" "}
          <span className="text-[#EB5757]">
            {" "}
            — बल्कि सही व्यक्ति को पाने का नाम है।
          </span>
        </h1>
        <p className="text-lg leading-relaxed break-words jost">
          Shaadi Sanskar में हम केवल एल्गोरिद्म और स्वाइप से आगे बढ़ते हैं।
हम अर्थपूर्ण मेल-जोल, दिल से होने वाली बातचीत और जीवनभर चलने वाले रिश्तों में विश्वास करते हैं।
चाहे आप किसी परीकथा जैसी प्रेम कहानी में विश्वास रखते हों या बस किसी ऐसे साथी की तलाश में हों जो रोज़मर्रा की खुशियों में साथ दे — आप बिल्कुल सही जगह पर हैं।
        </p>
        <p className="text-lg leading-relaxed break-words jost">
         हमारी यात्रा एक सरल सोच से शुरू हुई:
ऐसा प्लेटफॉर्म बनाना जहां असली लोग असली प्यार खोजें।
तकनीक, समझ और दिल की भावनाओं का सुंदर संगम बनाकर, हमने अनगिनत लोगों को उनका जीवनसाथी ढूंढने में मदद की है — और यह तो बस शुरुआत है।
        </p>
        <p className="text-lg leading-relaxed break-words jost">
          Shaadi Sanskar पर हर प्रोफाइल को ध्यान से चुना जाता है, सत्यापित किया जाता है, और एक सुरक्षित, सम्मानजनक वातावरण का हिस्सा बनाया जाता है — जहां आप अपने सच्चे रूप में सामने आ सकते हैं।
हमारी उन्नत मैचमेकिंग प्रणाली सिर्फ ये नहीं देखती कि आप कौन हैं, बल्कि यह भी समझने की कोशिश करती है कि आपका दिल किसकी तलाश में है।क्योंकि हम जानते हैं, प्यार कोई लेन-देन नहीं, बल्कि एक जुड़ाव है।
और Shaadi Sanskar में, हमारा मकसद है — उस जुड़ाव को हकीकत बनाना।

अपनी प्रेम कहानी की शुरुआत हमसे करें।
        </p>
    
      </div>

      {/* Image Section */}
      <div className="relative lg:w-1/2 w-full max-w-sm mx-auto mt-8 lg:mt-0">
        {/* Main Circle Image */}
        <img
          src={Image15}
          alt="Profile Highlight"
          className="rounded-full shadow-xl w-full"
        />

        {/* Floating Images Around the Circle */}
        <img
          src={ballon}
          alt="ballon"
          className="absolute top-1/2 -translate-y-1/2 -right-8 sm:-right-44 md:-right-[4rem] w-20 md:w-28 xl:-right-[10rem] xl:w-50"
        />
        <img
          src={Ellipse1}
          alt="Ellipse1"
          className="absolute top-16 -left-10 sm:top-24 sm:-left-16 w-12 sm:w-16"
        />
        <img
          src={Ellipse2}
          alt="Ellipse2"
          className="absolute top-2 -right-13 sm:top-3 sm:-right-20 transform -translate-x-1/2 w-14 sm:w-20"
        />
        <img
          src={Ellipse3}
          alt="Ellipse3"
          className="absolute -bottom-12 left-10 sm:-bottom-16 sm:left-14 w-12 sm:w-16"
        />
        <img
          src={Heart}
          alt="Heart"
          className="absolute top-10 left-2 sm:left-4 w-6 sm:w-8"
        />
        <img
          src={Ellipse4}
          alt="Ellipse4"
          className="absolute top-64 -right-1 sm:top-80 sm:-right-14 w-12 sm:w-16"
        />
      </div>
    </div>
  );
}

export default SecondSection;
