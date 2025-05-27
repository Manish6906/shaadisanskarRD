import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  let API= import.meta.env.VITE_APP_API_URL
  const [emailId, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API}user/forget-password`,
        { emailId }
      );
      setMessage(response.data.message || "Reset link sent successfully.");
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      setMessage(errorMsg);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl transition-all duration-300">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Forgot Your Password?
        </h2>
        <p className="text-gray-600 text-sm text-center mb-6">
          Enter your registered email address. We'll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={emailId}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#EB5757] text-white cursor-pointer font-semibold py-2.5 rounded-lg hover:opacity-90 transition duration-300 shadow-md"
          >
            Send Reset Link
          </button>
        </form>
        {message && (
          <div className="mt-4 text-sm text-center text-green-600 font-medium">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
