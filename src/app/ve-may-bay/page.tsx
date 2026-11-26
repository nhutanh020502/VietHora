import { BRAND_INFO } from '@/data/content';

export default function FlightPage() {
  const airlines = [
    { name: 'Vietnam Airlines', desc: 'Hãng hàng không quốc gia 4 sao, bao gồm hành lý ký gửi.' },
    { name: 'Vietjet Air', desc: 'Vé máy bay giá rẻ nội địa & quốc tế nhiều khung giờ bay.' },
    { name: 'Bamboo Airways', desc: 'Dịch vụ tận tâm, tỷ lệ bay đúng giờ hàng đầu.' },
    { name: 'EVA Air / ANA / Korean Air', desc: 'Đường bay thẳng 5 sao đi Nhật Bản, Hàn Quốc, Đài Loan, Mỹ.' },
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
            Đại Lý Vé Máy Bay Nội Địa &amp; Quốc Tế Giá Tốt
          </h1>
          <p style={{ fontSize: '15px', color: '#e2e8f0', margin: 0 }}>
            Xuất vé nhanh chóng 24/7, hỗ trợ đổi ngày bay, mua thêm hành lý và giữ chỗ đoàn doanh nghiệp giá ưu đãi.
          </p>
        </div>
      </section>

      <main className="container" style={{ paddingTop: '44px', paddingBottom: '64px' }}>
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
    </>
  );
}
