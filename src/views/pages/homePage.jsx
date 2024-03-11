import React from "react";

const Homepage = () => {
  return (
    <>
      <div id="searchSection" class="mt-20 relative h-20 hidden">
        <form class="max-w-xl mx-auto">
          <div class="flex items-center justify-center">
            <div class="bg-black bg-opacity-50 px-5 py-5 rounded-lg shadow-lg">
              <div class="flex items-center me-4 mb-5">
                <input
                  id="yellow-radio"
                  type="radio"
                  value="yellow"
                  name="colored-radio"
                  class="hidden"
                />
                <label
                  for="yellow-radio"
                  class="flex items-center cursor-pointer"
                >
                  <div class="mx-5 w-6 h-6 border-2 border-yellow-300 rounded-full flex-shrink-0 mr-2 flex justify-center items-center">
                    <div
                      id="custom-radio-yellow"
                      class="w-3 h-3 rounded-full transition duration-200 ease-in-out"
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
                />
                <label for="red-radio" class="flex items-center cursor-pointer">
                  <div class="mx-5 w-6 h-6 border-2 border-yellow-300 rounded-full flex-shrink-0 mr-2 flex justify-center items-center">
                    <div
                      id="custom-radio-red"
                      class="w-3 h-3 rounded-full transition duration-200 ease-in-out"
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
                />
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
                />
                <input
                  type="date"
                  id="start-date"
                  class="text-sm font-medium block p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-s-lg ml-2 focus:outline-none focus:border-yellow-500"
                  required
                />
                <input
                  type="time"
                  id="start-time"
                  class="text-sm font-medium block p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-e-lg focus:outline-none focus:border-yellow-500"
                  required
                />
                <button class="ml-5 p-3 text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transform transition-transform hover:scale-105 relative overflow-hidden w-36">
                  <span class="relative z-10">Search</span>
                  <span class="absolute top-0 left-0 w-full h-full bg-yellow-500 opacity-0 mix-blend-multiply hover:opacity-50 transition-opacity duration-300"></span>
                </button>
              </div>

              <div class="flex items-center mt-5 mx-5">
                <span class="text-base font-medium text-gray-900 dark:text-gray-300 mr-5">
                  More options :
                </span>
                <label
                  for="option1"
                  class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                >
                  <input type="checkbox" id="option1" class="hidden" />
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
                  Affordable
                </label>
                <label
                  for="option2"
                  class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                >
                  <input type="checkbox" id="option2" class="hidden" />
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
                  Avaiabliity
                </label>
                <label
                  for="option3"
                  class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                >
                  <input type="checkbox" id="option3" class="hidden" />
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
                  Nearby
                </label>
                <label
                  for="option4"
                  class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                >
                  <input type="checkbox" id="option4" class="hidden" />
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
                  High Rating
                </label>
                <label
                  for="option5"
                  class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                >
                  <input type="checkbox" id="option5" class="hidden" />
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
                  Popular
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="mb-10 ml-10 mt-32 h-fit w-fit bg-gray-500 bg-opacity-80 py-5 pr-5 text-white">
        <div class="ml-8 flex py-5">
          <span class="w-2 bg-yellow-400"></span>
          <p class="w-40 bg-gray-600 pl-5 text-sm">Taxi and bus services</p>
        </div>
        <p class="ml-8 text-5xl font-medium">Your Gateway</p>
        <p class="ml-8 text-5xl font-medium">to any Destination</p>
        <p class="ml-8 mr-5 mt-5 text-sm">
          Transportation is a vital aspect of modern society, facilitating the
          <br />
          movement of people from one place to another.
        </p>
        <button class="relative mb-8 ml-8 mt-5 flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 text-sm font-medium text-black shadow-lg shadow-slate-500">
          <a href="#">Explore More</a>
          <div class="absolute right-0 mt-12 h-20 w-20 translate-x-1/2 transform rounded-full bg-white"></div>
        </button>
      </div>

      <div class="relative bg-white pb-6 pl-10 pt-2">
        <div class="mt-10 flex">
          <span class="w-2 bg-yellow-400"></span>
          <p class="w-24 bg-gray-300 pl-5 text-xs">What we do</p>
        </div>
        <div class="text-2xl font-medium">
          <p>Transportation</p>
          <p>and Service</p>
        </div>
      </div>
      <div class="relative">
        <div class="flex h-96 w-full items-center justify-center">
          <img
            src="https://www.worldhistory.org/img/c/p/1600x900/11887.jpg"
            class="h-full w-full object-cover object-top"
            alt="Full-width Image"
          />
        </div>

        <div class="inset-0 flex items-center justify-center bg-white">
          <div class="mx-auto flex max-w-screen-xl">
            <div class="-mt-40 flex h-fit w-fit flex-1 items-center bg-white pr-5 text-black">
              <div>
                <div class="ml-8 flex py-5">
                  <span class="w-2 bg-yellow-400"></span>
                  <p class="w-fit bg-gray-300 px-5 text-sm">Why Us</p>
                </div>
                <p class="ml-8 text-2xl font-medium">We really consider your</p>
                <p class="ml-8 text-2xl font-medium">travelling</p>
                <p class="ml-8 mr-5 mt-5 text-xs">
                  Both taxi and bus services contribute to the overall
                  <br />
                  transportation infrastructure, offering solutions for
                  different <br />
                  travel needs and preferences.
                </p>
                <p class="ml-8 mr-5 mt-5 text-xs">
                  Taxis provide a more personalized and on-demand service,
                  <br />
                  while buses offer a systematic and mass transit solution for
                  <br />
                  larger groups of people.
                </p>
                <button
                  id="searchBook"
                  class="relative mb-8 ml-8 mt-5 flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 text-sm font-medium text-black shadow-lg shadow-slate-500 hover:border-2 hover:border-gray-950"
                >
                  <a href="#">Booking Now</a>
                  <div class="absolute right-0 mt-12 h-20 w-20 translate-x-1/2 transform rounded-full bg-yellow-500"></div>
                </button>
              </div>
              <div class="mt-5 flex flex-col">
                <img
                  src="https://easycdn.blob.core.windows.net/profile-img/mekong-ekspress01.jpg "
                  class="ml-12 mr-5 w-60"
                />
                <img
                  src="https://ak-d.tripcdn.com/images/0351q1200094d3lyp39C4_C_568_320_Q50.jpg_.webp"
                  class="-mt-14 w-44 border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="relative bg-yellow-400 pt-2">
          <div class="text-center text-2xl font-medium">
            <p>Transportating Across The City</p>
          </div>

          <div class="mx-2 mt-10 flex max-w-full items-center space-x-2 overflow-x-auto bg-yellow-400 pb-10">
            <div class="relative flex-shrink-0">
              <img
                src="https://lostplate.com/wp-content/uploads/2020/07/24-hours-in-phnom-penh-independence-monument.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Phnom Penh</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://pppenglish.sgp1.digitaloceanspaces.com/image/main/field/image/img_6722.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Kampong Chhnang</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://live.staticflickr.com/8691/16995702166_ab7e89c9d0_z.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Pursat</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/a9/33/0d/the-namesake-of-the-city.jpg?w=1200&h=-1&s=1"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Battambong</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://memoriapalace.com/wp-content/uploads/2016/08/Phnom-Yat.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Pailin</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://www.dinewiththelocals.com/wp-content/uploads/2019/10/IMG_20191020_085059.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Banteay Meanchey</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://tourismcambodia.org/storage/uploads/category_banner/ministry-of-tourism-cambodia-2019-02-18-07-39-42am-Oddar-Meanchey-01.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Oddar Meanchey</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/14/D%27Angkor.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Siem Reap</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://www.khmertimeskh.com/wp-content/uploads/2019/01/3-1-kampong_thom_0.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Kampong Thom</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://www.greeneratravel.com/userfiles/850preahvihear.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Preah Vihear</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://www.guidetrip.info/asset/img/gallery_album/5b28ce30b7e68.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Stung Treng</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://d13jio720g7qcs.cloudfront.net/images/destinations/origin/56189a46d5846.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Kratie</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://www.khmertimeskh.com/wp-content/uploads/2022/11/48698.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Tboung Khmum</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://www.travelauthenticasia.com/photos/tours/cambodia/gallery/kampong_cham/kampong_cham_6.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Kampong cham</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://scontent.fpnh4-1.fna.fbcdn.net/v/t1.6435-9/41045760_464082490735404_1050529020413739008_n.jpg?stp=cp0_dst-jpg_e15_p403x403_q65&_nc_cat=100&ccb=1-7&_nc_sid=947906&_nc_ohc=6nL1R2vJKRAAX_Fq40d&_nc_ht=scontent.fpnh4-1.fna&oh=00_AfCa0yFJzWYhD8UfchdclUp5QfIoajLC56V2Y6HJCOup2g&oe=65CEFD68"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Prey Veng</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://www.travelauthenticasia.com/photos/tours/cambodia/gallery/kandal/krong-ta-khmau-1.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Kandal</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://static.information.gov.kh/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBKzc5QkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--efed795ea20b2e66de4287ede8ddb4351e5a31a3/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTVRNMU1IZzVNREFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--30b79c7f7567bd0a04d6c485cf8a2bbc24e21d2f/IMG_0086.jpeg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Kampong Speu</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://www.khmerplaces.com/storage/provinces/September2020/doBwrCTTiseg3SMpUbsk.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Koh Kong</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://travelcdns.cambodia-travel.com/1663828081115.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Kampot</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://lostplate.com/wp-content/uploads/2020/07/24-hours-in-phnom-penh-independence-monument.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Kep</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://www.globaltimes.cn/Portals/0/attachment/2022/2022-04-17/b902e704-9931-4b98-a69b-81cb3cf011e0.jpeg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Preah Sihanouk</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sangkat_Svay_Rieng%2C_Krong_Svay_Rieng%2C_Cambodia_-_panoramio.jpg/640px-Sangkat_Svay_Rieng%2C_Krong_Svay_Rieng%2C_Cambodia_-_panoramio.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Svay Rieng</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://www.ppmlgroup.com/wp-content/uploads/2022/02/takeo-icon_orig.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Takeo</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://www.gdtp.gov.kh/wp-content/uploads/2021/01/mondulkiri-province-1024x751.jpg"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Mondulkiri</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
            <div class="relative flex-shrink-0">
              <img
                src="https://lh3.googleusercontent.com/proxy/4XIwQJkP_MvyTlnGYqMJDTSniwazmTsnz4DGm6PLleqmlF7a93FMLqA-9tRtYONnRe1yLGZaodClg6Smu_AErkPV10GNc1SG"
                class="h-60 w-48 object-cover"
              />
              <div class="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                <p class="font-medium text-white">Rattanakkiri</p>
                <div class="flex space-x-2">
                  <p class="text-xs text-yellow-300">popular and fantasy</p>
                </div>
              </div>
            </div>
          </div>

          <div class="-mt-36 flex w-full items-center justify-center bg-gradient-to-t from-yellow-500 to-amber-50">
            <a href="#">
              <button class="relative mb-8 mt-44 flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-sky-800 to-sky-400 text-sm font-medium text-white shadow-lg shadow-slate-500 hover:border-2 hover:border-yellow-400">
                See More
                <div class="absolute right-0 mt-12 h-14 w-14 translate-x-1/2 transform rounded-full bg-blue-800"></div>
              </button>
            </a>
          </div>
        </div>

        <div class="flex h-full items-center justify-center bg-white p-10">
          <div>
            <div class="md:max-w-fixed flex flex-col items-center rounded-lg border border-gray-200 bg-white drop-shadow-lg md:flex-row dark:bg-white">
              <div>
                <img
                  class="h-full w-full rounded-t-lg object-cover md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
                  src="https://vietfuntravel.com/image/cache/data/open%20bus/thaco%2035c-max-500.jpg"
                  alt=""
                />
                <div class="ml-10 flex w-96 flex-col justify-start text-left">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    Bus service
                  </h5>
                  <p class="mb-3 font-medium text-gray-700 dark:text-black">
                    Bus Service: Bus services are a form
                    <br />
                    of public transportation that <br />
                    operates up and dropping off
                    <br />
                    passengers at designated stops.
                  </p>
                  <a href="busService.html">
                    <button class="mb-10 mt-5 h-10 w-28 rounded-3xl border-2 border-black text-sm font-medium hover:bg-amber-200">
                      Find Now
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-center">
                  <img
                    class="h-full w-full rounded-t-lg md:mt-12 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="https://media.chromedata.com/MediaGallery/media/MjkzOTU4Xk1lZGlhIEdhbGxlcnk/mBFi9OSLIrO47px0j7F3GsTl6w69F50xp-wusXYp7k12QghR05TechyqcaK3G60Nz_n6CUtwID0S8kCCeS3AjM-ggHO_VEGSKBssGCJI5smUEE7b8SVNHiByp6_eQSbBhhM7P6v56SdA8Fa6Mdgbm6L9wiPoHNanEvLIPBU82I-D0KNfPHYyPAjhQCLoKyGc/cc_2024TOV110007_01_640_1J9.png"
                  />
                </div>
                <div class="ml-10 flex w-96 flex-col justify-start text-left">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    Taxi service
                  </h5>
                  <p class="mb-3 font-medium text-gray-700 dark:text-black">
                    Taxi Service: A taxi service is a<br />
                    convenient and flexible mode of
                    <br />
                    transportation where individuals can
                    <br />
                    hire a private vehicle for personal travel.
                  </p>
                  <a href="taxiService.html">
                    <button class="mb-10 mt-5 h-10 w-28 rounded-3xl border-2 border-black text-sm font-medium hover:bg-amber-200">
                      Find Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center bg-white">
          <div class="grid grid-cols-2 p-10">
            <div class="mx-auto flex items-center border-b-2 border-r-2 border-t-2 p-5">
              <p class="mr-5 text-4xl font-medium">1294</p>
              <span class="h-5 w-5 bg-yellow-400"></span>
              <p class="w-fit px-5 text-sm font-medium">Member of Taxi</p>
            </div>
            <div class="mx-auto -ml-2 flex items-center border-b-2 border-t-2 p-5 pl-10">
              <p class="mr-5 text-4xl font-medium">3594</p>
              <span class="h-5 w-5 bg-yellow-400"></span>
              <p class="w-fit px-5 text-sm font-medium">Member of Bus</p>
            </div>
          </div>
        </div>
        <div class="flex justify-center bg-white pt-5">
          <span class="w-2 bg-yellow-400"></span>
          <p class="w-fit bg-gray-300 px-5 text-sm font-medium">
            The Transporters
          </p>
        </div>
        <div class="bg-white p-5">
          <div class="text-center text-4xl font-medium">
            <p>Our Drivers</p>
          </div>
        </div>
      </div>
      <div class="relative bg-white pt-2">
        <div class="text-center text-2xl font-medium">
          <p>Transportating Across The City</p>
        </div>

        <div class="mx-auto mt-10 pl-96 pr-2 flex md:pl-48 md:pr-4 flex-row items-center justify-center space-x-4 space-y-4 overflow-scroll bg-white pb-10 md:flex-row md:space-x-20 md:space-y-0">
          <div class="relative flex-shrink-0">
            <img
              src="https://www.shutterstock.com/image-photo/paris-france-june-16-2023-600nw-2318800323.jpg"
              class="h-80 w-52 object-cover"
            />
            <div class="absolute bottom-0 flex h-20 w-full flex-col justify-center bg-slate-800 pl-2 pt-2 text-left">
              <div class="flex">
                <div class="flex">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                </div>
                <div class="-mt-9 ml-auto flex h-8 items-center justify-center space-x-1 bg-amber-300 p-1">
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
                      alt="facebook-new"
                    />
                  </a>
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-glyphs/30/twitter--v1.png"
                      alt="twitter--v1"
                    />
                  </a>
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png"
                      alt="instagram-new--v1"
                    />
                  </a>
                </div>
              </div>
              <p class="ml-2 font-medium text-white">Elon Musk</p>
              <div class="ml-2 flex space-x-6 align-middle">
                <p class="text-sm text-white">Taxi driver</p>
                <p class="pl-5 text-sm text-white">099 999 9999</p>
              </div>
            </div>
          </div>
          <div class="relative flex-shrink-0">
            <img
              src="https://www.shutterstock.com/image-photo/paris-france-june-16-2023-600nw-2318800323.jpg"
              class="h-80 w-52 object-cover"
            />
            <div class="absolute bottom-0 flex h-20 w-full flex-col justify-center bg-slate-800 pl-2 pt-2 text-left">
              <div class="flex">
                <div class="flex">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                </div>
                <div class="-mt-9 ml-auto flex h-8 items-center justify-center space-x-1 bg-amber-300 p-1">
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
                      alt="facebook-new"
                    />
                  </a>
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-glyphs/30/twitter--v1.png"
                      alt="twitter--v1"
                    />
                  </a>
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png"
                      alt="instagram-new--v1"
                    />
                  </a>
                </div>
              </div>
              <p class="ml-2 font-medium text-white">Elon Musk</p>
              <div class="ml-2 flex space-x-6 align-middle">
                <p class="text-sm text-white">Taxi driver</p>
                <p class="pl-5 text-sm text-white">099 999 9999</p>
              </div>
            </div>
          </div>
          <div class="relative flex-shrink-0">
            <img
              src="https://www.shutterstock.com/image-photo/paris-france-june-16-2023-600nw-2318800323.jpg"
              class="h-80 w-52 object-cover"
            />
            <div class="absolute bottom-0 flex h-20 w-full flex-col justify-center bg-slate-800 pl-2 pt-2 text-left">
              <div class="flex">
                <div class="flex">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                </div>
                <div class="-mt-9 ml-auto flex h-8 items-center justify-center space-x-1 bg-amber-300 p-1">
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
                      alt="facebook-new"
                    />
                  </a>
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-glyphs/30/twitter--v1.png"
                      alt="twitter--v1"
                    />
                  </a>
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png"
                      alt="instagram-new--v1"
                    />
                  </a>
                </div>
              </div>
              <p class="ml-2 font-medium text-white">Elon Musk</p>
              <div class="ml-2 flex space-x-6 align-middle">
                <p class="text-sm text-white">Taxi driver</p>
                <p class="pl-5 text-sm text-white">099 999 9999</p>
              </div>
            </div>
          </div>
          <div class="relative flex-shrink-0">
            <img
              src="https://www.shutterstock.com/image-photo/paris-france-june-16-2023-600nw-2318800323.jpg"
              class="h-80 w-52 object-cover"
            />
            <div class="absolute bottom-0 flex h-20 w-full flex-col justify-center bg-slate-800 pl-2 pt-2 text-left">
              <div class="flex">
                <div class="flex">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                </div>
                <div class="-mt-9 ml-auto flex h-8 items-center justify-center space-x-1 bg-amber-300 p-1">
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
                      alt="facebook-new"
                    />
                  </a>
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-glyphs/30/twitter--v1.png"
                      alt="twitter--v1"
                    />
                  </a>
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png"
                      alt="instagram-new--v1"
                    />
                  </a>
                </div>
              </div>
              <p class="ml-2 font-medium text-white">Elon Musk</p>
              <div class="ml-2 flex space-x-6 align-middle">
                <p class="text-sm text-white">Taxi driver</p>
                <p class="pl-5 text-sm text-white">099 999 9999</p>
              </div>
            </div>
          </div>
          <div class="relative flex-shrink-0">
            <img
              src="https://www.shutterstock.com/image-photo/paris-france-june-16-2023-600nw-2318800323.jpg"
              class="h-80 w-52 object-cover"
            />
            <div class="absolute bottom-0 flex h-20 w-full flex-col justify-center bg-slate-800 pl-2 pt-2 text-left">
              <div class="flex">
                <div class="flex">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                </div>
                <div class="-mt-9 ml-auto flex h-8 items-center justify-center space-x-1 bg-amber-300 p-1">
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
                      alt="facebook-new"
                    />
                  </a>
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-glyphs/30/twitter--v1.png"
                      alt="twitter--v1"
                    />
                  </a>
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png"
                      alt="instagram-new--v1"
                    />
                  </a>
                </div>
              </div>
              <p class="ml-2 font-medium text-white">Elon Musk</p>
              <div class="ml-2 flex space-x-6 align-middle">
                <p class="text-sm text-white">Taxi driver</p>
                <p class="pl-5 text-sm text-white">099 999 9999</p>
              </div>
            </div>
          </div>
          <div class="relative flex-shrink-0">
            <img
              src="https://www.shutterstock.com/image-photo/paris-france-june-16-2023-600nw-2318800323.jpg"
              class="h-80 w-52 object-cover"
            />
            <div class="absolute bottom-0 flex h-20 w-full flex-col justify-center bg-slate-800 pl-2 pt-2 text-left">
              <div class="flex">
                <div class="flex">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/filled-star--v1.png"
                    alt="filled-star--v1"
                    class="-mt-5 h-5 w-5"
                  />
                </div>
                <div class="-mt-9 ml-auto flex h-8 items-center justify-center space-x-1 bg-amber-300 p-1">
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
                      alt="facebook-new"
                    />
                  </a>
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-glyphs/30/twitter--v1.png"
                      alt="twitter--v1"
                    />
                  </a>
                  <a href="#">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png"
                      alt="instagram-new--v1"
                    />
                  </a>
                </div>
              </div>
              <p class="ml-2 font-medium text-white">Elon Musk</p>
              <div class="ml-2 flex space-x-6 align-middle">
                <p class="text-sm text-white">Taxi driver</p>
                <p class="pl-5 text-sm text-white">099 999 9999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
