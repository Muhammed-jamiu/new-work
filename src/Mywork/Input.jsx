import { useState } from "react";
import "./style/Mapping.css";
function Input(params) {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  return (
    <>
      <div id="con">
        <label htmlFor="name">Enter some text here</label>
        <input
          type="text"
          typeof="text"
          //   readOnly
          placeholder=" Enter some text here..."
          onChange={(e) => {
            setName(() => {
              console.log(e);
              return e.target.value;
            });
          }}
        />
        <button
          onClick={() => {
            //push the name inside the names
            setNames((state) => {
              return [...state, name];
            });
          }}
          id="text"
        >
          Add Text
        </button>
        <div>
          {names.map((name) => {
            console.log(name);
            return <p>The Statement says: {name}</p>;
          })}
        </div>
      </div>
    </>
  );
}
export default Input;
