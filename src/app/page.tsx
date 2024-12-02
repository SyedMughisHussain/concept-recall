export default function Home() {
  return (
    <div >
      <section>
        <nav className="bg-black border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center rtl:space-x-reverse">
              <img src="/logo-light.svg" className="h-10" alt="Flowbite Logo" />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium text-[13px] flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-orange-500 bg-blue-700 rounded md:bg-transparent md:text-orange-700 md:p-0 dark:text-white md:dark:text-orange-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent"
                  >
                    Industries
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Case Study
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Feed
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                  >
                    Speak to an Expert
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <div className="group relative">
                <img src="/w-logo.svg" alt="Image 1" className="w-7 h-7 rounded transition-all duration-300 ease-in-out group-hover:bg-orange-500" />
                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-50 rounded transition-all duration-300 ease-in-out"></div>
              </div>

              <div className="group relative">
                <img src="/p-logo.svg" alt="Image 2" className="w-7 h-7 rounded transition-all duration-300 ease-in-out group-hover:bg-orange-500" />
                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-50 rounded transition-all duration-300 ease-in-out"></div>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <section
        className="bg-cover bg-center text-white h-screen flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/homeBg.webp')" }}
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-[45px] font-semibold mb-4">
            Revolutionizing Marketing for <span className="text-orange-500">Digital Advancement</span>
          </h2>
          <p className="text-[15px] mb-8 px-16 text-gray-400">
            ConceptRecall takes pride in helping our clients achieve massive success, increase revenue, and take their businesses to new heights. Our
            strategies to catapult your business are simple yet powerful. We enjoy a distinguished reputation as a customer-oriented marketing agency,
            boasting 95.5% happy clients.
          </p>
        </div>
      </section>

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellat eum libero voluptatibus optio quas suscipit perferendis,
              magni velit, laudantium fugit cupiditate rem commodi ipsam ipsa consequatur assumenda modi? Iusto!
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
    </div>
  );
}
