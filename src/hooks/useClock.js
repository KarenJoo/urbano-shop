import { useState, useEffect } from 'react';

export default function useClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(prevTime => new Date(prevTime.getTime() - 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return currentTime;
}
