'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { useParams } from 'next/navigation';
import TourCard from '@/components/TourCard';
import { CATEGORY_LABELS } from '@/data/tours';
import { useTours } from '@/lib/tourStore';

function CategoryPageInner() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? 'du-lich';
  const info = CATEGORY_LABELS[slug] ?? CATEGORY_LABELS['du-lich'];
  const { tours, hydrated } = useTours();

  const filteredTours =
    slug === 'du-lich' || slug === 'all' ? tours : tours.filter((t) => t.category === slug);

  return (
    <>
      <section
        style={{
          minHeight: '260px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `linear-gradient(rgba(11, 32, 57, 0.78), rgba(16, 43, 78, 0.78)), url(${info.banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
          textAlign: 'center',
          padding: '48px 20px',
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          <p className="vh-eyebrow">VIEHORA TRAVEL</p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 4vw, 44px)',
              fontWeight: 600,
              margin: '0 0 10px',
              color: '#ffffff',
            }}
          >
            {info.title}
          </h1>
          <p style={{ fontSize: '15px', color: '#e2e8f0', margin: 0 }}>{info.subtitle}</p>
        </div>
      </section>

      <main className="container" style={{ paddingTop: '40px', paddingBottom: '64px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ fontSize: '14px', color: 'var(--muted)' }}>
            Tìm thấy <strong style={{ color: 'var(--navy)' }}>{hydrated ? filteredTours.length : 0}</strong> chương trình tour phù hợp
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link href="/tim-kiem" className="vh-btn-navy-outline">
              Bộ lọc nâng cao &rarr;
            </Link>
          </div>
        </div>

        {hydrated && filteredTours.length > 0 ? (
          <div className="tours-card-grid">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : hydrated ? (
          <div
            style={{
              background: 'var(--white)',
              padding: '48px 24px',
              borderRadius: '14px',
              textAlign: 'center',
              border: '1px solid var(--border)',
            }}
          >
            <p style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)', marginBottom: '14px' }}>
              Chưa có tour nào trong danh mục này.
            </p>
            <Link href="/" className="vh-btn-navy-outline">
              &larr; Về Trang Chủ
            </Link>
          </div>
        ) : null}
      </main>
    </>
  );
}

export default function CategoryPage() {
  return (
    <Suspense fallback={<div style={{ padding: '60px 0', textAlign: 'center' }}>Đang tải danh mục...</div>}>
      <CategoryPageInner />
    </Suspense>
  );
}
