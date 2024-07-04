// import { isCancel } from "axios";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function HomeRoute() {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <div className=" flex justify-center items-center text-center mt-4 border-[2px] w-[200px] rounded-md h-[40px] ml-[300px] bg-sky-600 tracking-wider text-white">
        <h3>Home-Page</h3>
        {/* {isShow ? "hELLO" : " How are you doing"} */}
      </div>
      <div className={`hide-text ${isShow ? "hide-text" : "show-text"}`}>
        <p className="show-text">Hello! Welcome to our World Code</p>
      </div>
      <div
        className="flex flex-col
       gap-[20px]"
      >
        {/* <button
          onClick={() => setIsShow(() => !isShow)}
          className="ml-[250px] mt-[30px] border-[2px] w-[200px] rounded-md bg-green-600 shadow-lg shadow-black text-white tracking-wider"
        >
          Text Toggle
        </button> */}

        <button onClick={() => setIsShow(() => !isShow)}>
          {isShow ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faClose} />
          )}
        </button>
      </div>
    </>
  );
}

export default HomeRoute;
