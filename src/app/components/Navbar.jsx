import React from "react";

const Navbar = () => {
  return (
    <div>
      <section>
        <nav className="bg-black border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="" className="flex items-center rtl:space-x-reverse">
              <img src="/logo-light.svg" className="h-10" alt="Flowbite Logo" />
            </a>
            <button
              data-collapse-toggle="Navbar-default"
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

            <div className="flex space-x-4 md:space-x-6 lg:space-x-8">
              <div className="group relative hidden sm:block">
                <img src="/w-logo.svg" alt="Image 1" className="w-7 h-7 rounded transition-all duration-300 ease-in-out group-hover:bg-orange-500" />
                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-50 rounded transition-all duration-300 ease-in-out"></div>
              </div>

              <div className="group relative hidden sm:block">
                <img src="/p-logo.svg" alt="Image 2" className="w-7 h-7 rounded transition-all duration-300 ease-in-out group-hover:bg-orange-500" />
                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-50 rounded transition-all duration-300 ease-in-out"></div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
