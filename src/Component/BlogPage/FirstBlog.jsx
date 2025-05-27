import React from "react";
import image1 from "../../assets/Images/Rectangle 350.png";
import image2 from "../../assets/Images/Rectangle 353.png";
import image3 from "../../assets/Images/Rectangle 356.png";
import image4 from "../../assets/Images/Rectangle 361.png";
import image5 from "../../assets/Images/Rectangle 362.png";
import image6 from "../../assets/Images/Rectangle 363.png";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "Nurturing Your Spirit: Lessons from Scripture",
    author: "Mariah Silva",
    date: "15 Nov, 2024",
    image: image1,
  },
  {
    title: "Nurturing Your Spirit: Lessons from Scripture",
    author: "Mariah Silva",
    date: "15 Nov, 2024",
    image: image2,
  },
  {
    title: "Nurturing Your Spirit: Lessons from Scripture",
    author: "Mariah Silva",
    date: "15 Nov, 2024",
    image: image3,
  },
  {
    title: "Nurturing Your Spirit: Lessons from Scripture",
    author: "Mariah Silva",
    date: "15 Nov, 2024",
    image: image4,
  },
  {
    title: "Nurturing Your Spirit: Lessons from Scripture",
    author: "Mariah Silva",
    date: "15 Nov, 2024",
    image: image5,
  },
  {
    title: "Nurturing Your Spirit: Lessons from Scripture",
    author: "Mariah Silva",
    date: "15 Nov, 2024",
    image: image6,
  },
];

function FirstBlog() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 jost">
      <h2 className="text-5xl font-light text-center mb-10 gilda-display-regular">
        <span className="text-black">HeartSync </span>
        <span className="text-[#EB5757] ">Latest Articles</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-md border rounded-md overflow-hidden"
          >
            <img
              src={article.image}
              alt="Article"
              className="w-full h-70 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between text-sm text-[#000000] mb-1">
                <span>{article.author}</span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-md font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-[#000000] mb-4 jost">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore...
              </p>

              <div className="flex justify-center">
                <Link to="/seocd">
                  <button className="bg-[#EB5757] cursor-pointer  jost text-white px-13 py-2 text-sm rounded-full">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FirstBlog;
