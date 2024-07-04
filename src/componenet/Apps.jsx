import React from "react";
import Welcome from "./welcome.jsx";
function Apps() {
  return (
    <>
      <div>
        <Welcome
          name="Abdulsalam Muhammed-jamiu"
          age="28"
          state="Kogi State"
          gender="Male"
        ></Welcome>
      </div>
      <div>
        <Welcome
          businessname="Royal venture"
          productone="bannana"
          price="2500naria"
        ></Welcome>
      </div>
    </>
  );
}
export default Apps;
