"use client";
import { useEffect, useState } from "react";
import { wedding } from "@/data/wedding";
import Reveal from "./Reveal";

const target = new Date(wedding.weddingDate).getTime();
const endAt = Math.max(...wedding.events.map((e) => new Date(e.end).getTime()));

export default function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = now === null ? 0 : Math.max(0, target - now);
  const s = Math.floor(diff / 1000);
  const units = [["Hari", Math.floor(s / 86400)], ["Jam", Math.floor((s % 86400) / 3600)], ["Menit", Math.floor((s % 3600) / 60)], ["Detik", s % 60]] as const;
  const status = now === null ? null : now >= endAt ? "Acara telah usai. Terima kasih atas doa dan kehadiran Anda." : now >= target ? "Hari bahagia telah tiba!" : null;

  return (
    <section id="hitung-mundur" className="bg-sage-light/60">
      <div className="section max-w-3xl text-center">
        <Reveal>
          <h2 className="heading">Menuju Hari Bahagia</h2>
          {status ? <p className="mt-8 font-serif text-2xl">{status}</p> : (
            <div className="mt-8 grid grid-cols-4 gap-3" role="timer" aria-label="Hitung mundur menuju pernikahan">
              {units.map(([label, v]) => (
                <div key={label} className="rounded-2xl border border-gold/40 bg-paper py-5">
                  <div className="font-serif text-3xl tabular-nums md:text-5xl">{now === null ? "--" : String(v).padStart(2, "0")}</div>
                  <div className="mt-1 text-xs text-ink/70 md:text-sm">{label}</div>
                </div>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
