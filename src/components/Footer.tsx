import Link from 'next/link';
import { BRAND_INFO } from '@/data/content';

export default function Footer() {
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
          {/* Brand Column */}
          <div>
            <Link
              href="/"
              aria-label="VIEHORA TRAVEL Trang chủ"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}
            >
              <span
                style={{
                  width: '48px',
                  height: '48px',
                  border: '1.5px solid var(--gold)',
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  fontFamily: 'var(--font-display)',
                  fontSize: '26px',
                  fontWeight: 600,
                  color: '#ffffff',
                  position: 'relative',
                }}
              >
                V
                <span style={{ position: 'absolute', color: 'var(--gold)', fontSize: '10px', right: '5px', top: '4px' }}>
                  ✦
                </span>
              </span>
              <span className="vh-brand-copy">
                <strong style={{ color: '#ffffff', fontSize: '18px' }}>VIEHORA</strong>
                <small style={{ color: 'var(--gold)' }}>TRAVEL</small>
              </span>
            </Link>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#9fb0c4', margin: '0 0 18px' }}>
              VIEHORA TRAVEL — Beyond Every Horizon. Mang đến những hành trình an toàn, gần gũi và bền vững trên khắp Việt Nam và thế giới.
            </p>
            <div style={{ display: 'flex', gap: '14px', fontSize: '11px', letterSpacing: '0.14em', color: 'var(--gold)', fontWeight: 700 }}>
              <a href={`mailto:${BRAND_INFO.email}`}>EMAIL ↗</a>
              <a href={`tel:${BRAND_INFO.hotlineTel}`}>CALL ↗</a>
              <a href={BRAND_INFO.zaloUrl} target="_blank" rel="noopener noreferrer">
                ZALO ↗
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <div style={{ fontSize: '12px', letterSpacing: '0.18em', color: 'var(--gold)', fontWeight: 700, marginBottom: '16px' }}>
              THÔNG TIN LIÊN HỆ
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

          {/* Services */}
          <div>
            <div style={{ fontSize: '12px', letterSpacing: '0.18em', color: 'var(--gold)', fontWeight: 700, marginBottom: '16px' }}>
              DỊCH VỤ NỔI BẬT
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li>
                <Link href="/category/trong-nuoc">Tour Du Lịch Trong Nước</Link>
              </li>
              <li>
                <Link href="/category/nuoc-ngoai">Tour Du Lịch Quốc Tế</Link>
              </li>
              <li>
                <Link href="/category/hanh-huong">Tour Hành Hương Trọn Gói</Link>
              </li>
              <li>
                <Link href="/visa">Dịch Vụ Visa Trọn Gói</Link>
              </li>
              <li>
                <Link href="/ve-may-bay">Đại Lý Vé Máy Bay</Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <div style={{ fontSize: '12px', letterSpacing: '0.18em', color: 'var(--gold)', fontWeight: 700, marginBottom: '16px' }}>
              KHÁM PHÁ THÊM
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li>
                <Link href="/gioi-thieu">Câu chuyện VIEHORA</Link>
              </li>
              <li>
                <Link href="/tin-tuc">Cẩm Nang &amp; Tin Tức</Link>
              </li>
              <li>
                <Link href="/tim-kiem">Tìm Kiếm Tour Nhanh</Link>
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
          <span>Beyond Every Horizon – Chạm đến mọi chân trời.</span>
        </div>
      </div>
    </footer>
  );
}
