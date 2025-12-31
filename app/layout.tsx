import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/components/main/Header";
import CTASection from "@/components/main/CTA";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mukti Abdi Syukur | Portfolio",
  description: "Mobile & Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-white text-gray-900`}
      >
        {/* Header (fixed) */}
        <Header />

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer / CTA */}
        <CTASection />
      </body>
    </html>
  );
}
