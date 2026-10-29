"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { wedding } from "@/data/wedding";
import Reveal from "./Reveal";

export default function GallerySection() {
  const items = wedding.gallery;
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const move = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (open === null) return;
    closeRef.current?.focus();
    const prev = document.body.style.overflow; document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); if (e.key === "ArrowRight") move(1); if (e.key === "ArrowLeft") move(-1); };
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("keydown", key); document.body.style.overflow = prev; };
  }, [open, move]);

  return (
    <section id="galeri" className="section">
      <Reveal className="mb-12 text-center"><h2 className="heading">Galeri</h2></Reveal>
      <div className="columns-2 gap-3 md:columns-3 md:gap-4">
        {items.map((p, i) => (
          <button key={p.src} onClick={() => setOpen(i)} aria-label={`Perbesar: ${p.alt}`}
            className="group mb-3 block w-full overflow-hidden rounded-2xl border border-gold/30 md:mb-4">
            <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(min-width:768px) 33vw, 50vw" className="h-auto w-full transition duration-700 group-hover:scale-105" />
          </button>
        ))}
      </div>
      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label="Pratinjau foto" className="fixed inset-0 z-[60] flex animate-fade items-center justify-center bg-ink/90 p-4"
          onClick={() => setOpen(null)} onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => { if (touchX.current === null) return; const dx = e.changedTouches[0].clientX - touchX.current; if (Math.abs(dx) > 50) move(dx < 0 ? 1 : -1); touchX.current = null; }}>
          <button ref={closeRef} onClick={() => setOpen(null)} aria-label="Tutup" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-paper text-ink"><X className="h-6 w-6" /></button>
          <button onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="Foto sebelumnya" className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-paper/90 text-ink"><ChevronLeft /></button>
          <button onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="Foto berikutnya" className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-paper/90 text-ink"><ChevronRight /></button>
          <Image src={items[open].src} alt={items[open].alt} width={items[open].w} height={items[open].h} sizes="90vw" onClick={(e) => e.stopPropagation()} className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain" />
          <p className="absolute bottom-4 text-sm text-paper">{open + 1} / {items.length}</p>
        </div>
      )}
    </section>
  );
}
