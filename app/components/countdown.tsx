"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  weddingDate: string; // ISO format
}

export default function Countdown({ weddingDate }: CountdownProps) {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const wedding = new Date(weddingDate).getTime();
      const diff = wedding - now;

      if (diff <= 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }

      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((diff / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((diff / (1000 * 60)) % 60));
      setSeconds(Math.floor((diff / 1000) % 60));
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <section id="countdown" className="text-center py-15">
      <h2 className="text-6xl md:text-8xl font-delafield mb-8">Countdown </h2>

      {/* countdown row */}
      <div className="flex items-center justify-center gap-6 md:gap-25 font-playfair text-primary">
        {/* Days */}
        <div className="flex flex-col items-center">
          <h4 className="text-5xl md:text-9xl font-bold">{days}</h4>
          <p className="text-md md:text-2xl md:mt-7 mt-2">days</p>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <h4 className="text-5xl md:text-9xl font-bold">{hours}</h4>
          <p className="text-md md:text-2xl md:mt-7 mt-2">hours</p>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <h4 className="text-5xl md:text-9xl font-bold">{minutes}</h4>
          <p className="text-md md:text-2xl md:mt-7 mt-2">minutes</p>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <h4 className="text-5xl md:text-9xl font-bold">{seconds}</h4>
          <p className="text-md md:text-2xl md:mt-7 mt-2">seconds</p>
        </div>
      </div>
    </section>
  );
}
