import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { FaHome } from "react-icons/fa";

function AssProfile() {
  const [isShowed, setIsShowed] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    //Check your Local Storage //here are the code to
    const loginDetail = localStorage.getItem("loginDetail");
    if (!loginDetail || loginDetail !== "anatemuhammed@gmail.com") {
      navigate("/login");
    }
  }, []);
  const logOut = () => {
    const deleteData = localStorage.removeItem("loginDetail");
    if (!deleteData) {
      navigate("/login");
    }
  };
  return (
    <>
      <div className="container">
        <button
          onClick={() => {
            setIsShowed(() => !isShowed);
          }}
          className="details-btn md:hidden"
        >
          {isShowed ? (
            <FaHome className=" sm:text-white  sm:hover:text-gray-100 hover:shadow-md hover:shadow-black" />
          ) : (
            <FaBars className="hover:text-sky-400 hover:shadow-md hover:shadow-black sm:hover:text-gray-100 text-white " />
          )}
        </button>
        <nav
          className={`profile-container ${
            isShowed ? "profile-container" : "profile-details"
          }`}
        >
          <div
            className={
              "profile-details absolute border-2 w-[220px] bg-white p-2 rounded-md top-[80px] right-[10px] md:hidden"
            }
          >
            <ul>
              <li>
                Name: <span>MUHAMMED-JAMIU</span>
              </li>
              <li>
                GENDER: <span>MALE</span>
              </li>
              <li>
                AGE: <span>28</span>
              </li>
              <li>
                STATE: <span>KOGI STATE</span>
              </li>
              <li>
                TEL: <span>07013862792</span>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <h3 className="text-center mb-4 border-4 rounded-lg bg-sky-700 uppercase tracking-wide text-white  md:block md:bg-white md:text-sky-600 md:border-blue">
            My Profile
          </h3>
          <img
            src="/photo.png"
            className="h-[400px] w-[400px] rounded-3xl"
            alt=""
          />
        </div>
        <div className="flex gap-3 border-4  justify-center rounded-lg bg-sky-700 text-white uppercase tracking-wide w-[400px] md:bg-white md:text-sky-600">
          <p>Abdulsalam </p>
          <p>Muhammed-Jamiu</p>
        </div>
        <button
          onClick={logOut}
          className=" font-semibold tracking-wide border-4 bg-red-800 rounded-lg uppercase text-white hover:bg-red-700 w-[400px] md:bg-white md:text-red-600"
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default AssProfile;
