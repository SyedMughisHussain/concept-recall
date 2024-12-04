"use client";

import CarouselComponent from "./CarouselComponent.jsx";

import { useEffect, useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = 3; // Number of pages in the carousel

  // Automatically change the page every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 3000); // Change page every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#101010]">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        <div className="flex-none h-full md:h-[500px] w-full flex justify-center items-center">
          <CarouselComponent
            imageUrl={"https://cdn.conceptrecall.com/CaseStudy/2024-08-15T15:13:55.857Z_file.png"}
            title={"Zexal"}
            description={
              "Zexal is an innovative transportation app designed to revolutionize your travel experience. Featuring a sleek design and user-friendly interface, Zexal allows users to easily book rides, track drivers in real-time, and enjoy reliable, comfortable journeys.Whether you need a quick commute across town or a longer journey, Zexal offers an all-in-one solution for seamless and efficient travel. The app's intuitive platform ensures a hassle-free experience, making it the perfect choice for busy professionals and travelers alike."
            }
          />
        </div>

        <div className="flex-none h-full md:h-[500px] w-full flex justify-center items-center">
          <CarouselComponent
            imageUrl={"https://cdn.conceptrecall.com/CaseStudy/2024-08-19T12:01:51.962Z_file.png"}
            title={"Pendume"}
            description={
              "Pendume is a versatile transportation app designed to fulfill all your travel and logistics needs, acting as your go-to agency for seamless mobility solutions. Offering everything from reliable and comfortable car rides to convenient towing and moving services, Pendume ensures an efficient experience. Whether you need a quick ride across town, assistance with a vehicle breakdown, or help with relocating items, Pendume supports your journey with expert development in transportation technology. With user-friendly features and real-time tracking, Pendume is your all-in-one solution for hassle-free transportation and logistics, making every journey smooth and stress-free."
            }
          />
        </div>

        <div className="flex-none h-full md:h-[500px] w-full flex justify-center items-center">
          <CarouselComponent
            imageUrl={"https://cdn.conceptrecall.com/CaseStudy/2024-10-28T08:24:36.343Z_file.png"}
            title={"TripSphere"}
            description={
              "TripSphere is a travel recommendation app that simplifies trip planning by offering personalized suggestions from friends and peers. It features a peer-to-peer sharing system for exchanging tips and favorite destinations, all viewable on an integrated map.With options for private or public profiles, users can easily tag locations and discover new spots. TripSphere enhances user experiences with improved map search and sharing capabilities, fostering community engagement and making every journey memorable."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
