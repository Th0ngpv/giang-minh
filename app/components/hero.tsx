"use client";

import Image from "next/image";
import useInView from "@/app/hooks/useInView";

interface HeroProps {
  coupleName: string;
  date: string;
  location: string;
}

export default function Hero({ coupleName, date, location }: HeroProps) {
  const { ref, isVisible } = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative h-screen flex flex-col items-center justify-center text-center"
    >
      <Image
        src="/images/preWed/AOI_7809_Copy_1.jpg"
        alt="Hero Background"
        fill
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 text-white">
        {/* Top text */}
        <p
          className={`mb-10 text-xl font-playfair tracking-widest transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          THE WEDDING OF
        </p>

        {/* Couple name image */}
        <Image
          src="/images/couple-name.png"
          alt={coupleName}
          width={400}
          height={100}
          className={`md:w-xl w-xs transition-all duration-1000 delay-200 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        />

        {/* Date & location */}
        <p
          className={`mt-5 md:mt-15 text-md md:text-2xl font-playfair transition-all duration-1000 delay-400 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {date} • {location}
        </p>
      </div>
    </section>
  );
}
