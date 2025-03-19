import React from 'react';

const Weekdays = () => {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay();  // Get the index of today
  
  const orderedWeekdays = [...weekdays.slice(today), ...weekdays.slice(0, today)];
  
  return (
    <ul>
      {orderedWeekdays.map((day, index) => (
        <li key={index}>{day}</li>
      ))}
    </ul>
  );
};

export default Weekdays;