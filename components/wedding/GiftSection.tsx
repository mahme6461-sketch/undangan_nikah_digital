"use client";
import { Copy, Gift } from "lucide-react";
import { wedding } from "@/data/wedding";
import Reveal from "./Reveal";
import { useToast } from "./Toast";

export default function GiftSection() {
  const { show, node } = useToast();
  const copy = async (num: string, bank: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(num);
      else { const t = document.createElement("textarea"); t.value = num; t.style.position = "fixed"; t.style.opacity = "0"; document.body.appendChild(t); t.select(); const ok = document.execCommand("copy"); t.remove(); if (!ok) throw new Error("copy"); }
      show(`Nomor ${bank} berhasil disalin.`);
    } catch { show("Gagal menyalin. Salin nomor secara manual.", false); }
  };
  return (
    <section id="hadiah" className="bg-sage-light/60">
      <div className="section max-w-3xl">
        {node}
        <Reveal className="mb-10 text-center">
          <Gift className="mx-auto mb-3 h-8 w-8 text-gold-dark" aria-hidden="true" />
          <h2 className="heading">Amplop Digital</h2>
          <p className="mx-auto mt-3 max-w-md text-ink/80">Kehadiran dan doa Anda sudah cukup bagi kami. Bila ingin memberi tanda kasih, silakan melalui rekening berikut.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {wedding.gifts.map((g, i) => (
            <Reveal key={g.number} delay={i * 150}>
              <div className="rounded-3xl border border-gold/40 bg-paper p-7 text-center">
                <p className="text-sm text-gold-dark">{g.bank}</p>
                <p className="my-2 font-serif text-3xl tabular-nums tracking-wide">{g.number}</p>
                <p className="text-sm text-ink/80">a.n. {g.holder}</p>
                <button onClick={() => copy(g.number, g.bank)} className="btn-outline mt-5"><Copy className="h-4 w-4" /> Salin Nomor</button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
