'use client';

import { useEffect, useState } from 'react';
import { BRAND_INFO } from '@/data/content';

export default function FloatingContact() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 240);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="vh-floating-contact" aria-label="Liên hệ nhanh">
      {/* Messenger */}
      <a
        href="https://m.me/viehoratravel"
        target="_blank"
        rel="noopener noreferrer"
        className="vh-fab vh-fab-messenger"
        aria-label="Chat Messenger VIEHORA TRAVEL"
        title="Chat Messenger"
      >
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.45 5.517 3.717 7.185V22l3.424-1.881c.907.252 1.87.388 2.859.388 5.523 0 10-4.145 10-9.249C22 6.145 17.523 2 12 2zm1.002 12.449l-2.549-2.721-4.974 2.721 5.472-5.81 2.613 2.72 4.91-2.72-5.472 5.811z" />
        </svg>
      </a>

      {/* Zalo */}
      <a
        href={BRAND_INFO.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="vh-fab vh-fab-zalo"
        aria-label="Chat Zalo VIEHORA TRAVEL"
        title="Chat Zalo 0931 795 135"
      >
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>

      {/* Phone */}
      <a
        href={`tel:${BRAND_INFO.hotlineTel}`}
        className="vh-fab vh-fab-phone"
        aria-label={`Gọi Hotline ${BRAND_INFO.hotline}`}
        title={`Gọi ${BRAND_INFO.hotline}`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

      {/* Scroll to top */}
      {showTop && (
        <button
          type="button"
          className="vh-fab vh-fab-top"
          aria-label="Lên đầu trang"
          title="Lên đầu trang"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </div>
  );
}
