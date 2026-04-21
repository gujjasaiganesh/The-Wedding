import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date("April 29, 2026 10:32:00").getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center space-y-4">
      <h3 className="font-cinzel text-sm md:text-base tracking-[0.4em] uppercase text-ink/60 mb-4">
        Time Until
      </h3>
      <h2 className="font-script text-4xl md:text-6xl text-ink leading-tight mb-2">
        The Big Day
      </h2>
      <div className="flex justify-center gap-4 md:gap-8">
        <div className="text-center">
          <div className="font-cinzel text-3xl md:text-5xl text-ink font-bold">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-ink/60 tracking-wider uppercase">
            Days
          </div>
        </div>
        <div className="text-center">
          <div className="font-cinzel text-3xl md:text-5xl text-ink font-bold">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-ink/60 tracking-wider uppercase">
            Hours
          </div>
        </div>
        <div className="text-center">
          <div className="font-cinzel text-3xl md:text-5xl text-ink font-bold">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-ink/60 tracking-wider uppercase">
            Minutes
          </div>
        </div>
        <div className="text-center">
          <div className="font-cinzel text-3xl md:text-5xl text-ink font-bold">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-ink/60 tracking-wider uppercase">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
