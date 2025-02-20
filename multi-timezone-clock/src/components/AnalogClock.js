import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const AnalogClock = ({ timezone }) => {
  const [time, setTime] = useState(moment().tz(timezone).toDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz(timezone).toDate());
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondStyle = {
    transform: `rotate(${seconds * 6}deg)`,
  };
  const minuteStyle = {
    transform: `rotate(${minutes * 6}deg)`,
  };
  const hourStyle = {
    transform: `rotate(${hours * 30 + minutes * 0.5}deg)`,
  };

  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hand hour-hand" style={hourStyle}></div>
        <div className="hand minute-hand" style={minuteStyle}></div>
        <div className="hand second-hand" style={secondStyle}></div>
      </div>
    </div>
  );
};

export default AnalogClock;