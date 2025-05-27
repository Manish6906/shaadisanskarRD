import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const FifthSection = () => {
  const API = import.meta.env.VITE_APP_API_URL;
  const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;
  const navigate = useNavigate();

  const plans = [
    {
      name: "Gold",
      price: 149,
      credits: 10,
      features: ["Send messages up to 10 people", "View profiles"],
      bgClass: "bg-gradient-to-tr from-gray-400 via-gray-600 to-gray-800 text-white",
    },
    {
      name: "Diamond",
      price: 299,
      credits: 30,
      features: [
        "Send messages up to 30 people",
        "View profiles",
        "Stand out from other profiles",
      ],
      bgClass: "bg-gradient-to-tr from-gray-400 via-gray-600 to-gray-800 text-white",
    },
    {
      name: "Platinum",
      price: 599,
      credits: 100,
      features: [
        "Send messages up to 100 people",
        "View profiles",
        "Stand out from other profiles",
      ],
      bgClass: "bg-gradient-to-tr from-gray-400 via-gray-600 to-gray-800 text-white",
    },
  ];

  const user = JSON.parse(localStorage.getItem("userProfile")) || null;
  const [processingPlan, setProcessingPlan] = useState(null);

  const handlePayment = async (plan) => {
    if (!user) {
      toast.warning("Please login first.");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
      return;
    }

    setProcessingPlan(plan.name);

    try {
      const orderResponse = await axios.post(`${API}api/payment/create-order`, {
        amount: plan.price,
      });

      const { id: order_id, currency, amount } = orderResponse.data;

      const options = {
        key: RAZORPAY_KEY,
        amount: amount,
        currency: currency,
        name: "Shaadi Website",
        description: `${plan.name} Plan Purchase`,
        order_id: order_id,
        handler: async function (response) {
          try {
            const verifyResponse = await axios.post(`${API}api/payment/verify-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userId: user._id,
              plan: plan.credits,
              planName: plan.name,
            });

            toast.success("Payment Successful! Credits Added.");
            setTimeout(() => {
              navigate("/userReceipts");
            }, 1000);
          } catch (error) {
            console.error("Payment verification failed", error);
            toast.error("Payment verification failed.");
          } finally {
            setProcessingPlan(null);
          }
        },
        prefill: {
          name: `${user.firstName} ${user.lastName}`,
          email: user.emailId,
          contact: user.mobileNumber,
        },
        theme: {
          color: "#EB5757",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", function (response) {
        alert("Payment failed: " + response.error.description);
        setProcessingPlan(null);
      });
    } catch (error) {
      console.error("Error in payment process:", error);
      alert("Something went wrong. Please try again.");
      setProcessingPlan(null);
    }
  };

  return (
    <div className="bg-pink-50 py-10 px-4 sm:px-6 lg:px-10 ">
    <div className="text-center mb-12">
  <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Choose the Perfect Plan</h1>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    Upgrade your experience by selecting a plan that suits your needs. Get more credits and reach more profiles.
  </p>
</div>

      <ToastContainer />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-8 flex flex-col items-center text-center
              shadow-2xl transform transition-transform duration-300
              hover:scale-105 hover:shadow-3xl
              ${plan.bgClass}
              ${processingPlan === plan.name ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}
            `}
          >
            {plan.name === "Diamond" && (
              <div className="absolute top-4 right-4 bg-yellow-300 text-red-700 font-bold text-xs uppercase px-3 py-1 rounded-full shadow-md animate-pulse">
                Popular
              </div>
            )}

            <h2 className="text-3xl font-extrabold mb-3 drop-shadow-lg">{plan.name}</h2>
            <p className="text-4xl font-black mb-2">₹{plan.price}</p>
            <p className="text-lg font-semibold mb-6">{plan.credits} Credits</p>

            <button
              disabled={processingPlan === plan.name}
              onClick={() => handlePayment(plan)}
              className={`w-full py-3 rounded-full cursor-pointer font-semibold text-lg
                transition-colors duration-300
                ${
                  processingPlan === plan.name
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-white text-red-600 shadow-md"
                }`}
            >
              {processingPlan === plan.name ? "Processing..." : "Continue"}
            </button>

            <ul className="mt-8 text-left space-y-4 w-full font-medium">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 drop-shadow"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FifthSection;
