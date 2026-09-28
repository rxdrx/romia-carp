import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Romia Carpintería"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
          {children}
        </main>
      </body>
    </html>
  );
}
