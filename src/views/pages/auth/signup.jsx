import React from "react";

const Signup = () => {
  return (
    <>
      <div
        class="hidden md:hidden fixed top-0 left-0 w-1/2 h-full bg-black/50"
        id="responsiveMenu"
      >
        <div class="flex items-center justify-center h-full border-b border-white">
          <div class="flex flex-col items-center text-white w-full font-semibold">
            <a
              href="#"
              class="flex justify-center w-full my-1 border rounded py-2 hover:bg-yellow-500"
            >
              Home
            </a>
            <a
              href="#"
              class="flex justify-center w-full my-1 border rounded py-2 hover:bg-yellow-500"
            >
              Booking
            </a>
            <a
              href="#"
              class="flex justify-center w-full my-1 border rounded py-2 hover:bg-yellow-500"
            >
              Services
            </a>
            <a
              href="#"
              class="flex justify-center w-full my-1 border rounded py-2 hover:bg-yellow-500"
            >
              Project
            </a>
            <a
              href="#"
              class="flex justify-center w-full my-1 border rounded py-2 hover:bg-yellow-500"
            >
              Account
            </a>
            <button
              id="closeMenu"
              class="ml-2 text-white hover:bg-yellow-500 hover:text-black focus:outline-none hidden"
            >
              <svg
                viewBox="0 0 24 24"
                class="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        class="min-h-screen py-40 bg-cover bg-no-repeat"
        style="background-image: linear-gradient(rgba(25, 44, 154, 0.444), rgba(0, 0, 0, 0.5)), url(image/Slide_3.jpg) "
      >
        <div class="container max-auto">
          <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div
              class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-center bg-cover"
              style="background-image: linear-gradient(rgba(34, 98, 215, 0.319), rgba(20, 48, 134, 0.642)), url(image/Slide_3.jpg)"
            >
              <h1 class="text-white text-3xl font-medium">Welcome</h1>
              <div>
                <p class="text-white">
                  To Create an account. It's free and only takes a minute and
                  we'll be glad to keep your information safe.
                </p>
              </div>
            </div>
            <div class="w-full lg:w-1/2 py-16 px-12">
              <h2 class="text-3xl font-medium">Register</h2>
              <p class="mt-4">
                Create your account. It's free and only takes a minute.
              </p>
              <form id="registrationForm" action="#">
                <div class="mt-4 grid grid-cols-2 gap-4">
                  <label for="select" class="text-gray-600">
                    Select User Type:
                  </label>
                  <select
                    id="select"
                    class="border border-gray-400 py-1 px-2 w-full"
                    onchange="toggleFormElements()"
                  >
                    <option value="user">User</option>
                    <option value="driver">Driver</option>
                  </select>
                </div>
                <div class="mt-4">
                  <input
                    type="text"
                    placeholder="Name"
                    class="border border-gray-400 py-1 px-2 w-full"
                  ></input>
                </div>
                <div class="mt-4 grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    class="border border-gray-400 py-1 px-2"
                  ></input>
                  <select
                    placeholder="Gender"
                    class="border border-gray-400 py-1 px-2"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div class="mt-4">
                  <input
                    type="text"
                    placeholder="Email"
                    class="border border-gray-400 py-1 px-2 w-full"
                  ></input>
                </div>
                <div class="mt-4">
                  <input
                    type="password"
                    placeholder="Password"
                    class="border border-gray-400 py-1 px-2 w-full"
                  ></input>
                </div>
                <div class="mt-4">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    class="border border-gray-400 py-1 px-2 w-full"
                  ></input>
                </div>
                <div class="mt-4">
                  <input type="checkbox" class="border border-gray-400"></input>
                  <span class="ml-2">
                    I agree with the{" "}
                    <a href="TermsandConditions.html" class="text-blue-500">
                      terms and conditions
                    </a>
                  </span>
                </div>
                <div class="mt-8">
                  <a
                    href="RegisterDriver.html"
                    id="registerButton"
                    class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Register
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
