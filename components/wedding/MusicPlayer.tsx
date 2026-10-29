"use client";
import { Music, Pause } from "lucide-react";
export default function MusicPlayer({ playing, onToggle }: { playing: boolean; onToggle: () => void }) {
  return (
    <button onClick={onToggle} aria-label={playing ? "Jeda musik" : "Putar musik"} aria-pressed={playing}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-paper text-gold-dark shadow-md">
      {playing ? <Pause className="h-5 w-5" /> : <Music className="h-5 w-5" />}
    </button>
  );
}
