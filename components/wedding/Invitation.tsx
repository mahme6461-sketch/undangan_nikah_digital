"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUp, CalendarDays, Gift, Heart, Home, Image as ImageIcon, MessageCircle } from "lucide-react";
import { wedding } from "@/data/wedding";
import WeddingCover from "./WeddingCover";
import HeroSection from "./HeroSection";
import QuoteSection from "./QuoteSection";
import CoupleSection from "./CoupleSection";
import EventSection from "./EventSection";
import Countdown from "./Countdown";
import GallerySection from "./GallerySection";
import LoveStorySection from "./LoveStorySection";
import RSVPSection from "./RSVPSection";
import GiftSection from "./GiftSection";
import ClosingSection from "./ClosingSection";
import MusicPlayer from "./MusicPlayer";

const nav = [["beranda", Home, "Beranda"], ["mempelai", Heart, "Mempelai"], ["acara", CalendarDays, "Acara"], ["galeri", ImageIcon, "Galeri"], ["rsvp", MessageCircle, "RSVP"], ["hadiah", Gift, "Hadiah"]] as const;

export default function Invitation() {
  const [opened, setOpened] = useState(false);
  const [guest, setGuest] = useState("");
  const [playing, setPlaying] = useState(false);
  const [audioOk, setAudioOk] = useState(true);
  const [showTop, setShowTop] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const to = new URLSearchParams(window.location.search).get("to");
    if (to) setGuest(to.trim().slice(0, 60));
  }, []);
  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    window.scrollTo(0, 0);
  }, [opened]);
  useEffect(() => {
    const on = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const toggleMusic = useCallback(() => {
    const a = audio.current; if (!a) return;
    if (a.paused) a.play().then(() => setPlaying(true)).catch(() => { setPlaying(false); setAudioOk(false); });
    else { a.pause(); setPlaying(false); }
  }, []);
  const open = () => { setOpened(true); toggleMusic(); };

  return (
    <>
      <audio ref={audio} src={wedding.music.src} loop preload="none" onError={() => { setAudioOk(false); setPlaying(false); }} />
      <WeddingCover guest={guest} opened={opened} onOpen={open} />
      {opened && (
        <>
          <main>
            <HeroSection /><QuoteSection /><CoupleSection /><EventSection /><Countdown />
            <GallerySection /><LoveStorySection /><RSVPSection guest={guest} /><GiftSection />
          </main>
          <ClosingSection />
          <div className="fixed bottom-24 right-4 z-40 flex flex-col items-center gap-3">
            {showTop && (
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Kembali ke atas"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-paper text-gold-dark shadow-md"><ArrowUp className="h-5 w-5" /></button>
            )}
            {audioOk && <MusicPlayer playing={playing} onToggle={toggleMusic} />}
          </div>
          <nav aria-label="Navigasi bagian" className="fixed inset-x-0 bottom-4 z-40 mx-auto flex w-fit gap-1 rounded-full border border-gold/40 bg-paper/95 px-2 py-1.5 shadow-lg backdrop-blur">
            {nav.map(([id, Icon, label]) => (
              <a key={id} href={`#${id}`} aria-label={label} title={label} className="flex h-11 w-11 items-center justify-center rounded-full text-sage-dark hover:bg-sage-light"><Icon className="h-5 w-5" /></a>
            ))}
          </nav>
        </>
      )}
    </>
  );
}
