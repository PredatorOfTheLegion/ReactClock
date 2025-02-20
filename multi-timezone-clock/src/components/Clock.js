import React, { useEffect, useState } from 'react';
import { getTimeInTimezone } from '../utils/timeUtils';
import AnalogClock from './AnalogClock';

const Clock = ({ timezone, city }) => {
  const [time, setTime] = useState(getTimeInTimezone(timezone));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeInTimezone(timezone));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div>
      <h2>{city} {timezone}</h2>
      <AnalogClock timezone={timezone} />
      <p>{time}</p>
    </div>
  );
};

export default Clock;