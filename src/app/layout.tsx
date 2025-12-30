import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileMenu from "@/components/MobileMenu";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aya Housing & Property Management",
  description: "Reliable, Structured, Hassle-free Property Support. Full property management, cleaning services, security, and maintenance for residential and commercial buildings.",
  keywords: ["property management", "housing", "cleaning services", "security", "maintenance", "Somalia", "Mogadishu"],
  authors: [{ name: "Aya Housing" }],
  creator: "Aya Housing & Property Management",
  publisher: "Aya Housing & Property Management",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.ayahousing.com'),
  openGraph: {
    title: "Aya Housing & Property Management",
    description: "Reliable, Structured, Hassle-free Property Support",
    url: "https://www.ayahousing.com",
    siteName: "Aya Housing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aya Housing & Property Management",
    description: "Reliable, Structured, Hassle-free Property Support",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b border-zinc-200 bg-white fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 shadow-sm supports-[backdrop-filter]:bg-white/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
            <a 
              href="#home" 
              className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity touch-manipulation active:scale-95"
              aria-label="Aya Housing Home"
            >
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
                <Image
                  src="/logo.webp"
                  alt="Aya Housing Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 80px"
                  priority
                />
              </div>
              <span className="text-base sm:text-lg font-semibold tracking-tight hidden sm:inline" style={{ color: 'var(--brand)' }}>Aya Housing</span>
            </a>
            <nav className="hidden lg:flex items-center gap-6 text-sm">
              <a 
                href="#home" 
                className="hover:text-[--brand] transition-all duration-300 hover:scale-105 py-2 px-1 touch-manipulation"
              >
                Home
              </a>
              <a 
                href="#services" 
                className="hover:text-[--brand] transition-all duration-300 hover:scale-105 py-2 px-1 touch-manipulation"
              >
                Services
              </a>
              <a 
                href="#contact" 
                className="hover:text-[--brand] transition-all duration-300 hover:scale-105 py-2 px-1 touch-manipulation"
              >
                Contact
              </a>
            </nav>
            <MobileMenu />
          </div>
        </header>
        {/* Offset fixed header height */}
        <main className="pt-16 sm:pt-20">
          {children}
        </main>
        <footer className="border-t border-zinc-200 bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-8 md:items-start">
              <div className="flex gap-3">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                  <Image
                    src="/logo.webp"
                    alt="Aya Housing Logo"
                    fill
                    className="object-contain object-top"
                    sizes="(max-width: 640px) 64px, 80px"
                  />
                </div>
                <div className="flex flex-col pt-0.5">
                  <h3 className="font-semibold mb-3" style={{ color: 'var(--brand)' }}>Aya Housing</h3>
                  <p className="text-sm text-zinc-600">Reliable, Structured, Hassle-free Property Support</p>
                </div>
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
        <ScrollToTop />
      </body>
    </html>
  );
}
