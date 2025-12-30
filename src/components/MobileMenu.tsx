'use client';

import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';

const subscribeNoop = () => () => {};

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const drawerRef = useRef<HTMLElement>(null);

  // Hydration-safe "is client" flag (avoids setState-in-effect lint).
  const isClient = useSyncExternalStore(subscribeNoop, () => true, () => false);

  const close = () => setOpen(false);
  const toggle = () => setOpen((v) => !v);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
      {/* Header toggle button (hamburger -> X) */}
      <button
        type="button"
        onClick={toggle}
        className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center touch-manipulation active:scale-95 transition-transform"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls={menuId}
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        <span
          className={`block absolute w-6 h-0.5 bg-zinc-900 transition-transform duration-300 ${
            open ? 'rotate-45' : '-translate-y-2'
          }`}
        />
        <span
          className={`block absolute w-6 h-0.5 bg-zinc-900 transition-all duration-300 ${
            open ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}
        />
        <span
          className={`block absolute w-6 h-0.5 bg-zinc-900 transition-transform duration-300 ${
            open ? '-rotate-45' : 'translate-y-2'
          }`}
        />
      </button>

      {/* Portal the scrim + drawer to body so they can't be trapped by header stacking contexts */}
      {isClient &&
        createPortal(
          <>
            {/* Scrim only below the sticky header (h-16 sm:h-20) */}
            <div
              className={`fixed left-0 right-0 bottom-0 top-16 sm:top-20 bg-black/60 lg:hidden transition-opacity duration-200 ${
                open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
              style={{ zIndex: 40 }}
              onClick={close}
              aria-hidden="true"
            />

            {/* Drawer (scrollable) */}
            <nav
              id={menuId}
              ref={drawerRef}
              aria-label="Mobile navigation"
              className={`fixed right-0 bottom-0 top-16 sm:top-20 lg:hidden w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-200 ease-out overflow-y-auto overscroll-contain ${
                open ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
              }`}
              style={{ zIndex: 45 }}
            >
              <div className="px-6 py-6">
                <div className="space-y-2">
                  {/* Use normal anchors (no preventDefault) so navigation always works */}
                  <a
                    href="#home"
                    onClick={close}
                    className="w-full flex items-center justify-start px-4 py-4 text-lg font-semibold rounded-lg hover:bg-zinc-50 active:bg-zinc-100"
                    style={{ color: 'var(--brand)' }}
                  >
                    Home
                  </a>
                  <a
                    href="#services"
                    onClick={close}
                    className="w-full flex items-center justify-start px-4 py-4 text-lg font-semibold rounded-lg hover:bg-zinc-50 active:bg-zinc-100"
                    style={{ color: 'var(--brand)' }}
                  >
                    Services
                  </a>
                  <a
                    href="#contact"
                    onClick={close}
                    className="w-full flex items-center justify-start px-4 py-4 text-lg font-semibold rounded-lg hover:bg-zinc-50 active:bg-zinc-100"
                    style={{ color: 'var(--brand)' }}
                  >
                    Contact
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-200">
                  <div className="space-y-3 text-sm text-zinc-700">
                    <a href="tel:+252619397197" className="flex items-center gap-3 py-2 hover:opacity-80">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>+252 (0) 619397197</span>
                    </a>
                    <a href="mailto:AyaHousing@outlook.com" className="flex items-center gap-3 py-2 hover:opacity-80">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>AyaHousing@outlook.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </>,
          document.body
        )}
    </>
  );
}

