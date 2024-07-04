import React from "react";
import Joke from "../ScrimbaFolder/Joke.jsx";
import JokeData from "./JokeData.js";
function Appj() {
  console.log(JokeData);
  const jokeElement = JokeData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.newline} />;
  });
  return (
    <>
      <div>{jokeElement}</div>
    </>
  );
}

export default Appj;

// import React from "react";
// import Joke from "./Joke.jsx";
// import JokeData from "./JokeData.js";
// function Appj() {
//   const JokeElement = JokeData.map((joke) => {
//     return;
//     <Joke setup={joke.setup} newline={joke.newline} />;
//   });
//   return (
//     <>
//       <div>{JokeElement}</div>
//     </>
//   );
// }
// export default Appj;
