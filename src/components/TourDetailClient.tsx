'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Tour, getLocalizedTour } from '@/data/tours';
import { BRAND_INFO } from '@/data/content';
import TourCard from '@/components/TourCard';
import { useLanguage } from '@/lib/i18n';

interface TourDetailClientProps {
  tour: Tour;
  relatedTours: Tour[];
}

export default function TourDetailClient({ tour: rawTour, relatedTours }: TourDetailClientProps) {
  const { lang, t } = useLanguage();
  const tour = getLocalizedTour(rawTour, lang);
  const images = tour.gallery.length > 0 ? tour.gallery : [tour.image];
  const [activeImage, setActiveImage] = useState(images[0]);
  const [activeTab, setActiveTab] = useState<
    'details' | 'inclusions' | 'exclusions' | 'child' | 'payment' | 'notes'
  >('details');
  const [showChildPricing, setShowChildPricing] = useState(true);

  const [showBookingModal, setShowBookingModal] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [departureDate, setDepartureDate] = useState('');
  const [note, setNote] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <main className="container" style={{ paddingTop: '28px', paddingBottom: '64px' }}>
      <nav
        aria-label="Breadcrumb"
        style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}
      >
        <Link href="/" style={{ color: 'var(--navy)', fontWeight: 700 }}>
          Trang chủ
        </Link>
        <span>/</span>
        <Link href={`/category/${tour.category}`} style={{ color: 'var(--navy)', fontWeight: 700 }}>
          {tour.categoryName}
        </Link>
        <span>/</span>
        <span style={{ color: '#a7833e', fontWeight: 600 }}>{tour.title}</span>
      </nav>

      <div className="single-layout">
        {/* Left Column */}
        <div>
          <div style={{ marginBottom: '28px' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/10',
                overflow: 'hidden',
                borderRadius: '14px',
                marginBottom: '12px',
                border: '1px solid var(--border)',
              }}
            >
              <img
                src={activeImage}
                alt={tour.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  background: 'var(--navy)',
                  color: 'var(--gold)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 700,
                }}
              >
                {tour.tourCode}
              </span>
            </div>

            {images.length > 1 && (
              <div className="gallery-thumbnails">
                {images.map((imgUrl, index) => (
                  <button
                    type="button"
                    key={imgUrl + index}
                    className={`thumb-item ${activeImage === imgUrl ? 'active' : ''}`}
                    onClick={() => setActiveImage(imgUrl)}
                    style={{ padding: 0, cursor: 'pointer', background: 'transparent' }}
                  >
                    <img src={imgUrl} alt={`${tour.title} ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <article
            style={{
              background: 'var(--white)',
              borderRadius: '14px',
              padding: '28px',
              border: '1px solid var(--border)',
            }}
          >
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase' }}>
                Chia sẻ:
              </span>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert('Đã sao chép liên kết tour!');
                }}
                className="vh-btn-navy-outline"
                style={{ padding: '5px 12px', fontSize: '12px' }}
              >
                Sao chép link
              </button>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  marginLeft: 'auto',
                  background: 'var(--cream)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  border: '1px solid var(--border)',
                }}
              >
                Lượt xem: <strong>{tour.views.toLocaleString('vi-VN')}</strong>
              </span>
            </div>

            <div className="tour-tabs-header">
              <button
                type="button"
                className={`tour-tab-btn ${activeTab === 'details' ? 'active' : ''}`}
                onClick={() => setActiveTab('details')}
              >
                {t('Chương Trình Tour', 'Itinerary')}
              </button>
              <button
                type="button"
                className={`tour-tab-btn ${activeTab === 'inclusions' ? 'active' : ''}`}
                onClick={() => setActiveTab('inclusions')}
              >
                {t('Giá Bao Gồm', 'Included')}
              </button>
              <button
                type="button"
                className={`tour-tab-btn ${activeTab === 'exclusions' ? 'active' : ''}`}
                onClick={() => setActiveTab('exclusions')}
              >
                {t('Không Bao Gồm', 'Excluded')}
              </button>
              <button
                type="button"
                className={`tour-tab-btn ${activeTab === 'child' ? 'active' : ''}`}
                onClick={() => setActiveTab('child')}
              >
                {t('Giá Trẻ Em', 'Child Policy')}
              </button>
              <button
                type="button"
                className={`tour-tab-btn ${activeTab === 'payment' ? 'active' : ''}`}
                onClick={() => setActiveTab('payment')}
              >
                {t('Thanh Toán & Hủy', 'Payment & Cancel')}
              </button>
              <button
                type="button"
                className={`tour-tab-btn ${activeTab === 'notes' ? 'active' : ''}`}
                onClick={() => setActiveTab('notes')}
              >
                {t('Lưu Ý', 'Notes')}
              </button>
            </div>

            <div style={{ paddingTop: '22px' }}>
              {activeTab === 'details' && (
                <div>
                  <p style={{ fontSize: '15px', color: 'var(--ink)', lineHeight: 1.75, marginBottom: '20px' }}>
                    {tour.summary}
                  </p>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--navy)', marginBottom: '12px' }}>
                    Điểm Nổi Bật Của Hành Trình
                  </h3>
                  <ul style={{ paddingLeft: '20px', marginBottom: '26px', color: 'var(--ink)', lineHeight: 1.8 }}>
                    {tour.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--navy)', marginBottom: '14px' }}>
                    Lịch Trình Chi Tiết
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {tour.itinerary.map((day, i) => (
                      <div
                        key={i}
                        style={{
                          background: 'var(--cream)',
                          border: '1px solid var(--border)',
                          borderLeft: '4px solid var(--gold)',
                          borderRadius: '10px',
                          padding: '16px 20px',
                        }}
                      >
                        <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '15px', marginBottom: '6px' }}>
                          {day.day}: {day.title}
                        </div>
                        <p style={{ margin: 0, color: 'var(--muted)', fontSize: '14px', lineHeight: 1.65 }}>
                          {day.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'inclusions' && (
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--navy)', marginBottom: '12px' }}>
                    Dịch Vụ Bao Gồm Trong Giá Tour
                  </h3>
                  <ul style={{ paddingLeft: '20px', lineHeight: 1.9 }}>
                    {tour.inclusions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'exclusions' && (
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#b91c1c', marginBottom: '12px' }}>
                    Dịch Vụ Không Bao Gồm
                  </h3>
                  <ul style={{ paddingLeft: '20px', lineHeight: 1.9 }}>
                    {tour.exclusions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'child' && (
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--navy)', marginBottom: '12px' }}>
                    Quy Định Giá Vé Trẻ Em &amp; Em Bé
                  </h3>
                  <ul style={{ paddingLeft: '20px', lineHeight: 1.9 }}>
                    {tour.childPolicy.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'payment' && (
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--navy)', marginBottom: '12px' }}>
                    Điều Khoản Thanh Toán &amp; Hủy Tour
                  </h3>
                  <ul style={{ paddingLeft: '20px', lineHeight: 1.9 }}>
                    {tour.paymentPolicy.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'notes' && (
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#a7833e', marginBottom: '12px' }}>
                    Lưu Ý Quan Trọng Khi Tham Gia Tour
                  </h3>
                  <ul style={{ paddingLeft: '20px', lineHeight: 1.9 }}>
                    {tour.notes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        </div>

        {/* Right Column: Sticky Booking Summary */}
        <div className="single-right-col">
          <div
            style={{
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              padding: '24px',
              boxShadow: '0 14px 36px rgba(16, 43, 78, 0.08)',
            }}
          >
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <span
                style={{
                  background: 'var(--navy)',
                  color: 'var(--gold)',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                }}
              >
                {tour.categoryName}
              </span>
              <span
                style={{
                  background: 'var(--cream)',
                  color: '#a7833e',
                  border: '1px solid rgba(200, 164, 93, 0.45)',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '4px',
                }}
              >
                GIÁ ƯU ĐÃI
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--navy)', lineHeight: 1.35, margin: '0 0 16px' }}>
              {tour.title}
            </h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '18px' }}>
              <div style={{ background: 'var(--cream)', padding: '10px 12px', borderRadius: '8px' }}>
                <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Khởi hành</div>
                <strong style={{ fontSize: '13px', color: 'var(--navy)' }}>{tour.startPoint}</strong>
              </div>
              <div style={{ background: 'var(--cream)', padding: '10px 12px', borderRadius: '8px' }}>
                <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Điểm đến</div>
                <strong style={{ fontSize: '13px', color: 'var(--navy)' }}>{tour.destination}</strong>
              </div>
              <div style={{ background: 'var(--cream)', padding: '10px 12px', borderRadius: '8px' }}>
                <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Thời gian</div>
                <strong style={{ fontSize: '13px', color: 'var(--navy)' }}>{tour.duration}</strong>
              </div>
              <div style={{ background: 'var(--cream)', padding: '10px 12px', borderRadius: '8px' }}>
                <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Khởi hành ngày</div>
                <strong style={{ fontSize: '13px', color: 'var(--navy)' }}>{tour.startDate}</strong>
              </div>
              <div style={{ background: 'var(--cream)', padding: '10px 12px', borderRadius: '8px', gridColumn: '1 / -1' }}>
                <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Phương tiện &amp; Lưu trú</div>
                <strong style={{ fontSize: '13px', color: 'var(--navy)' }}>
                  {tour.transport} · {tour.hotel}
                </strong>
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid #ece7dc',
                paddingTop: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '14px',
              }}
            >
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--muted)' }}>Giá trọn gói:</span>
              <div style={{ textAlign: 'right' }}>
                {tour.priceOld && (
                  <span style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'line-through', marginRight: '8px' }}>
                    {tour.priceOld}
                  </span>
                )}
                <span style={{ fontSize: '24px', fontWeight: 700, color: 'var(--navy)' }}>{tour.priceNew}</span>
              </div>
            </div>

            {(tour.priceChild || tour.priceInfant) && (
              <div style={{ marginBottom: '16px', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
                <button
                  type="button"
                  onClick={() => setShowChildPricing((prev) => !prev)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    background: 'var(--cream)',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight: 700,
                    fontSize: '12px',
                    color: 'var(--navy)',
                    cursor: 'pointer',
                  }}
                >
                  <span>BẢNG GIÁ TRẺ EM &amp; EM BÉ</span>
                  <span>{showChildPricing ? '▴' : '▾'}</span>
                </button>
                {showChildPricing && (
                  <div style={{ padding: '10px 14px', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {tour.priceChild && (
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Trẻ em (2 - 12 tuổi)</span>
                        <strong>{tour.priceChild}</strong>
                      </div>
                    )}
                    {tour.priceInfant && (
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Em bé (&lt; 2 tuổi)</span>
                        <strong>{tour.priceInfant}</strong>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                type="button"
                onClick={() => {
                  setBookingSuccess(false);
                  setShowBookingModal(true);
                }}
                className="vh-btn-gold"
                style={{ width: '100%', padding: '14px 20px', fontSize: '14px' }}
              >
                {t('Đặt Tour Ngay ↗', 'Book This Tour ↗')}
              </button>
              <a
                href={BRAND_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="vh-btn-navy-outline"
                style={{ width: '100%', padding: '12px 20px' }}
              >
                {t('Tư Vấn Qua Zalo', 'Chat on Zalo')} ({BRAND_INFO.hotline})
              </a>
            </div>
          </div>
        </div>
      </div>

      {relatedTours.length > 0 && (
        <section style={{ marginTop: '56px' }}>
          <div className="vh-section-header">
            <h2 className="vh-section-title">
              Các tour <em>liên quan</em>
            </h2>
          </div>
          <div className="tours-card-grid">
            {relatedTours.map((item) => (
              <TourCard key={item.id} tour={item} />
            ))}
          </div>
        </section>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(11, 32, 57, 0.7)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '14px',
              maxWidth: '520px',
              width: '100%',
              padding: '28px',
              boxShadow: '0 24px 48px rgba(0,0,0,0.25)',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            <button
              type="button"
              onClick={() => setShowBookingModal(false)}
              aria-label="Đóng"
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: 'var(--cream)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              ✕
            </button>

            {bookingSuccess ? (
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✦</div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', marginBottom: '10px', fontSize: '24px' }}>
                  Đặt Giữ Chỗ Thành Công!
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.65, marginBottom: '20px' }}>
                  Cảm ơn <strong>{customerName}</strong> đã đăng ký <strong>{tour.title}</strong> ({adults} người lớn
                  {children > 0 ? `, ${children} trẻ em` : ''}). Chuyên viên VIEHORA TRAVEL sẽ liên hệ qua số{' '}
                  <strong>{customerPhone}</strong> trong vòng 15 phút để xác nhận.
                </p>
                <button type="button" onClick={() => setShowBookingModal(false)} className="vh-btn-gold">
                  Đóng cửa sổ
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '22px' }}>
                  Đăng Ký Đặt Tour Nhanh
                </h3>
                <p style={{ margin: 0, fontSize: '13px', color: '#a7833e', fontWeight: 700 }}>
                  {tour.tourCode} — {tour.priceNew} / khách
                </p>

                <div>
                  <label className="vh-filter-label">Họ và tên *</label>
                  <input
                    required
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="vh-search-input"
                    style={{ width: '100%' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label className="vh-filter-label">Số điện thoại *</label>
                    <input
                      required
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="09xx xxx xxx"
                      className="vh-search-input"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div>
                    <label className="vh-filter-label">Email</label>
                    <input
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="email@example.com"
                      className="vh-search-input"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                  <div>
                    <label className="vh-filter-label">Người lớn</label>
                    <input
                      type="number"
                      min={1}
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="vh-search-input"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div>
                    <label className="vh-filter-label">Trẻ em</label>
                    <input
                      type="number"
                      min={0}
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="vh-search-input"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div>
                    <label className="vh-filter-label">Ngày đi</label>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="vh-search-input"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="vh-filter-label">Ghi chú thêm</label>
                  <textarea
                    rows={2}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Yêu cầu ăn chay, phòng đơn, đón sân bay..."
                    className="vh-search-input"
                    style={{ width: '100%' }}
                  />
                </div>

                <button type="submit" className="vh-btn-gold" style={{ width: '100%', padding: '13px' }}>
                  Xác Nhận Đặt Tour ↗
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
