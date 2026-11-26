import { BRAND_INFO, VISA_ROW_1, VISA_ROW_2 } from '@/data/content';

export default function VisaPage() {
  const allVisas = [...VISA_ROW_1, ...VISA_ROW_2];

  return (
    <>
      <section
        style={{
          minHeight: '280px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(rgba(11, 32, 57, 0.78), rgba(16, 43, 78, 0.78)), url(/assets/img/visa-hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
          textAlign: 'center',
          padding: '48px 20px',
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          <p className="vh-eyebrow">VIEHORA VISA SERVICE</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, margin: '0 0 12px', color: '#ffffff' }}>
            Dịch Vụ Làm Visa Trọn Gói Tỷ Lệ Đậu 99%
          </h1>
          <p style={{ fontSize: '15px', color: '#e2e8f0', margin: 0 }}>
            Tư vấn hồ sơ chuyên sâu, dịch thuật công chứng, chứng minh tài chính &amp; luyện phỏng vấn 1-1 cho mọi quốc gia.
          </p>
        </div>
      </section>

      <main className="container" style={{ paddingTop: '44px', paddingBottom: '64px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '20px',
            marginBottom: '48px',
          }}
        >
          {allVisas.map((v) => (
            <div
              key={v.code}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img
                  src={v.flag}
                  alt={v.title}
                  width={52}
                  height={36}
                  style={{ width: '52px', height: '36px', objectFit: 'cover', borderRadius: '6px', border: '1px solid var(--border)' }}
                />
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '19px', fontWeight: 600, color: 'var(--navy)', margin: 0 }}>
                    {v.title}
                  </h2>
                  <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{v.tag}</span>
                </div>
              </div>

              <div style={{ fontSize: '13px', color: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div>
                  Thời gian xét duyệt: <strong>{v.processingTime}</strong>
                </div>
                <div>
                  Chi phí trọn gói: <strong style={{ color: '#a7833e' }}>{v.fee}</strong>
                </div>
              </div>

              <a
                href={BRAND_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="vh-btn-gold"
                style={{ marginTop: 'auto' }}
              >
                Tư Vấn Hồ Sơ Miễn Phí
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
