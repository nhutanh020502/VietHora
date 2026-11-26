import Link from 'next/link';
import TourCard from '@/components/TourCard';
import { CATEGORY_LABELS, getToursByCategory } from '@/data/tours';

export function generateStaticParams() {
  return Object.keys(CATEGORY_LABELS).map((slug) => ({ slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const info = CATEGORY_LABELS[slug] ?? CATEGORY_LABELS['du-lich'];
  const tours = getToursByCategory(slug);

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
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, margin: '0 0 10px', color: '#ffffff' }}>
            {info.title}
          </h1>
          <p style={{ fontSize: '15px', color: '#e2e8f0', margin: 0 }}>{info.subtitle}</p>
        </div>
      </section>

      <main className="container" style={{ paddingTop: '40px', paddingBottom: '64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ fontSize: '14px', color: 'var(--muted)' }}>
            Tìm thấy <strong style={{ color: 'var(--navy)' }}>{tours.length}</strong> chương trình tour phù hợp
          </div>
          <Link href="/tim-kiem" className="vh-btn-navy-outline">
            Bộ lọc nâng cao &rarr;
          </Link>
        </div>

        <div className="tours-card-grid">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </main>
    </>
  );
}
