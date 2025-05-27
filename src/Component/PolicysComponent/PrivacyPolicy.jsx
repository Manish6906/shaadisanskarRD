import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="w-full pt-28 pb-16 px-4 sm:px-6 lg:px-20 text-black jost overflow-x-hidden bg-gradient-to-b from-[#FFCCA8]">
      <h1 className="text-5xl font-bold mb-12 text-center text-[#C34040] gilda-display-regular">
        Privacy Policy
      </h1>

      <p className="mb-8 text-lg">
        At <strong>Shaadi Sanskar</strong>, your privacy is very important to us. This policy outlines how we collect, use, and protect your personal data.
      </p>

      <div className="space-y-10 text-[17px] leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Information:</strong> Name, email, phone number, gender, date of birth, etc.</li>
            <li><strong>Profile Information:</strong> Your bio, preferences, photos, and other optional details.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, device, and interaction history.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To create and manage your profile.</li>
            <li>To match and suggest suitable partner profiles.</li>
            <li>To communicate updates, offers, or notifications.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Sharing of Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We do not sell or rent your personal data.</li>
            <li>Limited data may be shared with third-party vendors for site maintenance, analytics, or communication services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p>We implement industry-standard security practices like SSL encryption and secure storage to protect your data.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You may update, edit, or delete your personal data from your account dashboard at any time.</li>
            <li>You may also request complete removal of your account by contacting our support team.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
          <p>We use cookies to enhance your browsing experience, remember preferences, and provide relevant content.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Policy Updates</h2>
          <p>Any changes to this policy will be reflected here. Continued use of the platform signifies your acceptance of the updated terms.</p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
