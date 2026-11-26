'use client';

import { useLanguage } from '@/lib/i18n';

export default function WhyChooseSection() {
  const { t } = useLanguage();

  const values = [
    {
      num: '01',
      title: t('An toàn tuyệt đối', 'Safety First'),
      tag: t('Tiêu chuẩn vận hành', 'Operational Standard'),
      desc: t(
        'Chuẩn bị chu đáo, xe du lịch đời mới, đối tác lưu trú chọn lọc và thông tin minh bạch rõ ràng trên mọi cung đường.',
        'Thoughtful preparation, modern transport, vetted hotel partners, and transparent information on every route.'
      ),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
    {
      num: '02',
      title: t('Gần gũi bản địa', 'Local Closeness'),
      tag: t('Trải nghiệm chân thực', 'Authentic Experience'),
      desc: t(
        'Kết nối chân thành với cộng đồng địa phương, thưởng thức ẩm thực đặc sản và lắng nghe những câu chuyện văn hóa.',
        'Connect warmly with local communities, savor authentic regional cuisine, and discover living cultural stories.'
      ),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      num: '03',
      title: t('Du lịch bền vững', 'Sustainability'),
      tag: t('Trách nhiệm & Tận tâm', 'Responsible Travel'),
      desc: t(
        'Tôn trọng cảnh quan thiên nhiên, giữ gìn giá trị di sản Việt Nam và đồng hành có trách nhiệm cùng thế hệ tương lai.',
        'Respect natural landscapes, preserve Vietnam heritage values, and travel responsibly for future generations.'
      ),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c4-4 6-7.5 6-11a6 6 0 1 0-12 0c0 3.5 2 7 6 11z" />
          <circle cx="12" cy="11" r="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <section
      style={{
        background:
          'radial-gradient(circle at 85% 15%, rgba(200, 164, 93, 0.18) 0%, transparent 45%), linear-gradient(135deg, #0b2039 0%, #102b4e 55%, #173b63 100%)',
        color: '#ffffff',
        padding: '72px 0',
        margin: '44px 0',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 42px' }}>
          <p className="vh-eyebrow" style={{ marginBottom: '8px' }}>
            {t('ĐIỀU LÀM NÊN KHÁC BIỆT', 'WHAT SETS US APART')}
          </p>
          <h2 className="vh-section-title" style={{ color: '#ffffff', marginBottom: '12px' }}>
            {t('Giá trị trên mỗi', 'Values on every')} <em>{t('hành trình', 'journey')}</em>
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '15px', margin: 0 }}>
            {t(
              'Từng trải nghiệm tại VIEHORA TRAVEL đều được xây dựng từ sự tận tâm, uy tín và trách nhiệm.',
              'Every experience at VIEHORA TRAVEL is crafted with dedication, integrity, and care.'
            )}
          </p>
        </div>

        <div className="vh-values-grid" style={{ marginTop: 0 }}>
          {values.map((v) => (
            <article
              key={v.num}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderTop: '3px solid var(--gold)',
                borderRadius: '16px',
                padding: '28px 26px',
                position: 'relative',
                boxShadow: '0 16px 36px rgba(5, 16, 30, 0.28)',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '24px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '36px',
                  fontWeight: 700,
                  color: 'rgba(200, 164, 93, 0.22)',
                  lineHeight: 1,
                }}
              >
                {v.num}
              </span>

              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(200, 164, 93, 0.16)',
                  border: '1px solid rgba(200, 164, 93, 0.45)',
                  color: 'var(--gold)',
                  display: 'grid',
                  placeItems: 'center',
                  marginBottom: '18px',
                }}
              >
                {v.icon}
              </div>

              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '6px',
                }}
              >
                {v.tag}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#ffffff',
                  margin: '0 0 10px',
                }}
              >
                {v.title}
              </h3>

              <p style={{ margin: 0, fontSize: '14px', color: '#d5dfeb', lineHeight: 1.7 }}>
                {v.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
