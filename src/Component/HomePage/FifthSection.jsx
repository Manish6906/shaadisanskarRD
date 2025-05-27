import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
const FifthSection = () => {
  let API = import.meta.env.VITE_APP_API_URL;
  const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;
  const navigate = useNavigate();

  const plans = [
    {
      name: "Gold",
      price: 149,
      credits: 10,
      features: ["Send messages upto 10 people", "View profiles"],
    },
    {
      name: "Diamond",
      price: 299,
      credits: 30,
      features: [
        "Send messages upto 30 people",
        "View profiles",
        "Standout from other profiles",
      ],
    },
    {
      name: "Platinum",
      price: 599,
      credits: 100,
      features: [
        "Send messages upto 100 people",
        "View profiles",
        "Standout from other profiles",
      ],
    },
  ];

  const user = JSON.parse(localStorage.getItem("userProfile")) || null;
  const [processingPlan, setProcessingPlan] = useState(null);

  const handlePayment = async (plan) => {
    if (!user) {
      // alert("Please login first.");
      toast.warning("Please login first.");
      setTimeout(()=>
    {
navigate("/login")
    },1000)
      
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
            const verifyResponse = await axios.post(
              `${API}api/payment/verify-payment`,
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                userId: user._id,
                plan: plan.credits,
                planName: plan.name,
              }
            );
           
            toast.success("Payment Successful! Credits Added.");
            setTimeout(()=>
            {
               navigate("/userReceipts");
            },1000)
            // alert("Payment Successful! Credits Added.");
            console.log("Receipt:", verifyResponse.data.receipt);
          } catch (error) {
            console.error("Payment verification failed", error);
  toast.error("Payment verification failed.");
            // alert("Payment verification failed.");
          } finally {
            setProcessingPlan(null);
          }
        },
        prefill: {
          name: user.firstName + " " + user.lastName,
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
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-10">
     <ToastContainer />
      <div className="text-center mb-10 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black gilda-display-regular leading-tight">
          Upgrade to Prem
          <span className="relative inline-block mx-[1px] align-middle">
            <svg
              className="w-[8px] h-[12px] sm:h-[18px] md:h-[18px]"
              viewBox="0 0 6 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="3"
                y1="0"
                x2="3"
                y2="100"
                stroke="black"
                strokeWidth="16"
              />
            </svg>
            <span className="absolute top-[-23px] sm:top-[-20px] md:top-[-25px] left-1/2 transform -translate-x-1/2 text-red-500 text-base sm:text-lg">
              ❤️
            </span>
          </span>
          um & Unlock
        </h1>
        <h2 className="text-lg sm:text-xl mt-2 text-gray-700">
          Exclusive Features
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 jost px-2">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md shadow-black/30 p-6 flex flex-col items-center text-center
              hover:shadow-lg hover:bg-[#EB5757] hover:text-white transition-all duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              {plan.name}
            </h2>

            <p className="text-2xl sm:text-3xl font-bold text-black group-hover:text-white mb-1">
              ₹{plan.price}
            </p>
            <p className="text-sm sm:text-base text-black group-hover:text-white mb-4">
              {plan.credits} Credits
            </p>

            <button
              disabled={processingPlan === plan.name}
              onClick={() => handlePayment(plan)}
              className="bg-black cursor-pointer text-white px-6 py-2 rounded-full mb-5 hover:bg-gray-800 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {processingPlan === plan.name ? "Processing..." : "Continue"}
            </button>

            <ul className="text-left font-light text-black group-hover:text-white space-y-3 text-sm sm:text-base">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5 group-hover:text-white">
                    ✔
                  </span>
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
