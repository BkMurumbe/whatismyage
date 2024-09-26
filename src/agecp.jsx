import React, { useState } from 'react';
import './agecpstyle.css'

function AgeCalculator() {
  const [birthday, setBirthday] = useState('');
  const [age, setAge] = useState(null);
  const [dayOfWeek, setDayOfWeek] = useState(null);
  const [monthName, setMonthName] = useState(null);

  const calculateAge = () => {
    const currentDate = new Date();
    const birthDate = new Date(birthday);

    if (birthDate > currentDate) {
      alert('Please enter a valid birthdate.');
      return;
    }

    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));

    setAge(ageInYears);

    // Calculate day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = birthDate.getDay();
    setDayOfWeek(daysOfWeek[dayIndex]);

    // Calculate month name
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthIndex = birthDate.getMonth();
    setMonthName(months[monthIndex]);
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <label htmlFor="birthday">Enter your birthday:</label>
      <input
        type="date"
        id="birthday"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && (
        <div>
          <p>Your age is: {age}</p>
          <p>You were born on a {dayOfWeek}</p>
          <p>In the month of {monthName}</p>
        </div>
      )}
    </div>
  );
}

export default AgeCalculator;