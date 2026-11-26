'use client';

import { useRef } from 'react';
import { TESTIMONIALS } from '@/data/content';

export default function TestimonialsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section className="vh-section">
      <div className="vh-section-header">
        <div>
          <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '6px' }}>
            CẢM NHẬN THỰC TẾ
          </p>
          <h2 className="vh-section-title">
            Khách hàng nói gì <em>về chúng tôi</em>
          </h2>
        </div>
        <div className="vh-slider-nav">
          <button
            type="button"
            className="vh-nav-circle"
            aria-label="Trước"
            onClick={() => sliderRef.current?.scrollBy({ left: -360, behavior: 'smooth' })}
          >
            &larr;
          </button>
          <button
            type="button"
            className="vh-nav-circle"
            aria-label="Sau"
            onClick={() => sliderRef.current?.scrollBy({ left: 360, behavior: 'smooth' })}
          >
            &rarr;
          </button>
        </div>
      </div>

      <div className="vh-horizontal-scroll" ref={sliderRef}>
        {TESTIMONIALS.map((item, idx) => (
          <div
            key={idx}
            className="vh-testimonial-card"
            style={{
              position: 'relative',
              borderTop: '3px solid var(--gold)',
              boxShadow: '0 12px 30px rgba(16, 43, 78, 0.08)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '12px',
                right: '18px',
                fontFamily: 'var(--font-display)',
                fontSize: '48px',
                lineHeight: 1,
                color: 'rgba(200, 164, 93, 0.25)',
              }}
            >
              ”
            </span>
            <div style={{ color: '#d97706', fontSize: '14px', marginBottom: '12px', letterSpacing: '2px' }}>★★★★★</div>
            <p style={{ fontSize: '14px', color: 'var(--ink)', lineHeight: 1.65, margin: '0 0 18px', flex: 1 }}>
              {item.text}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #f0ece3', paddingTop: '14px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0b2039 0%, #173b63 100%)',
                  color: 'var(--gold)',
                  border: '1.5px solid var(--gold)',
                  display: 'grid',
                  placeItems: 'center',
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {item.initial}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)' }}>{item.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{item.meta}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
