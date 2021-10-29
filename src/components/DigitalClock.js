import React, { useEffect, useState } from 'react';

function DigitalClock() {
  const [clockState, setClockState] = useState([]);
  
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState([
        date.getDate(),
        date.getMonth(),
        date.getFullYear(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
      ]);
    }, 1000);
  }, []);

  return (
    <div className='digital-clock'>
      <div className='clock-container'>
        <div className='clock-col'>
          <p className='clock-day clock-timer'>{clockState[0]}</p>
          <p className='clock-label'>Day</p>
        </div>
        <div className='clock-col'>
          <p className='clock-hours clock-timer'>{clockState[3]}</p>
          <p className='clock-label'>Hours</p>
        </div>
        <div className='clock-col'>
          <p className='clock-minutes clock-timer'>{clockState[4]}</p>
          <p className='clock-label'>Minutes</p>
        </div>
        <div className='clock-col'>
          <p className='clock-seconds clock-timer'>{clockState[5]}</p>
          <p className='clock-label'>Seconds</p>
        </div>
      </div>

      {/* <h1>{clockState[0]}</h1>
      <h2>{clockState[1]}</h2>
      <h2>{clockState[2]}</h2>
      <h2>{clockState[3]}</h2>
      <h2>{clockState[4]}</h2>
      <h2>{clockState[5]}</h2> */}
    </div>
  );
}

export default DigitalClock;
