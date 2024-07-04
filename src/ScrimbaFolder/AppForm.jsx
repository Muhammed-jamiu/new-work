import React, { useState } from "react";
function AppForm() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState({
    surname: "",
    firstname: "",
    lastname: "",
    gender: "",
    age: 0,
  });

  function handleForm() {
    if (name.surname == "") {
      alert("Please enter your surname");
    } else if (name.firstname == "") {
      alert("Please enter your first name ");
    } else if (name.lastname == "") {
      alert("please enter your last name");
    } else if (name.age == "") {
      alert("Please enter your age");
    } else if (name.gender == "") {
      alert("Please select gender");
    } else {
      setNames((state) => {
        return [...state, name];
      });
      setName(() => {
        return {
          surname: "",
          firstname: "",
          lastname: "",
          gender: "",
          age: 0,
        };
      });
    }
  }
  return (
    <>
      <div
        style={{
          width: "500px",
          margin: "50px auto",
        }}
      >
        <h2>Working on Form</h2>

        <form action="">
          <label htmlFor="name">Surname</label>

          <br />
          <input
            type="text"
            placeholder="Enter your surname here..."
            value={name.surname}
            onChange={(e) => {
              const inputValue = e.target.value;
              setName((prev) => {
                return {
                  ...prev,
                  surname: inputValue,
                };
              });
            }}
          />
          <br />
          <br />
          <label htmlFor="name">Firstname</label>
          <br />
          <input
            type="text"
            placeholder="Enter your firstname here..."
            value={name.firstname}
            onChange={(e) => {
              e.target.value;
              setName(() => {
                return {
                  ...name,
                  firstname: e.target.value,
                };
              });
            }}
          />
          <br />
          <br />
          <label htmlFor="name">Lastname</label>
          <br />
          <input
            type="text"
            placeholder="Enter your lastname here..."
            value={name.lastname}
            onChange={(e) => {
              e.target.value;
              setName((prev) => {
                return {
                  ...prev,
                  lastname: e.target.value,
                };
              });
            }}
          />
          <br />
          <br />
          <label htmlFor="name">Age</label>
          <br />
          <input
            type="number"
            placeholder="Enter your age here..."
            value={name.age}
            onChange={(e) => {
              e.target.value;
              setName((name) => {
                return { ...name, age: e.target.value };
              });
            }}
          />
          <br />
          <br />
          <label htmlFor="gender">Gender</label>
          <br />
          <select
            style={{
              width: "170px",
              textAlign: "center",
            }}
            name=""
            id=""
            value={name.gender}
            onChange={(e) => {
              //   e.target.value;
              setName((name) => {
                return {
                  ...name,
                  gender: e.target.value,
                };
              });
              console.log(e.target.value);
            }}
          >
            <option value="">-- select --</option>
            <option value="Male">Male</option>
            <option value="female">Female</option>
            <option value="Other">Other</option>
          </select>
        </form>
        <br />
        <button
          onClick={(e) => {
            handleForm();
          }}
        >
          Submit
        </button>
      </div>
      {names.map((prev) => (
        <div>
          <p>Surname: {prev.surname}</p>
          <p>Firstname:{prev.firstname}</p>
          <p>Lastname:{prev.lastname}</p>
          <p>Age:{prev.age}</p>
          <p>Gender:{prev.gender}</p>
        </div>
      ))}
    </>
  );
}
export default AppForm;
