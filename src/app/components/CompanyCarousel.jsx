'use client';

import { useEffect, useState } from "react";

const images = [
  "https://cdn.conceptrecall.com/staticContent/client3.webp",
  "https://cdn.conceptrecall.com/staticContent/client6.webp",
  "https://cdn.conceptrecall.com/staticContent/client4.webp",
  "https://cdn.conceptrecall.com/staticContent/client5.webp",
  "https://cdn.conceptrecall.com/staticContent/client1.webp",
  "https://cdn.conceptrecall.com/staticContent/client2.webp",
];

const CompanyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to next image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#1D1D1D]">
      <div
        className="flex gap-10 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 + 40)}%)`, // Move by the width of the image + 40px gap
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-none w-60 h-36 sm:w-64 sm:h-40 md:w-72 md:h-48 lg:w-80 lg:h-56">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyCarousel;
