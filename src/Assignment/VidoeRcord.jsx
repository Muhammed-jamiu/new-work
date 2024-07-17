import React, { useRef, useState } from "react";
import { FaVideo, FaVideoSlash } from "react-icons/fa";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa6";
import { FaMicrophoneAltSlash } from "react-icons/fa";

const VidoeRcord = () => {
  const videoRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);

  // Function to start recording
  const startRecording = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const options = { mimeType: "video/webm" };
      const recorder = new MediaRecorder(stream, options);

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks([...recordedChunks, event.data]);
        }
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    }
  };

  // Function to stop recording
  const stopRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  // Function to play recorded video
  const playRecording = () => {
    const blob = new Blob(recordedChunks, { type: "music/webm" });
    const url = URL.createObjectURL(blob);
    const videoElement = document.createElement("video");
    videoElement.src = url;
    videoElement.controls = true;
    videoElement.autoplay = true;
    document.body.appendChild(videoElement);
    // document.body.appendChild(
    //   <button style={{ backgroundColor: "green" }}>Hello this is Button</button>
    // );
  };

  // Function to handle starting/stopping recording
  const handleToggleRecording = () => {
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  // Function to handle accessing user media
  const handleStartVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing user media:", error);
    }
  };

  return (
    <div className="w-fll h-full flex flex-col justify-center items-center gap-[20px] ">
      <div className="flex gap-[80px] ">
        <button className="btn" onClick={handleStartVideo}>
          <span className="ml-3 ">Start Video</span>
        </button>
        <button className="btn" onClick={handleToggleRecording}>
          {!isRecording ? (
            <button className="relative">
              {" "}
              <FaMicrophone className="absolute  right-[90px] top-[4px] text-green-700" />
              <span className="ml-[10px]"> Start Record</span>{" "}
            </button>
          ) : (
            <button>
              {" "}
              <FaMicrophoneSlash className="absolute right-[380px] top-[460px] text-lg text-red-500" />
              <span className="ml-[20px]">Stop Record</span>
            </button>
          )}
        </button>
        <button
          className="btn"
          onClick={playRecording}
          disabled={recordedChunks.length === 0}
        >
          Play Recording
        </button>
      </div>
      <div>
        <video
          className="rounded-lg mb-[30px]"
          ref={videoRef}
          width="550"
          height="550"
          autoPlay
        />
      </div>
    </div>
  );
};

export default VidoeRcord;
