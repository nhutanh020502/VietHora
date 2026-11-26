'use client';

import Link from 'next/link';
import { BRAND_INFO } from '@/data/content';
import { useLanguage } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      id="colophon"
      style={{
        background: 'var(--navy-footer)',
        color: '#cbd5e1',
        padding: '64px 0 28px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '36px',
          }}
        >
          <div>
            <Link
              href="/"
              aria-label="VIEHORA TRAVEL"
              style={{ display: 'inline-block', marginBottom: '16px', background: '#ffffff', padding: '8px 14px', borderRadius: '10px' }}
            >
              <img
                src="/assets/img/viehora-logo.jpg"
                alt="VIEHORA TRAVEL Logo"
                style={{ height: '58px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#9fb0c4', margin: '0 0 18px' }}>
              <strong>{BRAND_INFO.legalName}</strong> — VIEHORA TRAVEL (Beyond Every Horizon).{' '}
              {t(
                'Chuyên phục vụ các tour du lịch nội địa: Khám phá, trải nghiệm & văn hóa.',
                'Specializing in Vietnam domestic tours: Discovery, authentic experiences & local culture.'
              )}
            </p>
            <div style={{ display: 'flex', gap: '14px', fontSize: '11px', letterSpacing: '0.14em', color: 'var(--gold)', fontWeight: 700 }}>
              <a href={`mailto:${BRAND_INFO.email}`}>EMAIL ↗</a>
              <a href={`tel:${BRAND_INFO.hotlineTel}`}>CALL ↗</a>
              <a href={BRAND_INFO.zaloUrl} target="_blank" rel="noopener noreferrer">
                ZALO ↗
              </a>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', letterSpacing: '0.18em', color: 'var(--gold)', fontWeight: 700, marginBottom: '16px' }}>
              {t('THÔNG TIN LIÊN HỆ', 'CONTACT INFO')}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.12em' }}>PHONE</div>
                <a href={`tel:${BRAND_INFO.hotlineTel}`} style={{ color: '#ffffff', fontWeight: 700 }}>
                  {BRAND_INFO.hotline}
                </a>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.12em' }}>EMAIL</div>
                <a href={`mailto:${BRAND_INFO.email}`} style={{ color: '#ffffff' }}>
                  {BRAND_INFO.email}
                </a>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.12em' }}>ADDRESS</div>
                <div style={{ color: '#e2e8f0' }}>{BRAND_INFO.address}</div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', letterSpacing: '0.18em', color: 'var(--gold)', fontWeight: 700, marginBottom: '16px' }}>
              {t('DỊCH VỤ NỘI ĐỊA', 'DOMESTIC SERVICES')}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li>
                <Link href="/category/trong-nuoc">{t('Tour Du Lịch Trong Nước', 'Vietnam Domestic Tours')}</Link>
              </li>
              <li>
                <Link href="/category/gia-re">{t('Tour Giá Tốt Cuối Tuần', 'Weekend Best Deals')}</Link>
              </li>
              <li>
                <Link href="/ve-may-bay">{t('Vé Máy Bay Nội Địa', 'Domestic Flight Tickets')}</Link>
              </li>
              <li>
                <Link href="/tim-kiem">{t('Tìm Kiếm Tour Nhanh', 'Quick Tour Search')}</Link>
              </li>
            </ul>
          </div>

          <div>
            <div style={{ fontSize: '12px', letterSpacing: '0.18em', color: 'var(--gold)', fontWeight: 700, marginBottom: '16px' }}>
              {t('KHÁM PHÁ THÊM', 'EXPLORE MORE')}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li>
                <Link href="/gioi-thieu">{t('Câu chuyện VIEHORA', 'About VIEHORA TRAVEL')}</Link>
              </li>
              <li>
                <Link href="/tin-tuc">{t('Cẩm Nang Du Lịch Việt Nam', 'Vietnam Travel Guide')}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: '44px',
            paddingTop: '18px',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '11px',
            letterSpacing: '0.08em',
            color: '#8191a3',
          }}
        >
          <span>© 2026 VIEHORA TRAVEL. ALL RIGHTS RESERVED.</span>
          <span>{t('Beyond Every Horizon – Chạm đến mọi chân trời.', 'Beyond Every Horizon – Every journey, a story.')}</span>
        </div>
      </div>
    </footer>
  );
}
