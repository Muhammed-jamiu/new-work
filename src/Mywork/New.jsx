// // import React, { useState } from "react";

// // function App() {
// //   const [selectedState, setSelectedState] = useState("");
// //   const states = ["Lagos", "Abuja", "Kano", "Port Harcourt", "Ibadan"];

// //   const handleSelect = (event) => {
// //     setSelectedState(event.target.value);
// //   };
// //   const nigeriaStates = [
// //     "Abia",
// //     "Adamawa",
// //     "Akwa Ibom",
// //     "Anambra",
// //     "Bauchi",
// //     "Bayelsa",
// //     "Benue",
// //     "Borno",
// //     "Cross River",
// //     "Delta",
// //     "Ebonyi",
// //     "Edo",
// //     "Ekiti",
// //     "Enugu",
// //     "Gombe",
// //     "Imo",
// //     "Jigawa",
// //     "Kaduna",
// //     "Kano",
// //     "Katsina",
// //     "Kebbi",
// //     "Kogi",
// //     "Kwara",
// //     "Lagos",
// //     "Nasarawa",
// //     "Niger",
// //     "Ogun",
// //     "Ondo",
// //     "Osun",
// //     "Oyo",
// //     "Plateau",
// //     "Rivers",
// //     "Sokoto",
// //     "Taraba",
// //     "Yobe",
// //     "Zamfara",
// //   ];
// //   return (
// //     <>
// //       <div>
// //         <select value={selectedState} onChange={handleSelect}>
// //           <option value="">Select a state</option>
// //           {states.map((state) => (
// //             <option value={state} key={state}>
// //               {state}
// //             </option>
// //           ))}
// //         </select>

// //         <div>
// //           {selectedState ? (
// //             <p>Selected state: {selectedState}</p>
// //           ) : (
// //             <p>No state selected {selectedState}</p>
// //           )}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";

// const nigeriaStates = [
//   "Abia",
//   "Adamawa",
//   "Akwa Ibom",
//   "Anambra",
//   "Bauchi",
//   "Bayelsa",
//   "Benue",
//   "Borno",
//   "Cross River",
//   "Delta",
//   "Ebonyi",
//   "Edo",
//   "Ekiti",
//   "Enugu",
//   "Gombe",
//   "Imo",
//   "Jigawa",
//   "Kaduna",
//   "Kano",
//   "Katsina",
//   "Kebbi",
//   "Kogi",
//   "Kwara",
//   "Lagos",
//   "Nasarawa",
//   "Niger",
//   "Ogun",
//   "Ondo",
//   "Osun",
//   "Oyo",
//   "Plateau",
//   "Rivers",
//   "Sokoto",
//   "Taraba",
//   "Yobe",
//   "Zamfara",
// ];

// const kogiLocalGovernment = [
//   {
//     name: "Adavi",
//     id: "adavi",
//   },
//   {
//     name: "Ajaokuta",
//     id: "ajaokuta",
//   },
//   {
//     name: "Ankpa",
//     id: "ankpa",
//   },
//   {
//     name: "Bassa",
//     id: "bassa",
//   },
//   {
//     name: "Bekki",
//     id: "bekki",
//   },
//   {
//     name: "Chanchaga",
//     id: "chanchaga",
//   },
//   {
//     name: "Dekina",
//     id: "dekinna",
//   },
//   {
//     name: "Ibaji",
//     id: "ibaji",
//   },
//   {
//     name: "Idah",
//     id: "idah",
//   },
//   {
//     name: "Igalamela-Odolu",
//     id: "igalamela-odolu",
//   },
// ];

// const App = () => {
//   const [selectedState, setSelectedState] = useState(null);

//   const handleSelectChange = (event) => {
//     setSelectedState(event.target.value);

//     if (event.target.value === "Kogi") {
//       const localGovernments = kogiLocalGovernment.map((localGovernment) => (
//         <option key={localGovernment.id} value={localGovernment.name}>
//           {localGovernment.name}
//         </option>
//       ));
//       console.log(localGovernments);
//       alert(`Selected Local Government in Kogi State is ${localGovernments}`);
//     }

//     console.log(`Selected State is ${event.target.value}`);
//     alert(`Selected State is ${event.target.value}`);

//     // You can also make API call to fetch more details about the selected state
//     // For example:
//     // fetch(`https://api.example.com/states/${event.target.value}`)
//     //   .then(response => response.json())
//     //   .then(data => console.log(data));

//     // You can then render the data in your component
//     // For example:
//     // return <div>{data.map(state => <p>{state.name}</p>)}</div>;
//   };

//   return (
//     <div>
//       <select onChange={handleSelectChange}>
//         <option value="">Select a State</option>
//         {nigeriaStates.map((state) => (
//           <option key={state} value={state}>
//             {state}
//           </option>
//         ))}
//       </select>

//       <h2>Selected State is:</h2>
//       <p>{selectedState}</p>

//       {selectedState === "Kogi" ? (
//         <select>
//           <option value="">Select a Local Government</option>
//           {kogiLocalGovernment.map((localGovernment) => (
//             <option key={localGovernment.id} value={localGovernment.name}>
//               {localGovernment.name}
//             </option>
//           ))}
//         </select>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// };

// export default App;
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
  const [selectedState, setSelectedState] = useState(null);
  const [selectedLocalGovernment, setSelectedLocalGovernment] = useState(null);

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
