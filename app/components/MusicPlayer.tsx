"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(playing);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding.mp3"
        loop
      />

      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 z-50 rounded-full px-3 py-2
                   bg-primary opacity-90 text-background shadow-lg"
      >
        {playing ? "🔊" : "🔈"}
      </button>
    </>
  );
}
