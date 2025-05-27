import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaBirthdayCake, FaCity, FaUser, FaHeart, FaGraduationCap, FaMoneyBillWave, FaWeight, FaTransgender, FaAppleAlt, FaWheelchair } from "react-icons/fa";
const FourthMatch = () => {
  const API = import.meta.env.VITE_APP_API_URL;
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  const userid = userProfile?._id;

  useEffect(() => {
    const fetchProfilesByCity = async () => {
      try {
        if (!userid) {
          setError("User ID not found.");
          setLoading(false);
          return;
        }
        const res = await axios.get(`${API}city/profilebycity/${userid}`);
        setProfiles(res.data.users);
      } catch (err) {
        setError("Failed to fetch profiles.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfilesByCity();
  }, [userid, API]);

  if (loading)
    return <div className="text-center mt-10 text-[#FF5A60] font-semibold">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500 mt-10 font-semibold">{error}</div>
    );
  if (profiles.length === 0)
    return (
      <div className="text-center mt-10 text-gray-600 min-h-screen font-semibold">
           No matching users found in your city.
      </div>
    );

  return (
    <div className="p-6 md:p-10  mx-auto font-sans">
      <h2 className="text-3xl font-semibold mb-10 text-center text-[#FF5A60] tracking-wide">
        Members that match your According Your City
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[...profiles].reverse().map((profile, idx) => {
          const user = profile.userId || {};
          return (
            <div
              key={idx}
              className="bg-[#FF5A60] rounded-xl shadow-lg border-2 border-[#FF5A60] hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 flex flex-col md:flex-row p-6 gap-6"
            >
              {/* Profile Image */}
              <div className="flex-shrink-0 flex justify-center items-center">
                <img
                  src={user.profileImage || "/default-image.jpg"}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-md border-4 border-[#FF5A60]"
                />
              </div>

              {/* Info Section */}
              <div className="flex flex-col justify-between flex-1">
                {/* Name */}
               
                <h3 className="text-2xl font-bold flex gap-2 items-center text-white mb-4">
                 <FaUser className="text-xl" />
                  {user.firstName} {user.lastName}
                </h3>

                {/* Info grid */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-white text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <FaBirthdayCake className="" />
                    <span>
                      <strong>Age:</strong> {profile.age || "N/A"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaWeight className="" />
                    <span>
                      <strong>Height:</strong> {profile.height || "N/A"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaUser className="" />
                    <span>
                      <strong>Gender:</strong> {user.gender || "N/A"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaHeart className="" />
                    <span>
                      <strong>Marital Status:</strong> {profile.maritalStatus || "N/A"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaCity className="" />
                    <span>
                      <strong>City:</strong> {profile.city || "N/A"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaMoneyBillWave className="" />
                    <span>
                      <strong>Annual Income:</strong> {profile.annualincome || "N/A"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaGraduationCap className="" />
                    <span>
                      <strong>Qualification:</strong> {profile.highestqualification || "N/A"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaAppleAlt className="" />
                    <span>
                      <strong>Diet:</strong> {profile.diet || "N/A"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaWheelchair className="" />
                    <span>
                      <strong>Disability:</strong> {profile.disability || "N/A"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaBirthdayCake className="" />
                    <span>
                      <strong>DOB:</strong>{" "}
                      {user.dob
                        ? new Date(user.dob).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "N/A"}
                    </span>
                  </div>

                </div>

                {/* Button */}
                <div className="mt-6 flex justify-center md:justify-end">
                  <Link to={`/profile/${user._id}`}>
                    <button className="bg-[#FFCCA8] cursor-pointer font-semibold px-6 py-2 rounded-md  ">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FourthMatch;
