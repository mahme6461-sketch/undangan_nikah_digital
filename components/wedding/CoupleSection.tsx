import Image from "next/image";
import { Instagram } from "lucide-react";
import { wedding, type Person } from "@/data/wedding";
import Reveal from "./Reveal";

function Profile({ p, role }: { p: Person; role: string }) {
  return (
    <div className="text-center">
      <div className="mx-auto w-56 overflow-hidden rounded-t-full border border-gold/50 p-1.5 md:w-64">
        <Image src={p.photo} alt={`Foto ${p.nickname}`} width={700} height={900} sizes="256px" className="h-auto w-full rounded-t-full" />
      </div>
      <h3 className="mt-6 font-script text-4xl text-sage-dark">{p.fullName}</h3>
      <p className="mt-1 text-sm text-gold-dark">{role} · {p.nickname}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink/80">{p.childOrder} dari<br />{p.father} &amp; {p.mother}</p>
      {p.instagram && (
        <a href={p.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${p.nickname}`} className="btn-outline mt-4 !px-4 !py-2">
          <Instagram className="h-4 w-4" /> Instagram
        </a>
      )}
    </div>
  );
}
export default function CoupleSection() {
  return (
    <section id="mempelai" className="bg-cream/60">
      <div className="section">
        <Reveal className="mb-12 text-center">
          <h2 className="heading">Mempelai</h2>
          <p className="mx-auto mt-3 max-w-md text-ink/80">Dengan memohon rahmat dan ridho Tuhan Yang Maha Esa, kami mengundang Anda pada pernikahan kami.</p>
        </Reveal>
        <div className="grid gap-14 md:grid-cols-2">
          <Reveal><Profile p={wedding.bride} role="Mempelai Wanita" /></Reveal>
          <Reveal delay={150}><Profile p={wedding.groom} role="Mempelai Pria" /></Reveal>
        </div>
      </div>
    </section>
  );
}
