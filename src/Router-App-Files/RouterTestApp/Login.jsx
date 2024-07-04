import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(email, password);
    if (!email || !password) {
      setErrorMsg("Fill all the space provided before you can Login");
      //   alert("all fields required");
    } else if (email === "anate@gmail.com" && password === "123456") {
      localStorage.setItem("loginDetails", email);
      navigate("/profile");
    } else {
      //   alert("invalid email or password ");
      setErrorMsg("invalid email or password ");
    }
  };
  return (
    <div>
      {/* <h2>Login Page</h2> */}
      <p> {errorMsg}</p>
      <form className="form-group" onSubmit={handleLogin}>
        <label htmlFor="">Email</label>
        <br />
        <input
          type="email"
          value={email}
          placeholder="Enter a valid email here..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          type="password"
          value={password}
          placeholder="Enter a valid email here..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
