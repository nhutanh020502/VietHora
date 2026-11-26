import Link from 'next/link';
import { Suspense } from 'react';
import TourCard from '@/components/TourCard';
import { filterTours } from '@/data/tours';

async function SearchResults({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    cat?: string;
    start_point?: string;
    start_date?: string;
    price_range?: string;
    duration_range?: string;
  }>;
}) {
  const sp = await searchParams;
  const results = filterTours({
    q: sp.q,
    cat: sp.cat,
    startPoint: sp.start_point,
    startDate: sp.start_date,
    priceRange: sp.price_range,
    durationRange: sp.duration_range,
  });

  return (
    <>
      <div className="vh-section-header" style={{ marginBottom: '24px' }}>
        <div>
          <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '6px' }}>
            TÌM KIẾM HÀNH TRÌNH
          </p>
          <h1 className="vh-section-title">
            Kết quả tìm kiếm <em>({results.length} tour)</em>
          </h1>
        </div>
        <Link href="/" className="vh-btn-navy-outline">
          &larr; Về trang chủ
        </Link>
      </div>

      <form
        method="GET"
        action="/tim-kiem"
        style={{
          background: 'var(--white)',
          border: '1px solid var(--border)',
          borderRadius: '14px',
          padding: '18px',
          marginBottom: '28px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '12px',
          alignItems: 'end',
        }}
      >
        <div>
          <label className="vh-filter-label">Từ khóa / Điểm đến</label>
          <input
            type="search"
            name="q"
            defaultValue={sp.q ?? ''}
            placeholder="Phú Quốc, Nhật Bản..."
            className="vh-search-input"
            style={{ width: '100%' }}
          />
        </div>

        <div>
          <label className="vh-filter-label">Dòng tour</label>
          <select name="cat" defaultValue={sp.cat ?? ''} className="vh-filter-select">
            <option value="">Tất cả dòng tour</option>
            <option value="trong-nuoc">Tour Trong Nước</option>
            <option value="nuoc-ngoai">Tour Nước Ngoài</option>
            <option value="hanh-huong">Tour Hành Hương</option>
            <option value="gia-re">Tour Giá Sốc</option>
          </select>
        </div>

        <div>
          <label className="vh-filter-label">Mức giá</label>
          <select name="price_range" defaultValue={sp.price_range ?? ''} className="vh-filter-select">
            <option value="">Tất cả mức giá</option>
            <option value="under_5m">Dưới 5 triệu</option>
            <option value="5m_15m">5 triệu - 15 triệu</option>
            <option value="15m_30m">15 triệu - 30 triệu</option>
            <option value="over_30m">Trên 30 triệu</option>
          </select>
        </div>

        <div>
          <label className="vh-filter-label">Số ngày đi</label>
          <select name="duration_range" defaultValue={sp.duration_range ?? ''} className="vh-filter-select">
            <option value="">Tất cả thời gian</option>
            <option value="1_3_days">1 - 3 ngày</option>
            <option value="4_7_days">4 - 7 ngày</option>
            <option value="over_7_days">Trên 7 ngày</option>
          </select>
        </div>

        <button type="submit" className="vh-btn-gold" style={{ height: '42px' }}>
          Lọc Tour
        </button>
      </form>

      {results.length > 0 ? (
        <div className="tours-card-grid">
          {results.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      ) : (
        <div style={{ background: 'var(--white)', padding: '48px 24px', borderRadius: '14px', textAlign: 'center', border: '1px solid var(--border)' }}>
          <p style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)', marginBottom: '14px' }}>
            Không tìm thấy tour phù hợp với tiêu chí bạn chọn.
          </p>
          <Link href="/category/du-lich" className="vh-btn-gold">
            Xem tất cả Tour VIEHORA TRAVEL
          </Link>
        </div>
      )}
    </>
  );
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    cat?: string;
    start_point?: string;
    start_date?: string;
    price_range?: string;
    duration_range?: string;
  }>;
}) {
  return (
    <main className="container" style={{ paddingTop: '36px', paddingBottom: '64px' }}>
      <Suspense fallback={<div style={{ padding: '40px 0', textAlign: 'center' }}>Đang tìm kiếm tour...</div>}>
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
