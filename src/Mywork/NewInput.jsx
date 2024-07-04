import { useState } from "react";
function NewInput() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  //The function below works setName onClick btn below
  function clear() {
    setName(() => {
      return " ";
    });
  }
  return (
    <>
      <div>
        <label htmlFor="name">Enter some text here</label>
        <br />
        <br />
        <input
          type="text"
          value={name}
          placeholder=" Enter some text here..."
          onChange={(e) => {
            setName(() => {
              console.log(e);
              return e.target.value;
            });
          }}
        />
        <br />
        <br />
        <button
          onClick={() => {
            setNames((state) => {
              return [...state, name];
            });
            // setName("");
            //while the setName above code work like clear function above
            clear();
          }}
          id="text"
        >
          Add text
        </button>
        <div>
          {names.map((name) => {
            return <p>The Statement says:{name}</p>;
          })}
        </div>
      </div>
    </>
  );
}

export default NewInput;
