import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Sora, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JR. NTR | The Global Icon of Indian Cinema — Official Experience",
  description:
    "An award-winning cinematic journey through the legacy, historic filmography, global milestones, and international acclaim of Indian superstar Nandamuri Taraka Rama Rao Jr. (Jr. NTR).",
  keywords: [
    "Jr NTR",
    "NTR Jr",
    "Nandamuri Taraka Rama Rao Jr",
    "RRR Komuram Bheem",
    "Devara",
    "Indian Cinema Superstar",
    "Telugu Cinema Icon",
    "Naatu Naatu Oscar",
    "Man of Masses",
  ],
  authors: [{ name: "Creative Studio & NTR Fan Community" }],
  openGraph: {
    title: "JR. NTR | The Global Icon of Indian Cinema",
    description: "Experience the monumental cinematic journey of Jr. NTR — from Student No.1 to RRR and Devara.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${sora.variable} ${inter.variable} dark`}
    >
      <body className="min-h-screen bg-[#050505] text-white selection:bg-[#D5FF40] selection:text-[#050505] antialiased">
        {children}
      </body>
    </html>
  );
}
