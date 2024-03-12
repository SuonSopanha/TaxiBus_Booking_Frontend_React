import React from "react";

const BusDetail = () => {
  return (
    <>
      <div class="flex h-96 flex-col items-center justify-center">
        <p class="text-5xl font-bold text-white">Profile</p>
      </div>
      <div class="relative">
        <div class="relative bg-black bg-opacity-50 py-10">
          <div class="mx-auto flex flex-col justify-center space-y-4 p-4 md:flex-row md:space-x-20 md:space-y-0">
            <div class="relative rounded-lg bg-white">
              <img
                src="https://yt3.googleusercontent.com/zVhrm9pQEmydw5480JJkMVXdft3hSOnf1KvleiJsQIDS9PRVk_xTlc6e1wPHvaeEsCtYa9IJYg=s900-c-k-c0x00ffffff-no-rj"
                class="h-80 w-full rounded-t-lg object-cover"
              />
              <div class="absolute top-60 h-24 w-48 pl-4 pt-12">
                <p class="text-xl font-bold text-white">Sanin Ronal</p>
              </div>
              <div class="m-4 border-b-2 border-zinc-400 pb-12">
                <div class="ml-0.5 flex items-center">
                  <img
                    width="28"
                    height="24"
                    src="https://img.icons8.com/windows/32/FAB005/gender-neutral-user.png"
                    alt="gender-neutral-user"
                  />
                  <p class="ml-2 font-medium text-zinc-600">Taxi Driver</p>
                </div>
                <div class="ml-1 flex items-center">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/FAB005/home--v2.png"
                    alt="home--v2"
                  />
                  <p class="ml-2 font-medium text-zinc-600">Phnom Penh</p>
                </div>
                <div class="ml-1 flex items-center">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/FAB005/iphone.png"
                    alt="iphone"
                  />
                  <p class="ml-2 font-medium text-zinc-600">
                    097 654 8956, 088 369 7845
                  </p>
                </div>
              </div>

              <div class="m-4 border-b-2 border-zinc-400 pb-12">
                <div class="ml-1 flex items-center">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/FAB005/signpost-tourist.png"
                    alt="signpost-tourist"
                  />
                  <p class="ml-4 text-xl font-bold text-zinc-600">Direction</p>
                </div>
                <p class="ml-11 font-medium text-slate-500">
                  Phnom Penh - Siem Reap
                </p>
                <div class="ml-1 flex items-center">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/FAB005/clock.png"
                    alt="clock"
                  />
                  <p class="ml-4 text-xl font-bold text-zinc-600">
                    Departure time
                  </p>
                </div>
                <p class="ml-11 font-medium text-slate-500">
                  . Phnom Penh - Pursat: 8 AM
                </p>
                <p class="ml-11 font-medium text-slate-500">
                  . Pursat - Phnom Penh: 2 PM
                </p>
              </div>

              <div class="m-4">
                <div class="ml-1 flex items-center">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                    alt="filled-star"
                  />
                  <p class="ml-4 text-xl font-bold text-zinc-600">Rating</p>
                  <p class="ml-11 font-medium text-slate-500">17 Rated</p>
                </div>
                <div class="ml-8 mt-2 flex items-center">
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                    alt="filled-star"
                  />
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                    alt="filled-star"
                  />
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                    alt="filled-star"
                  />
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                    alt="filled-star"
                  />
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                    alt="filled-star"
                  />
                </div>
              </div>
              <div class="flex items-center justify-center space-x-8 px-2 py-4">
                <div class="flex items-center justify-center">
                  <a href="#">
                    <button class="h-10 w-32 rounded-xl border-2 border-zinc-600 hover:bg-yellow-300">
                      <p class="text-lg font-bold text-yellow-400 hover:text-white">
                        Follow Taxi
                      </p>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div class="relative w-full sm:w-1/2 rounded-lg bg-white">
              <div class="m-4 pb-12">
                <div class="ml-0.5 flex items-center">
                  <p class="ml-2 text-xl font-bold text-zinc-fw-full0">
                    Taxi provide profile
                  </p>
                </div>
                <div class="my-6 ml-1 flex">
                  <div class="flex h-56 w-2/4 items-center justify-center rounded-lg bg-slate-200 border-2 text-xl font-medium">
                    <img src="https://img.icons8.com/ios-filled/50/FAB005/chevron-down.png"></img>
                  </div>
                  <div class="w-2/4 ml-4 flex flex-col ">
                    <button
                      type="text"
                      class="mb-4 h-10 w-full rounded-lg border-2 border-blue-700 bg-slate-200 px-2 text-center font-medium text-slate-700 "
                    >
                      <p>Phnom Penh - Siem Reap</p>
                    </button>
                    <button
                      type="text"
                      class="mb-4 h-10 w-full rounded-lg border-2 border-blue-700 bg-slate-200 px-2 text-center font-medium text-slate-700 "
                    >
                      <p>Pursat - Phnom Penh</p>
                    </button>
                    <button
                      type="text"
                      class="mb-4 h-10 w-full rounded-lg border-2 border-blue-700 bg-slate-200 px-2 text-center font-medium text-slate-700 "
                    >
                      <p>Pursat - Phnom Penh</p>
                    </button>
                    <button
                      type="text"
                      class="mb-4 h-10 w-full rounded-lg border-2 border-blue-700 bg-slate-200 px-2 text-center font-medium text-slate-700 "
                    >
                      <p>Phnom Penh - Siem Reap</p>
                    </button>
                  </div>
                </div>
                <table
                  id="Booking"
                  class=" bg-white w-full table-fixed text-sm shadow-md rounded-lg overflow-hidden"
                >
                  <colgroup>
                    <col style={{width: '20%'}} />
                    <col style={{width: '20%'}} />
                    <col style={{width: '20%'}} />
                    <col style={{width: '20%'}} />
                    <col style={{width: '20%'}} />
                  </colgroup>
                  <thead class="text-left" id="table-header">
                    <tr class="text-slate-700">
                      <th
                        class="p-3 cursor-pointer bg-blue-900 text-white"
                        onclick="toggleTableVisibility('Scheduled', this)"
                      >
                        Scheduled
                      </th>
                      <th
                        class="p-3 cursor-pointer "
                        onclick="toggleTableVisibility('Route', this)"
                      >
                        Route
                      </th>
                      <th
                        class="p-3 cursor-pointer "
                        onclick="toggleTableVisibility('Vehicles', this)"
                      >
                        Vehicles
                      </th>
                      <th
                        class="p-3 cursor-pointer "
                        onclick="toggleTableVisibility('Price', this)"
                      >
                        Price
                      </th>
                      <th
                        class="p-3 cursor-pointer "
                        onclick="toggleTableVisibility('BookingTB', this)"
                      >
                        Booking
                      </th>
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-gray-200 active" id="Scheduled">
                    <tr class="bg-blue-900 text-white ">
                      <th class="p-3">ID</th>
                      <th class="p-3" colspan="2">
                        Flee
                      </th>
                      <th class="p-3" colspan="2">
                        Arrive
                      </th>
                    </tr>
                    <tr class="text-center">
                      <td class="p-3">1</td>
                      <td class="p-3" colspan="2">
                        Phnom Penh
                      </td>
                      <td class="p-3" colspan="2">
                        Siem Reap
                      </td>
                    </tr>
                    <tr class="text-center">
                      <td class="p-3">2</td>
                      <td class="p-3" colspan="2">
                        Phnom Penh
                      </td>
                      <td class="p-3" colspan="2">
                        Svay Rieng
                      </td>
                    </tr>
                    <tr class="text-center">
                      <td class="p-3">3</td>
                      <td class="p-3" colspan="2">
                        Phnom Penh
                      </td>
                      <td class="p-3" colspan="2">
                        Khos kong
                      </td>
                    </tr>
                    <tr class="text-center">
                      <td class="p-3">4</td>
                      <td class="p-3" colspan="2">
                        Phnom Penh
                      </td>
                      <td class="p-3" colspan="2">
                        Prey Verng
                      </td>
                    </tr>
                  </tbody>

                  <tbody
                    class=" divide-y divide-gray-200  hidden"
                    id="BookingTB"
                  >
                    <tr class="bg-blue-900 text-white font-medium text-center">
                      <td class="p-3">Date</td>
                      <td class="p-3" colspan="2">
                        Direction
                      </td>
                      <td class="p-3">Price</td>
                      <td class="p-3">Booking Now</td>
                    </tr>
                    <tr class="text-center">
                      <td class="p-3">Jun 28 Mon 08:00 AM</td>
                      <td class="p-3" colspan="2">
                        Phnom Penh - Siem Reap
                      </td>
                      <td class="p-3">$10.00</td>
                      <td class="p-3">
                        <a href="#" class="text-blue-600">
                          <div class="flex items-center justify-center">
                            <a href="bookingForm.html">
                              <button class="h-10 w-32 rounded-xl border-2 border-zinc-600 hover:bg-yellow-300">
                                <p class="text-lg font-bold text-yellow-400 hover:text-white">
                                  Booking
                                </p>
                              </button>
                            </a>
                          </div>
                        </a>
                      </td>
                    </tr>
                  </tbody>

                  <tbody class=" divide-y divide-gray-200 hidden" id="Route">
                    <tr class="bg-blue-900 text-white">
                      <th class="p-3">Time</th>
                      <th class="p-3" colspan="2">
                        Location
                      </th>
                      <th class="p-3" colspan="2">
                        Direction
                      </th>
                    </tr>
                    <tr class="text-center">
                      <td class="p-3">08:00 AM</td>
                      <td class="p-3" colspan="2">
                        Pnom Penh
                      </td>
                      <td class="p-3" colspan="2">
                        Svay Rieng
                      </td>
                    </tr>
                    <tr class="text-center">
                      <td class="p-3">01:00 PM</td>
                      <td class="p-3" colspan="2">
                        Svay Rieng
                      </td>
                      <td class="p-3" colspan="2">
                        Phnom Penh
                      </td>
                    </tr>
                    <tr class="text-center">
                      <td class="p-3">08:00 AM</td>
                      <td class="p-3" colspan="2">
                        Svay Rieng
                      </td>
                      <td class="p-3" colspan="2">
                        Bavet
                      </td>
                    </tr>
                  </tbody>

                  <tbody class=" divide-y divide-gray-200 hidden" id="Vehicles">
                    <tr class="bg-blue-900 text-white">
                      <th class="p-3" colspan="3">
                        Vehicle
                      </th>
                      <th class="p-3" colspan="1">
                        Seat
                      </th>
                      <th class="p-3" colspan="1">
                        Type
                      </th>
                    </tr>
                    <tr class="text-center">
                      <td>
                        <img
                          src="https://n.sinaimg.cn/auto/transform/384/w710h474/20211030/1788-d69c73ca0587547378b39875fe1e7f20.jpg"
                          class="rounded-lg "
                        ></img>
                      </td>
                      <td class="p-3" colspan="3">
                        Sina
                      </td>
                      <td class="p-3" colspan="1">
                        4
                      </td>
                    </tr>
                  </tbody>

                  <tbody class=" divide-y divide-gray-200 hidden" id="Price">
                    <tr class="bg-blue-900 text-white">
                      <th class="p-3">Time</th>
                      <th class="p-3" colspan="2">
                        Direction
                      </th>
                      <th class="p-3" colspan="2">
                        Price
                      </th>
                    </tr>
                    <tr class="text-center">
                      <td class="p-3">08:00 AM</td>
                      <td class="p-3" colspan="2">
                        Svay Rieng
                      </td>
                      <td class="p-3" colspan="2">
                        $6
                      </td>
                    </tr>
                    <tr class="text-center">
                      <td class="p-3">08:00 AM</td>
                      <td class="p-3" colspan="2">
                        Svay Rieng
                      </td>
                      <td class="p-3" colspan="2">
                        $6
                      </td>
                    </tr>
                    <tr class="text-center">
                      <td class="p-3">08:00 AM</td>
                      <td class="p-3" colspan="2">
                        Svay Rieng
                      </td>
                      <td class="p-3" colspan="2">
                        $6
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div id="photo" class="h-full w-full bg-purple-100 p-2 hidden">
                  <div class="h-full w-full bg-white flex rounded-lg">
                    <div class=" w-2/4 ">
                      <img
                        src="https://n.sinaimg.cn/auto/transform/384/w710h474/20211030/1788-d69c73ca0587547378b39875fe1e7f20.jpg"
                        class="rounded-lg"
                      ></img>
                    </div>
                    <div class=" flex flex-col item-center justify-center">
                      <div class=" flex font-bold ml-8">
                        <p>Vehicle Type:</p>
                        <p class=" ml-4">Sina</p>
                      </div>
                      <div class=" flex font-bold ml-8">
                        <p>Seat count:</p>
                        <p class=" ml-4">10</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="ml-4 py-8 md:pl-28">
            <div>
              <p class="pl-4 font-medium text-white">7 comments</p>
            </div>
            <div class="ml-8 mt-2 flex items-center">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                alt="filled-star"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                alt="filled-star"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                alt="filled-star"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                alt="filled-star"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/material-outlined/24/FFFF/filled-star.png"
                alt="filled-star"
              />
            </div>
            <div class="mx-auto flex w-full items-center justify-start py-4 pl-4">
              <form>
                <div class="flex space-x-4">
                  <input
                    type="text"
                    class="h-10 w-96 rounded-lg border border-gray-400 bg-gray-100 p-3 font-medium leading-normal placeholder-gray-400 placeholder:text-white focus:bg-white focus:outline-none"
                    placeholder="Add comment..."
                  />
                  <a href="#" class="flex items-center justify-center">
                    <button class="h-10 w-20 rounded-lg bg-blue-600 font-medium text-teal-50 hover:bg-yellow-200 hover:text-white">
                      Post
                    </button>
                  </a>
                </div>
              </form>
            </div>
            <div class="flex items-center p-4 pl-4">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/material-sharp/48/FAB005/user-male-circle.png"
                alt="user-male-circle"
              />
              <div class="ml-4 w-60 border-b-2">
                <p class="font-medium text-white">Soun Sopanha</p>
                <p class="ml-4 text-sm text-white">Good job Bro!</p>
              </div>
            </div>

            <div class="flex items-center p-4 pl-4">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/material-sharp/48/FAB005/user-male-circle.png"
                alt="user-male-circle"
              />
              <div class="ml-4 w-60 border-b-2">
                <p class="font-medium text-white">KOLA</p>
                <p class="ml-4 text-sm text-white">Good job Bro!</p>
              </div>
            </div>
            <div class="py-4 pl-8 font-medium text-white md:flex">
              <a href="#">See more</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default BusDetail;