import Image from "next/image";
import { wedding } from "@/data/wedding";
import { formatShortDate } from "@/lib/format";
import { Branch } from "./Ornament";
import { MailOpen } from "lucide-react";

export default function WeddingCover({ guest, opened, onOpen }: { guest: string; opened: boolean; onOpen: () => void }) {
  return (
    <section aria-label="Sampul undangan" aria-hidden={opened}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden text-center transition-all duration-[900ms] ease-in-out ${opened ? "pointer-events-none -translate-y-full opacity-0" : ""}`}>
      <Image src={wedding.coverPhoto} alt="Foto Raras dan Bagas" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-ivory/80" />
      <Branch className="absolute -left-8 -top-4 h-56 w-56 animate-sway opacity-90 md:h-80 md:w-80" />
      <Branch flip className="absolute -right-8 -bottom-4 h-56 w-56 rotate-180 animate-sway opacity-90 md:h-80 md:w-80" />
      <div className="relative z-10 px-6">
        <p className="animate-rise font-serif text-lg italic text-ink/80" style={{ animationDelay: "200ms" }}>The Wedding of</p>
        <h1 className="animate-rise font-script text-6xl leading-tight text-sage-dark md:text-8xl" style={{ animationDelay: "500ms" }}>
          {wedding.bride.nickname} <span className="text-gold-dark">&amp;</span> {wedding.groom.nickname}
        </h1>
        <p className="animate-rise font-serif text-xl text-ink" style={{ animationDelay: "800ms" }}>{formatShortDate(wedding.weddingDate)}</p>
        <div className="animate-rise mx-auto mt-10 max-w-xs rounded-2xl border border-gold/40 bg-paper/80 px-6 py-5" style={{ animationDelay: "1100ms" }}>
          <p className="text-sm text-ink/70">Kepada Yth.</p>
          <p className="mt-1 font-serif text-2xl text-ink">{guest || "Tamu Undangan"}</p>
          <p className="mt-2 text-xs text-ink/60">Mohon maaf apabila ada kesalahan penulisan nama dan gelar.</p>
        </div>
        <button onClick={onOpen} className="btn animate-rise mt-8" style={{ animationDelay: "1400ms" }}>
          <MailOpen className="h-4 w-4" /> Buka Undangan
        </button>
      </div>
    </section>
  );
}
