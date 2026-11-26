import Link from 'next/link';
import { ARTICLES } from '@/data/content';

export default function BlogAndNewsSection() {
  const featuredArticles = ARTICLES.slice(0, 4);

  return (
    <section className="vh-section" style={{ paddingBottom: '72px' }}>
      <div className="vh-section-header">
        <div>
          <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '6px' }}>
            CẨM NANG &amp; TIN TỨC
          </p>
          <h2 className="vh-section-title">
            Gợi ý cho <em>chuyến đi</em>
          </h2>
        </div>
        <Link href="/tin-tuc" className="vh-btn-navy-outline">
          Xem tất cả &rarr;
        </Link>
      </div>

      <div className="vh-news-grid">
        {featuredArticles.map((post) => (
          <article key={post.id} className="vh-tour-card">
            <div className="vh-tour-photo">
              <Link href={`/tin-tuc/${post.slug}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                <img src={post.image} alt={post.title} loading="lazy" />
              </Link>
              <span className="vh-tour-badge-pill">{post.date}</span>
            </div>

            <div className="vh-tour-floating-box" style={{ paddingBottom: '16px' }}>
              <h3 className="vh-tour-floating-title" style={{ fontSize: '15px' }}>
                <Link href={`/tin-tuc/${post.slug}`}>{post.title}</Link>
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--muted)',
                  lineHeight: 1.55,
                  margin: '0 0 14px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {post.excerpt}
              </p>
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: '10px',
                  borderTop: '1px solid #f0ece3',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '12px',
                }}
              >
                <span style={{ color: 'var(--muted)' }}>{post.author}</span>
                <Link href={`/tin-tuc/${post.slug}`} style={{ color: 'var(--navy)', fontWeight: 700 }}>
                  Đọc tiếp ↗
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
