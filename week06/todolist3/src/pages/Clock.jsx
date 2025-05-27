import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <p style={{ fontSize: '2rem' }}>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
