import Link from 'next/link';
import { VIETNAM_REGIONS } from '@/data/content';

export default function RegionalShowcase() {
  return (
    <section className="vh-section">
      <div className="vh-section-header">
        <div>
          <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '6px' }}>
            BẢN ĐỒ TRẢI NGHIỆM NỘI ĐỊA
          </p>
          <h2 className="vh-section-title">
            Khám phá theo <em>4 vùng miền</em>
          </h2>
        </div>
        <Link href="/category/trong-nuoc" className="vh-btn-navy-outline">
          Tất cả hành trình &rarr;
        </Link>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
        }}
      >
        {VIETNAM_REGIONS.map((item) => (
          <Link
            key={item.region}
            href={`/tim-kiem?q=${encodeURIComponent(item.query)}`}
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '24px',
              color: '#ffffff',
              border: '1px solid rgba(200, 164, 93, 0.35)',
              boxShadow: '0 14px 32px rgba(16, 43, 78, 0.14)',
            }}
          >
            <img
              src={item.image}
              alt={item.region}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(11,32,57,0.12) 0%, rgba(11,32,57,0.86) 100%)',
              }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <span
                style={{
                  display: 'inline-block',
                  background: 'var(--gold)',
                  color: 'var(--navy-deep)',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  marginBottom: '10px',
                }}
              >
                {item.spots}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '23px',
                  fontWeight: 600,
                  margin: '0 0 6px',
                  color: '#ffffff',
                }}
              >
                {item.region}
              </h3>
              <p style={{ margin: 0, fontSize: '13px', color: '#e2e8f0' }}>{item.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
