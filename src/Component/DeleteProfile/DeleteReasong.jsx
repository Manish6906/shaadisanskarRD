import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DeleteReason() {
  const [reason, setReason] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (reason) {
      navigate('/confirm-delete', { state: { reason } });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Why are you deleting your profile?</h2>
      <select
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        className="border p-2 w-full mb-4"
      >
        <option value="">Select a reason</option>
        <option value="Found a match">Found a match</option>
        <option value="Not satisfied with service">Not satisfied with service</option>
        <option value="Privacy concerns">Privacy concerns</option>
        <option value="Other">Other</option>
      </select>
      <button
        disabled={!reason}
        onClick={handleNext}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
