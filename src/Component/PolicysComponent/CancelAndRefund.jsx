import React from 'react';

function CancelAndRefund() {
  return (
    <div className="bg-gray-50 px-4 pt-24 pb-10 jost sm:px-10 md:px-20 lg:px-40 bg-gradient-to-b from-[#FFCCA8]">
      <h1 className="text-3xl font-bold text-[#C34040] mb mb-6 text-center gilda-display-regular pb-3">रद्दीकरण और रिफंड नीति </h1>
      <p className="text-gray-600 mb-8">
       <strong>Shaadi Sanskar</strong> में हम अपने उपयोगकर्ताओं के लिए चीज़ों को सरल और पारदर्शी रखना चाहते हैं।
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">1. रद्दीकरण </h2>
          <li className="text-gray-600">
            आप किसी भी समय अपने अकाउंट में लॉगिन करके अपनी सदस्यता को रद्द कर सकते हैं। </li>
            <li className=' text-gray-600'>रद्दीकरण के लिए कोई अतिरिक्त शुल्क नहीं लिया जाएगा। </li>
          
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">2. रिफंड </h2>
          <li className="text-gray-600">
            यदि आपने कोई प्रीमियम सुविधा (जैसे कॉन्टैक्ट देखना या मैसेज भेजना) का उपयोग नहीं किया है, तो रिफंड पर विचार किया जा सकता है।
          </li>
          <li className=' text-gray-600'>एक बार कोई भी प्रीमियम सेवा उपयोग करने के बाद रिफंड जारी नहीं किया जाएगा। </li>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">3. तकनीकी समस्याएँ</h2>
          <li className="text-gray-600">
            यदि किसी तकनीकी समस्या के कारण आपकी सेवा प्रभावित होती है, तो हम अपने विवेक अनुसार क्रेडिट या आंशिक रिफंड प्रदान कर सकते हैं।

          </li>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">4. संपर्क करें </h2>
          <li className="text-gray-600">
            किसी भी रद्दीकरण या रिफंड अनुरोध के लिए कृपया हमसे संपर्क करें।{' '}
            <a href="mailto:shaadisanskar1@gmail.com" className="text-blue-600 underline">
              shaadisanskar1@gmail.com
            </a>.
          </li>
        </div>
      </div>
    </div>
  );
}

export default CancelAndRefund;
