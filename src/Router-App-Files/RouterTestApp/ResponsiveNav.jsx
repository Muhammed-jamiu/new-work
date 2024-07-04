import React from "react";

function ResponsiveNav() {
  return (
    <>
      <div id="menu">
        <svg
          className="h-10 left-[345px] relative top-[160px] cursor-pointer hover:scale-150"
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
      </div>
      <div
        id="nav"
        className=" ml-60 mt-40  flex flex-col gap  w-36 h-40 bg-red-600 rounded-lg hover:bg-blue-700 hover:border-b-4 border-t-4 hover:border-yellow-500 hover:border-r-4 border-l-4 border-4 border-black cursor-pointer hover:shadow-teal-600"
      >
        <button className="border-2 w-24 bg-green-800 rounded-lg text-[#fff] font-bold text-sm  ml-5 mt-2 relative top-5 hover:bg-black hover:text-[#fff] transition duration-400 ease-out hover:scale-75 hover:shadow-md">
          Home
        </button>
        <br />

        <button className="border-2 w-24 bg-green-800 rounded-lg text-[#fff] font-bold text-sm ml-5 mt-5  hover:bg-black hover:text-[#fff] transition duration-400 ease-out hover:scale-75">
          Profile
        </button>
        <br />
        <button className="border-2 w-24 bg-green-800 rounded-lg text-[#fff] font-bold text-sm ml-5  hover:bg-black hover:text-[#fff]  transition duration-400 ease-out hover:scale-75">
          About-Us
        </button>
      </div>
    </>
  );
}

export default ResponsiveNav;
