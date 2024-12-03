import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-orange-500 font-semibold mb-4">
          About <span className="text-white">Us</span>
        </h2>
        <p className="text-lg text-[13px] max-w-3xl mx-auto text-gray-400">
          We are a team of seasoned creators who upgrade your business processes with modern technology and advancements. And well, these numbers
          speak volumes about what we have achieved on our journey so far.
        </p>
      </div>

      <div className="px-3 md:flex md:px-20">
        <img src="/homeBg.webp" alt="concept recall" className="py-2 rounded md:h-96 md:w-[500px]" />
        <div className="md:mt-28"> 
          <p className="text-gray-400 text-lg md:ml-5">
            We believe in surpassing expectations and satisfying our clientele to form lasting alliances. What makes this target attainable is
            thinking out of the box and gladly, our personnel does just that! We fuse creativity with technical expertise to foster impactful results
            and never fail to surprise our clients with it!
          </p>
          <div className="mt-4 md:p-4">
            <a href="#" className="bg-orange-500 text-white py-3 px-8 rounded-lg hover:bg-orange-600 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
