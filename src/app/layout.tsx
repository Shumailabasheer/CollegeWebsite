import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <img src="/jpg.png" alt="College Logo" className="logo" />
          <nav>
            <a href="/">Home</a>
            <a href="/campus">Facilities</a>
            <a href="/contact">Contact</a>
          </nav>

        </header>
        {children}
      </body>
    </html>
  );
}