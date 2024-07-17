import React, { useState, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa6";
import { FaMicrophoneAltSlash } from "react-icons/fa";
import { FaHalfEye } from "react-icons/fa";
// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeakRecognition;
// const mic = new SpeechRecognition();
// mic.continous = true;
// mic.interimResults = true;
// mic.lang = "en-US";

// const activeStlye = {
//   borderColor: "red",
//   color: "green",
// };

function IsSpeak() {
  const [isListen, setIsListen] = useState(false);
  const [note, setNote] = useState(null);
  const [saveNotes, setSaveNotes] = useState([]);
  // useEffect(() => {
  //   handleListening();
  // }, [isListen]);

  // const handleListening = () => {
  //   if (isListen) {
  //     mic.start();
  //     mic.end = () => {
  //       mic.start();
  //     };
  //   } else {
  //     mic.stop();
  //     mic.end = () => {
  //       console.log(" Stopped");
  //     };
  //   }
  //   mic.onstart = () => {
  //     console.log("Mic is on");
  //   };
  //   mic.onresult = (event) => {
  //     const transcript = Array.from(event.results)
  //       .map((result) => result[0])
  //       .map((result) => result.transcript)
  //       .join("");
  //     console.log(transcript);
  //     setNote(transcript);
  //     mic.onerror = (event) => {
  //       console.log(event.error);
  //     };
  //   };

  //   const handleSaveNote = () => {
  //     setSaveNotes([...saveNotes, note]);
  //     setNote("");
  //   };
}
return (
  <>
    <h1 className="text-center relative top-[20px] uppercase text-xl tracking-wider italic bg-slate-50  flex justify-center">
      Voice Note
    </h1>
    <div className="container">
      <div className="box main-btn">
        <h2>Current Note</h2>
        {isListen ? (
          <span>
            <FaMicrophone />
          </span>
        ) : (
          <span>
            <FaMicrophoneAltSlash />
          </span>
        )}
        <div className="control-btn">
          <button
            className="action-btn"
            onClick={handleSaveNote}
            disabled={!note}
          >
            Save Note
          </button>
          <button
            onClick={() => setIsListen((prevState) => !prevState)}
            className="action-btn"
          >
            Start/Stop
          </button>
          <p>{note}</p>
        </div>
      </div>
      <div className="box">
        <h2>Notes</h2>
        {saveNotes.map((n) => (
          <p key={n}>{n}</p>
        ))}
      </div>
    </div>
  </>
);

export default IsSpeak;
