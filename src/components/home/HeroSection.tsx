'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [q, setQ] = useState('');
  const [cat, setCat] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [startDate, setStartDate] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [durationRange, setDurationRange] = useState('');

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
    <section className="vh-hero-banner-section">
      {/* Full-width uncropped official cover banner */}
      <div style={{ width: '100%', background: '#0b2039' }}>
        <img
          src="/assets/img/viehora-banner.jpg"
          alt="VIEHORA TRAVEL — Chuyên phục vụ các tour du lịch nội địa"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>

      {/* Search & Filter Bar placed cleanly below the banner */}
      <div className="container" style={{ marginTop: '-28px', position: 'relative', zIndex: 20, marginBottom: '28px' }}>
        <form role="search" className="vh-search-card" style={{ margin: '0 auto' }} onSubmit={handleSearch}>
          <div className="vh-search-row">
            <input
              type="search"
              className="vh-search-input"
              aria-label="Nhập điểm đến Việt Nam hoặc từ khóa tìm kiếm"
              placeholder="Bạn muốn đi đâu ở Việt Nam? (Hà Giang, Đà Nẵng, Phú Quốc, Đà Lạt...)"
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
                  <option value="">Tất cả Tour Trong Nước</option>
                  <option value="trong-nuoc">Tour Trong Nước</option>
                  <option value="gia-re">Tour Giá Tốt</option>
                </select>
              </div>
              <div>
                <label className="vh-filter-label">Điểm khởi hành</label>
                <select className="vh-filter-select" value={startPoint} onChange={(e) => setStartPoint(e.target.value)}>
                  <option value="">Tất cả điểm đi</option>
                  <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="Cần Thơ">Cần Thơ</option>
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
                  <option value="15m_30m">Trên 15 triệu</option>
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
