import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import Image17 from '../../assets/Images/Image17.png';
import Navbar3 from "../Navbar/Navbar3";
import { CiCircleQuestion } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import SecondFooter from "../FooterPage/SecondFooter";
import Footer from "../FooterPage/Footer";

const StepOne = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    if (!formData.profileFor || !formData.firstName || !formData.gender) {
      toast.warning("कृपया सभी आवश्यक फ़ील्ड भरें");
      return;
    }
    toast.success("आपने पहला चरण पूरा किया");
    setTimeout(() => {
      navigate("/register/step-two");
    }, 1500);
  };

  return (
    <>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `url(${Image17})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar3 />
        <div className="min-h-screen jost flex justify-center items-center px-4">
          <div className="bg-[#DE5353] bg-opacity-90 p-8 rounded-2xl shadow-lg w-full max-w-md">
            <FaArrowCircleLeft
              className="text-2xl text-white mb-4 cursor-pointer"
              onClick={() => navigate(-1)}
            />

            <h2 className="text-2xl text-start font-semibold px-2 mt-3 mb-6 text-black">
              अपना अकाउंट बनाएं और अपना परफेक्ट मैच ढूंढना शुरू करें!
            </h2>

            <form onSubmit={handleNext} className="space-y-4">
              <ToastContainer />
              
              {/* Profile For */}
              <label className="text-white">प्रोफ़ाइल किसके लिए है</label>
              <select
                value={formData.profileFor}
                onChange={(e) =>
                  setFormData({ ...formData, profileFor: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option value="">चुनें</option>
                <option value="Myself">खुद के लिए</option>
                <option value="Son">बेटा</option>
                <option value="Daughter">बेटी</option>
                <option value="Brother">भाई</option>
                <option value="Sister">बहन</option>
                {/* <option value="Relative">रिश्तेदार</option>
                <option value="Friend">दोस्त</option> */}
              </select>

              {/* Name Fields */}
              <div className="md:flex gap-3">
                <div>
                  <label className="text-white">पहला नाम</label>
                  <input
                    type="text"
                    placeholder="पहला नाम"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div>
                  <label className="text-white">अंतिम नाम</label>
                  <input
                    type="text"
                    placeholder="अंतिम नाम"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
              </div>

              {/* Gender */}
              <label className="text-white flex items-center gap-1">
                लिंग <CiCircleQuestion />
              </label>
              <select
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option value="">चुनें</option>
                <option value="Male">पुरुष</option>
                <option value="Female">महिला</option>
                <option value="Other">अन्य</option>
              </select>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full cursor-pointer bg-black text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                आगे बढ़ें
              </button>

              {/* Already a Member */}
              <div className="text-center mt-4">
                <h1 className="text-black">
                  पहले से सदस्य हैं?{" "}
                  <span
                    className="cursor-pointer text-white underline"
                    onClick={() => navigate("/login")}
                  >
                    लॉगिन करें
                  </span>
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StepOne;
