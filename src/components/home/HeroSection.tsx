'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { HERO_SLIDES } from '@/data/content';

export default function HeroSection() {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [q, setQ] = useState('');
  const [cat, setCat] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [startDate, setStartDate] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [durationRange, setDurationRange] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set('q', q.trim());
    if (cat) params.set('cat', cat);
    if (startPoint) params.set('start_point', startPoint);
    if (startDate) params.set('start_date', startDate);
    if (priceRange) params.set('price_range', priceRange);
    if (durationRange) params.set('duration_range', durationRange);
    router.push(`/tim-kiem${params.toString() ? `?${params.toString()}` : ''}`);
  };

  return (
    <section className="vh-hero">
      <div className="vh-hero-bg">
        {HERO_SLIDES.map((imgUrl, index) => (
          <div
            key={imgUrl + index}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: index === activeSlide ? 1 : 0,
              transition: 'opacity 0.9s ease-in-out',
            }}
          >
            <img src={imgUrl} alt={`VIEHORA TRAVEL Banner ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="vh-hero-shade" />

      <div className="container vh-hero-content">
        <p className="vh-eyebrow">HÀNH TRÌNH CỦA BẠN · CÂU CHUYỆN CỦA BẠN</p>
        <h1 className="vh-hero-title">
          Chạm đến
          <br />
          <em>mọi chân trời.</em>
        </h1>
        <p className="vh-hero-sub">
          Khám phá vẻ đẹp Việt Nam và thế giới qua những hành trình giàu trải nghiệm, kết nối văn hóa và thiên nhiên — An toàn · Gần gũi · Bền vững.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
          <Link href="/category/du-lich" className="vh-btn-gold">
            Khám phá tour &rarr;
          </Link>
          <Link
            href="/gioi-thieu"
            style={{
              minHeight: '44px',
              padding: '0 22px',
              display: 'inline-flex',
              alignItems: 'center',
              border: '1px solid rgba(255,255,255,0.6)',
              borderRadius: '6px',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Câu chuyện VIEHORA
          </Link>
        </div>

        {/* Search & Filter Card */}
        <form role="search" className="vh-search-card" onSubmit={handleSearch}>
          <div className="vh-search-row">
            <input
              type="search"
              className="vh-search-input"
              aria-label="Nhập điểm đến hoặc từ khóa tìm kiếm"
              placeholder="Bạn muốn đi đâu? (Phú Quốc, Nhật Bản, Hàn Quốc, Hành hương...)"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <button
              type="button"
              className="vh-btn-navy-outline"
              onClick={() => setShowAdvanced((prev) => !prev)}
            >
              Lọc chi tiết {showAdvanced ? '▴' : '▾'}
            </button>
            <button type="submit" className="vh-btn-gold">
              Tìm Kiếm Tour
            </button>
          </div>

          {showAdvanced && (
            <div className="vh-advanced-panel">
              <div>
                <label className="vh-filter-label">Dòng tour</label>
                <select className="vh-filter-select" value={cat} onChange={(e) => setCat(e.target.value)}>
                  <option value="">Tất cả dòng tour</option>
                  <option value="trong-nuoc">Tour Trong Nước</option>
                  <option value="nuoc-ngoai">Tour Nước Ngoài</option>
                  <option value="hanh-huong">Tour Hành Hương</option>
                  <option value="gia-re">Tour Giá Sốc</option>
                </select>
              </div>
              <div>
                <label className="vh-filter-label">Điểm khởi hành</label>
                <select className="vh-filter-select" value={startPoint} onChange={(e) => setStartPoint(e.target.value)}>
                  <option value="">Tất cả điểm đi</option>
                  <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                </select>
              </div>
              <div>
                <label className="vh-filter-label">Thời gian khởi hành</label>
                <select className="vh-filter-select" value={startDate} onChange={(e) => setStartDate(e.target.value)}>
                  <option value="">Tất cả thời gian</option>
                  <option value="Hàng tuần">Hàng tuần</option>
                  <option value="Tháng 11">Tháng 11</option>
                  <option value="Tháng 12">Tháng 12</option>
                </select>
              </div>
              <div>
                <label className="vh-filter-label">Mức giá</label>
                <select className="vh-filter-select" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                  <option value="">Tất cả mức giá</option>
                  <option value="under_5m">Dưới 5 triệu</option>
                  <option value="5m_15m">5 triệu - 15 triệu</option>
                  <option value="15m_30m">15 triệu - 30 triệu</option>
                  <option value="over_30m">Trên 30 triệu</option>
                </select>
              </div>
              <div>
                <label className="vh-filter-label">Số ngày đi</label>
                <select className="vh-filter-select" value={durationRange} onChange={(e) => setDurationRange(e.target.value)}>
                  <option value="">Tất cả</option>
                  <option value="1_3_days">1 - 3 ngày</option>
                  <option value="4_7_days">4 - 7 ngày</option>
                  <option value="over_7_days">Trên 7 ngày</option>
                </select>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
