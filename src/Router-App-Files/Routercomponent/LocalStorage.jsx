import React from "react";
import { useState, useEffect } from "react";

function LocalStorage() {
  const [data, setData] = useState("");
  useEffect(() => {
    const storedData = localStorage.getItem("myData");
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const handleChange = (e) => {
    setData(e.target.value);
  };
  const saveData = () => {
    localStorage.setItem("myData", data);
    alert("Data saved!");
  };

  const checkData = () => {
    const local = localStorage.getItem("myData");
    const storedData = local;
    if (local) {
      alert("Data exit in the LocalStorage");
    } else {
      alert("No Data found in local storage");
    }
  };
  const removeData = () => {
    const storedData = localStorage.removeItem("myData");
    if (storedData) {
      alert("Data Removed successfully");
    }
  };
  return (
    <div>
      <h3>Local Storage Example</h3>
      <input
        style={{
          marginLeft: "10px",
          padding: "5px",
          width: "220px",
        }}
        value={data}
        type="text"
        placeholder=" Enter data here ..."
        onChange={handleChange}
      />
      <br />
      <br />
      <button
        style={{
          marginLeft: "10px",
          background: "green",
          borderRadius: "5px",
          letterSpacing: "1.2px",
          color: "white",
        }}
        onClick={saveData}
      >
        Save Data
      </button>
      <button
        style={{
          marginLeft: "30px",
          background: "purple",
          borderRadius: "5px",
          letterSpacing: "1.2px",
          color: "white",
        }}
        onClick={checkData}
      >
        Check Data
      </button>
      <br />
      <br />
      <button
        style={{
          marginLeft: "70px",
          background: "red",
          borderRadius: "5px",
          letterSpacing: "1.2px",
          color: "white",
        }}
        onClick={removeData}
      >
        Remove Data
      </button>
    </div>
  );
}

export default LocalStorage;
