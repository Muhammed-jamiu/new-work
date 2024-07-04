import React from "react";
function Contact({
  detail,
  surname,
  firstname,
  gender,
  state,
  email,
  lga,
  img,
  catinfo,
} = props) {
  return (
    <>
      <div className="general">
        <div className="small">
          <h3>{detail}</h3>
          <p>1.{surname}</p>
          <p>2.{firstname}</p>
          <p>3.{gender}</p>
          <p>4.{state}</p>
          <p>
            <span className="num">5.</span>
            {email}
          </p>
          <p>6.{lga}</p>
          <img src={img} alt="" />
          <p>{catinfo}</p>
        </div>
      </div>
    </>
  );
}
export default Contact;
