import { wedding } from "@/data/wedding";
import { Branch, Divider } from "./Ornament";
export default function ClosingSection() {
  return (
    <footer className="relative overflow-hidden">
      <Branch className="absolute -left-10 bottom-0 h-48 w-48 -scale-y-100 opacity-80" />
      <Branch flip className="absolute -right-10 bottom-0 h-48 w-48 -scale-y-100 opacity-80" />
      <div className="section max-w-2xl pb-32 text-center">
        <p className="leading-relaxed text-ink/80">{wedding.closing}</p>
        <Divider />
        <p className="font-serif text-lg italic">Atas kehadiran dan doa restu Anda, kami ucapkan terima kasih.</p>
        <p className="mt-6 font-serif">Kami yang berbahagia,</p>
        <p className="mt-2 font-script text-5xl text-sage-dark">{wedding.bride.nickname} &amp; {wedding.groom.nickname}</p>
      </div>
    </footer>
  );
}
