import React, { useState } from "react";

const states = [
  {
    name: "Kogi",
    localGovernments: [
      "Adavi",
      "Ajaokuta",
      "Ankpa",
      "Bassa",
      "Bekki",
      "Chanchaga",
      "Dekina",
      "Ibaji",
      "Idah",
      "Igalamela-Odolu",
      "Ijumu",
      "Kabba Bunu",
      "Kogi Central",
      "Mopa Muro",
      "Ogori-Magongo",
      "Okehi",
      "Okene",
      "Olamaboro",
      "Omala",
      "Orofo",
    ],
  },
];

const App = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedLocalGovernment, setSelectedLocalGovernment] = useState("");

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleLocalGovernmentChange = (event) => {
    setSelectedLocalGovernment(event.target.value);
  };

  return (
    <div>
      <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select State</option>
        {states.map((state) => (
          <option value={state.name} key={state.name}>
            {state.name}
          </option>
        ))}
      </select>
      {selectedState && (
        <select
          style={{
            // background: "red",
            marginLeft: "20px",
          }}
          value={selectedLocalGovernment}
          onChange={handleLocalGovernmentChange}
        >
          <option value="">Select Local Government</option>
          {states
            .find((state) => state.name === selectedState)
            .localGovernments.map((localGovernment) => (
              <option value={localGovernment} key={localGovernment}>
                {localGovernment}
              </option>
            ))}
        </select>
      )}
    </div>
  );
};

export default App;
