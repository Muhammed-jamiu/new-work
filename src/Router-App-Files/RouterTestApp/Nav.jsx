import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <div className="sm:block">
      <ul
        style={{
          display: "flex",
          gap: "50px",
        }}
      >
        <button
          className="text-red-300 border w-20 bg-white rounded-lg ml-1 mt-2 hover:bg-gray-500  hover:text-[#fff] px-6  text-center"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          className="text-red-300 border w-20 bg-white rounded-lg ml-1 mt-2 hover:bg-gray-500  hover:text-[#fff] px-6  text-center"
          onClick={() => {
            navigate("/profile");
          }}
        >
          Profile
        </button>
        <button
          className="text-red-300 border w-20 bg-white rounded-lg ml-1 mt-2 hover:bg-gray-500  hover:text-[#fff] px-6  text-center"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
        <Link className="us">About-us</Link>
      </ul>
    </div>
  );
}

export default Nav;
