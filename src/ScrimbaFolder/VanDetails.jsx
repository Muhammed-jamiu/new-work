import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const url = function VanDetails() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState("");
  //   useEffect(() => {
  //     fatch(`/api/host/vans/${id}`)
  //       .then((resp) => resp.json())
  //       .then((data) => console.log(data.vans));
  //   }, []);
  if (!currentVan) {
    return (
      <h2>
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          className="text-[30px] text-green-600"
        />
      </h2>
    );
  }
  return (
    <div>
      <h2 className="mt-[40px] text-center relative left-[100px]">
        VanDetails Page
      </h2>
      <div>
        <img src={currentVan.imageUrl} alt="" />
      </div>
    </div>
  );
};

export default VanDetails;
