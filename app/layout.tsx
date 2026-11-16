import type { Metadata } from "next";
import { Taviraj, Pinyon_Script, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import "./sections.css";
import "./story.css";

const display = Taviraj({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// skrip untuk monogram "Cm", mengikuti monogram di label kemasan asli
const mark = Pinyon_Script({
  variable: "--font-mark",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cak Mimin · Bumbu Rujak Manis",
  description:
    "Bumbu rujak manis Cak Mimin, oleh-oleh khas Surabaya. Empat tingkat pedas, gula aren asli, tanpa pengawet. Pesan langsung via WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${display.variable} ${mark.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
