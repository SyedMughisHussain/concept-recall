import React from "react";

const Experience = () => {
  return (
    <div className="py-12 bg-[#1D1D1D]">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center section md:border-r md:md:border-gray-300 pr-4">
            <h1 className="text-4xl md:text-[30px] font-semibold text-orange-500">10+</h1>
            <p className="text-white">Years of Experience</p>
          </div>
          <div className="text-center section md:border-r md:border-gray-300 pr-4">
            <h1 className="text-4xl font-semibold md:text-[30px] text-orange-500">116+</h1>
            <p className="text-white">Project Completed</p>
          </div>
          <div className="text-center section md:border-r md:border-gray-300 pr-4">
            <h1 className="text-4xl font-semibold text-orange-500 md:text-[30px]">100+</h1>
            <p className="text-white">Happy Customers</p>
          </div>
          <div className="section text-center">
            <h1 className="text-4xl font-semibold text-orange-500 md:text-[30px]">12M+</h1>
            <p className="text-white">Total Revenue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
