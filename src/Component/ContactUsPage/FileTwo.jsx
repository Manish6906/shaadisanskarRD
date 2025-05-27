import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function FileTwo() {
  return (
    <div className="bg-white text-black py-12 px-6 md:px-20 text-center  ">
      <h2 className="text-3xl md:text-5xl font-semibold mb-10 gilda-display-regular cursor-pointer">
        Have a Question?
        <span className="text-[#EB5757] ml-2 cursor-pointer">Contact Us!</span>
      </h2>

      {/* Wrapper for Contact Info */} 
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-12 text-left ">
        
        {/* Contact Us Block */}
        <div className="flex items-start gap-4 max-w-xs w-full jost md:ml-36 cursor-pointer ">
          <FaPhoneAlt className="text-[#EB5757] text-xl mt-1 shrink-0 " />
         <div>
  <h3 className="text-base sm:text-lg font-semibold">Contact Us</h3>
  <p className="text-sm sm:text-base">
    Email:{" "}
    <a
      href="mailto:shaadisanskar1@gmail.com"
      className="text-black hover:underline"
    >
      shaadisanskar1@gmail.com
    </a>
  </p>
</div>

        </div>

        {/* Our Location Block */}
        <div className="flex items-start gap-4 max-w-xs w-full jost">
          <FaMapMarkerAlt className="text-[#EB5757] text-xl mt-1 shrink-0" />
          <div>
            <h3 className="text-base sm:text-lg font-semibold cursor-pointer">Our Location</h3>
            {/* <p className="text-sm sm:text-base">Chandigarh</p> */}
            <p className="text-sm sm:text-base cursor-pointer">Chandigarh, India</p>
          </div>
        </div>
        </div>
    </div>
  );
}

export default FileTwo;
