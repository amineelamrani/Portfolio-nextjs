import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amine's Portfolio - Full Stack MERN & Next.js Developer",
  description:
    "An eye-catching, interactive developer portfolio built with Next.js, TypeScript, TailwindCSS, Aceternity UI, shadcn/ui, Three.js, and Framer Motion. Showcasing modern web design, smooth animations, and a mastery of the MERN stack for building fast, responsive, and visually engaging web applications.",
  keywords: [
    "Amine Portfolio",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js",
    "React Developer",
    "TypeScript",
    "TailwindCSS",
    "shadcn/ui",
    "Aceternity UI",
    "Three.js",
    "Framer Motion",
    "Web Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Modern Web Design",
  ],
  authors: [{ name: "Amine" }],
  icons: {
    icon: "/favicon.jpg",
  },
  openGraph: {
    title: "Amine's Portfolio - Full Stack MERN & Next.js Developer",
    description:
      "Explore Amine's interactive portfolio built with Next.js, TypeScript, TailwindCSS, Three.js, and Framer Motion — a showcase of creativity and technical mastery in modern web development.",
    url: "",
    siteName: "Amine's Portfolio",
    images: [
      {
        url: "/favicon.jpg",
        width: 1200,
        height: 630,
        alt: "Amine's Developer Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other:{
    "google-site-verification": "8bSHL_dLGhm83EoHAXxM9Wp-tSvD_eDJkhOtnCZrmO0",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingNav
          className="text-white bg-slate-950"
          navItems={[
            { name: "About", link: "#about" },
            { name: "Projects", link: "#projects" },
            { name: "Experiences", link: "#experiences" },
            { name: "Contact", link: "#contact" },
          ]}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
