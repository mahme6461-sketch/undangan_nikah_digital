import { wedding } from "@/data/wedding";
import Reveal from "./Reveal";
import { Divider } from "./Ornament";
export default function QuoteSection() {
  return (
    <section aria-label="Kutipan pernikahan" className="section max-w-3xl text-center">
      <Reveal>
        <Divider />
        <blockquote>
          <p className="font-serif text-xl italic leading-relaxed md:text-2xl">&ldquo;{wedding.quote.text}&rdquo;</p>
          <footer className="mt-5 text-sm tracking-wide text-gold-dark">{wedding.quote.source}</footer>
        </blockquote>
      </Reveal>
    </section>
  );
}
