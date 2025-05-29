import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function FileTwo() {
  return (
    <div className="bg-white text-black py-12 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-5xl font-semibold mb-10 gilda-display-regular cursor-pointer">
        कोई सवाल है?
        <span className="text-[#EB5757] ml-2 cursor-pointer">संपर्क करें!</span>
      </h2>

      {/* संपर्क जानकारी का रैपर */} 
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-12 text-left">
        
        {/* संपर्क करें ब्लॉक */}
        <div className="flex items-start gap-4 max-w-xs w-full jost md:ml-36 cursor-pointer">
          <FaPhoneAlt className="text-[#EB5757] text-xl mt-1 shrink-0" />
          <div>
            <h3 className="text-base sm:text-lg font-semibold">संपर्क करें</h3>
            <p className="text-sm sm:text-base">
              ईमेल:{" "}
              <a
                href="mailto:shaadisanskar1@gmail.com"
                className="text-black hover:underline"
              >
                shaadisanskar1@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* हमारा स्थान ब्लॉक */}
        <div className="flex items-start gap-4 max-w-xs w-full jost">
          <FaMapMarkerAlt className="text-[#EB5757] text-xl mt-1 shrink-0" />
          <div>
            <h3 className="text-base sm:text-lg font-semibold cursor-pointer">हमारा स्थान</h3>
            <p className="text-sm sm:text-base cursor-pointer">चंडीगढ़, भारत</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileTwo;
