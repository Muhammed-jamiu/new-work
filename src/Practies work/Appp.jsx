import React from "react";
import Data from "./Data";
import List from "./List";
import { useState } from "react";
import "./Appp.css";
import { FaAngleUp, FaEnvelope } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
const removeUser = () => {
  const newRemoverUser = Data.filter((data) => data.id !== id);
  console.log(newRemoverUser);
  setPeople(newRemoverUser);
};
function Appp() {
  const [people, setPeople] = useState(Data);

  return (
    <>
      <main className="w-full h-full flex justify-center items-center mt-[20px]  flex-col ">
        <section className="border-4 rounded-xl p-5 w-[500px] container relative">
          <h2 className="text-center border-2 rounded-xl bg-gray-400 relative text-white text-lg italic">
            <span className="absolute right-[320px] top-[5px]">
              <span className="absolute left-[22px] bottom-[1px] border-2 w-[20px] bg-green-700 border-green-700 rounded-full text-xs cursor-pointer user-num nouser-num">
                {people.length > 0 ? people.length : people.length}
              </span>
              <FaUser />
            </span>
            {people.length} NEW USER
          </h2>
          <List people={people} removeUser={removeUser} />
          <span className=" arrow-con border-2 inline-block w-[100px] text-center rounded-lg ml-[340px] cursor-pointer bg-gray-500 text-white tracking-wider hover:bg-gray-400 relative">
            <FaAngleUp className="absolute left-[5px] top-[3px]  arrow-up" />{" "}
            <small className="relative left-[8px] bottom-[2px]">See More</small>
          </span>
          {people.length > 0 ? (
            <button
              onClick={() => setPeople([])}
              className="border-2 w-[430px] ml-[12px] h-[40px] mt-[10px] bg-red-600 rounded-lg font-bold italic tracking-wider hover:bg-red-500 text-white"
            >
              Clear All
            </button>
          ) : (
            <button
              onClick={() => setPeople(() => Data)}
              className="border-2 w-[430px] ml-[12px] h-[40px] mt-[10px] bg-green-600 rounded-lg font-bold italic tracking-wider hover:bg-green-500 text-white"
            >
              Show All
            </button>
          )}
        </section>
      </main>
    </>
  );
}

export default Appp;
