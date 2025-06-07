import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Roboto_Mono,
  Plus_Jakarta_Sans,
  Poltawski_Nowy,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const poltawskiNowy = Poltawski_Nowy({
  variable: "--font-poltawski-nowy",
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doxx",
  description: "The Fastest Fully On-Chain DEX With CEX-Level Performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${robotoMono.variable} 
          ${plusJakartaSans.variable} 
          ${poltawskiNowy.variable}
          antialiased
        `}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster position='bottom-right' />
      </body>
    </html>
  );
}
