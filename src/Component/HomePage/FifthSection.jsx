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
      features: [
        "Send messages upto 10 people",
        "View profiles",
      ],
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
        amount: plan.price * 100,
      });

      const options = {
        key: RAZORPAY_KEY,
        amount: data.amount,
        currency: data.currency,
        name: "Shaadi Website",
        description: `${plan.name} Plan Purchase`,
        order_id: data.id,
        handler: async function (response) {
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
          } catch (error) {
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
      rzp.on("payment.failed", (response) => {
        alert("Payment failed: " + response.error.description);
        setProcessingPlan(null);
      });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
      setProcessingPlan(null);
    }
  };

  return (
    <div className=" bg-pink-50 py-16 px-6 relative overflow-hidden">
      <ToastContainer />
      
      {/* Optional Decorative Circles */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-red-300 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-400 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black">
          Upgrade to <span className="text-red-400">Premium</span> & Unlock Features
        </h1>
        <p className="text-gray-900 mt-3 text-lg">Exclusive membership benefits</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative bg-red-400 bg-opacity-10 backdrop-blur-lg p-8 rounded-3xl shadow-lg flex flex-col items-center text-white hover:scale-105 transition-transform duration-300"
          >
            {/* Price badge */}
            <div className="absolute -top-6 w-24 h-24 bg-red-300 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
              ₹{plan.price}
            </div>

            <h2 className="mt-12 text-2xl font-bold mb-3">{plan.name}</h2>
            <p className="mb-4 text-sm text-white">{plan.credits} Credits</p>

            <ul className="space-y-3 mb-6 text-sm text-left w-full">
              {[
                "Send messages upto 10 people",
                "View profiles",
                "Standout from other profiles",
              ].map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className={`mr-3 text-lg ${plan.features.includes(feature) ? "text-green-400" : "text-red-500"}`}>
                    {plan.features.includes(feature) ? "✔" : "✖"}
                  </span>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handlePayment(plan)}
              disabled={processingPlan === plan.name}
              className="w-80 py-2 bg-white rounded-full cursor-pointer font-semibold text-black hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-50"
            >
              {processingPlan === plan.name ? "Processing..." : "Buy Now"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FifthSection;

