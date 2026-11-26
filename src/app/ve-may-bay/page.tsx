import Link from 'next/link';
import WaveBackdrop from '@/components/WaveBackdrop';
import { BRAND_INFO } from '@/data/content';

export default function FlightPage() {
  const routes = [
    { from: 'TP. Hồ Chí Minh', to: 'Phú Quốc', duration: '1h 00p', price: 'Từ 890.000₫', tag: 'Đảo Ngọc' },
    { from: 'TP. Hồ Chí Minh', to: 'Đà Nẵng', duration: '1h 20p', price: 'Từ 950.000₫', tag: 'Miền Trung' },
    { from: 'TP. Hồ Chí Minh', to: 'Hà Nội', duration: '2h 05p', price: 'Từ 1.290.000₫', tag: 'Thủ Đô' },
    { from: 'TP. Hồ Chí Minh', to: 'Đà Lạt', duration: '50p', price: 'Từ 790.000₫', tag: 'Cao Nguyên' },
    { from: 'Hà Nội', to: 'Nha Trang', duration: '1h 50p', price: 'Từ 1.150.000₫', tag: 'Biển Xanh' },
    { from: 'Hà Nội', to: 'Phú Quốc', duration: '2h 10p', price: 'Từ 1.350.000₫', tag: 'Nghỉ Dưỡng' },
  ];

  const airlines = [
    { name: 'Vietnam Airlines', desc: 'Hãng hàng không quốc gia 4 sao, bao gồm hành lý ký gửi.' },
    { name: 'Vietjet Air', desc: 'Vé máy bay nội địa giá tốt, nhiều khung giờ bay linh hoạt.' },
    { name: 'Bamboo Airways', desc: 'Dịch vụ tận tâm, tỷ lệ bay đúng giờ hàng đầu Việt Nam.' },
  ];

  return (
    <>
      <section
        style={{
          minHeight: '280px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(rgba(11, 32, 57, 0.78), rgba(16, 43, 78, 0.78)), url(/assets/img/flight-hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
          textAlign: 'center',
          padding: '48px 20px',
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          <p className="vh-eyebrow">VIEHORA FLIGHT TICKETING</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, margin: '0 0 12px', color: '#ffffff' }}>
            Đại Lý Vé Máy Bay Nội Địa Giá Tốt
          </h1>
          <p style={{ fontSize: '15px', color: '#e2e8f0', margin: 0 }}>
            Xuất vé nhanh chóng 24/7, hỗ trợ đổi ngày bay, mua thêm hành lý và giữ chỗ đoàn du lịch giá ưu đãi.
          </p>
        </div>
      </section>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <WaveBackdrop variant="blue" />
        <main className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '44px', paddingBottom: '64px' }}>
        {/* Popular Domestic Routes */}
        <div className="vh-section-header" style={{ marginBottom: '20px' }}>
          <div>
            <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '4px' }}>CHẶNG BAY PHỔ BIẾN</p>
            <h2 className="vh-section-title">
              Tuyến bay nội địa <em>nổi bật</em>
            </h2>
          </div>
          <Link href="/category/trong-nuoc" className="vh-btn-navy-outline">
            Xem Tour Trọn Gói &rarr;
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '44px' }}>
          {routes.map((r) => (
            <div
              key={`${r.from}-${r.to}`}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    background: 'var(--cream)',
                    color: '#a7833e',
                    padding: '4px 10px',
                    borderRadius: '4px',
                  }}
                >
                  {r.tag}
                </span>
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Bay thẳng · {r.duration}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: 'var(--navy)' }}>
                {r.from} ✈ {r.to}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f0ece3', paddingTop: '12px' }}>
                <strong style={{ color: 'var(--navy)', fontSize: '16px' }}>{r.price}</strong>
                <a href={BRAND_INFO.zaloUrl} target="_blank" rel="noopener noreferrer" className="vh-btn-gold" style={{ padding: '7px 14px', fontSize: '11px' }}>
                  Giữ Vé Ngay
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Airlines */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {airlines.map((air) => (
            <div
              key={air.name}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '22px',
              }}
            >
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: 'var(--navy)', margin: '0 0 8px' }}>
                {air.name}
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>{air.desc}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            background: 'var(--navy)',
            color: '#ffffff',
            borderRadius: '16px',
            padding: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <h3 style={{ margin: '0 0 6px', fontFamily: 'var(--font-display)', fontSize: '24px', color: '#ffffff' }}>
              Cần Báo Giá Vé Máy Bay Nhanh Trong 5 Phút?
            </h3>
            <p style={{ margin: 0, color: '#cbd5e1', fontSize: '14px' }}>
              Liên hệ trực tiếp Booker VIEHORA TRAVEL qua Hotline {BRAND_INFO.hotline} hoặc Zalo 24/7.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href={`tel:${BRAND_INFO.hotlineTel}`} className="vh-btn-gold">
              Gọi {BRAND_INFO.hotline}
            </a>
            <a
              href={BRAND_INFO.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '10px 18px',
                borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.5)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
              }}
            >
              Chat Zalo Đặt Vé
            </a>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}
