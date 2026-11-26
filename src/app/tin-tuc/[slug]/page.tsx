import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES } from '@/data/content';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="container" style={{ maxWidth: '900px', paddingTop: '36px', paddingBottom: '64px' }}>
      <nav style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '18px', display: 'flex', gap: '8px' }}>
        <Link href="/" style={{ color: 'var(--navy)', fontWeight: 700 }}>
          Trang chủ
        </Link>
        <span>/</span>
        <Link href="/tin-tuc" style={{ color: 'var(--navy)', fontWeight: 700 }}>
          Tin tức &amp; Cẩm nang
        </Link>
      </nav>

      <article style={{ background: 'var(--white)', borderRadius: '16px', padding: '32px', border: '1px solid var(--border)' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.35, margin: '0 0 12px' }}>
          {article.title}
        </h1>
        <div style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '20px' }}>
          Đăng bởi <strong>{article.author}</strong> · {article.date}
        </div>

        <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '24px' }}>
          <img src={article.image} alt={article.title} style={{ width: '100%', maxHeight: '420px', objectFit: 'cover' }} />
        </div>

        <div style={{ fontSize: '16px', color: 'var(--ink)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {article.content.map((paragraph, i) => (
            <p key={i} style={{ margin: 0 }}>
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
