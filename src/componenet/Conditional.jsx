import React from "react";
function Conditional() {
  const cond = () => {
    const age = 27;
    if (age > 28) {
      console.log("Bross you don Old go an marry");
    } else if (age !== 28) {
      console.log("Get Set");
    } else if (age === 27) {
      console.log("What are you waiting for to get married");
    }
    {
      console.log("Ok ooo weldone sir");
    }
  };
  return (
    <>
      <button
        style={{
          width: "250px",
          padding: "10px",
          marginLeft: "200px",
          marginTop: "20px",
          borderRadius: "10px",
          fontSize: "20px",
          fontFamily: "sans-serif",
          fontWeight: "bold",
          letterSpacing: "2px",
          background: "green",
          color: "#fff",
        }}
        onClick={cond}
      >
        Click Me
      </button>
    </>
  );
}
export default Conditional;
