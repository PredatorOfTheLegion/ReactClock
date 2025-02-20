import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TimezoneSelector from './components/TimezoneSelector';
import Clock from './components/Clock';
import './App.css';

function App() {
  const selectedTimezones = useSelector(state => state.selectedTimezones);
  const dispatch = useDispatch();
  
  const handleTimezoneSelect = (timezone) => {
    dispatch({ type: 'SELECT_TIMEZONE', payload: timezone });
  };

  return (
    <div className="App">
      <h1>Часы для разных часовых поясов</h1>
      <TimezoneSelector onSelect={handleTimezoneSelect} />
      {selectedTimezones.map((tz, index) => (
        <Clock key={index} timezone={tz} />
      ))}
    </div>
  );
}


export default App;