'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  CATEGORY_NAME_MAP,
  Tour,
  TourCategorySlug,
  TourItineraryDay,
  parsePriceToNumber,
  slugifyVietnamese,
} from '@/data/tours';
import { addOrUpdateTour, deleteTourById, useTours } from '@/lib/tourStore';

const PRESET_IMAGES = [
  { label: 'Phú Quốc / Biển đảo', url: '/assets/img/phu-quoc.jpg' },
  { label: 'Đà Nẵng', url: '/assets/img/da-nang.jpg' },
  { label: 'Hội An', url: '/assets/img/hoi-an.jpg' },
  { label: 'Hà Giang', url: '/assets/img/ha-giang.jpg' },
  { label: 'Đà Lạt', url: '/assets/img/da-lat.jpg' },
  { label: 'Tây Nguyên', url: '/assets/img/tay-nguyen.jpg' },
];

function createEmptyItinerary(): TourItineraryDay[] {
  return [{ day: 'Ngày 1', title: '', description: '' }];
}

export default function AddTourPage() {
  const { tours, hydrated } = useTours();

  // Form state
  const [editingId, setEditingId] = useState<number | null>(null);
  const [title, setTitle] = useState('');
  const [tourCode, setTourCode] = useState('VH-001');
  const [category, setCategory] = useState<TourCategorySlug>('trong-nuoc');
  const [badgeText, setBadgeText] = useState('Ưu đãi');

  const [startPoint, setStartPoint] = useState('TP. Hồ Chí Minh');
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('3N2Đ');
  const [durationDays, setDurationDays] = useState(3);
  const [startDate, setStartDate] = useState('Hàng tuần');
  const [transport, setTransport] = useState('Máy bay khứ hồi + Xe du lịch');
  const [hotel, setHotel] = useState('Khách sạn 4 sao');

  const [priceOld, setPriceOld] = useState('');
  const [priceNew, setPriceNew] = useState('');
  const [priceChild, setPriceChild] = useState('');
  const [priceInfant, setPriceInfant] = useState('');

  const [image, setImage] = useState('/assets/img/phu-quoc.jpg');
  const [gallery, setGallery] = useState<string[]>(['/assets/img/phu-quoc.jpg']);
  const [newGalleryUrl, setNewGalleryUrl] = useState('');

  const [summary, setSummary] = useState('');
  const [highlights, setHighlights] = useState<string[]>(['']);
  const [itinerary, setItinerary] = useState<TourItineraryDay[]>(createEmptyItinerary());

  const [inclusions, setInclusions] = useState<string[]>([
    'Vé máy bay / xe du lịch khứ hồi theo chương trình',
    'Khách sạn tiêu chuẩn 2 khách/phòng',
    'Các bữa ăn & vé tham quan theo lịch trình',
    'Hướng dẫn viên tiếng Việt & Bảo hiểm du lịch',
  ]);
  const [exclusions, setExclusions] = useState<string[]>([
    'Chi phí cá nhân, đồ uống ngoài thực đơn',
    'Phụ thu phòng đơn & Thuế VAT',
  ]);
  const [childPolicy, setChildPolicy] = useState<string[]>([
    'Trẻ em dưới 2 tuổi: ngủ chung giường bố mẹ',
    'Trẻ em từ 2 – 11 tuổi: 80% giá tour người lớn',
  ]);
  const [paymentPolicy, setPaymentPolicy] = useState<string[]>([
    'Đặt cọc 50% khi đăng ký giữ chỗ, thanh toán phần còn lại trước 7 ngày khởi hành',
  ]);
  const [notes, setNotes] = useState<string[]>([
    'Quý khách mang theo CCCD hoặc Hộ chiếu còn hạn trên 6 tháng.',
  ]);

  const [savedTourSlug, setSavedTourSlug] = useState<string | null>(null);

  const resetForm = () => {
    setEditingId(null);
    setTitle('');
    setTourCode(`VH-${Math.floor(100 + Math.random() * 900)}`);
    setCategory('trong-nuoc');
    setBadgeText('Ưu đãi');
    setStartPoint('TP. Hồ Chí Minh');
    setDestination('');
    setDuration('3N2Đ');
    setDurationDays(3);
    setStartDate('Hàng tuần');
    setTransport('Máy bay khứ hồi + Xe du lịch');
    setHotel('Khách sạn 4 sao');
    setPriceOld('');
    setPriceNew('');
    setPriceChild('');
    setPriceInfant('');
    setImage('/assets/img/phu-quoc.jpg');
    setGallery(['/assets/img/phu-quoc.jpg']);
    setSummary('');
    setHighlights(['']);
    setItinerary(createEmptyItinerary());
  };

  const handleUploadMainImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImage(reader.result);
        setGallery((prev) => (prev.includes(reader.result as string) ? prev : [reader.result as string, ...prev]));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUploadGalleryImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setGallery((prev) => [...prev, reader.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = editingId ?? Date.now();
    const baseSlug = slugifyVietnamese(title) || `tour-${id}`;
    const slug = editingId ? baseSlug : `${baseSlug}-${String(id).slice(-4)}`;

    const cleanGallery = gallery.filter((g) => g.trim() !== '');
    const tour: Tour = {
      id,
      slug,
      title: title.trim(),
      tourCode: tourCode.trim() || `VH-${String(id).slice(-3)}`,
      category,
      categoryName: CATEGORY_NAME_MAP[category],
      badgeText: badgeText.trim() || undefined,
      startPoint: startPoint.trim(),
      destination: destination.trim() || 'Việt Nam',
      duration: duration.trim(),
      durationDays: Number(durationDays) || 1,
      startDate: startDate.trim(),
      transport: transport.trim(),
      hotel: hotel.trim(),
      priceOld: priceOld.trim() || undefined,
      priceNew: priceNew.trim() || 'Liên hệ',
      priceNumeric: parsePriceToNumber(priceNew),
      priceChild: priceChild.trim() || undefined,
      priceInfant: priceInfant.trim() || undefined,
      image: image.trim() || '/assets/img/phu-quoc.jpg',
      gallery: cleanGallery.length > 0 ? cleanGallery : [image.trim() || '/assets/img/phu-quoc.jpg'],
      summary: summary.trim() || title.trim(),
      highlights: highlights.map((s) => s.trim()).filter(Boolean),
      itinerary: itinerary.filter((d) => d.title.trim() || d.description.trim()),
      inclusions: inclusions.map((s) => s.trim()).filter(Boolean),
      exclusions: exclusions.map((s) => s.trim()).filter(Boolean),
      childPolicy: childPolicy.map((s) => s.trim()).filter(Boolean),
      paymentPolicy: paymentPolicy.map((s) => s.trim()).filter(Boolean),
      notes: notes.map((s) => s.trim()).filter(Boolean),
      views: 1,
    };

    addOrUpdateTour(tour);
    setSavedTourSlug(tour.slug);
    resetForm();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEditTour = (tour: Tour) => {
    setEditingId(tour.id);
    setTitle(tour.title);
    setTourCode(tour.tourCode);
    setCategory(tour.category);
    setBadgeText(tour.badgeText ?? '');
    setStartPoint(tour.startPoint);
    setDestination(tour.destination);
    setDuration(tour.duration);
    setDurationDays(tour.durationDays);
    setStartDate(tour.startDate);
    setTransport(tour.transport);
    setHotel(tour.hotel);
    setPriceOld(tour.priceOld ?? '');
    setPriceNew(tour.priceNew);
    setPriceChild(tour.priceChild ?? '');
    setPriceInfant(tour.priceInfant ?? '');
    setImage(tour.image);
    setGallery(tour.gallery.length ? tour.gallery : [tour.image]);
    setSummary(tour.summary);
    setHighlights(tour.highlights.length ? tour.highlights : ['']);
    setItinerary(tour.itinerary.length ? tour.itinerary : createEmptyItinerary());
    setInclusions(tour.inclusions.length ? tour.inclusions : ['']);
    setExclusions(tour.exclusions.length ? tour.exclusions : ['']);
    setChildPolicy(tour.childPolicy.length ? tour.childPolicy : ['']);
    setPaymentPolicy(tour.paymentPolicy.length ? tour.paymentPolicy : ['']);
    setNotes(tour.notes.length ? tour.notes : ['']);
    setSavedTourSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderStringListEditor = (
    label: string,
    items: string[],
    setItems: React.Dispatch<React.SetStateAction<string[]>>,
    placeholder: string
  ) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label className="vh-filter-label">{label}</label>
      {items.map((val, idx) => (
        <div key={idx} style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            value={val}
            placeholder={placeholder}
            onChange={(e) => {
              const next = [...items];
              next[idx] = e.target.value;
              setItems(next);
            }}
            className="vh-search-input"
            style={{ flex: 1, padding: '9px 12px' }}
          />
          <button
            type="button"
            onClick={() => setItems(items.filter((_, i) => i !== idx))}
            style={{
              background: '#fee2e2',
              color: '#b91c1c',
              border: 'none',
              borderRadius: '6px',
              padding: '0 12px',
              cursor: 'pointer',
              fontWeight: 700,
            }}
          >
            ✕
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => setItems([...items, ''])}
        className="vh-btn-navy-outline"
        style={{ alignSelf: 'flex-start', padding: '6px 12px', fontSize: '12px' }}
      >
        + Thêm dòng
      </button>
    </div>
  );

  return (
    <main className="container" style={{ paddingTop: '36px', paddingBottom: '72px' }}>
      <div className="vh-section-header" style={{ marginBottom: '24px' }}>
        <div>
          <p className="vh-eyebrow" style={{ color: '#a7833e', marginBottom: '6px' }}>
            QUẢN LÝ SẢN PHẨM TOUR · VIEHORA TRAVEL
          </p>
          <h1 className="vh-section-title">
            {editingId ? 'Chỉnh sửa' : 'Đăng bán'} <em>Tour Du Lịch Mới</em>
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {editingId && (
            <button type="button" onClick={resetForm} className="vh-btn-navy-outline">
              Hủy sửa
            </button>
          )}
          <Link href="/" className="vh-btn-navy-outline">
            &larr; Xem Trang Chủ
          </Link>
        </div>
      </div>

      {savedTourSlug && (
        <div
          style={{
            background: '#ffffff',
            border: '1.5px solid var(--gold)',
            borderRadius: '12px',
            padding: '16px 20px',
            marginBottom: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ fontWeight: 700, color: 'var(--navy)' }}>
            ✦ Đã lưu tour thành công! Tour đã hiển thị trên Trang chủ, Danh mục và Tìm kiếm.
          </div>
          <Link href={`/tour/${savedTourSlug}`} className="vh-btn-gold">
            Xem Trang Chi Tiết Tour ↗
          </Link>
        </div>
      )}

      <div className="single-layout">
        {/* Form Thêm / Sửa Tour */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: 'var(--white)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
          }}
        >
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--navy)', margin: 0 }}>
            1. Thông Tin Cơ Bản
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '14px' }}>
            <div>
              <label className="vh-filter-label">Tên Tour Du Lịch *</label>
              <input
                required
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="VD: Tour Phú Quốc 3N2Đ: Grand World – Cáp Treo Hòn Thơm"
                className="vh-search-input"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label className="vh-filter-label">Mã Tour *</label>
              <input
                required
                type="text"
                value={tourCode}
                onChange={(e) => setTourCode(e.target.value)}
                placeholder="VH-PQ01"
                className="vh-search-input"
                style={{ width: '100%' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label className="vh-filter-label">Dòng Tour *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as TourCategorySlug)}
                className="vh-filter-select"
              >
                <option value="trong-nuoc">Tour Trong Nước</option>
                <option value="gia-re">Tour Giá Tốt</option>
              </select>
            </div>
            <div>
              <label className="vh-filter-label">Nhãn Nổi Bật (Badge)</label>
              <input
                type="text"
                value={badgeText}
                onChange={(e) => setBadgeText(e.target.value)}
                placeholder="Bán chạy / Tiết kiệm / Cao cấp"
                className="vh-search-input"
                style={{ width: '100%' }}
              />
            </div>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--navy)', margin: '8px 0 0' }}>
            2. Thời Gian, Địa Điểm &amp; Dịch Vụ
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
            <div>
              <label className="vh-filter-label">Điểm Khởi Hành *</label>
              <input
                required
                type="text"
                value={startPoint}
                onChange={(e) => setStartPoint(e.target.value)}
                className="vh-search-input"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label className="vh-filter-label">Điểm Đến *</label>
              <input
                required
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Phú Quốc, Nhật Bản..."
                className="vh-search-input"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label className="vh-filter-label">Thời Lượng Hiển Thị *</label>
              <input
                required
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="3N2Đ"
                className="vh-search-input"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label className="vh-filter-label">Số Ngày (để lọc)</label>
              <input
                type="number"
                min={1}
                value={durationDays}
                onChange={(e) => setDurationDays(Number(e.target.value))}
                className="vh-search-input"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label className="vh-filter-label">Lịch Khởi Hành</label>
              <input
                type="text"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Hàng tuần / Tháng 12"
                className="vh-search-input"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label className="vh-filter-label">Phương Tiện</label>
              <input
                type="text"
                value={transport}
                onChange={(e) => setTransport(e.target.value)}
                className="vh-search-input"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label className="vh-filter-label">Khách Sạn</label>
              <input
                type="text"
                value={hotel}
                onChange={(e) => setHotel(e.target.value)}
                className="vh-search-input"
                style={{ width: '100%' }}
              />
            </div>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--navy)', margin: '8px 0 0' }}>
            3. Bảng Giá Tour
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '14px' }}>
            <div>
              <label className="vh-filter-label">Giá Bán Chính Thức *</label>
              <input
                required
                type="text"
                value={priceNew}
                onChange={(e) => setPriceNew(e.target.value)}
                placeholder="4.590.000₫"
                className="vh-search-input"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label className="vh-filter-label">Giá Niêm Yết Cũ</label>
              <input
                type="text"
                value={priceOld}
                onChange={(e) => setPriceOld(e.target.value)}
                placeholder="5.490.000₫"
                className="vh-search-input"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label className="vh-filter-label">Giá Trẻ Em (2-12 tuổi)</label>
              <input
                type="text"
                value={priceChild}
                onChange={(e) => setPriceChild(e.target.value)}
                placeholder="3.690.000₫"
                className="vh-search-input"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label className="vh-filter-label">Giá Em Bé (&lt; 2 tuổi)</label>
              <input
                type="text"
                value={priceInfant}
                onChange={(e) => setPriceInfant(e.target.value)}
                placeholder="450.000₫"
                className="vh-search-input"
                style={{ width: '100%' }}
              />
            </div>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--navy)', margin: '8px 0 0' }}>
            4. Hình Ảnh &amp; Thư Viện Ảnh (Gallery)
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label className="vh-filter-label">Ảnh Đại Diện Tour (URL hoặc Upload từ máy)</label>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="vh-search-input"
                  style={{ flex: 1 }}
                />
                <label className="vh-btn-navy-outline" style={{ cursor: 'pointer' }}>
                  Tải ảnh từ máy
                  <input type="file" accept="image/*" onChange={handleUploadMainImage} style={{ display: 'none' }} />
                </label>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                {PRESET_IMAGES.map((p) => (
                  <button
                    type="button"
                    key={p.url}
                    onClick={() => setImage(p.url)}
                    style={{
                      fontSize: '11px',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      border: image === p.url ? '1.5px solid var(--gold)' : '1px solid var(--border)',
                      background: 'var(--cream)',
                      cursor: 'pointer',
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="vh-filter-label">Thư Viện Ảnh Gallery ({gallery.length} ảnh)</label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
                <input
                  type="text"
                  value={newGalleryUrl}
                  onChange={(e) => setNewGalleryUrl(e.target.value)}
                  placeholder="Dán URL ảnh thêm vào gallery..."
                  className="vh-search-input"
                  style={{ flex: 1 }}
                />
                <button
                  type="button"
                  onClick={() => {
                    if (newGalleryUrl.trim()) {
                      setGallery([...gallery, newGalleryUrl.trim()]);
                      setNewGalleryUrl('');
                    }
                  }}
                  className="vh-btn-navy-outline"
                >
                  + Thêm URL
                </button>
                <label className="vh-btn-navy-outline" style={{ cursor: 'pointer' }}>
                  + Upload nhiều ảnh
                  <input type="file" accept="image/*" multiple onChange={handleUploadGalleryImages} style={{ display: 'none' }} />
                </label>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {gallery.map((g, i) => (
                  <div key={i} style={{ position: 'relative', width: '96px', height: '64px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                    <img src={g} alt={`Gallery ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <button
                      type="button"
                      onClick={() => setGallery(gallery.filter((_, idx) => idx !== i))}
                      style={{
                        position: 'absolute',
                        top: '2px',
                        right: '2px',
                        background: 'rgba(11,32,57,0.85)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        fontSize: '11px',
                        cursor: 'pointer',
                      }}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--navy)', margin: '8px 0 0' }}>
            5. Mô Tả, Điểm Nổi Bật &amp; Lịch Trình Từng Ngày
          </h2>

          <div>
            <label className="vh-filter-label">Giới Thiệu Tổng Quan Tour</label>
            <textarea
              rows={3}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Mô tả ngắn gọn sức hấp dẫn của hành trình..."
              className="vh-search-input"
              style={{ width: '100%' }}
            />
          </div>

          {renderStringListEditor(
            'Điểm Nổi Bật (Highlights)',
            highlights,
            setHighlights,
            'VD: Trải nghiệm cáp treo Hòn Thơm & buffet 5 sao'
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label className="vh-filter-label">Lịch Trình Chi Tiết Từng Ngày</label>
            {itinerary.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--cream)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <input
                    type="text"
                    value={item.day}
                    onChange={(e) => {
                      const next = [...itinerary];
                      next[idx] = { ...next[idx], day: e.target.value };
                      setItinerary(next);
                    }}
                    placeholder="Ngày 1"
                    className="vh-search-input"
                    style={{ width: '110px', padding: '8px 10px' }}
                  />
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => {
                      const next = [...itinerary];
                      next[idx] = { ...next[idx], title: e.target.value };
                      setItinerary(next);
                    }}
                    placeholder="Tiêu đề ngày (VD: TP.HCM – Phú Quốc – Grand World)"
                    className="vh-search-input"
                    style={{ flex: 1, padding: '8px 10px' }}
                  />
                  {itinerary.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setItinerary(itinerary.filter((_, i) => i !== idx))}
                      style={{
                        background: '#fee2e2',
                        color: '#b91c1c',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '8px 12px',
                        cursor: 'pointer',
                        fontWeight: 700,
                      }}
                    >
                      Xóa
                    </button>
                  )}
                </div>
                <textarea
                  rows={2}
                  value={item.description}
                  onChange={(e) => {
                    const next = [...itinerary];
                    next[idx] = { ...next[idx], description: e.target.value };
                    setItinerary(next);
                  }}
                  placeholder="Mô tả chi tiết hoạt động trong ngày..."
                  className="vh-search-input"
                  style={{ width: '100%', padding: '8px 10px' }}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                setItinerary([
                  ...itinerary,
                  { day: `Ngày ${itinerary.length + 1}`, title: '', description: '' },
                ])
              }
              className="vh-btn-navy-outline"
              style={{ alignSelf: 'flex-start' }}
            >
              + Thêm Ngày Mới
            </button>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--navy)', margin: '8px 0 0' }}>
            6. Chính Sách &amp; Điều Khoản
          </h2>

          {renderStringListEditor('Giá Tour Bao Gồm', inclusions, setInclusions, 'Dịch vụ bao gồm...')}
          {renderStringListEditor('Không Bao Gồm', exclusions, setExclusions, 'Dịch vụ không bao gồm...')}
          {renderStringListEditor('Chính Sách Trẻ Em', childPolicy, setChildPolicy, 'Quy định trẻ em...')}
          {renderStringListEditor('Thanh Toán & Hủy Tour', paymentPolicy, setPaymentPolicy, 'Điều khoản thanh toán...')}
          {renderStringListEditor('Lưu Ý Quan Trọng', notes, setNotes, 'Lưu ý khi đi tour...')}

          <button type="submit" className="vh-btn-gold" style={{ padding: '15px 24px', fontSize: '15px' }}>
            {editingId ? 'Lưu Cập Nhật Tour ↗' : 'Đăng Tour Lên Website ↗'}
          </button>
        </form>

        {/* Sidebar Quản Lý Danh Sách Tour Hiện Có */}
        <aside className="single-right-col">
          <div
            style={{
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '22px',
            }}
          >
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--navy)', margin: '0 0 14px' }}>
              Danh sách Tour ({hydrated ? tours.length : 0})
            </h2>

            {hydrated && tours.length === 0 ? (
              <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
                Chưa có tour nào. Hãy điền biểu mẫu bên trái để tạo tour đầu tiên!
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {tours.map((t) => (
                  <div
                    key={t.id}
                    style={{
                      background: 'var(--cream)',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      padding: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <img
                        src={t.image}
                        alt={t.title}
                        style={{ width: '64px', height: '48px', objectFit: 'cover', borderRadius: '6px', flexShrink: 0 }}
                      />
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: '11px', fontWeight: 700, color: '#a7833e' }}>
                          {t.tourCode} · {t.categoryName}
                        </div>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: '13px',
                            color: 'var(--navy)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {t.title}
                        </div>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ink)' }}>{t.priceNew}</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Link
                        href={`/tour/${t.slug}`}
                        className="vh-btn-navy-outline"
                        style={{ flex: 1, padding: '6px 8px', fontSize: '11px' }}
                      >
                        Xem
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleEditTour(t)}
                        className="vh-btn-gold"
                        style={{ flex: 1, padding: '6px 8px', fontSize: '11px' }}
                      >
                        Sửa
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteTourById(t.id)}
                        style={{
                          background: '#fee2e2',
                          color: '#b91c1c',
                          border: 'none',
                          borderRadius: '6px',
                          padding: '6px 10px',
                          fontSize: '11px',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
