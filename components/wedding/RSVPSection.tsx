"use client";
import { useEffect, useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import Reveal from "./Reveal";
import { useToast } from "./Toast";

interface Wish { name: string; attend: string; message: string }
type Errors = Partial<Record<"name" | "attend" | "message", string>>;

export default function RSVPSection({ guest }: { guest: string }) {
  const [name, setName] = useState("");
  const [attend, setAttend] = useState("");
  const [count, setCount] = useState("1");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [wishes, setWishes] = useState<Wish[]>([]); // state lokal, hilang saat halaman dimuat ulang
  const { show, node } = useToast();
  useEffect(() => { if (guest) setName((n) => n || guest); }, [guest]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const err: Errors = {};
    if (name.trim().length < 2) err.name = "Isi nama minimal 2 karakter.";
    if (!attend) err.attend = "Pilih konfirmasi kehadiran.";
    if (message.trim().length < 3) err.message = "Tulis ucapan minimal 3 karakter.";
    if (message.length > 300) err.message = "Ucapan maksimal 300 karakter.";
    setErrors(err);
    if (Object.keys(err).length) { show("Periksa kembali isian yang ditandai.", false); return; }
    setSending(true);
    setTimeout(() => { // simulasi pengiriman (Tahap 1: belum ada backend)
      setWishes((w) => [{ name: name.trim(), attend: attend === "hadir" ? `Hadir (${count} orang)` : "Tidak hadir", message: message.trim() }, ...w]);
      setMessage(""); setAttend(""); setSending(false);
      show("Terima kasih! Ucapan Anda tampil di bawah. Pada tahap ini data belum disimpan permanen.");
    }, 900);
  };

  const err = (k: keyof Errors) => errors[k] && <p id={`${k}-err`} className="mt-1 text-sm text-red-700">{errors[k]}</p>;
  return (
    <section id="rsvp" className="section max-w-2xl">
      {node}
      <Reveal className="mb-10 text-center">
        <h2 className="heading">RSVP &amp; Ucapan</h2>
        <p className="mt-3 text-ink/80">Konfirmasi kehadiran dan sampaikan doa terbaik Anda.</p>
      </Reveal>
      <Reveal>
        <form onSubmit={submit} noValidate className="space-y-5 rounded-[2rem] border border-gold/40 bg-paper p-6 md:p-8">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm">Nama</label>
            <input id="name" className="field" value={name} onChange={(e) => setName(e.target.value)} maxLength={60} aria-invalid={!!errors.name} aria-describedby="name-err" placeholder="Nama lengkap Anda" />
            {err("name")}
          </div>
          <fieldset>
            <legend className="mb-2 text-sm">Konfirmasi kehadiran</legend>
            <div className="grid grid-cols-2 gap-3">
              {[["hadir", "Hadir"], ["tidak", "Tidak hadir"]].map(([v, l]) => (
                <label key={v} className={`cursor-pointer rounded-xl border px-4 py-3 text-center transition ${attend === v ? "border-gold-dark bg-gold/15" : "border-sage/40"}`}>
                  <input type="radio" name="attend" value={v} checked={attend === v} onChange={() => setAttend(v)} className="sr-only" />{l}
                </label>
              ))}
            </div>
            {err("attend")}
          </fieldset>
          {attend === "hadir" && (
            <div>
              <label htmlFor="count" className="mb-1 block text-sm">Jumlah tamu</label>
              <select id="count" className="field" value={count} onChange={(e) => setCount(e.target.value)}>
                {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n} orang</option>)}
              </select>
            </div>
          )}
          <div>
            <label htmlFor="message" className="mb-1 block text-sm">Ucapan &amp; doa</label>
            <textarea id="message" rows={4} className="field" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={320} aria-invalid={!!errors.message} aria-describedby="message-err" placeholder="Tulis ucapan untuk kedua mempelai" />
            <div className="flex justify-between">{err("message") || <span />}<span className="mt-1 text-xs text-ink/60">{message.length}/300</span></div>
          </div>
          <button type="submit" disabled={sending} className="btn w-full"><Send className="h-4 w-4" />{sending ? "Mengirim…" : "Kirim Ucapan"}</button>
        </form>
      </Reveal>
      {wishes.length > 0 && (
        <ul className="mt-10 space-y-4" aria-label="Daftar ucapan">
          {wishes.map((w, i) => (
            <li key={i} className="animate-fade rounded-2xl border border-sage/30 bg-cream/60 p-5">
              <p className="font-medium">{w.name} <span className="text-sm font-normal text-gold-dark">· {w.attend}</span></p>
              <p className="mt-1 whitespace-pre-line text-ink/80">{w.message}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
