import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const ResetPassword = () => {
let API= import.meta.env.VITE_APP_API_URL
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const resetToken = urlParams.get("token");

    if (resetToken) {
      setToken(resetToken);
    } else {
      setMessage("Invalid reset link.");
    }
  }, []);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      return setMessage("Please enter a new password.");
    }
    if (password !== confirmPassword) {
      return setMessage("Passwords do not match.");
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${API}user/reset-password?token=${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setMessage(data.message || "Failed to reset password.");
      }
    } catch (error) {
      setMessage("Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Reset Password
        </h2>
        {message && (
          <p className="text-center text-sm text-green-600 mb-4">{message}</p>
        )}
        <form onSubmit={handleResetPassword} className="space-y-4">
          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none "
              required
            />
            <div
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none "
              required
            />
            <div
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#EB5757] hover:opacity-90 cursor-pointer text-white font-semibold py-2.5 rounded-lg transition duration-300 shadow-md"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
