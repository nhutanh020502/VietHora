import Link from 'next/link';
import { ARTICLES } from '@/data/content';

export default function NewsListPage() {
  return (
    <main className="container" style={{ paddingTop: '40px', paddingBottom: '64px' }}>
      <div className="vh-section-header" style={{ marginBottom: '28px' }}>
        <div>
          <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '6px' }}>
            VIEHORA JOURNAL
          </p>
          <h1 className="vh-section-title">
            Cẩm nang &amp; <em>Tin tức du lịch</em>
          </h1>
        </div>
      </div>

      <div className="vh-news-grid">
        {ARTICLES.map((post) => (
          <article
            key={post.id}
            style={{
              background: 'var(--white)',
              borderRadius: '14px',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ position: 'relative', height: '185px', overflow: 'hidden' }}>
              <Link href={`/tin-tuc/${post.slug}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Link>
              <span
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'var(--navy)',
                  color: 'var(--gold)',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '4px',
                }}
              >
                {post.date}
              </span>
            </div>

            <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.4, margin: '0 0 8px' }}>
                  <Link href={`/tin-tuc/${post.slug}`}>{post.title}</Link>
                </h2>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.55, margin: '0 0 14px' }}>{post.excerpt}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #f0ece3', paddingTop: '12px', fontSize: '12px', color: '#8a95a5' }}>
                <span>{post.author}</span>
                <Link href={`/tin-tuc/${post.slug}`} style={{ color: '#a7833e', fontWeight: 700 }}>
                  Đọc tiếp ↗
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
