import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [studyTime, setStudyTime] = useState("00:00");
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const studying = setTimeout(() => {
      setElapsedTime(elapsedTime + 1000);
    }, 1000);

    return () => {
      clearInterval(studying);
    };
  }, [elapsedTime]);

  function onReveal() {
    const minutes = Math.floor(elapsedTime / 60000);
    const formatMinutes = minutes.toString().padStart(2, "0");
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const formatSeconds = seconds.toString().padStart(2, "0");
    setStudyTime(`${formatMinutes}:${formatSeconds}`);
  }

  return (
    <div>
      <p>{studyTime}</p>
      <button onClick={onReveal}>Click to Start</button>
    </div>
  );
}
