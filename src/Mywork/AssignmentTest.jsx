import React from "react";
import { useState } from "react";
import "../src/ScrimbaCss/AssignmentTest.css";
function Welcome() {
  //Testing Testing
  //   const [old, setOld] = useState("");
  //   const [details, setDetails] = useState({
  //     name: "Muhammed-Jamiu",
  //     age: "28",
  //     gender: "Male",
  //     state: "Kogi",
  //   });

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleName = (e) => {
    const inputGet = e.target.value;
    console.log(inputGet);
    setFullName((prevName) => {
      return [...prevName, ""];
    });
  };
  const handleEmail = (e) => {
    setEmail((prevEmail) => {
      const emailInput = e.target.value;
      console.log(emailInput);
      return [...prevEmail, email];
    });
  };
  const handlePassword = (e) => {
    setPassword((prevPassword) => {
      const passwordInput = e.target.value;
      console.log(passwordInput);
      return { ...prevPassword, password };
    });
  };

  return (
    <>
      <div>
        {/* <button
          onClick={(e) => {
            console.log(old);
            setOld((old) => {
              return [...old, ""];
            });
            setDetails((old) => {
              console.log(old);
              return { name: "", age: "", gender: "", state: "" };
            });
          }}
        >
          Click Me
        </button>
        <button
          onClick={(e) => {
            e.target.value;
            setDetails((prvedetaile) => {
              console.log(prvedetaile);
              return { ...prvedetaile, details };
            });
          }}
        >
          Details
        </button> */}
      </div>

      <div className="form-container">
        <form action="form_group">
          <legend>Login Form</legend>
          <br />
          <label htmlFor="name">Full-Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            // value={password.name}
            placeholder="Enter your full-name here..."
            onChange={handleName}
          />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter a valid email here..."
            // value={password.email}
            onChange={handleEmail}
          />
          <br />
          <br />
          <label htmlFor="name">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password here..."
            onChang={handlePassword}
          />
        </form>
        <button id="btns">Submit</button>
      </div>
    </>
  );
}
export default Welcome;

//comment section
// const profile = {
//   name: "u",
//   age: 4,
//   location: "nigeria",
//   year: 2017,
//   car: "benz",
//   transport: "flight",
// };

// const { year, car, ...result } = profile;
// console.log(result);
// const {year,car, ...result} = profile the {year, car} are part of the profile data while the  {...result} is the NEW NAME given to the remaining data on the profile list since this function {year,car} means to REMOVE those two object data from the list that are under profile list before
// const school = {
//   establish: "1989",
//   state: "Kaduna",
//   vc: true,
// };
// const { state, ...newschool } = school;
// console.log(newschool);
// const newData = { ...school, ...result };
//The expression ABOVE means that we are joining the two list of object on those two CONST above together

// console.log(newData);
