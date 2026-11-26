import Link from 'next/link';
import { Tour } from '@/data/tours';
import TourCard from '@/components/TourCard';

interface TourSectionProps {
  eyebrow: string;
  title: string;
  highlight: string;
  categoryLink: string;
  tours: Tour[];
}

export default function TourSection({
  eyebrow,
  title,
  highlight,
  categoryLink,
  tours,
}: TourSectionProps) {
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

      <div className="tours-card-grid">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}
