'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { ARTICLES } from '@/data/content';

export default function BlogAndNewsSection() {
  const blogSliderRef = useRef<HTMLDivElement>(null);

  const blogPosts = ARTICLES.filter((a) => a.category === 'cam-nang-du-lich');
  const newsPosts = ARTICLES.filter((a) => a.category === 'tin-tuc');

  return (
    <>
      <section className="vh-section">
        <div className="vh-section-header">
          <div>
            <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '6px' }}>
              KINH NGHIỆM XÊ DỊCH
            </p>
            <h2 className="vh-section-title">
              Cẩm nang &amp; <em>Kinh nghiệm</em>
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link href="/tin-tuc" className="vh-btn-navy-outline">
              Tất cả bài viết &rarr;
            </Link>
            <div className="vh-slider-nav">
              <button
                type="button"
                className="vh-nav-circle"
                aria-label="Trước"
                onClick={() => blogSliderRef.current?.scrollBy({ left: -340, behavior: 'smooth' })}
              >
                &larr;
              </button>
              <button
                type="button"
                className="vh-nav-circle"
                aria-label="Sau"
                onClick={() => blogSliderRef.current?.scrollBy({ left: 340, behavior: 'smooth' })}
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>

        <div className="vh-horizontal-scroll" ref={blogSliderRef}>
          {blogPosts.map((post) => (
            <article key={post.id} className="vh-blog-card">
              <div style={{ aspectRatio: '16 / 10', overflow: 'hidden' }}>
                <Link href={`/tin-tuc/${post.slug}`}>
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </Link>
              </div>
              <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--navy)', margin: '0 0 8px', lineHeight: 1.35 }}>
                  <Link href={`/tin-tuc/${post.slug}`}>{post.title}</Link>
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '0 0 14px', lineHeight: 1.55 }}>{post.excerpt}</p>
                <div style={{ marginTop: 'auto', fontSize: '12px', color: '#8a95a5', borderTop: '1px solid #f0ece3', paddingTop: '10px' }}>
                  {post.author} · {post.date}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="vh-section">
        <div className="vh-section-header">
          <div>
            <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '6px' }}>
              CẬP NHẬT MỚI NHẤT
            </p>
            <h2 className="vh-section-title">
              Tin tức <em>VIEHORA TRAVEL</em>
            </h2>
          </div>
          <Link href="/tin-tuc" className="vh-btn-navy-outline">
            Xem tất cả &rarr;
          </Link>
        </div>

        <div className="vh-news-grid">
          {newsPosts.map((post) => (
            <article
              key={post.id}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', height: '170px', overflow: 'hidden' }}>
                <Link href={`/tin-tuc/${post.slug}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </Link>
                <span
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'var(--navy)',
                    color: 'var(--gold)',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '3px 9px',
                    borderRadius: '4px',
                  }}
                >
                  {post.date}
                </span>
              </div>
              <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.4, margin: '0 0 8px' }}>
                  <Link href={`/tin-tuc/${post.slug}`}>{post.title}</Link>
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5, margin: '0 0 12px' }}>{post.excerpt}</p>
                <Link href={`/tin-tuc/${post.slug}`} style={{ marginTop: 'auto', color: '#a7833e', fontWeight: 700, fontSize: '12px' }}>
                  Tìm hiểu thêm ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
