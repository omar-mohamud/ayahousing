'use client';

import { useState, useEffect, useRef } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const scrollYRef = useRef<number>(0);

  useEffect(() => {
    // Prevent background scroll when menu is open (while allowing menu scrolling)
    if (isOpen) {
      scrollYRef.current = window.scrollY || 0;
      document.body.style.overflow = 'hidden';
      // iOS-friendly scroll lock without jumping to top
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    } else {
      const top = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';

      const y = top ? Math.abs(parseInt(top, 10)) : scrollYRef.current;
      if (!Number.isNaN(y)) window.scrollTo(0, y);
    }
    return () => {
      const top = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';

      const y = top ? Math.abs(parseInt(top, 10)) : scrollYRef.current;
      if (!Number.isNaN(y)) window.scrollTo(0, y);
    };
  }, [isOpen]);

  // Handle swipe gestures to close menu
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isOpen) return;
    
    const swipeDistance = touchStartX.current - touchEndX.current;
    // If swiped left more than 50px, close menu
    if (swipeDistance > 50) {
      setIsOpen(false);
    }
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Smooth scroll to section and close menu
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  return (
    <>
      {/* Hamburger Button - Enhanced for mobile */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col gap-1.5 w-10 h-10 justify-center items-center z-[80] relative touch-manipulation active:scale-95 transition-transform"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <span
          className={`w-6 h-0.5 bg-zinc-900 transition-all duration-300 ease-in-out ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-zinc-900 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-zinc-900 transition-all duration-300 ease-in-out ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Overlay with fade animation */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-[2px] z-[70] lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-hidden="true"
      />

      {/* Mobile Menu - Enhanced with swipe support */}
      <nav
        id="mobile-menu"
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl z-[75] transform transition-transform duration-300 ease-out lg:hidden overflow-y-auto overscroll-contain ${
          isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col min-h-full pt-24 px-6 pb-8">
          {/* Close button inside menu for better UX */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-100 transition-colors touch-manipulation"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Links */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="py-4 px-4 text-lg font-semibold text-zinc-900 border-b border-zinc-200 transition-all touch-manipulation hover:bg-zinc-50 active:bg-zinc-100 rounded-t-lg -mx-2"
            style={{ color: 'var(--brand)' }}
          >
            Home
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, '#services')}
            className="py-4 px-4 text-lg font-semibold text-zinc-900 border-b border-zinc-200 transition-all touch-manipulation hover:bg-zinc-50 active:bg-zinc-100 -mx-2"
            style={{ color: 'var(--brand)' }}
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="py-4 px-4 text-lg font-semibold text-zinc-900 border-b border-zinc-200 transition-all touch-manipulation hover:bg-zinc-50 active:bg-zinc-100 rounded-b-lg -mx-2"
            style={{ color: 'var(--brand)' }}
          >
            Contact
          </a>

          {/* Additional mobile-friendly info */}
          <div className="mt-auto pt-8 border-t border-zinc-200">
            <div className="space-y-3 text-sm text-zinc-600">
              <a
                href="tel:+252619397197"
                className="flex items-center gap-3 py-2 touch-manipulation hover:opacity-80 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+252 (0) 619397197</span>
              </a>
              <a
                href="mailto:AyaHousing@outlook.com"
                className="flex items-center gap-3 py-2 touch-manipulation hover:opacity-80 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>AyaHousing@outlook.com</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

