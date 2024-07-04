import React from "react";
import { Link } from "react-router-dom";
function ProfileRoute() {
  return (
    <>
      {" "}
      <div className=" flex justify-center items-center text-center mt-4 border-[2px] w-[200px] rounded-md h-[40px] ml-[300px] bg-sky-600 tracking-wider text-white">
        <h3>Profile Page</h3>
      </div>
      <div>
        <img
          src="/picture.jpg "
          className="h-[300px] w-[250px] relative left-[270px] top-[10px] rounded-xl"
          alt=""
        />
        <p className="relative left-[320px] text-center rounded-md bg-sky-600 text-white tracking-wide italic top-[17px] border-[2px] w-[150px] cursor-pointer">
          Muhammed-Jamu
        </p>
      </div>
      <Link
        to={"name"}
        className="flex justify-center items-center relative left-[330px] top-[30px] bg-green-600 w-[150px] rounded text-white"
      >
        More Details
      </Link>
    </>
  );
}

export default ProfileRoute;
