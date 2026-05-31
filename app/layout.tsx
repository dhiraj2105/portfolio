import type { Metadata } from "next";

import { Inter, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Dhiraj Kumar",
  description:
    "Full stack systems engineer specializing in scalable infrastructure, backend optimization, and production-grade systems. Explore my projects including URL shorteners, trading platforms, and developer tools.",
  keywords: [
    "systems engineer",
    "full stack developer",
    "backend",
    "infrastructure",
    "Next.js",
    "Spring Boot",
    "portfolio",
    "dhiraj kumar",
    "dhiraj2105",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dhiraj Kumar — Full Stack Systems Engineer",
    description:
      "Portfolio showcasing scalable systems and production infrastructure projects.",
    siteName: "Dhiraj Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhiraj Kumar — Full Stack Systems Engineer",
    description: "Scalable infrastructure and systems engineering portfolio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${mono.variable}
          bg-[#050505]
          text-[#f5f5f5]
          grid-bg
        `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
