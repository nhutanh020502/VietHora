'use client';

import Link from 'next/link';
import TourCard from '@/components/TourCard';
import { TourCategorySlug } from '@/data/tours';
import { useTours } from '@/lib/tourStore';

interface TourSectionProps {
  eyebrow: string;
  title: string;
  highlight: string;
  categorySlug: TourCategorySlug;
  categoryLink: string;
}

export default function TourSection({
  eyebrow,
  title,
  highlight,
  categorySlug,
  categoryLink,
}: TourSectionProps) {
  const { tours, hydrated } = useTours();
  const filtered = tours.filter((t) => t.category === categorySlug).slice(0, 6);

  return (
    <section className="vh-section">
      <div className="vh-section-header">
        <div>
          <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '6px' }}>
            {eyebrow}
          </p>
          <h2 className="vh-section-title">
            {title} <em>{highlight}</em>
          </h2>
        </div>
        <Link href={categoryLink} className="vh-btn-navy-outline">
          Xem tất cả &rarr;
        </Link>
      </div>

      {!hydrated ? (
        <div style={{ padding: '24px', color: 'var(--muted)', fontSize: '14px' }}>Đang tải danh sách tour...</div>
      ) : filtered.length > 0 ? (
        <div className="tours-card-grid">
          {filtered.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      ) : (
        <div
          style={{
            background: 'var(--white)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            padding: '28px 24px',
            textAlign: 'center',
            color: 'var(--muted)',
            fontSize: '14px',
          }}
        >
          Hiện chưa có tour nào trong mục <strong style={{ color: 'var(--navy)' }}>{title} {highlight}</strong>.
        </div>
      )}
    </section>
  );
}
