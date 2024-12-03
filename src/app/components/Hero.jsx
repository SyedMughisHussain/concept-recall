import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center text-white h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/homeBg.webp')" }}
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-[45px] font-semibold mb-4">
          Revolutionizing Marketing for <span className="text-orange-500">Digital Advancement</span>
        </h2>
        <p className="text-[17px] md:text-[15px] mb-8 px-16 text-gray-400">
          ConceptRecall takes pride in helping our clients achieve massive success, increase revenue, and take their businesses to new heights. Our
          strategies to catapult your business are simple yet powerful. We enjoy a distinguished reputation as a customer-oriented marketing agency,
          boasting 95.5% happy clients.
        </p>
      </div>
    </section>
  );
};

export default Hero;
