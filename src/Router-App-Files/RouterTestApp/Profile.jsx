import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

function Profile() {
  const navigate = useNavigate();
  useEffect(() => {
    // check your local storage
    const loginDetails = localStorage.getItem("loginDetails");

    if (!loginDetails || loginDetails !== "anate@gmail.com") {
      navigate("/login");
    }
  }, []);

  const { username, Id } = useParams();
  return (
    <div>
      <h4>Profile Page </h4>
      <h2>My name is {username}</h2>
      <h3>am {Id} years old</h3>
    </div>
  );
}

export default Profile;
