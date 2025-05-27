import React from 'react';

function CancelAndRefund() {
  return (
    <div className="bg-gray-50 px-4 pt-24 pb-10 jost sm:px-10 md:px-20 lg:px-40 bg-gradient-to-b from-[#FFCCA8]">
      <h1 className="text-3xl font-bold text-[#C34040] mb mb-6 text-center gilda-display-regular pb-3">Cancellation & Refund Policy</h1>
      <p className="text-gray-600 mb-8">
        At Shaadi Sanskar, we believe in keeping things simple and transparent for our users.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Cancellation</h2>
          <p className="text-gray-600">
            You can cancel your subscription or membership at any time by logging into your account.
            There are no cancellation fees.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">2. Refunds</h2>
          <p className="text-gray-600">
            Refunds may be considered if no premium features (like contact viewing or messaging) have been used.
            Once any premium service is used, refunds will not be issued.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">3. Technical Issues</h2>
          <p className="text-gray-600">
            In case of any technical issues that affect your experience, we may offer a credit or a partial refund at our discretion.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Contact Us</h2>
          <p className="text-gray-600">
            For any cancellation or refund requests, please reach out to us at{' '}
            <a href="mailto:shaadisanskar1@gmail.com" className="text-blue-600 underline">
              shaadisanskar1@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CancelAndRefund;
