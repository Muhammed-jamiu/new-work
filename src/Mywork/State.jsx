import "./style/Mobile.css";
import { useState } from "react";
function State() {
  const [num, setNum] = useState(0);
  const [names, setNames] = useState("MUSA");
  function increasing(e) {
    setNum(num + 1);
    console.log(e);
  }
  function decreasing(e) {
    console.log(e);
    setNum(num - 1);
  }
  function nameUpdate(e) {
    setNames(...names, "Jamiu");
    console.log(e);
    if (names.toLowerCase() === "MUSA") {
      setNames("Muhammed");
    } else {
      setNames("Abdulsalam");
    }
  }
  //this is string section
  const myName = ["Anate", "Muhammed Jamiu", "Itopa", "Abdulsalam", "Lawal"];
  const myNewName = [...myName, "Muhammed Jamiu", "my friend"];
  //This is Object section
  const Object = {
    surname: "Abdulsalam",
    firstname: "Muhamme-Jamiu",
    state: "Kogi State",
    LGA: "Okene",
  };
  //   console.log(Object);
  const newObjects = { ...Object, age: 23 };
  //   console.log(newObjects);

  //profile section below
  const [details, setDetails] = useState({
    Name: "Abdulsalam Muhammed-Jamiu",
    School: "Federal University of Technology, Minna",
    Course: "Mathematics",
    State: "Kogi State",
  });
  return (
    <>
      <div>
        {/* <p>{names}</p> */}
        {names}
        <br />
        <button onClick={nameUpdate}>Show Name</button>
        <p className="text"> {num}</p>
        <button className="add" onClick={increasing}>
          ADD
        </button>
        <button className="sub" onClick={decreasing}>
          Subtract
        </button>
        <br />
        <br /> <br />
        <button
          id="call"
          onClick={() => {
            console.log("This is the new names ", myNewName, newObjects);
          }}
        >
          {" "}
          Call
        </button>
        <br />
        <br />
        <br />
        <br />
        {/* //this section is to display in names on borwser */}
        {details.Name} - {details.State} - {details.School} - {details.Course}
        <br />
        <br />
        <button
          id="more"
          onClick={() => {
            setDetails((State) => {
              console.log("This is the prev.", State);
              {
                /*Note here in this section return key word must be used to change the value of the intial value use on the key word State */
              }
              return {
                ...State,
                School: "Abdul Azeez Atta Memorial College Okene",
              };
            });
          }}
        >
          {" "}
          Click me
        </button>
      </div>
    </>
  );
}
export default State;
