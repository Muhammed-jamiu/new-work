import React from "react";
import { useParams } from "react-router";
function Booking() {
  const order = useParams();
  return (
    <div className="booking">
      <h1>This is Booking Page</h1>
    </div>
  );
}

export default Booking;
