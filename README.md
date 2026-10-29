# Undangan Pernikahan Digital – Tahap 1

## Menjalankan
```bash
npm install
npm run dev        # http://localhost:3000
# contoh nama tamu: http://localhost:3000/?to=Bapak%20Andi
npm run typecheck && npm run lint && npm run build
```
## Mengganti isi
- Semua data (nama, tanggal, acara, lokasi, rekening, foto, kutipan, kisah): `data/wedding.ts`
- Foto: timpa file di `public/images/` atau ubah path di `data/wedding.ts`
- Musik: taruh file mp3 di `public/music/wedding.mp3` (tombol musik otomatis tersembunyi bila file tidak ada)
## Catatan Tahap 1
RSVP/ucapan hanya state lokal (hilang saat refresh). Rekening adalah data contoh. Font dimuat dari Google Fonts via CSS.
## Siap untuk tahap berikutnya
`data/wedding.ts` dapat diganti pemanggilan API/DB; RSVPSection punya satu titik submit untuk dihubungkan ke backend.
