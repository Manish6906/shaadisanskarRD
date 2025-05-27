import React from 'react';

function TermAndCondition() {
  return (
    <div className="bg-gray-50 px-4 jost pt-24 pb-10 sm:px-10 md:px-20 lg:px-40 bg-gradient-to-b from-[#FFCCA8]">
      <h1 className="text-3xl font-bold text-[#C34040] mb-6 text-center gilda-display-regular pb-3">Terms and Conditions</h1>
      <p className="text-gray-600 mb-8">
        Welcome to Shaadi Sanskar. These Terms and Conditions (“Terms”) govern your use of our website and services. 
        By using our site, you agree to abide by these Terms.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Eligibility</h2>
          <p className="text-gray-600">
            You must be at least 18 years of age. You must be legally eligible to marry under the laws of your country.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">2. Account Responsibility</h2>
          <p className="text-gray-600">
            You are responsible for maintaining the confidentiality of your account credentials.
            You agree to provide accurate, current, and complete information during registration and afterward.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">3. Use of Services</h2>
          <p className="text-gray-600">
            You agree to use Shaadi Sanskar only for personal and lawful purposes related to matrimonial alliances.
            Any misuse, including impersonation, harassment, or fraudulent activities, will result in immediate account termination.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Content</h2>
          <p className="text-gray-600">
            You are solely responsible for the content (text, images, etc.) you post.
            Shaadi Sanskar reserves the right to remove content that is offensive, misleading, or violates our policies.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">5. Intellectual Property</h2>
          <p className="text-gray-600">
            All content, branding, design, and materials on the website are the exclusive property of Shaadi Sanskar.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Termination</h2>
          <p className="text-gray-600">
            We reserve the right to suspend or terminate your access if you breach these Terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">7. Limitation of Liability</h2>
          <p className="text-gray-600">
            Shaadi Sanskar is not liable for any direct, indirect, or consequential losses resulting from the use of our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">8. Governing Law</h2>
          <p className="text-gray-600">
            These Terms shall be governed by and construed in accordance with the laws of your jurisdiction.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermAndCondition;
