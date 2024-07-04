import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
function ErrorPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[30px] mt-[200px] text-[40px] italic font-serif text-red-600 underline ">
        <h2> 404 Error</h2>
        <p>Page Not Found</p>
      </div>
      <div className="flex justify-center items-center mt-6 border-[2px] w-[200px] h-[30px] ml-[160px] rounded-lg shadow-md shadow-black bg-sky-600">
        {" "}
        <Link to={"/"}>
          {" "}
          <FontAwesomeIcon
            className="text-red-500 relative right-[10px]"
            icon={faArrowLeft}
          />
          <span className="italic tracking-wide relative left-[5px] text-white">
            {" "}
            Back to Home Page
          </span>
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
