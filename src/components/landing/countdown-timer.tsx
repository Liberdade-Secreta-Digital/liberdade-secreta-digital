'use client';

import { useState, useEffect } from 'react';
import { TimerIcon } from 'lucide-react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    // Set expiry time to 1 hour from when the component mounts
    const expiryTime = new Date().getTime() + 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = expiryTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
      } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0'),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 fill-mode-forwards">
        <div className="inline-flex items-center gap-2 rounded-full border border-destructive/50 bg-destructive/10 px-4 py-2">
            <TimerIcon className="h-5 w-5 text-destructive" />
            <span className="font-medium text-destructive">OFERTA EXPIRA EM:</span>
            <span className="font-mono text-lg font-bold text-foreground tracking-widest">
                {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
            </span>
        </div>
    </div>
  );
};
