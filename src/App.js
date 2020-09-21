import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  let [seconds, setSeconds] = useState(60);
  const [minute, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setTimeout(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  if (seconds === 0) {
    setSeconds((seconds = 60));
    setMinutes(minute + 1);
  }

  function toggle() {
    setIsActive(true);
  }
  return (
    <div>
      {minute}:{seconds}
      <button onClick={toggle}>Click me</button>
    </div>
  );
}
