import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Rishabh Pawani — AI Engineer",
  description:
    "AI Engineer building production-grade agents, voice systems, and RAG pipelines. Portfolio of Rishabh Pawani — Generative AI, Automation, Data Science.",
  metadataBase: new URL("https://rishabhpawani.tech"),
  openGraph: {
    title: "Rishabh Pawani — AI Engineer",
    description:
      "Engineering intelligence. Building AI that works for people.",
    url: "https://rishabhpawani.tech",
    siteName: "Rishabh Pawani",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-parchment text-ink font-body selection:bg-gold/25 selection:text-ink">
        <SmoothScroll />
        <CursorGlow />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
