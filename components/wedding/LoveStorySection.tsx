import { Heart } from "lucide-react";
import { wedding } from "@/data/wedding";
import Reveal from "./Reveal";

export default function LoveStorySection() {
  return (
    <section id="kisah" className="bg-cream/60">
      <div className="section max-w-3xl">
        <Reveal className="mb-12 text-center"><h2 className="heading">Kisah Cinta Kami</h2></Reveal>
        <ol className="relative ml-4 border-l border-gold/50 md:ml-0 md:border-l-0">
          {wedding.loveStory.map((s, i) => (
            <li key={s.title} className="relative pb-12 pl-10 last:pb-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 md:pl-0">
              <span className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-gold bg-paper text-gold-dark md:static md:col-start-2 md:row-start-1 md:mx-auto">
                <Heart className="h-4 w-4" fill="currentColor" />
              </span>
              <Reveal className={`md:row-start-1 ${i % 2 ? "md:col-start-3" : "md:col-start-1 md:text-right"}`}>
                <time className="text-sm text-gold-dark">{s.date}</time>
                <h3 className="text-2xl font-medium text-sage-dark">{s.title}</h3>
                <p className="mt-1 text-ink/80">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
