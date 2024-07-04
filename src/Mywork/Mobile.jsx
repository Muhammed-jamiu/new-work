import "./style/Mobile.css";
function Mobile() {
  // function handleClick() {
  //   alert("Hello! Welcome to our world of Coding" + "" + " How are you Doing");
  // }
  let checkSome = (e) => {
    console.log(e);
    console.log("Hello");
  };
  console.log(checkSome);
  return (
    <>
      <div id="container">
        {/* <button
          style={{
            color: "#fff",
            fontSize: "20px",
            letterSpacing: "2px",
            borderRadius: "20px",
          }}
          id="btn"
          onClick={handleClick}
        >
          Check Somethings
        </button> */}
        <button onClick={checkSome}>Do Something</button>
      </div>
    </>
  );
}
export default Mobile;
