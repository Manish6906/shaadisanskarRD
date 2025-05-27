import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

const fieldSections = [
  {
    title: "Basic & Lifestyle",
    fields: ['age', 'religion', 'maritalstatus', 'height', 'growup', 'diet', 'community', 'healthinformation', 'disability', 'gothram']
  },
  {
    title: "Education & Career",
     fields: ['highestqualification']
    // fields: ['highestqualification', 'workingwith']
  },
  // {
  //   title: "Location",
  //   fields: ['currentresidence', 'stateofresidence', 'residencystatus', 'zippincode']
  // },
  // {
  //   title: "My Contact Details",
  //   fields: ['mobile', 'name', 'whatsappno', 'emailId']
  // }
];

function DetailFromOne() {
  let API = import.meta.env.VITE_APP_API_URL;
  const [partnerData, setPartnerData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const userId = JSON.parse(localStorage.getItem("userProfile"))?._id;

  useEffect(() => {
    if (userId) {
      axios.get(`${API}api/patner/${userId}`)
        .then(res => res.data && setPartnerData(res.data))
        .catch(err => console.error("Fetch error:", err));
    }
  }, [userId]);

  const handleChange = (e) => {
    setPartnerData(prev => ({ ...prev, [e.target.name]: e.target.value.toUpperCase() }));
  };

  const handleSave = () => {
    const request = partnerData._id
      ? axios.put(`${API}api/patner/${userId}`, partnerData)
      : axios.post(`${API}api/patner`, { ...partnerData, userId });

    request
      .then(res => {
        setPartnerData(res.data);
        setIsEditing(false);
      })
      .catch(err => console.error("Save error:", err));
  };

  const renderField = (field) => (
    <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3" key={field}>
      <span className="font-semibold w-full sm:w-[180px] text-sm capitalize">
        {field === 'height' ? 'Height (in cm):' :
          field === 'whatsappNumber' ? 'WhatsApp Number:' :
            field === 'contactPersonName' ? 'Contact Person Name:' :
              field === 'zipCode' ? 'ZIP Code:' :
                field.replace(/([A-Z])/g, ' $1') + ':'}
      </span>
      {isEditing ? (
        field === 'religion' ? (
          <select
            name="religion"
            value={partnerData.religion || ''}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            <option value="">Select Religion</option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="Sikh">Sikh</option>
            <option value="Jain">Jain</option>
            <option value="Buddhist">Buddhist</option>
            <option value="Parsi">Parsi</option>
            <option value="Other">Other</option>
          </select>
        ) : (
          <input
            type="text"
            name={field}
            value={partnerData[field] || ''}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )
      ) : (
        <span className="text-gray-700">
          {field === 'height' && partnerData[field] ? `${partnerData[field]} cm` : partnerData[field]}
        </span>
      )}
    </p>
  );

  return (
    <div className="px-4 md:px-8 py-6">
      <div className="bg-[#FFE7D6] p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex items-center gap-3">
            <LuDot className="text-4xl text-red-600" />
            <h1 className="text-red-600 text-lg md:text-xl font-bold">
              Basic & Lifestyle, Education & Career, Location, and My Contact Details
            </h1>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 mt-4 md:mt-0 cursor-pointer bg-black text-white px-4 py-1 rounded-full hover:bg-gray-800 transition"
          >
            <FaPencilAlt />
            <span>{isEditing ? "Cancel" : "Edit"}</span>
          </button>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-md space-y-6">
          {fieldSections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-md font-semibold text-red-600">{section.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-4">
                {section.fields.map(field => renderField(field))}
              </div>
            </div>
          ))}

          {isEditing && (
            <div className="text-right pt-4">
              <button
                onClick={handleSave}
                className="bg-red-600 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailFromOne;
