import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="w-full pt-28 pb-16 px-4 sm:px-6 lg:px-20 text-black jost overflow-x-hidden bg-gradient-to-b from-[#FFCCA8]">
      <h1 className="text-5xl font-bold mb-12 text-center text-[#C34040] gilda-display-regular">
       गोपनीयता नीति 
      </h1>

      <p className="mb-8 text-lg">
        At <strong>Shaadi Sanskar</strong>, में आपकी गोपनीयता हमारे लिए अत्यंत महत्वपूर्ण है। यह नीति यह स्पष्ट करती है कि हम आपकी व्यक्तिगत जानकारी कैसे एकत्र करते हैं, उसका उपयोग कैसे करते हैं, और उसे कैसे सुरक्षित रखते हैं।
      </p>

      <div className="space-y-10 text-[17px] leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1.हम कौन-कौन सी जानकारी एकत्र करते हैं</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>व्यक्तिगत जानकारी:</strong> नाम, ईमेल, फ़ोन नंबर, लिंग, जन्मतिथि आदि।</li>
            <li><strong>प्रोफ़ाइल जानकारी:</strong> आपकी बायो, पसंद-नापसंद, फ़ोटो और अन्य वैकल्पिक विवरण।</li>
            <li><strong>उपयोग डेटा:</strong> आपका IP एड्रेस, ब्राउज़र प्रकार, डिवाइस और वेबसाइट पर आपकी गतिविधियों का इतिहास।</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. आपकी जानकारी का उपयोग कैसे किया जाता है</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>आपका प्रोफ़ाइल बनाने और उसका प्रबंधन करने के लिए।</li>
            <li>उपयुक्त जीवनसाथी सुझाव देने और मैचिंग के लिए।</li>
            <li>अपडेट, ऑफ़र या नोटिफिकेशन भेजने के लिए।</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. जानकारी का साझा करना </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>हम आपकी व्यक्तिगत जानकारी को कभी नहीं बेचते या किराए पर नहीं देते।</li>
            <li>सीमित जानकारी को साइट की रखरखाव, एनालिटिक्स या कम्युनिकेशन सेवाओं के लिए थर्ड-पार्टी वेंडर्स के साथ साझा किया जा सकता है।</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. डेटा सुरक्षा </h2>
          <li>हम SSL एन्क्रिप्शन और सुरक्षित स्टोरेज जैसे इंडस्ट्री स्टैंडर्ड सुरक्षा उपायों का उपयोग करते हैं ताकि आपकी जानकारी पूरी तरह सुरक्षित रहे।</li>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. आपके अधिकार</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>आप अपने अकाउंट डैशबोर्ड से किसी भी समय अपनी जानकारी को अपडेट, संपादित या डिलीट कर सकते हैं।</li>
            <li>आप हमारे सपोर्ट टीम से संपर्क कर अपने पूरे अकाउंट को हटाने का भी अनुरोध कर सकते हैं।</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. कुकीज़ </h2>
          <li>हम आपके ब्राउज़िंग अनुभव को बेहतर बनाने, आपकी पसंद याद रखने और प्रासंगिक कंटेंट प्रदान करने के लिए कुकीज़ का उपयोग करते हैं।</li>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. नीति में बदलाव </h2>
          <li>इस नीति में किसी भी प्रकार के बदलाव यहां अपडेट किए जाएंगे।</li>
          <li>प्लेटफ़ॉर्म का निरंतर उपयोग इन अद्यतन शर्तों की स्वीकृति दर्शाता है।</li>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
