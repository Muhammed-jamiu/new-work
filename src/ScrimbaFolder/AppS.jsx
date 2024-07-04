import React from "react";
import Contact from "./Contact.jsx";
import "../ScrimbaCss/Contact.css";
function App() {
  return (
    <>
      <div className="contact">
        <Contact
          detail="My details"
          surname="Abdulsalam"
          firstname="Muhammed-Jamiu"
          gender="Male"
          email="anatemuhammed@gmail.com"
          state="Kogi State"
          lga="Okene"
          img="src/ScrimbaFolder/photos/catone.jpg"
          catinfo="This is a cat "
        />
        <Contact
          detail="My details"
          surname="Abdulsalam"
          firstname="Abdulraheem"
          gender="Male"
          email="anateabdulraheem@gmail.com"
          state="Kogi State"
          lga="Okene"
          img="src/ScrimbaFolder/photos/catone.jpg"
          catinfo="This is a cat "
        />
        <Contact
          detail="My details"
          surname="Abdulsalam"
          firstname="Abdulhakeem"
          gender="Male"
          email="anateabdulraheem@gmail.com"
          state="Kogi State"
          lga="Okene"
          img="src/ScrimbaFolder/photos/catone.jpg"
          catinfo="This is a cat "
        />
      </div>
    </>
  );
}
export default App;
