import { useState } from "react";
import "./style/NewList.css";
import statesAndLGAs from "./location";
import React from "react";

// async function FetchData() {
//   const url = "https://swapi.dev/api/planets";
//   const fetchRequset = await fetch(url).then(async function (resp) {
//     const fetchRequsetData = await resp.json();
//     return fetchRequsetData;
//   });
//   console.log(fetchRequset);
// }
// FetchData();
function NewList() {
  const states = Object.keys(statesAndLGAs);
  // Note {Object.keys }function here is to get all the key which are all thr=e state
  // const states = Object.values(statesAndLGAs["Kogi"]);
  //note  {Object.value} here is to get the LGA in each state
  // console.log(states);
  const [lga, setLga] = useState([]);

  const [profiles, setProfiles] = useState([]);
  const [profile, setProfile] = useState({
    //here are the intail value of the input
    name: "",
    age: 0,
    gender: "",
    state: "",
  });

  //Conditional statement function section
  function checkProfile() {
    if (profile.name == "") {
      alert("Please enter your name");
    } else if (profile.age == "") {
      alert("Please enter your age");
    } else if (profile.gender == "") {
      alert("Please select gender");
    } else if (profile.state == "") {
      alert("Please select State");
    } else if (profile.lga == "") {
      alert("Please select L.G.A");
    } else {
      setProfiles((state) => {
        return [...state, profile];
      });
      // Ask your question here concerning multiple {setprofile}
      setProfile(() => {
        return {
          name: "",
          age: 0,
          gender: "",
          state: "",
          lga: "",
        };
      });
    }
  }

  return (
    <>
      <div id="container">
        <div id="form-wrap">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="input1"
              id="put"
              required
              autoComplete="off"
              placeholder="  Enter your name here..."
              value={profile.name}
              onChange={(e) => {
                setProfile((state) => {
                  // console.log(state);
                  const valueGet = e.target.value;

                  //Note that the {state} is the key word use to rep intail value
                  return {
                    ...state,
                    name: [valueGet],
                  };
                });
              }}
            />
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="input2"
              placeholder="  Enter your age here..."
              value={profile.age}
              onChange={(e) => {
                setProfile((state) => {
                  //Note that the {state} is the key word use to rep. intail value
                  return {
                    ...state,
                    age: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select
              name=""
              id="gender"
              value={profile.gender}
              onChange={(e) => {
                setProfile((state) => {
                  return { ...state, gender: e.target.value };
                });
              }}
            >
              <option value="">-- Select Gender --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="state">State</label>
            <select
              name=""
              value={profile.state}
              id="state"
              onChange={(e) => {
                if (e.target.value.trim().length > 0) {
                  const selectedState = e.target.value;

                  const selectedLga = statesAndLGAs[e.target.value];

                  setLga(() => selectedLga);

                  setProfile((state) => {
                    return { ...state, state: e.target.value };
                  });
                } else {
                  setLga([]);
                }
              }}
            >
              <option value="">-- Select State --</option>
              {states.map((state) => (
                <option value={state} key={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="LGA">L.G.A</label>
            <select
              name=""
              id="lga"
              value={profile.lga}
              onChange={(e) => {
                setProfile((state) => {
                  return { ...state, lga: e.target.value };
                });
              }}
            >
              <option>-- Select L.G.A --</option>
              {lga.map((lga) => (
                <option value={lga}>{lga}</option>
              ))}
            </select>
          </div>
        </div>
        <button
          id="btn"
          onClick={() => {
            checkProfile();
          }}
        >
          Add profile
        </button>
        <div className="name-wrap">
          {profiles.map((profile) => (
            <div id="main-pro">
              <p>
                Name: <span className="pro1">{profile.name}</span>
              </p>
              <p>
                Age: <span className="pro2">{profile.age}</span>
              </p>
              <p>
                Gender: <span className="pro3">{profile.gender}</span>
              </p>
              <p>
                State: <span className="pro4">{profile.state}</span>
              </p>
              <p>
                L.G.A: <span className="pro5">{profile.lga}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default NewList;
