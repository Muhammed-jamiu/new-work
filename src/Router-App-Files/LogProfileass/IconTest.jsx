import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
function IconTest() {
  return (
    <div className="icon-div mt-[50px] flex gap-[10px] items-center border-[2px] w-[150px] justify-center py-[2px] rounded-md blur-none  ">
      <FontAwesomeIcon className="home hover:rotate-[30px]" icon={faHome} />
      <h2>IconTest</h2>
    </div>
  );
}

export default IconTest;
