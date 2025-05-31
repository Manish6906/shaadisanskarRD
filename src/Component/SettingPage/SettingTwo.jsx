import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SettingTwo() {
  // API बेस URL (environment variable से आता है)
  let API = import.meta.env.VITE_APP_API_URL;

  // React state variables
  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // यूजर की जानकारी localStorage से लेना
  const userProfile = JSON.parse(localStorage.getItem('userProfile'));
  const userId = userProfile?._id;

  // जब component mount हो, तब user के ईमेल को fetch करना
  useEffect(() => {
    if (userId) {
      axios
        .get(`${API}user/${userId}`)
        .then((res) => {
          setEmail(res.data.user.emailId);
          setNewEmail(res.data.user.emailId);
        })
        .catch((err) => console.error('Error fetching email:', err));
    }
  }, [userId]);

  // ईमेल अपडेट करने वाला फंक्शन
  const handleUpdateEmail = () => {
    // अगर नया ईमेल खाली है या वही पुराना ईमेल है तो अपडेट नहीं करना
    if (!newEmail || newEmail === email) {
      return toast.info("कोई बदलाव नहीं हुआ।");
    }

    setLoading(true);
    axios
      .put(`${API}user/${userId}`, {
        emailId: newEmail,
      })
      .then((res) => {
        toast.success('✅ ईमेल सफलतापूर्वक अपडेट हो गया!');
        setEmail(newEmail);
      })
      .catch((err) => {
        toast.error('❌ ईमेल अपडेट करने में विफल।');
        console.error('Error updating email:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-gray-50 jost p-5">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-black text-2xl font-semibold mb-4 ml-1">सेटिंग्स</h1>

      <div className="bg-[#FFE7D6] p-6 rounded-lg shadow-md">
        <div className="md:flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h1 className="text-black text-xl font-bold">खाता सेटिंग्स</h1>
          </div>
        </div>

        <div className="py-3">
          <div className="bg-white text-black p-6 rounded-md shadow-sm space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-1">ईमेल आईडी अपडेट करें</h2>
              <label className="block text-sm font-medium text-black mb-1">ईमेल</label>
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-black"
                placeholder="ईमेल दर्ज करें"
              />
            </div>

            <hr className="border-gray-300" />

            <div className="flex justify-start gap-3">
              <button
                className="px-6 py-2 bg-[#FFCCA8] text-black cursor-pointer rounded-full"
                onClick={() => setNewEmail(email)}
                disabled={loading}
              >
                रद्द करें
              </button>
              <button
                className={`px-4 py-2 ${loading ? 'bg-gray-400' : 'bg-[#FF5A60]'} text-black cursor-pointer rounded-full`}
                onClick={handleUpdateEmail}
                disabled={loading}
              >
                {loading ? 'अपडेट हो रहा है...' : 'सबमिट करें'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingTwo;
