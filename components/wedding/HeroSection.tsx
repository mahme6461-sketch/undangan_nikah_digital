import Image from "next/image";
import { wedding } from "@/data/wedding";
import { formatDay } from "@/lib/format";
import { Branch, Divider } from "./Ornament";

export default function HeroSection() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-cream/60">
      <Branch className="absolute -left-10 top-0 h-48 w-48 opacity-80 md:h-72 md:w-72" />
      <Branch flip className="absolute -right-10 top-0 h-48 w-48 opacity-80 md:h-72 md:w-72" />
      <div className="section grid items-center gap-10 text-center md:grid-cols-2 md:text-left">
        <div className="order-2 md:order-1">
          <p className="font-serif text-lg italic">{wedding.opening}</p>
          <h2 className="mt-6 font-script text-5xl leading-tight text-sage-dark md:text-6xl">{wedding.bride.fullName}</h2>
          <p className="font-script text-4xl text-gold-dark">&amp;</p>
          <h2 className="font-script text-5xl leading-tight text-sage-dark md:text-6xl">{wedding.groom.fullName}</h2>
          <div className="mx-auto md:mx-0 md:w-40"><Divider /></div>
          <p className="font-serif text-2xl">{formatDay(wedding.weddingDate)}</p>
        </div>
        <div className="order-1 mx-auto w-full max-w-sm md:order-2">
          <div className="overflow-hidden rounded-t-full border border-gold/50 p-2">
            <Image src={wedding.heroPhoto} alt="Foto Raras dan Bagas" width={900} height={1100} priority sizes="(min-width:768px) 384px, 90vw" className="h-auto w-full rounded-t-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
