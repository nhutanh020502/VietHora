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
    <>
      {/* Topbar from viehora-travel */}
      <div className="vh-topbar">
        <div className="container vh-topbar-inner">
          <span>Khám phá Việt Nam &amp; thế giới theo cách riêng của bạn · Beyond Every Horizon</span>
          <div className="vh-top-links">
            <a href={`tel:${BRAND_INFO.hotlineTel}`}>{BRAND_INFO.hotline}</a>
            <span>•</span>
            <a href={`mailto:${BRAND_INFO.email}`}>{BRAND_INFO.email}</a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="vh-header">
        <div className="container vh-nav-bar">
          <Link href="/" className="vh-brand" aria-label="VIEHORA TRAVEL trang chủ" onClick={closeMenu}>
            <span className="vh-brand-mark">
              V<span>✦</span>
            </span>
            <span className="vh-brand-copy">
              <strong>VIEHORA</strong>
              <small>TRAVEL</small>
            </span>
          </Link>

          <nav className={`vh-nav-menu ${mobileOpen ? 'is-active' : ''}`}>
            <ul>
              <li className={pathname === '/' ? 'current-menu-item' : ''}>
                <Link href="/" onClick={closeMenu}>
                  Trang chủ
                </Link>
              </li>
              <li className={pathname.startsWith('/category/trong-nuoc') ? 'current-menu-item' : ''}>
                <Link href="/category/trong-nuoc" onClick={closeMenu}>
                  Tour Trong Nước ▾
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/category/trong-nuoc" onClick={closeMenu}>
                      Tất cả Tour Trong Nước
                    </Link>
                  </li>
                  <li>
                    <Link href="/tim-kiem?q=Phú+Quốc" onClick={closeMenu}>
                      Tour Phú Quốc
                    </Link>
                  </li>
                  <li>
                    <Link href="/tim-kiem?q=Đà+Nẵng" onClick={closeMenu}>
                      Tour Đà Nẵng – Hội An
                    </Link>
                  </li>
                  <li>
                    <Link href="/tim-kiem?q=Hà+Nội" onClick={closeMenu}>
                      Tour Miền Bắc – Sapa
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={pathname.startsWith('/category/nuoc-ngoai') ? 'current-menu-item' : ''}>
                <Link href="/category/nuoc-ngoai" onClick={closeMenu}>
                  Tour Quốc Tế ▾
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/category/nuoc-ngoai" onClick={closeMenu}>
                      Tất cả Tour Quốc Tế
                    </Link>
                  </li>
                  <li>
                    <Link href="/tim-kiem?q=Nhật+Bản" onClick={closeMenu}>
                      Tour Nhật Bản
                    </Link>
                  </li>
                  <li>
                    <Link href="/tim-kiem?q=Hàn+Quốc" onClick={closeMenu}>
                      Tour Hàn Quốc
                    </Link>
                  </li>
                  <li>
                    <Link href="/tim-kiem?q=Trung+Quốc" onClick={closeMenu}>
                      Tour Trung Quốc
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={pathname.startsWith('/category/hanh-huong') ? 'current-menu-item' : ''}>
                <Link href="/category/hanh-huong" onClick={closeMenu}>
                  Hành Hương
                </Link>
              </li>
              <li className={pathname.startsWith('/visa') ? 'current-menu-item' : ''}>
                <Link href="/visa" onClick={closeMenu}>
                  Visa
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
          </nav>

          <div className="vh-header-actions">
            <a href={`tel:${BRAND_INFO.hotlineTel}`} className="vh-btn-navy-outline desktop-only">
              {BRAND_INFO.hotline}
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
      </header>
    </>
  );
}
