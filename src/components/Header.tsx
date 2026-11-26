'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BRAND_INFO } from '@/data/content';
import { useLanguage } from '@/lib/i18n';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="vh-header-wrap">
      {/* Tier 1: Clean White Brand Bar */}
      <div className="vh-brand-bar">
        <div className="container vh-brand-bar-inner">
          <Link href="/" className="vh-brand" aria-label="VIEHORA TRAVEL" onClick={closeMenu}>
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

          <div className="vh-header-slogan">
            <div className="vh-slogan-eyebrow">
              {t('✦ BEYOND EVERY HORIZON · CHẠM ĐẾN MỌI CHÂN TRỜI ✦', '✦ BEYOND EVERY HORIZON · DISCOVER VIETNAM ✦')}
            </div>
            <div className="vh-slogan-main">
              {t('An toàn · Gần gũi · Bền vững — ', 'Safe · Authentic · Sustainable — ')}
              <em>{t('Trọn vẹn từng hành trình Việt Nam', 'Unforgettable Vietnam Journeys')}</em>
            </div>
          </div>

          <div className="vh-header-actions">
            {/* Language Switcher VI | EN */}
            <div
              role="group"
              aria-label="Chọn ngôn ngữ / Select language"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'var(--cream)',
                border: '1px solid rgba(200, 164, 93, 0.5)',
                borderRadius: '999px',
                padding: '3px',
                gap: '2px',
              }}
            >
              <button
                type="button"
                onClick={() => setLang('vi')}
                style={{
                  border: 'none',
                  borderRadius: '999px',
                  padding: '5px 10px',
                  fontSize: '11px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: lang === 'vi' ? 'var(--navy)' : 'transparent',
                  color: lang === 'vi' ? '#ffffff' : 'var(--navy)',
                  transition: 'all 0.2s ease',
                }}
              >
                VI
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                style={{
                  border: 'none',
                  borderRadius: '999px',
                  padding: '5px 10px',
                  fontSize: '11px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: lang === 'en' ? 'var(--navy)' : 'transparent',
                  color: lang === 'en' ? '#ffffff' : 'var(--navy)',
                  transition: 'all 0.2s ease',
                }}
              >
                EN
              </button>
            </div>

            <a href={`tel:${BRAND_INFO.hotlineTel}`} className="vh-btn-navy-outline desktop-only">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{BRAND_INFO.hotline}</span>
            </a>
            <a href={BRAND_INFO.zaloUrl} target="_blank" rel="noopener noreferrer" className="vh-btn-gold desktop-only">
              {t('Zalo Tư Vấn', 'Zalo Chat')}
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
                {t('Trang chủ', 'Home')}
              </Link>
            </li>
            <li className={pathname.startsWith('/category/trong-nuoc') ? 'current-menu-item' : ''}>
              <Link href="/category/trong-nuoc" onClick={closeMenu}>
                {t('Tour Trong Nước', 'Domestic Tours')} <span className="vh-caret">▾</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link href="/category/trong-nuoc" onClick={closeMenu}>
                    {t('Tất cả Tour Trong Nước', 'All Vietnam Tours')}
                  </Link>
                </li>
                <li>
                  <Link href="/tim-kiem?q=Hà+Giang" onClick={closeMenu}>
                    {t('Miền Bắc · Hà Giang – Sapa – Hạ Long', 'Northern Vietnam · Ha Giang – Sapa')}
                  </Link>
                </li>
                <li>
                  <Link href="/tim-kiem?q=Đà+Nẵng" onClick={closeMenu}>
                    {t('Miền Trung · Đà Nẵng – Hội An – Huế', 'Central Vietnam · Da Nang – Hoi An')}
                  </Link>
                </li>
                <li>
                  <Link href="/tim-kiem?q=Phú+Quốc" onClick={closeMenu}>
                    {t('Biển Đảo · Phú Quốc – Nha Trang', 'Islands · Phu Quoc – Nha Trang')}
                  </Link>
                </li>
                <li>
                  <Link href="/tim-kiem?q=Đà+Lạt" onClick={closeMenu}>
                    {t('Tây Nguyên · Đà Lạt – Buôn Mê', 'Central Highlands · Da Lat')}
                  </Link>
                </li>
              </ul>
            </li>
            <li className={pathname.startsWith('/category/gia-re') ? 'current-menu-item' : ''}>
              <Link href="/category/gia-re" onClick={closeMenu}>
                {t('Tour Giá Tốt', 'Best Deals')}
              </Link>
            </li>
            <li className={pathname.startsWith('/ve-may-bay') ? 'current-menu-item' : ''}>
              <Link href="/ve-may-bay" onClick={closeMenu}>
                {t('Vé Máy Bay', 'Flights')}
              </Link>
            </li>
            <li className={pathname.startsWith('/tin-tuc') ? 'current-menu-item' : ''}>
              <Link href="/tin-tuc" onClick={closeMenu}>
                {t('Cẩm Nang', 'Travel Guide')}
              </Link>
            </li>
            <li className={pathname.startsWith('/gioi-thieu') ? 'current-menu-item' : ''}>
              <Link href="/gioi-thieu" onClick={closeMenu}>
                {t('Về Viehora', 'About Us')}
              </Link>
            </li>
          </ul>

          <div className="vh-mobile-drawer-actions">
            <a href={`tel:${BRAND_INFO.hotlineTel}`} className="vh-btn-navy-outline">
              {BRAND_INFO.hotline}
            </a>
            <a href={BRAND_INFO.zaloUrl} target="_blank" rel="noopener noreferrer" className="vh-btn-gold">
              {t('Zalo Tư Vấn', 'Zalo Chat')}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
