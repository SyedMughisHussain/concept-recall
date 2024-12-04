import React from "react";

const TestimonialCard = ({ imageUrl, description, name, rating }) => {
  return (
    <div className="border border-gray-500 rounded-lg -fit py-5 px-5 md:w-[350px]">
      <img className="rounded-[50%]" src={imageUrl} alt="" />
      <p className="text-gray-400 pt-5">{description}</p>
      <p className="text-white pt-5 font-bold">{name}</p>
      <div className="flex pt-5">
        <img src="https://conceptrecall.com/assets/icons/star.svg" alt="" />
        <img src="https://conceptrecall.com/assets/icons/star.svg" alt="" />
        <img src="https://conceptrecall.com/assets/icons/star.svg" alt="" />
        <img src="https://conceptrecall.com/assets/icons/star.svg" alt="" />
        <img src="https://conceptrecall.com/assets/icons/star.svg" alt="" />
        <img src="https://conceptrecall.com/assets/icons/star.svg" alt="" />
      </div>
      <p className="text-white pt-5">{rating}</p>
    </div>
  );
};

export default TestimonialCard;
