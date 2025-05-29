import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

const fieldSections = [
  {
    title: "बुनियादी और जीवनशैली",  // Basic & Lifestyle
    fields: ['age', 'religion', 'maritalstatus', 'height', 'growup', 'diet', 'community', 'healthinformation', 'disability', 'gothram']
  },
  {
    title: "शिक्षा और करियर",  // Education & Career
    fields: ['highestqualification']
  },
  // आप चाहें तो नीचे स्थान और संपर्क विवरण सेक्शन भी uncomment कर सकते हैं
  // {
  //   title: "स्थान", // Location
  //   fields: ['currentresidence', 'stateofresidence', 'residencystatus', 'zippincode']
  // },
  // {
  //   title: "मेरे संपर्क विवरण", // My Contact Details
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
        {field === 'age' ? 'आयु:' :
         field === 'religion' ? 'धर्म:' :
         field === 'maritalstatus' ? 'वैवाहिक स्थिति:' :
         field === 'height' ? 'ऊंचाई (सेमी में):' :
         field === 'growup' ? 'पला बढ़ा स्थान:' :
         field === 'diet' ? 'आहार:' :
         field === 'community' ? 'समुदाय:' :
         field === 'healthinformation' ? 'स्वास्थ्य जानकारी:' :
         field === 'disability' ? 'विकलांगता:' :
         field === 'gothram' ? 'गोत्र:' :
         field === 'highestqualification' ? 'उच्चतम योग्यता:' :
         field // fallback अगर कोई मेल न खाए तो फ़ील्ड का नाम जैसा है वैसा दिखाओ
        }
      </span>
      {isEditing ? (
        field === 'religion' ? (
          <select
            name="religion"
            value={partnerData.religion || ''}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            <option value="">धर्म चुनें</option>
            <option value="Hindu">हिंदू</option>
            <option value="Muslim">मुस्लिम</option>
            <option value="Christian">ईसाई</option>
            <option value="Sikh">सिख</option>
            <option value="Jain">जैन</option>
            <option value="Buddhist">बौद्ध</option>
            <option value="Parsi">पारसी</option>
            <option value="Other">अन्य</option>
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
          {field === 'height' && partnerData[field] ? `${partnerData[field]} सेमी` : partnerData[field]}
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
              बुनियादी और जीवनशैली, शिक्षा और करियर, स्थान और मेरे संपर्क विवरण
            </h1>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 mt-4 md:mt-0 cursor-pointer bg-black text-white px-4 py-1 rounded-full hover:bg-gray-800 transition"
          >
            <FaPencilAlt />
            <span>{isEditing ? "रद्द करें" : "संपादित करें"}</span>
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
                सहेजें
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailFromOne;
