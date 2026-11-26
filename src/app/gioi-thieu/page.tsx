import Link from 'next/link';
import { BRAND_INFO } from '@/data/content';

export default function AboutPage() {
  const stats = [
    { number: '2.500+', label: 'Khách hàng đồng hành' },
    { number: '50+', label: 'Điểm đến Việt Nam' },
    { number: '4.9/5★', label: 'Mức độ hài lòng' },
    { number: '24/7', label: 'Tư vấn & Hỗ trợ' },
  ];

  const values = [
    {
      symbol: '✧',
      title: 'An toàn là ưu tiên số 1',
      desc: 'Lựa chọn xe du lịch đời mới, đối tác lưu trú đạt chuẩn và đội ngũ tài xế – hướng dẫn viên dày dạn kinh nghiệm trên mọi cung đường.',
    },
    {
      symbol: '⌂',
      title: 'Gần gũi bản sắc địa phương',
      desc: 'Mỗi hành trình đều chú trọng trải nghiệm văn hóa, ẩm thực đặc trưng và kết nối chân thành với con người tại từng vùng đất.',
    },
    {
      symbol: '❋',
      title: 'Du lịch xanh & bền vững',
      desc: 'Tôn trọng cảnh quan thiên nhiên, giữ gìn di sản và lan tỏa tinh thần du lịch có trách nhiệm đến cộng đồng.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Lắng nghe nhu cầu',
      desc: 'Tư vấn điểm đến, mùa đẹp nhất và ngân sách phù hợp cho gia đình, cặp đôi hoặc đoàn doanh nghiệp.',
    },
    {
      step: '02',
      title: 'Lịch trình minh bạch',
      desc: 'Báo giá trọn gói rõ ràng, cam kết không phát sinh chi phí ẩn trong suốt chuyến đi.',
    },
    {
      step: '03',
      title: 'Đồng hành tận tâm',
      desc: 'Hướng dẫn viên theo sát đoàn, hỗ trợ linh hoạt từ lúc đón sân bay đến khi kết thúc hành trình.',
    },
    {
      step: '04',
      title: 'Chăm sóc 24/7',
      desc: 'Tổng đài hotline và Zalo luôn sẵn sàng hỗ trợ mọi tình huống trước, trong và sau chuyến đi.',
    },
  ];

  return (
    <>
      {/* 1. Editorial Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '380px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage:
            'linear-gradient(135deg, rgba(11, 32, 57, 0.88) 0%, rgba(16, 43, 78, 0.72) 100%), url(/assets/img/ha-giang.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
          textAlign: 'center',
          padding: '64px 20px 84px',
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          <p className="vh-eyebrow">VỀ VIEHORA TRAVEL</p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(34px, 4.8vw, 54px)',
              fontWeight: 600,
              margin: '0 0 14px',
              lineHeight: 1.15,
              color: '#ffffff',
            }}
          >
            Mỗi vùng đất là một điều <em style={{ color: 'var(--gold)' }}>đáng nhớ.</em>
          </h1>
          <p style={{ fontSize: '16px', color: '#e2e8f0', margin: '0 auto', maxWidth: '640px' }}>
            {BRAND_INFO.legalName} — Đồng hành cùng bạn khám phá trọn vẹn vẻ đẹp Việt Nam qua những chuyến đi an toàn, gần gũi và bền vững.
          </p>
        </div>
      </section>

      {/* 2. Floating Stats Bar */}
      <div className="container" style={{ marginTop: '-44px', position: 'relative', zIndex: 10 }}>
        <div
          style={{
            background: 'var(--white)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '24px 20px',
            boxShadow: '0 16px 40px rgba(16, 43, 78, 0.1)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '20px',
            textAlign: 'center',
          }}
        >
          {stats.map((st) => (
            <div key={st.label}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '30px',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  lineHeight: 1.1,
                }}
              >
                {st.number}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '6px', fontWeight: 500 }}>
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Brand Story Split */}
      <main className="container" style={{ paddingTop: '56px', paddingBottom: '32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '44px',
            alignItems: 'center',
          }}
        >
          <div style={{ position: 'relative', padding: '0 18px 18px 0' }}>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                boxShadow: '0 18px 42px rgba(16, 43, 78, 0.12)',
                background: '#ffffff',
              }}
            >
              <img src="/assets/img/viehora-banner.jpg" alt="VIEHORA TRAVEL" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                background: 'var(--navy)',
                color: '#ffffff',
                padding: '12px 18px',
                borderRadius: '10px',
                border: '1px solid var(--gold)',
                fontSize: '11px',
                letterSpacing: '0.12em',
                fontWeight: 700,
                boxShadow: '0 10px 24px rgba(11, 32, 57, 0.25)',
              }}
            >
              BEYOND EVERY HORIZON
            </div>
          </div>

          <div>
            <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '8px' }}>
              CÂU CHUYỆN THƯƠNG HIỆU
            </p>
            <h2 className="vh-section-title" style={{ marginBottom: '18px' }}>
              Chân Trời Viên Mãn — <em>VIEHORA TRAVEL</em>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--ink)', lineHeight: 1.8, marginBottom: '14px' }}>
              <strong>VIEHORA TRAVEL</strong> ra đời với khát vọng mang đến những hành trình du lịch nội địa chỉn chu, nơi mỗi chuyến đi không chỉ là tham quan mà còn là khoảng thời gian nghỉ ngơi, gắn kết gia đình và cảm nhận trọn vẹn vẻ đẹp văn hóa – thiên nhiên Việt Nam.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '22px' }}>
              Từ những cung đường đèo hùng vĩ nơi địa đầu Hà Giang, nét trầm mặc của phố cổ Hội An cho đến biển xanh nắng vàng tại Phú Quốc, Nha Trang — chúng tôi chăm chút từng chi tiết để bạn luôn an tâm tận hưởng.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/category/trong-nuoc" className="vh-btn-gold">
                Khám Phá Tour Trong Nước ↗
              </Link>
              <Link href="/ve-may-bay" className="vh-btn-navy-outline">
                Đặt Vé Máy Bay Nội Địa
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* 4. Core Values Navy Band */}
      <section className="vh-values-band">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto' }}>
            <p className="vh-eyebrow">TRIẾT LÝ PHỤC VỤ</p>
            <h2 className="vh-section-title" style={{ color: '#ffffff' }}>
              3 Giá Trị Cốt Lõi <em>VIEHORA</em>
            </h2>
          </div>

          <div className="vh-values-grid">
            {values.map((v) => (
              <article key={v.title} className="vh-value-card">
                <div className="vh-value-icon">{v.symbol}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 4-Step Journey Process */}
      <section className="container" style={{ paddingTop: '24px', paddingBottom: '48px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 32px' }}>
          <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '6px' }}>
            QUY TRÌNH ĐỒNG HÀNH
          </p>
          <h2 className="vh-section-title">
            4 Bước Cho Một <em>Kỳ Nghỉ Trọn Vẹn</em>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '18px',
          }}
        >
          {steps.map((s) => (
            <div
              key={s.step}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '24px 20px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  marginBottom: '10px',
                }}
              >
                {s.step}
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--navy)', margin: '0 0 8px' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)', margin: 0, lineHeight: 1.65 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Contact Card */}
      <section className="container" style={{ paddingBottom: '72px' }}>
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
              LIÊN HỆ TRỰC TIẾP
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', margin: '0 0 10px', color: '#ffffff' }}>
              Sẵn sàng cho hành trình tiếp theo?
            </h2>
            <p style={{ fontSize: '14px', color: '#cbd5e1', margin: 0 }}>
              Đội ngũ chuyên viên VIEHORA TRAVEL luôn sẵn sàng tư vấn lịch trình và báo giá ưu đãi cho bạn.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
            <div>
              <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.12em' }}>
                VĂN PHÒNG:{' '}
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
                Chat Zalo Tư Vấn ↗
              </a>
              <a
                href={`tel:${BRAND_INFO.hotlineTel}`}
                style={{
                  padding: '10px 18px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.55)',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 700,
                }}
              >
                Gọi {BRAND_INFO.hotline}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
