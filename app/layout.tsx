import type { Metadata, Viewport } from "next";
import "./globals.css";
import { wedding } from "@/data/wedding";

export const metadata: Metadata = {
  title: wedding.siteTitle,
  description: `Dengan penuh sukacita kami mengundang Anda ke pernikahan ${wedding.bride.nickname} & ${wedding.groom.nickname}.`,
  openGraph: { title: wedding.siteTitle, type: "website", locale: "id_ID" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#FBF8F1" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="id"><body>{children}</body></html>);
}
