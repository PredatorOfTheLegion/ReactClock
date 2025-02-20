import React, { useEffect, useState } from 'react';

const TimezoneSelector = ({ onSelect }) => {
  const [timezones, setTimezones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/timezones.json')
      .then(response => response.json())
      .then(data => {
        console.log('Загруженные данные:', data); // Добавьте эту строку
        setTimezones(data);
        setLoading(false);
      })
      .catch(error => console.error('Error loading timezones:', error));
  }, []);

  if (loading) {
    return <div>Загрузка данных...</div>;
  }

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Выберите город</option>
      {timezones.map((tz, index) => (
        <option key={index} value={tz.timezone}>{tz.city}</option>
      ))}
    </select>
  );
};

export default TimezoneSelector;