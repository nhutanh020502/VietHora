import Link from 'next/link';
import { Tour } from '@/data/tours';

export default function TourCard({ tour }: { tour: Tour }) {
  const detailHref = `/tour/${tour.slug}`;

  return (
    <article className="vh-tour-card">
      <div className="vh-tour-photo">
        <Link href={detailHref} aria-label={tour.title}>
          <img src={tour.image} alt={tour.title} loading="lazy" />
        </Link>
        {tour.badgeText && <span className="vh-tour-badge">{tour.badgeText}</span>}
        <span className="vh-tour-code-tag">{tour.tourCode}</span>
      </div>

      <div className="vh-tour-body">
        <div className="vh-tour-meta-top">
          {tour.destination} · {tour.duration}
        </div>
        <h3 className="vh-tour-title">
          <Link href={detailHref}>{tour.title}</Link>
        </h3>

        <div className="vh-tour-specs">
          <span>Khởi hành: {tour.startPoint}</span>
          <span>•</span>
          <span>{tour.startDate}</span>
        </div>

        <div className="vh-tour-footer">
          <div>
            {tour.priceOld && <span className="vh-price-old">{tour.priceOld}</span>}
            <span className="vh-price-new">{tour.priceNew}</span>
          </div>
          <Link href={detailHref} className="vh-btn-gold" style={{ padding: '9px 14px', fontSize: '11px' }}>
            Đặt Tour ↗
          </Link>
        </div>
      </div>
    </article>
  );
}
