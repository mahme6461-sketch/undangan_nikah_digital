import { CalendarDays, Clock, MapPin } from "lucide-react";
import { wedding } from "@/data/wedding";
import { formatDay, formatTime, mapsUrl } from "@/lib/format";
import Reveal from "./Reveal";

export default function EventSection() {
  return (
    <section id="acara" className="section">
      <Reveal className="mb-12 text-center"><h2 className="heading">Acara Pernikahan</h2></Reveal>
      <div className="grid gap-8 md:grid-cols-2">
        {wedding.events.map((e, i) => (
          <Reveal key={e.id} delay={i * 150}>
            <article className="h-full rounded-[2rem] border border-gold/40 bg-paper p-8 text-center">
              <h3 className="text-3xl font-medium text-sage-dark">{e.title}</h3>
              <ul className="mt-6 space-y-3 text-ink/90">
                <li className="flex items-center justify-center gap-2"><CalendarDays className="h-4 w-4 text-gold-dark" />{formatDay(e.start)}</li>
                <li className="flex items-center justify-center gap-2"><Clock className="h-4 w-4 text-gold-dark" />{formatTime(e.start)} – {formatTime(e.end)} WIB</li>
                <li className="pt-2 font-serif text-xl">{e.venue}</li>
                <li className="flex items-start justify-center gap-2 text-sm"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />{e.address}</li>
              </ul>
              <a href={mapsUrl(e.mapsQuery)} target="_blank" rel="noopener noreferrer" className="btn mt-7">
                <MapPin className="h-4 w-4" /> Lihat Lokasi
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
