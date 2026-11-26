'use client';

import Link from 'next/link';
import { FAVORITE_DESTINATIONS } from '@/data/content';
import { useLanguage } from '@/lib/i18n';

export default function FavoriteDestinations() {
  const { t } = useLanguage();

  return (
    <section className="fav-dest-sec">
      <div className="snt-section-header">
        <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '6px' }}>
          {t('ĐIỂM ĐẾN ĐANG CHỜ BẠN', 'DESTINATIONS AWAITING YOU')}
        </p>
        <h2 className="vh-section-title">
          {t('Việt Nam', 'Discover')} <em>{t('tươi đẹp', 'Vietnam')}</em>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '8px' }}>
          {t(
            'Những vùng đất giàu bản sắc, thiên nhiên kỳ vĩ và trải nghiệm đáng nhớ trên dải đất hình chữ S',
            'Explore rich cultural heritage, breathtaking landscapes, and authentic experiences across Vietnam'
          )}
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
              <img src={dest.img} alt={dest.name} width={192} height={340} loading="lazy" />
            </div>
            <div className="fav-dest-name-below">{dest.name}</div>
            <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>{dest.subtitle}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
