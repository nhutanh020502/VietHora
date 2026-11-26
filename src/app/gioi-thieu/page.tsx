'use client';

import Link from 'next/link';
import WaveBackdrop from '@/components/WaveBackdrop';
import { BRAND_INFO } from '@/data/content';
import { useLanguage } from '@/lib/i18n';

export default function AboutPage() {
  const { t } = useLanguage();

  const stats = [
    { number: '2.500+', label: t('Khách hàng đồng hành', 'Happy Travelers') },
    { number: '50+', label: t('Điểm đến Việt Nam', 'Vietnam Destinations') },
    { number: '4.9/5★', label: t('Mức độ hài lòng', 'Guest Satisfaction') },
    { number: '24/7', label: t('Tư vấn & Hỗ trợ', 'Dedicated Support') },
  ];

  const values = [
    {
      num: '01',
      title: t('An toàn là ưu tiên số 1', 'Safety First'),
      desc: t(
        'Lựa chọn xe du lịch đời mới, đối tác lưu trú đạt chuẩn và đội ngũ tài xế – hướng dẫn viên dày dạn kinh nghiệm trên mọi cung đường.',
        'Modern transport, vetted hotel partners, and experienced guides on every route across Vietnam.'
      ),
    },
    {
      num: '02',
      title: t('Gần gũi bản sắc địa phương', 'Local Closeness'),
      desc: t(
        'Mỗi hành trình đều chú trọng trải nghiệm văn hóa, ẩm thực đặc trưng và kết nối chân thành với con người tại từng vùng đất.',
        'Every itinerary highlights authentic local culture, regional cuisine, and warm human connections.'
      ),
    },
    {
      num: '03',
      title: t('Du lịch xanh & bền vững', 'Sustainable Travel'),
      desc: t(
        'Tôn trọng cảnh quan thiên nhiên, giữ gìn di sản và lan tỏa tinh thần du lịch có trách nhiệm đến cộng đồng.',
        'Respecting nature, preserving heritage, and promoting responsible tourism for future generations.'
      ),
    },
  ];

  const steps = [
    {
      step: '01',
      title: t('Lắng nghe nhu cầu', 'Listen & Advise'),
      desc: t(
        'Tư vấn điểm đến, mùa đẹp nhất và ngân sách phù hợp cho gia đình, cặp đôi hoặc đoàn doanh nghiệp.',
        'Tailored advice on destinations, best seasons, and budgets for families, couples, or corporate groups.'
      ),
    },
    {
      step: '02',
      title: t('Lịch trình minh bạch', 'Transparent Itinerary'),
      desc: t(
        'Báo giá trọn gói rõ ràng, cam kết không phát sinh chi phí ẩn trong suốt chuyến đi.',
        'Clear all-inclusive pricing with zero hidden fees throughout your trip.'
      ),
    },
    {
      step: '03',
      title: t('Đồng hành tận tâm', 'Dedicated Escort'),
      desc: t(
        'Hướng dẫn viên theo sát đoàn, hỗ trợ linh hoạt từ lúc đón sân bay đến khi kết thúc hành trình.',
        'Experienced tour guides supporting your group seamlessly from airport pickup to farewell.'
      ),
    },
    {
      step: '04',
      title: t('Chăm sóc 24/7', '24/7 Care'),
      desc: t(
        'Tổng đài hotline và Zalo luôn sẵn sàng hỗ trợ mọi tình huống trước, trong và sau chuyến đi.',
        'Hotline and Zalo support available around the clock before, during, and after your journey.'
      ),
    },
  ];

  const gallery = [
    { img: '/assets/img/ha-giang.jpg', name: 'Hà Giang' },
    { img: '/assets/img/hoi-an.jpg', name: 'Hội An' },
    { img: '/assets/img/phu-quoc.jpg', name: 'Phú Quốc' },
    { img: '/assets/img/da-nang.jpg', name: 'Đà Nẵng' },
  ];

  return (
    <>
      {/* 1. Refined Editorial Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '340px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage:
            'linear-gradient(135deg, rgba(11, 32, 57, 0.82) 0%, rgba(16, 43, 78, 0.65) 100%), url(/assets/img/ha-giang.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
          textAlign: 'center',
          padding: '56px 20px 80px',
        }}
      >
        <div style={{ maxWidth: '860px' }}>
          <p className="vh-eyebrow">{t('VỀ VIEHORA TRAVEL', 'ABOUT VIEHORA TRAVEL')}</p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(34px, 4.5vw, 52px)',
              fontWeight: 600,
              margin: '0 0 14px',
              lineHeight: 1.15,
              color: '#ffffff',
            }}
          >
            {t('Mỗi vùng đất là một điều', 'Every region is a story')}{' '}
            <em style={{ color: 'var(--gold)' }}>{t('đáng nhớ.', 'worth remembering.')}</em>
          </h1>
          <p style={{ fontSize: '15.5px', color: '#e2e8f0', margin: '0 auto', maxWidth: '680px' }}>
            {BRAND_INFO.legalName} —{' '}
            {t(
              'Đồng hành cùng bạn khám phá trọn vẹn vẻ đẹp Việt Nam qua những chuyến đi an toàn, gần gũi và bền vững.',
              'Accompanying you across Vietnam with safe, authentic, and sustainable journeys.'
            )}
          </p>
        </div>
      </section>

      {/* 2. Floating Stats Strip */}
      <div className="container" style={{ marginTop: '-42px', position: 'relative', zIndex: 10 }}>
        <div
          style={{
            background: 'var(--white)',
            border: '1px solid rgba(200, 164, 93, 0.35)',
            borderRadius: '16px',
            padding: '24px 20px',
            boxShadow: '0 16px 40px rgba(16, 43, 78, 0.12)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '20px',
            textAlign: 'center',
          }}
        >
          {stats.map((st) => (
            <div key={st.label}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.1 }}>
                {st.number}
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--muted)', marginTop: '6px', fontWeight: 500 }}>
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Brand Story + 4-Photo Gallery with WaveBackdrop */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <WaveBackdrop variant="blue" />
        <main className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '56px', paddingBottom: '48px' }}>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '32px',
              boxShadow: '0 16px 42px rgba(16, 43, 78, 0.08)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'center',
              marginBottom: '48px',
            }}
          >
            <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img src="/assets/img/viehora-banner.jpg" alt="VIEHORA TRAVEL" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div>
              <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '8px' }}>
                {t('CÂU CHUYỆN THƯƠNG HIỆU', 'OUR BRAND STORY')}
              </p>
              <h2 className="vh-section-title" style={{ marginBottom: '16px' }}>
                {t('Chân Trời Viên Mãn —', 'Beyond Every Horizon —')} <em>VIEHORA TRAVEL</em>
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--ink)', lineHeight: 1.8, marginBottom: '14px' }}>
                {t(
                  'VIEHORA TRAVEL ra đời với khát vọng mang đến những hành trình du lịch nội địa chỉn chu, nơi mỗi chuyến đi không chỉ là tham quan mà còn là khoảng thời gian nghỉ ngơi, gắn kết gia đình và cảm nhận trọn vẹn vẻ đẹp văn hóa – thiên nhiên Việt Nam.',
                  'VIEHORA TRAVEL was founded with a passion for crafting thoughtful domestic journeys across Vietnam — combining relaxation, family connection, and authentic cultural discovery.'
                )}
              </p>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '22px' }}>
                {t(
                  'Từ những cung đường đèo hùng vĩ nơi địa đầu Hà Giang, nét trầm mặc của phố cổ Hội An cho đến biển xanh nắng vàng tại Phú Quốc, Nha Trang — chúng tôi chăm chút từng chi tiết để bạn luôn an tâm tận hưởng.',
                  'From the dramatic mountain passes of Ha Giang and lantern-lit Hoi An to the turquoise beaches of Phu Quoc and Da Nang, we take care of every detail so you can travel with complete peace of mind.'
                )}
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/category/trong-nuoc" className="vh-btn-gold">
                  {t('Khám Phá Tour Trong Nước ↗', 'Explore Vietnam Tours ↗')}
                </Link>
                <Link href="/ve-may-bay" className="vh-btn-navy-outline">
                  {t('Đặt Vé Máy Bay Nội Địa', 'Domestic Flights')}
                </Link>
              </div>
            </div>
          </div>

          {/* 4-Photo Destination Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
            {gallery.map((g) => (
              <Link
                key={g.name}
                href={`/tim-kiem?q=${encodeURIComponent(g.name)}`}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  aspectRatio: '16 / 10',
                  boxShadow: '0 10px 26px rgba(16, 43, 78, 0.12)',
                }}
              >
                <img src={g.img} alt={g.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 45%, rgba(11,32,57,0.82) 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '14px 18px',
                    color: '#ffffff',
                    fontFamily: 'var(--font-display)',
                    fontSize: '18px',
                    fontWeight: 600,
                  }}
                >
                  {g.name}
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>

      {/* 4. Core Values Navy Band */}
      <section
        style={{
          background:
            'radial-gradient(circle at 85% 15%, rgba(200, 164, 93, 0.18) 0%, transparent 45%), linear-gradient(135deg, #0b2039 0%, #102b4e 55%, #173b63 100%)',
          color: '#ffffff',
          padding: '64px 0',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 38px' }}>
            <p className="vh-eyebrow">{t('TRIẾT LÝ PHỤC VỤ', 'OUR PHILOSOPHY')}</p>
            <h2 className="vh-section-title" style={{ color: '#ffffff' }}>
              {t('3 Giá Trị Cốt Lõi', '3 Core Values of')} <em>VIEHORA</em>
            </h2>
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
                  padding: '28px 24px',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--gold)', fontWeight: 700, marginBottom: '10px' }}>
                  {v.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '21px', color: '#ffffff', margin: '0 0 10px' }}>
                  {v.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#d5dfeb', lineHeight: 1.7 }}>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 4-Step Process + Contact Card */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <WaveBackdrop variant="blue" />
        <section className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '56px', paddingBottom: '72px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 32px' }}>
            <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '6px' }}>
              {t('QUY TRÌNH ĐỒNG HÀNH', 'HOW WE WORK')}
            </p>
            <h2 className="vh-section-title">
              {t('4 Bước Cho Một', '4 Steps to a')} <em>{t('Kỳ Nghỉ Trọn Vẹn', 'Perfect Holiday')}</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '18px', marginBottom: '48px' }}>
            {steps.map((s) => (
              <div
                key={s.step}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  borderTop: '3px solid var(--gold)',
                  borderRadius: '14px',
                  padding: '24px 20px',
                  boxShadow: '0 10px 24px rgba(16, 43, 78, 0.06)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color: 'var(--gold)', marginBottom: '10px' }}>
                  {s.step}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--navy)', margin: '0 0 8px' }}>{s.title}</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--muted)', margin: 0, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy2) 100%)',
              color: '#ffffff',
              borderRadius: '18px',
              padding: '38px 32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '28px',
              alignItems: 'center',
              border: '1px solid rgba(200, 164, 93, 0.35)',
            }}
          >
            <div>
              <p className="vh-eyebrow" style={{ marginBottom: '8px' }}>
                {t('LIÊN HỆ TRỰC TIẾP', 'DIRECT CONTACT')}
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', margin: '0 0 10px', color: '#ffffff' }}>
                {t('Sẵn sàng cho hành trình tiếp theo?', 'Ready for your next journey?')}
              </h2>
              <p style={{ fontSize: '14px', color: '#cbd5e1', margin: 0 }}>
                {t(
                  'Đội ngũ chuyên viên VIEHORA TRAVEL luôn sẵn sàng tư vấn lịch trình và báo giá ưu đãi cho bạn.',
                  'Our VIEHORA TRAVEL specialists are ready to craft your itinerary and offer the best rates.'
                )}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <div>
                <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.12em' }}>
                  {t('VĂN PHÒNG: ', 'OFFICE: ')}
                </span>
                <span>{BRAND_INFO.address}</span>
              </div>
              <div>
                <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.12em' }}>
                  HOTLINE 24/7:{' '}
                </span>
                <a href={`tel:${BRAND_INFO.hotlineTel}`} style={{ color: '#ffffff', fontWeight: 700 }}>
                  {BRAND_INFO.hotline}
                </a>
              </div>
              <div>
                <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.12em' }}>
                  EMAIL:{' '}
                </span>
                <a href={`mailto:${BRAND_INFO.email}`} style={{ color: '#ffffff' }}>
                  {BRAND_INFO.email}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '10px', flexWrap: 'wrap' }}>
                <a href={BRAND_INFO.zaloUrl} target="_blank" rel="noopener noreferrer" className="vh-btn-gold">
                  {t('Chat Zalo Tư Vấn ↗', 'Chat on Zalo ↗')}
                </a>
                <a
                  href={`tel:${BRAND_INFO.hotlineTel}`}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.55)',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 700,
                  }}
                >
                  {t('Gọi', 'Call')} {BRAND_INFO.hotline}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
