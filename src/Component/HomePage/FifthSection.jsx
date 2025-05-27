import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    },
  ];

  const user = JSON.parse(localStorage.getItem("userProfile")) || null;
  const [processingPlan, setProcessingPlan] = useState(null);

  const handlePayment = async (plan) => {
    if (!user) {
      toast.warning("Please login first.");
      setTimeout(() => navigate("/login"), 1000);
      return;
    }

    setProcessingPlan(plan.name);

    try {
      const { data } = await axios.post(`${API}api/payment/create-order`, {
        amount: plan.price,
      });

      const options = {
        key: RAZORPAY_KEY,
        amount: data.amount,
        currency: data.currency,
        name: "Shaadi Website",
        description: `${plan.name} Plan Purchase`,
        order_id: data.id,
        handler: async (response) => {
          try {
            await axios.post(`${API}api/payment/verify-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userId: user._id,
              plan: plan.credits,
              planName: plan.name,
            });
            toast.success("Payment Successful! Credits Added.");
            setTimeout(() => navigate("/userReceipts"), 1000);
          } catch {
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
        theme: { color: "#EB5757" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      rzp.on("payment.failed", (resp) => {
        alert("Payment failed: " + resp.error.description);
        setProcessingPlan(null);
      });
    } catch (err) {
      console.error("Payment error:", err);
      alert("Something went wrong. Please try again.");
      setProcessingPlan(null);
    }
  };

  return (
    <div className="bg-gradient-to-br from-red-50 via-white to-pink-100 py-16 px-4 sm:px-8 lg:px-16">
      <ToastContainer />
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold gilda-display-regular text-gray-900 leading-snug">
          Upgrade to Prem
          <span className="relative inline-block mx-[1px]">
            <svg className="w-[8px] h-[12px] sm:h-[18px] md:h-[18px]" viewBox="0 0 6 100">
              <line x1="3" y1="0" x2="3" y2="100" stroke="black" strokeWidth="16" />
            </svg>
            <span className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 text-red-500 text-lg">
              ❤️
            </span>
          </span>
          um & Unlock
        </h1>
        <p className="text-lg mt-3 text-gray-600">Exclusive Features Await You</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="group bg-white border border-gray-200 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] backdrop-blur-lg bg-opacity-70"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#EB5757]">
                {plan.name}
              </h2>
              <p className="text-3xl mt-2 font-extrabold text-gray-800">₹{plan.price}</p>
              <p className="text-sm text-gray-500 mb-6">{plan.credits} Credits</p>
            </div>

            <ul className="space-y-3 text-sm text-gray-700 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex justify-center">
              <button
                onClick={() => handlePayment(plan)}
                disabled={processingPlan === plan.name}
                className="bg-[#EB5757] hover:bg-[#c74242] text-white font-semibold px-6 py-2 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {processingPlan === plan.name ? "Processing..." : "Continue"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FifthSection;

