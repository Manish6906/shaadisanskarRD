import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
    
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`http://localhost:3000/user/getuser/${id}`,{
          headers: {
          Authorization: `Bearer ${token}`
        }
        });
        setUser(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching user');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>
      <div className="w-full max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-2xl">
        {loading && (
          <div className="text-center text-blue-500 font-medium">Loading user details...</div>
        )}

        {error && (
          <div className="text-center text-red-600 font-semibold">{error}</div>
        )}

        {user && (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              User Profile
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between">
                <span className="font-semibold">First Name:</span>
                <span>{user.firstName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Last Name:</span>
                <span>{user.lastName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Email:</span>
                <span>{user.emailId}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Phone:</span>
                <span>{user.mobileNumber}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
