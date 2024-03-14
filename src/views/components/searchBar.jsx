import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <h1 class="text-yellow-50 font-semibold mb-5 text-center">
        Create search button
      </h1>
      <form class="max-w-xl mx-auto">
        <div class="flex items-center justify-center">
          <div class="bg-black bg-opacity-50 px-5 py-5 rounded-lg shadow-lg ">
            <div class="flex items-center me-4 mb-5">
              <input
                id="yellow-radio"
                type="radio"
                value="yellow"
                name="colored-radio"
                class="hidden"
              ></input>
              <label
                for="yellow-radio"
                class="flex items-center cursor-pointer"
              >
                <div class="mx-5 w-6 h-6 border-2 border-yellow-300 rounded-full flex-shrink-0 mr-2 flex justify-center items-center">
                  <div
                    id="custom-radio-yellow"
                    class="w-3 h-3  rounded-full transition duration-200 ease-in-out"
                  ></div>
                </div>
                <span class="text-sm font-medium text-gray-900 dark:text-gray-300">
                  TXAI Service
                </span>
              </label>
              <input
                id="red-radio"
                type="radio"
                value="red"
                name="colored-radio"
                class="hidden"
              ></input>
              <label for="red-radio" class="flex items-center cursor-pointer">
                <div class="mx-5 w-6 h-6 border-2 border-yellow-300 rounded-full flex-shrink-0 mr-2 flex justify-center items-center">
                  <div
                    id="custom-radio-red"
                    class="w-3 h-3  rounded-full transition duration-200 ease-in-out"
                  ></div>
                </div>
                <span class="text-sm font-medium text-gray-900 dark:text-gray-300">
                  BUS Service
                </span>
              </label>
            </div>

            <div class="flex items-center">
              <input
                type="text"
                id="start-location"
                class="text-sm font-medium block w-64 p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-s-lg focus:outline-none focus:border-yellow-500"
                placeholder="Start Location"
                required
              ></input>
              <button
                type="button"
                class="p-2.5 text-sm font-medium bg-gray-900 bg-opacity-50 text-yellow-300 border-2 border-yellow-300 hover:bg-yellow-500 hover:bg-opacity-30 hover:text-yellow-600 focus:outline-none focus:bg-yellow-400 focus:bg-opacity-50 focus:border-yellow-600"
              >
                <svg
                  class="w-4 h-4 inline-block text-white"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 16 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 10H1m0 0 3-3m-3 3 3 3m1-9h10m0 0-3 3m3-3-3-3"
                  />
                </svg>
              </button>
              <input
                type="text"
                id="end-location"
                class="text-sm font-medium block w-64 p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-e-lg focus:outline-none focus:border-yellow-500"
                placeholder="End Location"
                required
              ></input>
              <input
                type="date"
                id="start-date"
                class="text-sm font-medium block p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-s-lg ml-2 focus:outline-none focus:border-yellow-500"
                required
              ></input>
              <input
                type="time"
                id="start-time"
                class="text-sm font-medium block p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-e-lg  focus:outline-none focus:border-yellow-500"
                required
              ></input>
              <button class="ml-5 p-3 text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transform transition-transform hover:scale-105 relative overflow-hidden w-36">
                <span class="relative z-10">Search</span>
                <span class="absolute top-0 left-0 w-full h-full bg-yellow-500 opacity-0 mix-blend-multiply hover:opacity-50 transition-opacity duration-300"></span>
              </button>
            </div>

            <div class="flex items-center mt-5 mx-5 ">
              <span class="text-base font-medium text-gray-900 dark:text-gray-300 mr-5">
                More options :
              </span>
              <label
                for="option1"
                class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
              >
                <input type="checkbox" id="option1" class="hidden"></input>
                <div class="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                  <svg
                    class="w-5 h-5 text-yellow-300 hidden checkmark"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                    />
                  </svg>
                </div>
                Option 1
              </label>
              <label
                for="option2"
                class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
              >
                <input type="checkbox" id="option2" class="hidden"></input>
                <div class="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                  <svg
                    class="w-5 h-5 text-yellow-300 hidden checkmark"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                    />
                  </svg>
                </div>
                Option 2
              </label>
              <label
                for="option3"
                class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
              >
                <input type="checkbox" id="option3" class="hidden"></input>
                <div class="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                  <svg
                    class="w-5 h-5 text-yellow-300 hidden checkmark"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                    />
                  </svg>
                </div>
                Option 3
              </label>
              <label
                for="option4"
                class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
              >
                <input type="checkbox" id="option4" class="hidden"></input>
                <div class="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                  <svg
                    class="w-5 h-5 text-yellow-300 hidden checkmark"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                    />
                  </svg>
                </div>
                Option 4
              </label>
              <label
                for="option5"
                class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
              >
                <input type="checkbox" id="option5" class="hidden"></input>
                <div class="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2 ">
                  <svg
                    class="w-5 h-5 text-yellow-300 hidden checkmark"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                    />
                  </svg>
                </div>
                Option 5
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
