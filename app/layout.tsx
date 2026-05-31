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
  metadataBase: new URL("https://dhiraj-one.vercel.app"),

  title: {
    default: "Dhiraj Kumar — Software Engineer",
    template: "%s | Dhiraj Kumar",
  },

  description:
    "Full stack software engineer specializing in scalable infrastructure, backend optimization, AI systems, trading platforms, and production-grade software engineering.",

  keywords: [
    "Dhiraj Kumar",
    "Systems Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "Spring Boot",
    "Java",
    "Python",
    "Redis",
    "Docker",
    "Linux",
    "Trading Systems",
    "AI Infrastructure",
    "Portfolio",
  ],

  authors: [
    {
      name: "Dhiraj Kumar",
    },
  ],

  creator: "Dhiraj Kumar",
  publisher: "Dhiraj Kumar",
  category: "Technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://dhiraj-one.vercel.app",
  },

  openGraph: {
    type: "website",
    url: "https://dhiraj-one.vercel.app",
    title: "Dhiraj Kumar — Software Engineer",
    description: "Building high-performance software systems.",
    siteName: "Dhiraj Kumar",
    locale: "en_US",
    images: [
      {
        url: "https://dhiraj-one.vercel.app/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dhiraj Kumar Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dhiraj Kumar — Software Engineer",
    description: "Building high-performance software systems.",
    creator: "@dhiraj2105",
    images: ["https://dhiraj-one.vercel.app/opengraph-image"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
