'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BRAND_INFO } from '@/data/content';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="vh-header-wrap">
      {/* Tier 1: Clean White Brand Bar (Logo blends seamlessly) */}
      <div className="vh-brand-bar">
        <div className="container vh-brand-bar-inner">
          <Link href="/" className="vh-brand" aria-label="VIEHORA TRAVEL trang chủ" onClick={closeMenu}>
            <img
              src="/assets/img/viehora-logo.jpg"
              alt="VIEHORA TRAVEL Logo"
              style={{
                height: '56px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </Link>

          <div className="vh-header-actions">
            <a href={`tel:${BRAND_INFO.hotlineTel}`} className="vh-btn-navy-outline desktop-only">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{BRAND_INFO.hotline}</span>
            </a>
            <a href={BRAND_INFO.zaloUrl} target="_blank" rel="noopener noreferrer" className="vh-btn-gold">
              Zalo Tư Vấn
            </a>
            <button
              type="button"
              className="vh-mobile-btn"
              aria-label="Mở menu"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Tier 2: Full-width Navy Navigation Bar */}
      <nav className={`vh-nav-strip ${mobileOpen ? 'is-active' : ''}`}>
        <div className="container">
          <ul className="vh-nav-list">
            <li className={pathname === '/' ? 'current-menu-item' : ''}>
              <Link href="/" onClick={closeMenu}>
                Trang chủ
              </Link>
            </li>
            <li className={pathname.startsWith('/category/trong-nuoc') ? 'current-menu-item' : ''}>
              <Link href="/category/trong-nuoc" onClick={closeMenu}>
                Tour Trong Nước <span className="vh-caret">▾</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link href="/category/trong-nuoc" onClick={closeMenu}>
                    Tất cả Tour Trong Nước
                  </Link>
                </li>
                <li>
                  <Link href="/tim-kiem?q=Hà+Giang" onClick={closeMenu}>
                    Miền Bắc · Hà Giang – Sapa – Hạ Long
                  </Link>
                </li>
                <li>
                  <Link href="/tim-kiem?q=Đà+Nẵng" onClick={closeMenu}>
                    Miền Trung · Đà Nẵng – Hội An – Huế
                  </Link>
                </li>
                <li>
                  <Link href="/tim-kiem?q=Phú+Quốc" onClick={closeMenu}>
                    Biển Đảo · Phú Quốc – Nha Trang
                  </Link>
                </li>
                <li>
                  <Link href="/tim-kiem?q=Đà+Lạt" onClick={closeMenu}>
                    Tây Nguyên · Đà Lạt – Buôn Mê
                  </Link>
                </li>
              </ul>
            </li>
            <li className={pathname.startsWith('/category/gia-re') ? 'current-menu-item' : ''}>
              <Link href="/category/gia-re" onClick={closeMenu}>
                Tour Giá Tốt
              </Link>
            </li>
            <li className={pathname.startsWith('/ve-may-bay') ? 'current-menu-item' : ''}>
              <Link href="/ve-may-bay" onClick={closeMenu}>
                Vé Máy Bay
              </Link>
            </li>
            <li className={pathname.startsWith('/tin-tuc') ? 'current-menu-item' : ''}>
              <Link href="/tin-tuc" onClick={closeMenu}>
                Cẩm Nang
              </Link>
            </li>
            <li className={pathname.startsWith('/gioi-thieu') ? 'current-menu-item' : ''}>
              <Link href="/gioi-thieu" onClick={closeMenu}>
                Về Viehora
              </Link>
            </li>
          </ul>

          <div className="vh-mobile-drawer-actions">
            <a href={`tel:${BRAND_INFO.hotlineTel}`} className="vh-btn-navy-outline">
              {BRAND_INFO.hotline}
            </a>
            <a href={BRAND_INFO.zaloUrl} target="_blank" rel="noopener noreferrer" className="vh-btn-gold">
              Zalo Tư Vấn
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
