'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    
    const toggleVisibility = () => {
      // Show button after scrolling 400px (better for mobile)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleScroll = () => {
      setIsScrolling(true);
      toggleVisibility();
      
      // Clear existing timer
      clearTimeout(scrollTimer);
      
      // Set scrolling to false after scroll ends
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScroll, { passive: true });
    toggleVisibility(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', optimizedScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  const scrollToTop = () => {
    // Prevent multiple clicks
    if (isScrolling) return;
    
    setIsScrolling(true);
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    
    // Reset after scroll completes
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 bg-[var(--brand)] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl active:shadow-md transition-all duration-300 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 touch-manipulation ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
          : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
      } ${isScrolling ? 'scale-95' : 'hover:scale-110'}`}
      aria-label="Scroll to top"
      style={{ backgroundColor: 'var(--brand)' }}
      disabled={!isVisible || isScrolling}
    >
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}

