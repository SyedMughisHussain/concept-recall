import React from "react";

const CarouselComponent = ({ imageUrl, title, description }) => {
  return (
    <div className="md:flex md:mx-32 py-10 rounded-lg">
      <img src={imageUrl} className="md:h-[400px] md:w-[550px]" alt="Concept Recall" />
      <div className="bg-gray-800 rounded-lg p-8">
        <p className="text-[30px] text-white font-bold pb-10 md:text-[25px]">{title}</p>
        <p className="text-gray-400">{description}</p>
        <div className="mt-12">
          <a href="#" className="bg-orange-500 text-white py-3 px-8 rounded-lg hover:bg-orange-600 transition duration-300">
            View Case Study
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
