import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaHeart, FaHandPointUp } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const handleClick = () => {
  alert("Work in processing...");
};
const handleSocial = () => {
  alert(" Processing...");
};
function List({ people, removeUser }) {
  return (
    <>
      {people.map((person) => {
        const { id, name, image, age, email, gender, state, del } = person;
        return (
          <>
            <article
              key={id}
              className="flex gap-2 border-4 shadow-md shadow-black rounded-md m-[7px] list-con relative hover:scale-100 cursor-pointer"
            >
              <img
                className="h-[80px] w-[80px] rounded-full hover:border-2 border-gray-600 cursor-pointer transition-all 200ms"
                src={image}
                alt={name}
              />
              <div className="mt-[8px] flex flex-col mb-1">
                <h3>{name}</h3>
                <small>{age} Year</small>
                <small className=" hover:underline hover:cursor-pointer text-blue-500">
                  {email}
                </small>
                <small>{gender}</small>
                <small>{state}</small>
                <div className="flex justify-end  absolute left-[250px] gap-[7px] top-[83px] transition-all">
                  <Link onClick={handleSocial}>
                    <FaWhatsapp className="text-green-600 text-lg icon" />
                  </Link>
                  <Link onClick={handleSocial}>
                    <FaFacebook className="text-blue-700 text-lg icon" />
                  </Link>
                  <Link onClick={handleSocial}>
                    <FaInstagram className="text-red-600 text-lg icon" />
                  </Link>
                  <Link onClick={handleSocial}>
                    <FaTiktok className="text-red-300 text-lg icon" />
                  </Link>
                  <Link>
                    <FaLinkedin
                      onClick={handleSocial}
                      className="text-green-900 text-xl rounded-lg icon"
                    />
                  </Link>
                </div>
                <div className="flex absolute gap-[10px] top-[85px] right-[370px]">
                  <FaHandPointUp className="text-gray-600 text-lg" />
                  <FaHeart className="text-gray-600 text-lg relative top-[2px] " />
                </div>
                <button
                  onClick={() => removeUser(id)}
                  className="absolute left-[340px] rounded-md bg-red-600 text-white hover:bg-red-500 top-[35px] w-[70px] border-2 border-red-600"
                >
                  {del}
                </button>
              </div>
            </article>
          </>
        );
      })}
    </>
  );
}

export default List;
