import React from 'react';

function TermAndCondition() {
  return (
    <div className="bg-gray-50 px-4 jost pt-24 pb-10 sm:px-10 md:px-20 lg:px-40 bg-gradient-to-b from-[#FFCCA8]">
      <h1 className="text-3xl font-bold text-[#C34040] mb-6 text-center gilda-display-regular pb-3">नियम और शर्तें </h1>
      <p className="text-gray-600 mb-3">Shaadi Sanskar में आपका स्वागत है। ये नियम और शर्तें (“नियम”) हमारी वेबसाइट और सेवाओं के उपयोग को नियंत्रित करती हैं।</p>
      <p className="text-gray-600 mb-4 ">हमारी साइट का उपयोग करके, आप इन नियमों का पालन करने के लिए सहमत होते हैं।</p>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">1. पात्रता</h2>
          <p className="text-gray-600">
            आपकी आयु कम से कम 18 वर्ष होनी चाहिए। आप अपने देश के कानूनों के अनुसार वैवाहिक रूप से पात्र होने चाहिए।
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">2. खाता ज़िम्मेदारी </h2>
          <p className="text-gray-600">
            आप अपने अकाउंट की लॉगिन जानकारी की गोपनीयता बनाए रखने के लिए स्वयं जिम्मेदार हैं।
            आप पंजीकरण के समय और उसके बाद सही, अद्यतित और पूर्ण जानकारी प्रदान करने के लिए सहमत होते हैं।
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">3. सेवा का उपयोग</h2>
          <p className="text-gray-600">
            आप Shaadi Sanskar का उपयोग केवल व्यक्तिगत और वैध वैवाहिक उद्देश्यों के लिए करेंगे। किसी भी प्रकार के दुरुपयोग जैसे—किसी की पहचान छिपाना, उत्पीड़न करना या धोखाधड़ी करना—के परिणामस्वरूप आपका खाता तुरंत समाप्त कर दिया जाएगा।
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">4. सामग्री</h2>
          <p className="text-gray-600">
            आप जो भी सामग्री (जैसे कि टेक्स्ट, छवियाँ आदि) पोस्ट करते हैं, उसकी पूरी ज़िम्मेदारी आपकी होगी। Shaadi Sanskar को अधिकार है कि वह किसी भी आपत्तिजनक, भ्रामक या नीति के विरुद्ध सामग्री को हटा सके।
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">5. बौद्धिक संपदा</h2>
          <p className="text-gray-600">
            वेबसाइट पर उपलब्ध सभी सामग्री, डिज़ाइन, ब्रांडिंग और अन्य सामग्री Shaadi Sanskar की संपत्ति हैं।

          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">6. समाप्ति</h2>
          <p className="text-gray-600">
            यदि आप इन नियमों का उल्लंघन करते हैं, तो हम आपके खाते को स्थगित या समाप्त करने का अधिकार रखते हैं।

          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">7. दायित्व की सीमा</h2>
          <p className="text-gray-600">
            Shaadi Sanskar किसी भी प्रत्यक्ष, अप्रत्यक्ष या परिणामी हानि के लिए उत्तरदायी नहीं होगा जो हमारी सेवाओं के उपयोग से उत्पन्न हो सकती है।</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">8. प्रासंगिक कानून </h2>
          <p className="text-gray-600">
            ये नियम आपके क्षेत्राधिकार के कानूनों के अनुसार शासित और व्याख्यायित किए जाएंगे।
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermAndCondition;
