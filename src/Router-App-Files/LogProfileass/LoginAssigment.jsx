import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router";
import "./NavAss.css";

function LoginAssigment() {
  const [errorMsg, setErrorMsg] = useState("");
  const [errorMsg1, setErrorMsg1] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //Login details
  const handleLogin = (e) => {
    e.preventDefault();
    if (!userName || !password) {
      setErrorMsg(" Plese enter your username & password to Login");
    } else if (
      userName === "anatemuhammed@gmail.com" &&
      password === "7252628"
    ) {
      localStorage.setItem("loginDetail", userName); //here is the code to store data to local storage
      navigate("/profile");
    } else {
      setErrorMsg1("Invalid Credential ");
    }
  };
  const checkPassword = (e) => {
    let con = document.getElementById("con");
    const eyeOn = document.getElementById("eye-on");
    const eyeOff = document.getElementById("eye-off");
    if (passwordInput.value === "") {
      eyeOn.style.display = "block";
      alert("Please enter your password first");
    } else if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeOff.style.display = "block";
      eyeOn.style.display = "none";
    } else {
      passwordInput.type = "password";
      eyeOn.style.display = "block";
      eyeOff.style.display = "none";
    }
  };

  return (
    <>
      <div className="h-full w-full flex justify-center items-center  login-container ">
        <form
          onSubmit={handleLogin}
          className="
          flex flex-col
          bg-[#fff] 
          p-8
           w-[400px]
           rounded-[13px]
           relative  "
        >
          <h3 className="text-center text-xl font-sans  text-black bottom-4">
            {" "}
            Welcome Back!
          </h3>
          <span className="text-sm text-center  text-red-700 italic absolute top-[57px] left-[60px]  ">
            {errorMsg}
          </span>

          <span className="text-center absolute  top-[60px] left-[150px] text-red-600 italic text-sm">
            {" "}
            {errorMsg1}
          </span>
          <div className="form-group">
            <label>E-mail</label>
            <input
              id="userName"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className=""
              type="text"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name="password"
              id="passwordInput"
              className=""
              type="password"
            />
          </div>
          <div className="image ">
            <span>
              {" "}
              <img
                onClick={checkPassword}
                id="eye-on"
                src="/eye-on.svg"
                className="h-[25px] w-[30px] relative left-[302px] bottom-[30px] inline-block "
                alt=""
              />
            </span>
            <span>
              {" "}
              <img
                onClick={checkPassword}
                id="eye-off"
                src="/eye-off.svg"
                className="h-[25px] w-[30px] relative left-[302px] bottom-[30px] hidden "
                alt=""
              />
            </span>
          </div>
          <div className="flex justify-between">
            <div className="checkcon">
              {" "}
              <input type="checkbox" className="checkbox" />
              <small className="checkspan">Remember me</small>
            </div>
            <small className="forgot-password">Forgot your password?</small>
          </div>
          <button className="login-btn">log in</button>
        </form>
      </div>
    </>
  );
}

export default LoginAssigment;
