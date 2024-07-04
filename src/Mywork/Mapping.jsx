import { useState } from "react";
import "./style/Mapping.css";
function Mapping() {
  const details = [
    {
      Name: "Abdulsalam Muhammed Jamiu",
      State: "Kogi State",
      Gender: "Male",
      Occupation: " Corper wee",
      Age: "28",
    },
    {
      Name: "Abdulsalam Abdulhakeem",
      State: "Kogi State",
      Gender: "Male",
      Occupation: "Student",
      Age: "17",
    },
    {
      Name: "Anate Khadijah",
      State: "Kogi State",
      Gender: "Female",
      Occupation: " business",
      Age: "33",
    },
    {
      Name: "Zubair Khadijah",
      State: "Abuja",
      Gender: "Female",
      Occupation: " Student",
      Age: "26",
    },
  ];
  return (
    <>
      <div className="header">
        <p>Name</p>
        <p>Gender</p>
        <p>State</p>
        <p>Occp.</p>
        <p>Age</p>
        <p>Edit</p>
        <p>Delete</p>
      </div>
      {details.map((detail) => (
        <div className="list">
          <p>{detail.Name}</p>
          <p>{detail.Gender}</p>
          <p>{detail.State}</p>
          <p>{detail.Occupation}</p>
          <p>{detail.Age}</p>
          <button id="edit">Edit</button>
          <button id="delete">Delete</button>
        </div>
      ))}
    </>
  );
}
export default Mapping;
