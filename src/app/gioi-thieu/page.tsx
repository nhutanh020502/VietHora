import Link from 'next/link';
import { BRAND_INFO } from '@/data/content';

export default function AboutPage() {
  return (
    <>
      <section
        style={{
          minHeight: '280px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(rgba(11, 32, 57, 0.8), rgba(16, 43, 78, 0.8)), url(/assets/img/about-hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
          textAlign: 'center',
          padding: '48px 20px',
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          <p className="vh-eyebrow">VỀ VIEHORA TRAVEL</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 600, margin: '0 0 12px', color: '#ffffff' }}>
            Mỗi vùng đất là một điều <em style={{ color: 'var(--gold)' }}>đáng nhớ.</em>
          </h1>
          <p style={{ fontSize: '15px', color: '#e2e8f0', margin: 0 }}>
            Beyond Every Horizon · Chạm đến mọi chân trời
          </p>
        </div>
      </section>

      <main className="container" style={{ maxWidth: '960px', paddingTop: '44px', paddingBottom: '64px' }}>
        <div style={{ background: 'var(--white)', borderRadius: '16px', padding: '36px', border: '1px solid var(--border)', lineHeight: 1.8, color: 'var(--ink)' }}>
          <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '8px' }}>CÂU CHUYỆN THƯƠNG HIỆU</p>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '28px', marginTop: 0 }}>
            An toàn · Gần gũi · Bền vững
          </h2>
          <p>
            <strong>VIEHORA TRAVEL</strong> hướng đến những chuyến du lịch trong nước và quốc tế mang lại trải nghiệm chân thực, giúp du khách khám phá cảnh sắc, tìm hiểu văn hóa và kết nối với con người bản địa.
          </p>
          <p>
            Chúng tôi tin rằng một hành trình ý nghĩa không chỉ nằm ở nơi bạn đến, mà còn ở cách bạn trải nghiệm và những giá trị tốt đẹp bạn mang theo.
          </p>

          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '22px', marginTop: '28px' }}>
            Thông Tin Liên Hệ Chính Thức
          </h3>
          <ul style={{ paddingLeft: '20px', color: 'var(--ink)' }}>
            <li>
              <strong>Địa chỉ:</strong> {BRAND_INFO.address}
            </li>
            <li>
              <strong>Hotline 24/7:</strong>{' '}
              <a href={`tel:${BRAND_INFO.hotlineTel}`} style={{ color: 'var(--navy)', fontWeight: 700 }}>
                {BRAND_INFO.hotline}
              </a>
            </li>
            <li>
              <strong>Email:</strong> {BRAND_INFO.email}
            </li>
          </ul>

          <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/category/du-lich" className="vh-btn-gold">
              Khám Phá Tất Cả Tour ↗
            </Link>
            <a href={BRAND_INFO.zaloUrl} target="_blank" rel="noopener noreferrer" className="vh-btn-navy-outline">
              Chat Zalo Tư Vấn Ngay
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
