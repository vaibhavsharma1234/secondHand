import React, { useState, useEffect } from 'react';

const CountdownTimer = ({timeLeft,setTimeLeft}) => {

  useEffect(() => {
    // If the timer has reached zero, exit early
    if (timeLeft <= 0) return;

    // Set up a timeout to decrease the time left after 1 second
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // Clear the timeout if the component unmounts or timeLeft changes
    return () => clearTimeout(timer);
  }, [timeLeft]); // Dependency array with timeLeft

  return (
    <div>
      {timeLeft > 0 ? <h1>{timeLeft} seconds remaining</h1> : <></>}
    </div>
  );
};

export default CountdownTimer;
