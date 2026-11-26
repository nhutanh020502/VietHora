import Link from 'next/link';
import { BRAND_INFO } from '@/data/content';

export default function TrustAndPartnersSection() {
  const partners = [
    'Vietnam Airlines',
    'Vietjet Air',
    'Bamboo Airways',
    'Vinpearl',
    'Marriott',
    'Accor Hotels',
    'VNPAY',
    'Momo',
    'Mastercard',
    'Visa',
  ];

  return (
    <>
      {/* Signature Quote Band from viehora-travel */}
      <section
        style={{
          background: 'linear-gradient(rgba(12, 40, 72, 0.88), rgba(12, 40, 72, 0.88)), url(/assets/img/about-hero-bg.png) center/cover',
          color: '#ffffff',
          textAlign: 'center',
          padding: '64px 24px',
          borderRadius: '18px',
          margin: '32px 0 48px',
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '56px', lineHeight: 0.7, color: 'var(--gold)' }}>“</span>
          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 3vw, 32px)',
              lineHeight: 1.45,
              margin: '14px 0 18px',
              fontWeight: 500,
            }}
          >
            Du lịch không chỉ là đi đến một nơi mới, mà còn là mở lòng để đón nhận những góc nhìn mới.
          </blockquote>
          <p style={{ fontSize: '10px', letterSpacing: '0.28em', color: 'var(--gold)', fontWeight: 700, margin: 0 }}>
            VIEHORA TRAVEL · BEYOND EVERY HORIZON
          </p>
        </div>
      </section>

      {/* Stats & Ready CTA */}
      <section
        style={{
          background: 'var(--white)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          alignItems: 'center',
        }}
      >
        <div>
          <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '6px' }}>
            HÀNH TRÌNH TIẾP THEO BẮT ĐẦU TỪ ĐÂY
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', color: 'var(--navy)', margin: '0 0 8px' }}>
            Bạn đã sẵn sàng cho <em>chân trời mới?</em>
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
            Liên hệ VIEHORA TRAVEL để được tư vấn lịch trình và báo giá ưu đãi ngay hôm nay.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 700, color: 'var(--navy)' }}>2.500+</div>
            <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Khách hàng đồng hành</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 700, color: 'var(--navy)' }}>4.9/5★</div>
            <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Đánh giá hài lòng</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 700, color: 'var(--navy)' }}>50+</div>
            <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Điểm đến chọn lọc</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          <a href={BRAND_INFO.zaloUrl} target="_blank" rel="noopener noreferrer" className="vh-btn-gold">
            Chat Zalo Ngay
          </a>
          <Link href="/category/du-lich" className="vh-btn-navy-outline">
            Xem Tất Cả Tour
          </Link>
        </div>
      </section>

      {/* Partners */}
      <section style={{ paddingBottom: '48px', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--muted)', fontWeight: 700, marginBottom: '18px' }}>
          ĐỐI TÁC ĐỒNG HÀNH TIN CẬY
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
          {partners.map((name) => (
            <div
              key={name}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '10px 18px',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--navy)',
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
