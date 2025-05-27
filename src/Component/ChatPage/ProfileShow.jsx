import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // For API calls
import defaultAvatar from '../../assets/Images/403022_business man_male_user_avatar_profile_icon 1.png'; // Make sure you have a default avatar

let API_URL=import.meta.env.VITE_APP_API_URL // Ensure you have this in your .env file

const ProfileShow = ({ currentUserId }) => {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All'); // Keep filter for future use if you want online status

  const navigate = useNavigate();

  useEffect(() => {
    const fetchConversations = async () => {
      if (!currentUserId) {
        setLoading(false);
        return;
      }
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${API_URL}chat/user-conversations/${currentUserId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        setConversations(response.data.data.filter(conversation => conversation.messages?.length > 0));
      } catch (err) {
        console.error("Error fetching conversations:", err);
        setError("Failed to load conversations.");
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, [currentUserId]);

  const getOtherParticipant = (participants) => {
    return participants.find(participant => participant._id !== currentUserId);
  };

  const handleUserClick = (otherUserId) => {
    navigate(`/chat/${otherUserId}`); // Navigate to the chat page with the recipient's ID
  };

  // You can filter conversations based on search term or online status
  let filteredConversations = [];
  if(searchTerm?.length > 0){
    filteredConversations = conversations.filter(conversation => {
    const otherUser = getOtherParticipant(conversation.participants);
    const matchesSearch = (otherUser.firstName + ' ' + otherUser.lastName).toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });
  }else{
    filteredConversations = conversations;
  }
  return (
    <div className="p-4  min-h-screen bg-white rounded-l-2xl">
      {/* Search */}
      <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg mb-4">
        <Search className="w-5 h-5 text-gray-600" />
        <input
          type="text"
          placeholder="Search for people..."
          className="bg-transparent outline-none w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter Buttons (Optional, you can remove if not using real-time online status) */}
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {['All'].map(option => ( // Removed Online/Offline for now unless you implement actual online status
          <button
            key={option}
            onClick={() => setFilter(option)}
            className={`px-4 py-1.5 rounded-full text-sm transition ${
              filter === option
                ? 'bg-red-100 text-red-500 font-medium'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center">Loading conversations...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : filteredConversations.length === 0 ? (
        <div className="text-center text-gray-500">No conversations yet</div>
      ) : (
        <div className="flex flex-col gap-3">
          {filteredConversations.map((conversation) => {
            const otherUser = getOtherParticipant(conversation.participants);
            const lastMessage = conversation.messages[conversation.messages.length - 1];
            
            if (!otherUser) return null; // Handle cases where other user might be missing

            return (
              <div
                key={conversation._id}
                onClick={() => handleUserClick(otherUser._id)}
                className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition"
              >
                <div className="relative">
                  <img
                    src={otherUser.profileImage || defaultAvatar}
                    alt={otherUser.firstName + ' ' + otherUser.lastName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base">{otherUser.firstName + ' ' + otherUser.lastName}</h3>
                  {lastMessage && (
                    <p className="text-sm text-gray-500 truncate">
                      {lastMessage.sender?._id === currentUserId ? "You: " : ""}
                      {lastMessage.text}
                    </p>
                  )}
                </div>
                {/* Unread message indicator */}
                {conversation.messages.some(
                  msg => !msg.read && msg.sender._id !== currentUserId
                ) && (
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProfileShow;