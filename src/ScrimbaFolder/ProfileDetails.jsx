import React from "react";
import { FaBeer, FaCoffee, FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
// import { useParams } from "react-router";
function ProfileDetails() {
  //   const name = useParams();
  return (
    <div>
      <h1 className=" tracking-wider italic ml-[250px] mt-[20px] border-[2px] text-center rounded-md shadow-lg bg-sky-500 text-white text-md shadow-black">
        My Profile
      </h1>

      <div className="flex gap-[50px] mt-[20px]">
        {" "}
        <FaCoffee className="text-red-500 text-[60px]  hover:text-green-500 cursor-pointer" />
        <FaFacebook className="text-yellow-900 text-[50px] " />
        <FaInstagram className="text-[50px] text-red-300 bg-green-800 rounded-xl border-[2px] border-red-800" />
        <FaWhatsapp className="text-[50px] text-white bg-green-800 rounded-xl border-[2px] border-green-800" />
        <FaTiktok className="text-[50px] text-red-700" />
        <FaLinkedinIn className="text-[40px] border-[2px]  px-[5px] inline-block w-[40px] h-[40px] p-[10px] rounded-full bg-gray-400 hover:bg-gray-300 hover:cursor-cell" />
      </div>
      <div className="flex ">
        <div>
          <img
            className="h-[210px] w-[200px] rounded-md mt-2 relative left-[130px] top-[20px]"
            src="/photo.png "
            alt=""
          />
        </div>
        <div className="relative left-[140px] top-[25px] flex flex-col justify-around border-[2px] text-start w-[280px] px-[4px] py-[2px] rounded-md bg-sky-500">
          <p>Name: Muhammed-Jamiu</p>
          <p>Gender: Male</p>
          <p>Email: Anatemuhammed@gmail.com</p>
          <p>Github: https://github.com/ANATE001</p>
          <p>Occup: Front-end developer</p>
          <p>Tel: 07013862792, 09163376259</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
