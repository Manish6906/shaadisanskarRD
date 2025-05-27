import React from "react";
import image1 from "../../assets/Images/Subtract.png";
import image2 from "../../assets/Images/Rectangle 368.png";

const SecondPage = () => {
  return (
    <>
    
    <div className="max-w-7xl mx-auto p-6 bg-white gilda-display-regular">
      {/* Header */}
      <h1 className="text-5xl text-center mb-6">
        <span className="text-black">HeartSync</span>{" "}
        <span className="text-[#EB5757]">Latest Articles</span>
      </h1>

      {/* Featured Image */}
      <div className="mb-4">
        <img
          src={image1}
          alt="Happy Couple"
          className="w-full h-auto rounded"
        />
      </div>

      {/* Author and Date */}
      <div className="text-sm text-black flex items-center gap-2 mb-2">
        <span className="w-6 h-1 bg-rose-400 inline-block"></span>
        <span>Manesh Sita | 15 Nov 2024</span>
      </div>

      {/* Main Article Title */}
      <h2 className="text-3xl mb-4 text-left">
        The Ultimate Guide to Finding Your Perfect Match
      </h2>

      {/* Main Article Content */}
      <p className="text-black leading-relaxed text-sm md:text-base text-left">
        Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend
        placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit
        lorem. Ut felis velit tristique posuere tellus sed. Arcu convallis nam
        massa leo viverra volutpat facilisis. Nulla sagittis nam pellentesque
        sagittis in turpis nulla et. Lorem ipsum dolor sit amet consectetur.
        Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor.
        Sed sed in suscipit lorem. Ut felis velit tristique posuere tellus sed.
        Arcu convallis nam massa leo viverra volutpat facilisis. Nulla sagittis
        nam pellentesque sagittis in turpis nulla et.
      </p>

      {/* Additional Articles Section */}
      <div className="py-10 space-y-10">
        {/* First Article */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-3xl mb-2 text-left">
              Luctus Justo Quis Feugiat
            </h2>
            <p className="text-black text-sm leading-relaxed md:text-base text-left">
              Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend
              placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit
              lorem. Ut felis velit tristique posuere tellus sed. Arcu convallis
              nam massa leo viverra volutpat facilisis. Nulla sagittis nam
              pellentesque sagittis in turpis nulla et. Lorem ipsum dolor sit
              amet consectetur. Aliquam in neque eleiferviverra volutpat
              facilisis. Nulla sagittis nam pellentesque sagittis in turpis
              nulla et.
            </p>
          </div>
          <div>
            <img src={image2} alt="Couple" className="w-full h-auto rounded" />
          </div>
        </div>

        {/* Second Article */}
        <div className=" rid md:grid-cols-2 gap-6 items-start border-b border-[#000000]">
          <h2 className="text-2xl md:text-3xl font-light text-left mb-4">
            Luctus Justo Quis Feugiat Lacus Orcha.
          </h2>
          <p className="text-sm md:text-base text-justify text-[#000000] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend
            placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit
            lorem. Ut felis velit tristique posuere tellus sed. Arcu convallis
            nam massa leo viverra volutpat facilisis. Nulla sagittis nam
            pellentesque sagittis in turpis nulla et. Lorem ipsum dolor sit amet
            consectetur. Aliquam in neque eleifend placerat scelerisque
            tincidunt erat porttitor. Sed sed in suscipit lorem. Ut felis velit
            tristique posuere tellus sed. Arcu convallis nam massa leo viverra
            volutpat facilisis. Nulla sagittis nam pellentesque sagittis in
            turpis nulla et. Lorem ipsum dolor sit amet consectetur. Aliquam in
            neque eleifend placerat scelerisque tincidunt erat porttitor. Sed
            sed in suscipit lorem.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SecondPage;
