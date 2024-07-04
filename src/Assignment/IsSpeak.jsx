import React, { useState, useEffect } from "react";
import { useSpeechToText } from "react-speech-to-text";

const IsSpeak = () => {
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  const { speak, listen, result } = useSpeechToText();

  useEffect(() => {
    listen((event) => {
      if (event.results[0].isFinal) {
        const transcript = event.results[0][0].transcript;
        setText(transcript);
      }
    });
  }, [listen]);

  const handleStartListening = () => {
    speak();
    setIsSpeaking(true);
  };

  const handleStopListening = () => {
    listen("", false);
    setIsSpeaking(false);
  };

  return (
    <div>
      <h1>Speech to Text</h1>
      <button onClick={handleStartListening}>Start Listening</button>
      <button onClick={handleStopListening}>Stop Listening</button>
      <p>{text}</p>
    </div>
  );
};

export default IsSpeak;
