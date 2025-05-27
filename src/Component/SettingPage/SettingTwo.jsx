import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SettingTwo() {
  let API= import.meta.env.VITE_APP_API_URL
  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const userProfile = JSON.parse(localStorage.getItem('userProfile'));
  const userId = userProfile?._id;

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

  const handleUpdateEmail = () => {
    if (!newEmail || newEmail === email) return toast.info("No changes made.");

    setLoading(true);
    axios
      .put(`${API}user/${userId}`, {
        emailId: newEmail,
      })
      .then((res) => {
        toast.success('✅ Email updated successfully!');
        setEmail(newEmail);
      })
      .catch((err) => {
        toast.error('❌ Failed to update email');
        console.error('Error updating email:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-gray-50 jost p-5">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-black text-2xl font-semibold mb-4 ml-1">Settings</h1>

      <div className="bg-[#FFE7D6] p-6 rounded-lg shadow-md">
        <div className="md:flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h1 className="text-black text-xl font-bold">Account Settings</h1>
          </div>
        </div>

        <div className="py-3">
          <div className="bg-white text-black p-6 rounded-md shadow-sm space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-1">Update Email ID</h2>
              <label className="block text-sm font-medium text-black mb-1">Email</label>
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-black"
                placeholder="Enter email"
              />
            </div>

            <hr className="border-gray-300" />

            <div className="flex justify-start gap-3">
              <button
                className="px-6 py-2 bg-[#FFCCA8] text-black cursor-pointer rounded-full"
                onClick={() => setNewEmail(email)}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 ${loading ? 'bg-gray-400' : 'bg-[#FF5A60]'} text-black cursor-pointer rounded-full`}
                onClick={handleUpdateEmail}
                disabled={loading}
              >
                {loading ? 'Updating...' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingTwo;
