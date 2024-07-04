import React, { useEffect, useState } from "react";
import { profiles } from "./profiles";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
function Profile() {
  const param = useParams();
  const name = param.profile;
  const navigate = useNavigate();
  useEffect(() => {
    //Check your Local Storage //here are the code to 
    const loginDetail = localStorage.getItem("loginDetail");
    if (!loginDetail || loginDetail !== "anatemuhammed@gmail.com") {
      navigate("/login");
    }
  });
  const logOut = () => {
    const deleteData = localStorage.removeItem("loginDetail");
    if (!deleteData) {
      navigate("/login");
    }
  };
  // console.log(param);
  let profile = {
    name: "Anate",
    img: "/Routerphoto/photome.png",
    gender: "Male",
    age: 28,
    state: "Kogi state ",
    email: " anatemuhammed@gmail.com",
    tel: " 07036238110",
  };
  profiles.forEach((prof) => {
    if (prof.name === name) {
      profile = prof;
    }

    // console.log(profile);
  });

  return (
    <>
      <div className="prof-con">
        <div className="prof1">
          <h1> User Profile </h1>
          <hr
            style={{
              background: "#210472",
              height: "5px",
            }}
          />
          <img className="image" src={profile.img} alt="" />
        </div>

        <div className="prof2">
          <hr
            style={{
              background: "#210472",
              height: "5px",
            }}
          />
          <p>
            {" "}
            Name: <span className="sur">{profile.name}</span>
          </p>

          <p>
            {" "}
            Gender: <span className="gen"> {profile.gender}</span>
          </p>
          <p>
            {" "}
            Age: <span className="num">{profile.age}</span>
          </p>
          <p>
            {" "}
            State: <span className="state">{profile.state}</span>
          </p>

          <p>
            Email: <span className="mail">{profile.email}</span>
          </p>
          <p>
            Tel: <span className="tel">{profile.tel}</span>
          </p>
        </div>
        <hr
          style={{
            width: "20px",
            height: "320px",
            position: "relative",
            top: "75px",
            background: "blue",
          }}
        />
      </div>
      <div className="btnout-con">
        <button onClick={logOut} className="btn-out">
          Logout
        </button>
      </div>
    </>
  );
}

export default Profile;
