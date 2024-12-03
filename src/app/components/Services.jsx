import React from "react";

const Services = () => {
  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Award-winning <span className="text-orange-500">Services we provide</span>
        </h2>
        <p className="text-lg text-[13px] max-w-3xl mx-auto text-gray-400">
          Our services are tailor-made and we are always striving to surpass your wildest expectations!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        <div className="bg-[#3A3A3A] p-6 rounded-lg shadow-lg hover:border-2 hover:border-white hover:bg-gray-700 transition duration-300">
          <img
            src="https://cdn.conceptrecall.com/Service/2024-07-18T12:03:35.880Z_file.png"
            alt="Card Image"
            className="w-15 h-15 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Tailored Mobile</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellat eum libero voluptatibus optio quas suscipit perferendis, magni
            velit, laudantium fugit cupiditate rem commodi ipsam ipsa consequatur assumenda modi? Iusto!
          </p>
        </div>

        <div className="bg-[#3A3A3A] p-6 rounded-lg shadow-lg hover:border-2 hover:border-white hover:bg-gray-700 transition duration-300">
          <img
            src="https://cdn.conceptrecall.com/Service/2024-07-18T12:04:04.793Z_file.png"
            alt="Card Image"
            className="w-15 h-15 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Customized Web</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, pariatur magnam earum ratione nam voluptas expedita laborum iste dolore
            nostrum, numquam natus. Recusandae optio ipsa nemo eligendi quas sint unde.
          </p>
        </div>

        <div className="bg-[#3A3A3A] p-6 rounded-lg shadow-lg hover:border-2 hover:border-white hover:bg-gray-700 transition duration-300">
          <img
            src="https://cdn.conceptrecall.com/Service/2024-07-22T12:01:37.932Z_file.png"
            alt="Card Image"
            className="w-15 h-15 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">E-Commerce</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum exercitationem corporis, dolore possimus, quidem ipsa consequuntur
            voluptatum quis atque accusamus expedita quae sint nisi dolores amet, odit delectus corrupti ad!
          </p>
        </div>

        <div className="bg-[#3A3A3A] p-6 rounded-lg shadow-lg hover:border-2 hover:border-white hover:bg-gray-700 transition duration-300">
          <img
            src="https://cdn.conceptrecall.com/Service/2024-07-22T12:14:10.474Z_file.png"
            alt="Card Image"
            className="w-15 h-12 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">UI/UX</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed numquam magnam a mollitia rem. Voluptatibus molestiae vel pariatur sed
            officiis cumque commodi eum incidunt laudantium, provident magni veniam asperiores architecto?
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <a href="#" className="bg-orange-500 text-white py-3 px-8 rounded-lg hover:bg-orange-600 transition duration-300">
          View All Services
        </a>
      </div>
    </section>
  );
};

export default Services;
