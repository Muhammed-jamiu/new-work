import React, { useState, useEffect } from "react";
function UseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Muhammed-Jamiu");
  useEffect(() => {
    console.log(
      "We use this step to stop the automatic re-rendering of the code to run on the useEffect function, the code render when their is change on the count, but the code will not re-render even their is changes on second parameter [count]"
    );
    document.title = `You count ${count}  times`;
  }, [count]);
  return (
    <>
      <div>
        <input
          type="text"
          placeholder=" Enter some text here..."
          onChange={(e) => {
            // setName((state) => {
            //   [...state, e.target.value];
            // });
          }}
        />
        <button onClick={() => setCount(() => count + 1)}>
          Your count is {count}
        </button>
      </div>
    </>
  );
}
export default UseEffect;
