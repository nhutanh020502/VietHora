export type TourCategorySlug =
  | 'trong-nuoc'
  | 'nuoc-ngoai'
  | 'hanh-huong'
  | 'gia-re';

export interface TourItineraryDay {
  day: string;
  title: string;
  description: string;
}

export interface Tour {
  id: number;
  slug: string;
  title: string;
  tourCode: string;
  category: TourCategorySlug;
  categoryName: string;
  badgeText?: string;
  startPoint: string;
  destination: string;
  duration: string;
  durationDays: number;
  startDate: string;
  transport: string;
  hotel: string;
  priceOld?: string;
  priceNew: string;
  priceNumeric: number; // in VND
  priceChild?: string;
  priceInfant?: string;
  image: string;
  gallery: string[];
  summary: string;
  highlights: string[];
  itinerary: TourItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  childPolicy: string[];
  paymentPolicy: string[];
  notes: string[];
  views: number;
}

// Đã xóa toàn bộ tour mẫu — tour sẽ do người dùng thêm tại /addtour
export const TOURS: Tour[] = [];

export const CATEGORY_LABELS: Record<string, { title: string; subtitle: string; banner: string }> = {
  'trong-nuoc': {
    title: 'Tour Du Lịch Trong Nước',
    subtitle: 'Khám phá vẻ đẹp bất tận từ Bắc chí Nam với dịch vụ chuẩn 4-5 sao',
    banner: '/assets/img/flight-domestic.png',
  },
  'nuoc-ngoai': {
    title: 'Tour Du Lịch Quốc Tế',
    subtitle: 'Hành trình đẳng cấp đến Nhật Bản, Hàn Quốc, Trung Quốc, Châu Âu & Úc Mỹ',
    banner: '/assets/img/flight-international.png',
  },
  'hanh-huong': {
    title: 'Tour Du Lịch Hành Hương',
    subtitle: 'Trọn vẹn tâm linh – Chiêm bái Tứ Động Tâm Ấn Độ, Nepal & Thái Lan',
    banner: '/assets/img/about-hero-bg.png',
  },
  'gia-re': {
    title: 'Tour Giá Sốc – Khuyến Mãi',
    subtitle: 'Ưu đãi đặt sớm & săn deal giờ chót tiết kiệm đến 30%',
    banner: '/assets/img/flight-hero-bg.png',
  },
  'du-lich': {
    title: 'Tất Cả Tour Du Lịch',
    subtitle: 'Tổng hợp các hành trình trong nước, quốc tế và hành hương chọn lọc từ VIEHORA TRAVEL',
    banner: '/assets/img/flight-hero-bg.png',
  },
};

export const CATEGORY_NAME_MAP: Record<TourCategorySlug, string> = {
  'trong-nuoc': 'Tour Trong Nước',
  'nuoc-ngoai': 'Tour Nước Ngoài',
  'hanh-huong': 'Tour Hành Hương',
  'gia-re': 'Tour Giá Sốc',
};

export function filterTourList(
  list: Tour[],
  params: {
    q?: string;
    cat?: string;
    startPoint?: string;
    startDate?: string;
    priceRange?: string;
    durationRange?: string;
  }
): Tour[] {
  return list.filter((tour) => {
    if (params.q) {
      const q = params.q.toLowerCase().trim();
      const hay = `${tour.title} ${tour.destination} ${tour.tourCode} ${tour.summary}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    if (params.cat && params.cat !== 'all' && params.cat !== 'du-lich') {
      if (tour.category !== params.cat) return false;
    }
    if (params.startPoint && tour.startPoint !== params.startPoint) {
      return false;
    }
    if (params.startDate && tour.startDate !== params.startDate) {
      return false;
    }
    if (params.priceRange) {
      if (params.priceRange === 'under_5m' && tour.priceNumeric >= 5000000) return false;
      if (
        params.priceRange === '5m_15m' &&
        (tour.priceNumeric < 5000000 || tour.priceNumeric > 15000000)
      )
        return false;
      if (
        params.priceRange === '15m_30m' &&
        (tour.priceNumeric <= 15000000 || tour.priceNumeric > 30000000)
      )
        return false;
      if (params.priceRange === 'over_30m' && tour.priceNumeric <= 30000000) return false;
    }
    if (params.durationRange) {
      if (params.durationRange === '1_3_days' && tour.durationDays > 3) return false;
      if (
        params.durationRange === '4_7_days' &&
        (tour.durationDays < 4 || tour.durationDays > 7)
      )
        return false;
      if (params.durationRange === 'over_7_days' && tour.durationDays <= 7) return false;
    }
    return true;
  });
}

export function slugifyVietnamese(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function parsePriceToNumber(priceStr: string): number {
  const digits = priceStr.replace(/[^0-9]/g, '');
  return digits ? Number(digits) : 0;
}
