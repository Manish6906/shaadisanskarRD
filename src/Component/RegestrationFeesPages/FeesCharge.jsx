import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Check } from 'lucide-react';
import { useLocation } from 'react-router-dom';
function FeesCharge() {
 const location = useLocation();
  const clickedUserId = location.state?.clickedUserId;
  const userId = location.state?.userId;

  console.log("Clicked user: jiski profile pr click kra gye a", clickedUserId);
  console.log("profile clicked user jisne click kra:", userId);

  

  let API = import.meta.env.VITE_APP_API_URL;
  const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  const user = JSON.parse(localStorage.getItem("userProfile")) || null;

  const handlePayment = async () => {
    if (!user) {
      toast.warning("Please login first.");
      setTimeout(() => navigate("/login"), 1000);
      return;
    }

    setProcessing(true);

    try {
      const orderResponse = await axios.post(`${API}api/payment/create-order`, {
        amount: 1,
      });

      const { id: order_id, currency, amount } = orderResponse.data;

      const options = {
        key: RAZORPAY_KEY,
        amount,
        currency,
        name: "Shaadi Website",
        description: "Silver Plan Purchase",
        order_id,
        handler: async function (response) {
          try {
            const verifyResponse = await axios.post(`${API}api/payment/verify-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userId: user._id,
              plan: 5, // e.g. 5 credits for silver
              planName: "Registration Plan",
            });

                    // Call notify-admin-on-connect API after successful payment verification
            try {
              await axios.post(`${API}click/notify-admin-on-connect`, {
                viewerId: userId,
                id:clickedUserId ,
              });
              toast.success("Admin notified on connect successfully");
            } catch (notifyError) {
              console.error("Failed to notify admin on connect", notifyError);
            }

            toast.success("Payment Successful!");
            setTimeout(() => navigate("/userReceipts"), 1500);
            console.log("Receipt:", verifyResponse.data.receipt);


          } catch (error) {
            console.error("Payment verification failed", error);
            toast.error("Payment verification failed.");
          } finally {
            setProcessing(false);
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
        setProcessing(false);
      });
    } catch (error) {
      console.error("Error in payment process:", error);
      alert("Something went wrong. Please try again.");
      setProcessing(false);
    }
  };

  return (
    <div className="bg-white py-12 px-4 flex flex-col items-center">
      <ToastContainer />
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#EB5757] mb-6 text-center tracking-tight leading-tight">
        Find Love for Less 💕
      </h1>
      <p className="text-gray-600 text-lg text-center max-w-md mb-10">
        Join our Silver Plan for just ₹99 and unlock the features you need to make meaningful connections.
      </p>

      <div className="max-w-sm w-full bg-white rounded-3xl shadow-xl border border-[#ffdad9] p-8 text-center hover:shadow-2xl hover:bg-[#EB5757] hover:text-white transition-all duration-300">
        <h2 className="text-2xl font-bold mb-1">Registration Plan</h2>
        <h3 className="text-4xl font-bold mb-4 text-black group-hover:text-white transition-all duration-300">
          ₹1
        </h3>

        <button
          disabled={processing}
          onClick={handlePayment}
          className="bg-black text-white font-semibold py-2 px-6 rounded-full mb-6 hover:bg-white hover:text-black transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {processing ? "Processing..." : "Get Started"}
        </button>

        <ul className="text-left space-y-4 text-base">
          <li className="flex items-center gap-3">
            <Check className="text-green-500 w-6 h-6" />
            Unlimited messaging across profiles
          </li>
          <li className="flex items-center gap-3">
            <Check className="text-green-500 w-6 h-6" />
            View high-resolution profile photos
          </li>
          <li className="flex items-center gap-3">
            <Check className="text-green-500 w-6 h-6" />
            Valid for 30 days from date of purchase
          </li>
          <li className="flex items-center gap-3">
            <Check className="text-green-500 w-6 h-6" />
            Access basic matchmaking filters
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FeesCharge;
