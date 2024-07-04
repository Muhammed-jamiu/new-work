import React from "react";
function Joke(props) {
  return (
    <>
      <div>
        {<h1>Setup: {props.setup}</h1>}
        <p>
          <strong>Punchline</strong>: {props.punchline}
        </p>
        <hr />
      </div>
    </>
  );
}
export default Joke;

// export default function Joke(props) {
//   return (
//     <>
//       <div>
//         setup: <h2>{props.setup}</h2>
//         <p>{props.newline}</p>
//         <hr />
//       </div>
//     </>
//   );
// }
