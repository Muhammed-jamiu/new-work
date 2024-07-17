import React from "react";
import "./VidoeRecord.css";
import NewSpeak from "./NewSpeak";
import VidoeRcord from "./VidoeRcord";
function SpeackVidoe() {
  return (
    <>
      <div className="mt-[20px]">
        <h2 className="text-red-500 text-center text-2xl">
          Voice Note $ Vidoe Record
        </h2>
      </div>
      <div className="container flex flex-col gap-[200px] w-full h-full justify-center iteam-center border-[3px] bg-gray-400">
        <NewSpeak />
        <VidoeRcord />
      </div>
    </>
  );
}

export default SpeackVidoe;
