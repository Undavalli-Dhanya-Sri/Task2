// src/Stopwatch.js
import React, { useState, useRef } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (!isActive) {
      setIsActive(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }
  };

  const pauseStopwatch = () => {
    if (isActive) {
      clearInterval(intervalRef.current);
      setIsActive(false);
    }
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setTime(0);
    setLaps([]);
  };

  const recordLap = () => {
    setLaps([...laps, time]);
  };

  const formatTime = (time) => {
    const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const hours = `0${Math.floor((time / 3600000) % 24)}`.slice(-2);

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="stopwatch">
      <div className="display">{formatTime(time)}</div>
      <div className="controls">
        <button onClick={startStopwatch}>Start</button>
        <button onClick={pauseStopwatch}>Pause</button>
        <button onClick={resetStopwatch}>Reset</button>
        <button onClick={recordLap}>Lap</button>
      </div>
      <div className="laps">
        {laps.map((lap, index) => (
          <div key={index}>Lap {index + 1}: {formatTime(lap)}</div>
        ))}
      </div>
    </div>
  );
};

export default Stopwatch;
