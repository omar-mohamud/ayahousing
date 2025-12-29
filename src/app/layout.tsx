import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aya Housing",
  description: "Centralized property listings, rentals, and maintenance services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b border-zinc-200 bg-white sticky top-0 z-50 transition-shadow duration-300 shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src="/logo.webp"
                  alt="Aya Housing Logo"
                  fill
                  className="object-contain"
                  sizes="80px"
                  priority
                />
              </div>
              <span className="text-lg font-semibold tracking-tight" style={{ color: 'var(--brand)' }}>Aya Housing</span>
            </a>
            <nav className="flex items-center gap-6 text-sm">
              <a href="#home" className="hover:text-[--brand] transition-all duration-300 hover:scale-105">Home</a>
              <a href="#services" className="hover:text-[--brand] transition-all duration-300 hover:scale-105">Services</a>
              <a href="#contact" className="hover:text-[--brand] transition-all duration-300 hover:scale-105">Contact</a>
            </nav>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="border-t border-zinc-200 bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src="/logo.webp"
                      alt="Aya Housing Logo"
                      fill
                      className="object-contain"
                      sizes="96px"
                    />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--brand)' }}>Aya Housing</h3>
                </div>
                <p className="text-sm text-zinc-600">Reliable, Structured, Hassle-free Property Support</p>
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold mb-3" style={{ color: 'var(--brand)' }}>Contact</h3>
                <div className="space-y-2 text-sm text-zinc-600">
                  <p>+252 (0) 619397197</p>
                  <p>
                    <a href="mailto:AyaHousing@outlook.com" className="hover:text-[--brand] transition-colors">
                      AyaHousing@outlook.com
                    </a>
                  </p>
                  <p>www.ayahousing.com</p>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold mb-3" style={{ color: 'var(--brand)' }}>Services</h3>
                <div className="space-y-2 text-sm text-zinc-600">
                  <p>Full Property Management</p>
                  <p>Cleaning Services</p>
                  <p>Security & Access Management</p>
                  <p>Maintenance & Add-on Services</p>
                </div>
              </div>
            </div>
            <div className="border-t border-zinc-200 pt-8 text-center text-sm text-zinc-600">
              <p>© {new Date().getFullYear()} Aya Housing & Property Management. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
