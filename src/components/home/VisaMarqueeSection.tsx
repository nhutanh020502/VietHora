import Link from 'next/link';
import { VISA_ROW_1, VISA_ROW_2 } from '@/data/content';

export default function VisaMarqueeSection() {
  return (
    <section className="snt-visa-marquee-sec">
      <div className="snt-visa-header-center">
        <span className="snt-visa-pill-tag">DỊCH VỤ VISA CHUYÊN NGHIỆP</span>
        <h2 className="snt-visa-main-title">Dịch Vụ Làm Visa Trọn Gói Tỷ Lệ Đậu 99%</h2>
        <p className="snt-visa-sub-desc">
          Hỗ trợ xử lý hồ sơ nhanh chóng, chứng minh tài chính &amp; luyện phỏng vấn 1-1 cho mọi quốc gia trên thế giới.
        </p>
      </div>

      <div className="snt-marquee-wrapper">
        <div className="snt-marquee-row-1">
          <div className="snt-marquee-track">
            {[...VISA_ROW_1, ...VISA_ROW_1].map((item, idx) => (
              <Link key={`r1-${idx}`} href="/visa" className="snt-big-visa-pill">
                <div className="snt-visa-flag-box">
                  <img src={item.flag} alt={item.title} loading="lazy" />
                </div>
                <div>
                  <span className="snt-visa-pill-title">{item.title}</span>
                  <span className="snt-visa-pill-tag-sub">{item.tag}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="snt-marquee-row-2">
          <div className="snt-marquee-track">
            {[...VISA_ROW_2, ...VISA_ROW_2].map((item, idx) => (
              <Link key={`r2-${idx}`} href="/visa" className="snt-big-visa-pill">
                <div className="snt-visa-flag-box">
                  <img src={item.flag} alt={item.title} loading="lazy" />
                </div>
                <div>
                  <span className="snt-visa-pill-title">{item.title}</span>
                  <span className="snt-visa-pill-tag-sub">{item.tag}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <Link href="/visa" className="vh-btn-gold">
          Xem Bảng Giá &amp; Tư Vấn Visa &rarr;
        </Link>
      </div>
    </section>
  );
}
