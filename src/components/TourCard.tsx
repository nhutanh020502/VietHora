import Link from 'next/link';
import { Tour } from '@/data/tours';

export default function TourCard({ tour }: { tour: Tour }) {
  const detailHref = `/tour/${tour.slug}`;

  return (
    <article className="vh-tour-card">
      <div className="vh-tour-photo">
        <Link href={detailHref} aria-label={tour.title} style={{ display: 'block', width: '100%', height: '100%' }}>
          <img src={tour.image} alt={tour.title} loading="lazy" />
        </Link>
        {tour.badgeText && <span className="vh-tour-badge-pill">{tour.badgeText}</span>}
      </div>

      {/* Floating White Card overlapping photo bottom */}
      <div className="vh-tour-floating-box">
        <h3 className="vh-tour-floating-title">
          <Link href={detailHref}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="#d97706"
              stroke="none"
              style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: '5px', flexShrink: 0 }}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {tour.title}
          </Link>
        </h3>

        <div className="vh-tour-code-row">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#102b4e" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M7 8h10" />
            <path d="M7 12h10" />
            <path d="M7 16h6" />
          </svg>
          <span>
            Mã tour: <strong>{tour.tourCode}</strong>
          </span>
        </div>

        <div className="vh-tour-meta-row">
          <div className="vh-tour-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
            </svg>
            <span>{tour.startPoint}</span>
          </div>
          <div className="vh-tour-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>
              Số ngày: <strong>{tour.duration}</strong>
            </span>
          </div>
        </div>

        <div className="vh-tour-floating-footer">
          <div>
            <span className="vh-price-label">Giá từ:</span>
            {tour.priceOld && <span className="vh-price-old">{tour.priceOld}</span>}
            <span className="vh-price-new">{tour.priceNew}</span>
          </div>
          <Link href={detailHref} className="vh-tour-cta-btn">
            Xem chi tiết
          </Link>
        </div>
      </div>
    </article>
  );
}
