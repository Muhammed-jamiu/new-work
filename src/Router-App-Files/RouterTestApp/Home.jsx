import React from "react";
function Home() {
  return (
    <div className="">
      <div className=" mb-30 border-4 px-20 h-60 w-10 ml-36 mt-8 ">
        <h2 className="text-green-400  text-xl text-center font-bold bg-black px ">
          Hello! Welcome to our world of Coding
        </h2>
      </div>

      <div className=" mt-5 border-4 border-yellow-300 rounded-3xl bg-blue-900 grid">
        <form className="text-center ">
          <label
            htmlFor="email"
            className="relative right-16 text-xl font-bold uppercase border-2 w-80 bg-red-600 rounded-3xl hover:bg-black hover:text-[#fff] rotate-45 inline-block "
          >
            E-mail
          </label>
          <label
            htmlFor="email"
            className="relative left-[200px] text-xl font-bold uppercase border-2 w-80 bg-grey-600 rounded-3xl rotate-[100deg] inline-block hover:bg-black hover:text-[#fff] peer-hover:bg-green "
          >
            E-mail
          </label>
          <br />
          <input
            className=" w-80 h-10 font-bold text-red-300 rounded-s-xl rounded-e-xl bg-[#82767533] border-t-4 border hover:bg-black hover:text-[#fff] text-xl space-y-1"
            type="text"
            placeholder=" Enter a vaild email here..."
          />
          <br />
          <br />
          <label htmlFor="email" className="relative right-16">
            Password
          </label>
          <br />
          <input type="text" placeholder="Enter a vaild password here..." />
          <br />
          <br />

          <button className=" w-40 pb-1 mb-5 bg-grey-700 rounded-full text-[#000]  font-semibold hover:bg-green-300 hover:text-white border-b-4 border-t-4 border-l-4 border-r-4 border-green-500  text-lg active:bg-red-600 ">
            Login
          </button>
        </form>
      </div>
      <p className="mt-4 text-yellow-200 ml-5 sm:text-black md:text-2xl sm:text-center sm:bg-white sm:text-lg sm:cursor-pointer md:border-2 md:bg-red-500 rounded-xl mr-4 xl:bg-blue-600 xl:font-bold xl:hover:bg-purple-700 md:hover:bg-yellow-400 cursor-pointer">
        Hello! Welcome to our world of Coding
      </p>
      <button className="btn">Go...</button>
      <svg
        className="w-10 h-10 cursor-progress "
        data-slot="icon"
        fill="none"
        stroke-width="1.3"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
        ></path>
      </svg>
    </div>
  );
}

export default Home;
