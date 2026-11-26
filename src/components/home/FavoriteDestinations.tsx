import Link from 'next/link';
import { FAVORITE_DESTINATIONS } from '@/data/content';

export default function FavoriteDestinations() {
  return (
    <section className="fav-dest-sec">
      <div className="snt-section-header">
        <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '6px' }}>
          ĐIỂM ĐẾN ĐANG CHỜ BẠN
        </p>
        <h2 className="vh-section-title">
          Điểm đến <em>nổi bật</em>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '8px' }}>
          Khám phá những di sản văn hóa &amp; cảnh quan kỳ vĩ tại Việt Nam và khắp thế giới
        </p>
      </div>

      <div className="fav-dest-grid">
        {FAVORITE_DESTINATIONS.map((dest) => (
          <Link
            key={dest.slug}
            href={`/tim-kiem?q=${encodeURIComponent(dest.name)}`}
            className="fav-dest-card"
          >
            <div className="fav-dest-oval-wrap">
              <img src={dest.img} alt={dest.name} width={170} height={320} loading="lazy" />
            </div>
            <div className="fav-dest-name-below">{dest.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
