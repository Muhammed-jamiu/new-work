import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAppleAlt,
  faArrowRightArrowLeft,
  faAtom,
  faHome,
  faBarsProgress,
  faBell,
  faBroom,
  faCalculator,
  faCalendarCheck,
  faCar,
  faChartArea,
  faClock,
  faCoffee,
  faDeleteLeft,
  faDog,
  faDownload,
  faEarDeaf,
  faFemale,
  faFish,
  faHandsHoldingChild,
  faHotel,
  faIdCard,
  faKeyboard,
  faLadderWater,
  faLocationArrow,
  faMale,
  faMessage,
  faMosquito,
  faNetworkWired,
  faParking,
  faPenToSquare,
  faPencilRuler,
  faPersonCircleCheck,
  faPrayingHands,
  faRecordVinyl,
  faRotate,
  faRunning,
  faSearch,
  faSpa,
  faSpinner,
  faStamp,
  faSwimmingPool,
  faTransgender,
  faUpload,
  faUserMinus,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEye,
  faEyeSlash,
  faBed,
  faBook,
  faBedPulse,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faHomeUser } from "@fortawesome/free-solid-svg-icons/faHomeUser";
import { faEarth } from "@fortawesome/free-solid-svg-icons/faEarth";
import { faLocation } from "@fortawesome/free-solid-svg-icons/faLocation";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons/faShareNodes";
import { faChair } from "@fortawesome/free-solid-svg-icons/faChair";
import { faPercentage } from "@fortawesome/free-solid-svg-icons/faPercentage";
import { faAnchor } from "@fortawesome/free-solid-svg-icons/faAnchor";
import { faDesktop } from "@fortawesome/free-solid-svg-icons/faDesktop";
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons/faPencilSquare";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons/faAngleDoubleLeft";

function ErrorPage() {
  const navigate = useNavigate();
  const [bedSpace, setBedSpace] = useState("");
  const [free, setFree] = useState(null);
  return (
    <div className="flex flex-col justify-center text-center gap-[30px] mt-[100px]">
      <h3 className="text-red-500 italic text-[50px]"> Error 404</h3>
      <div className="normall rounded-[100%] h-[210px] w-[250px] border-[3px] bg-gray-50 ml-[200px] border-black flex flex-col gap-[2px]">
        <div className="bg-gray-50 border-b-2 border-b-green-500 h-[40px]">
          <h3 className="text-lg font-semibold mt-1 bottom-[3px] relative right-[20px]">
            Bed Space{" "}
            <span className="relative left-[40px] text-xs text-black ">
              Room of 12 occup.
            </span>
          </h3>
        </div>
        <div className="bg-gray-300 grid grid-cols-4 h-[55vh] cursor-pointer ">
          <span className="text-3xl text-gray-400   ">
            <FontAwesomeIcon
              onMouseOver={() => {
                setBedSpace("Not Free");
              }}
              onMouseLeave={() => {
                setBedSpace("");
              }}
              icon={faBed}
            />
          </span>
          <span className="text-3xl text-blue-400  ">
            <FontAwesomeIcon icon={faBed} />
          </span>
          <span className="text-3xl text-green-400 ">
            <FontAwesomeIcon
              onMouseOver={() => {
                setFree("Free Space");
              }}
              onMouseLeave={() => {
                setFree("");
              }}
              icon={faBed}
            />
          </span>
          <span className="text-3xl text-green-400">
            <FontAwesomeIcon icon={faBed} />
          </span>
          <span className="text-3xl text-green-400 ">
            <FontAwesomeIcon icon={faBed} />
          </span>
          <span className="text-3xl text-gray-400   ">
            <FontAwesomeIcon icon={faBed} />
          </span>{" "}
          <span className="text-3xl text-gray-400   ">
            <FontAwesomeIcon icon={faBed} />
          </span>{" "}
          <span className="text-3xl text-gray-400   ">
            <FontAwesomeIcon icon={faBed} />
          </span>{" "}
          <span className="text-3xl text-gray-400   ">
            <FontAwesomeIcon icon={faBed} />
          </span>
          <span className="text-3xl text-green-400   ">
            <FontAwesomeIcon icon={faBed} />
          </span>
          <span className="text-3xl text-green-400   ">
            <FontAwesomeIcon icon={faBed} />
          </span>
          <span className="text-3xl text-green-400   ">
            <FontAwesomeIcon icon={faBed} />
          </span>
        </div>
      </div>
      <p
        style={{
          // border: "1px solid black",
          color: "red",
          fontSize: "11px",
          fontWeight: "bold",
          height: "20px",
          width: "60px",
          // background: "white",
          marginLeft: "200px",
          borderRadius: "7px",
          position: "relative",
          bottom: "170px",
          left: "5px",
        }}
      >
        {bedSpace}
      </p>
      <span
        style={{
          // border: "1px solid black",
          color: "red",
          fontSize: "11px",
          fontWeight: "bold",
          height: "20px",
          width: "60px",
          // background: "white",
          marginLeft: "200px",
          borderRadius: "7px",
          position: "relative",
          bottom: "220px",
          left: "129px",
        }}
      >
        {free}
      </span>
      {/* <FontAwesomeIcon className="text-red-500 text-2xl" icon={faRotate} spin />
      <FontAwesomeIcon
        className="text-black text-2xl"
        icon={faAngleDoubleLeft}
      />
      <FontAwesomeIcon
        className="text-black text-2xl"
        icon={faAngleDoubleRight}
      /> */}

      <h1 className="text-[70px]">PAGE NOT FOUND</h1>
      <div className="h-[40px] w-[900px] bg-red-600">
        <FontAwesomeIcon
          className="text-blue-600 h-[30px] w-[30px]"
          icon={<faCoffee />}
        />
      </div>

      <Link
        className="border-[2px] w-[250px] rounded-md bg-blue-600  hover:bg-blue-800 text-[#fff] tracking-wider italic ml-[200px] py-[3px]"
        to={"/login"}
      >
        Back To Login Page
      </Link>
      <span className="text-green-500 text-3xl hover:text-red-500">
        <FontAwesomeIcon icon={faCoffee} />
      </span>
      <h1 className="text-xl font-bold tracking-wider italic hover:animate-bounce hover:cursor-pointer">
        Loading...
      </h1>
      <div className="flex items-center justify-center gap-[12px]  ">
        <span className="text-3xl hover:text-red-600 ">
          <FontAwesomeIcon icon={faEyeSlash} />
        </span>
        <span className="text-3xl">
          <FontAwesomeIcon icon={faEye} />
        </span>
        {/* <span className="text-3xl text-gray-400   ">
          <FontAwesomeIcon icon={faBed} />
        </span>
        <span className="text-3xl text-green-400 hover:text-4xl  ">
          <FontAwesomeIcon icon={faBed} />
        </span> */}
        <span className="text-3xl">
          <FontAwesomeIcon icon={faBook} />
        </span>
        <span className="text-3xl ">
          <FontAwesomeIcon icon={faBedPulse} />
        </span>
        <span className="text-3xl ">
          <FontAwesomeIcon icon={faUser} />
        </span>
        <span className="text-3xl">
          <FontAwesomeIcon icon={faUserPlus} />
        </span>
        <span className="text-3xl">
          <FontAwesomeIcon icon={faUserMinus} />
        </span>
        <span className="text-3xl text-green-800   cursor-pointer">
          <FontAwesomeIcon icon={faArrowRightArrowLeft} />
        </span>
        <span className="text-3xl">
          <FontAwesomeIcon icon={faUpload} />
        </span>
        <span className="text-3xl text-blue-600 rounded-xl">
          <FontAwesomeIcon icon={faMessage} />
        </span>
        <span className="text-3xl">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <span className="text-4xl relative text-green-500  bottom-[130px] right-[100px] hover:text-blue-400 cursor-pointer">
          <FontAwesomeIcon icon={faEarth} />
        </span>
        <span className="relative right-[100px] text-3xl  text-black flex gap-[20px]">
          <FontAwesomeIcon icon={faShareNodes} />
          <FontAwesomeIcon icon={faMale} />
          <FontAwesomeIcon icon={faFemale} />
          <FontAwesomeIcon icon={faCalendarCheck} />
          <FontAwesomeIcon icon={faChair} />
        </span>
      </div>
    </div>
  );
}

export default ErrorPage;
