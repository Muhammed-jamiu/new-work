import React from "react";
function Welcome(props) {
  return (
    <>
      <div className="one">
        <h1>What is your name:</h1>
        <h3>My name is :{props.name}</h3>
        <h1>How old are you now:</h1>
        <h3>I am :{props.age} years old now</h3>
        <h1>You are from which state:</h1>
        <h3>I am from:{props.state} of Nigeria</h3>
      </div>
      <div className="two">
        <p>My business is {props.businessname}</p>
        <p>product is {props.productone}</p>
      </div>
    </>
  );
}
export default Welcome;
