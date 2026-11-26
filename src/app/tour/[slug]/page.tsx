'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { useParams } from 'next/navigation';
import TourDetailClient from '@/components/TourDetailClient';
import { useTours } from '@/lib/tourStore';

function TourDetailInner() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? '';
  const { tours, hydrated } = useTours();

  if (!hydrated) {
    return (
      <main className="container" style={{ padding: '60px 0', textAlign: 'center', color: 'var(--muted)' }}>
        Đang tải thông tin tour...
      </main>
    );
  }

  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return (
      <main className="container" style={{ padding: '64px 0', textAlign: 'center' }}>
        <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '14px', padding: '48px 24px', maxWidth: '580px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', marginTop: 0 }}>
            Không tìm thấy tour
          </h1>
          <p style={{ color: 'var(--muted)', marginBottom: '20px' }}>
            Tour này chưa tồn tại hoặc đã bị xóa khỏi trình duyệt.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="vh-btn-navy-outline">
              Về Trang Chủ
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const relatedTours = tours
    .filter((t) => t.id !== tour.id && t.category === tour.category)
    .slice(0, 3);

  return <TourDetailClient tour={tour} relatedTours={relatedTours} />;
}

export default function TourDetailPage() {
  return (
    <Suspense fallback={<div style={{ padding: '60px 0', textAlign: 'center' }}>Đang tải chi tiết tour...</div>}>
      <TourDetailInner />
    </Suspense>
  );
}
