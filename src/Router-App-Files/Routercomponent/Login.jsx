import React, { useState } from "react";
import { useNavigate } from "react-router";
// import "../src/style/tail.css";
function Login() {
  const [errorMsg, setErrorMsg] = useState("");
  const [errorMsg1, setErrorMsg1] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Navigation section
  const navigate = useNavigate();
  //Login details
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg1("Fill the spaces before Login");
    } else if (email === "anatemuhammed@gmail.com" && password === "7252628") {
      localStorage.setItem("loginDetail", email); //here is the code to store data to local storage
      navigate("/profile");
    } else {
      setErrorMsg("Invalid Credential ");
    }
  };

  return (
    <div className="form-con">
      <form className="form-group" onSubmit={handleLogin}>
        <fieldset className="set">
          <legend>Login details</legend>
          <span className="error">{errorMsg}</span>
          <span className="error1">{errorMsg1}</span>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            // required
            autoCapitalize="off"
            autoComplete="off"
            placeholder="Enter valid e-mail here..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="email">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter valid password here..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </fieldset>
        <button className="login">Login</button>
      </form>
    </div>
  );
}

export default Login;
