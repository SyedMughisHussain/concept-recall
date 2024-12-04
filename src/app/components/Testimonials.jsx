"use client";

import TestimonialCard from "./TestimonialCard.jsx";

import { useEffect, useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = 3;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-20 bg-[#101010]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-white font-semibold mb-4">
          Our <span className="text-orange-500">Testimonials</span>
        </h2>
        <p className="text-lg text-[13px] max-w-3xl mx-auto text-gray-400">
          Having a satisfied clientele that appreciates our work is a milestone in itself. Our clients are our evangelists and they love to write
          their journey and success stories with us.
        </p>
      </div>

      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        <div className="flex-none h-full md:h-[500px] w-full flex justify-center items-center">
          <TestimonialCard
            imageUrl={"https://cdn.conceptrecall.com/testimonials/DaleShadbegian.webp"}
            description={"Great programmers and great communication. Highly recommended."}
            name={"Dale Shadbegian"}
            rating={"4.6 Rating"}
          />
        </div>

        <div className="flex-none h-full md:h-[500px] w-full flex justify-center items-center">
          <TestimonialCard
            imageUrl={"https://cdn.conceptrecall.com/testimonials/MarkMatatov.webp"}
            description={"Concept Recall's team did a great job developing a custom web app for me."}
            name={"Mark Matatov"}
            rating={"4.9 Rating"}
          />
        </div>

        <div className="flex-none h-full md:h-[500px] w-full flex justify-center items-center">
          <TestimonialCard
            imageUrl={"https://cdn.conceptrecall.com/testimonials/BrettForeman.webp"}
            description={
              "It was a pleasure collaborating with ConceptRecall for a few projects. There team is thorough and communicates well. Thanls again for your help with Shopify development & design tasks!"
            }
            name={"Brette Forman"}
            rating={"4.9 Rating"}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
