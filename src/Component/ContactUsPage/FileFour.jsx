import React, { useState } from 'react';
import Image18 from '../../assets/Images/Image18.png';

function FileFour() {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here, like sending data to an API
    console.log('Form Submitted:', formData);
    console.log('Save Info:', isChecked);

    // Reset form (optional)
    setFormData({ name: '', email: '', message: '' });
    setIsChecked(false);
  };

  return (
    <div className="flex justify-center items-center py-5  bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-5xl">
        
        {/* Left Side - Image */}
        <div className="md:w-1/2 h-[550px] p-4">
          <img
            src={Image18}
            alt="Contact"
            className="w-full h-full rounded-md object-fill"
          />
        </div>

        {/* Right Side - Form Box */}
        <div className="md:w-1/2 h-[555px] jost p-4 flex ">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 w-full">
            <h1 className="text-2xl font-bold mb-2 text-gray-800 cursor-pointer">Have Any Questions?</h1>
            <p className="text-gray-600 mb-6 cursor-pointer">
              Please feel free to get in touch with us using the contact form below.
              We’d love to hear from you.
            </p>

            <form className="space-y-4 sm:space-y-10" onSubmit={handleSubmit}>
              {/* Name and Email side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <textarea
                id="message"
                name="message"
                rows="3"
                required
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border resize-none border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              {/* Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="saveInfo"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="saveInfo" className="text-sm text-gray-700 cursor-pointer">
                  Save my name, email, and website in this browser for the next time.
                </label>
                {isChecked && (
                  <span className="text-green-600 text-sm"></span>
                )}
              </div>

              <button
  type="submit"
  className="w-full bg-[#EB5757] text-white py-2 px-4 rounded-md hover:bg-black transition cursor-pointer
             mt-2 sm:mt-4 md:mt-0"
>
  Submit
</button>



            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileFour;
