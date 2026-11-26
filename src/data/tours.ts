export type TourCategorySlug = 'trong-nuoc' | 'gia-re';

export interface TourItineraryDay {
  day: string;
  title: string;
  description: string;
}

export interface Tour {
  id: number;
  slug: string;
  title: string;
  titleEn?: string;
  tourCode: string;
  category: TourCategorySlug;
  categoryName: string;
  badgeText?: string;
  badgeTextEn?: string;
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
  summaryEn?: string;
  highlights: string[];
  highlightsEn?: string[];
  itinerary: TourItineraryDay[];
  itineraryEn?: TourItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  childPolicy: string[];
  paymentPolicy: string[];
  notes: string[];
  views: number;
}

interface RawTourSeed {
  id: number;
  code: string;
  title: string;
  slug: string;
  category: TourCategorySlug;
  badge?: string;
  startPoint: string;
  destination: string;
  duration: string;
  durationDays: number;
  startDate: string;
  transport: string;
  hotel: string;
  priceOld?: string;
  priceNew: string;
  priceNumeric: number;
  image: string;
  summary: string;
  highlights: string[];
}

const DEFAULT_INCLUSIONS = [
  'Vé máy bay / xe du lịch đời mới khứ hồi theo chương trình',
  'Khách sạn tiêu chuẩn 2 khách/phòng tại trung tâm hoặc gần biển',
  'Các bữa ăn đặc sản địa phương theo lịch trình',
  'Vé tham quan các điểm trong chương trình + Bảo hiểm du lịch 50.000.000₫',
  'Hướng dẫn viên tiếng Việt nhiệt tình, am hiểu văn hóa bản địa',
];

const DEFAULT_EXCLUSIONS = [
  'Chi phí cá nhân, giặt ủi, đồ uống ngoài thực đơn',
  'Phụ thu phòng đơn (nếu đi 1 mình) & Thuế VAT 8%',
];

const DEFAULT_CHILD_POLICY = [
  'Trẻ em dưới 2 tuổi: ngủ chung giường với bố mẹ (tính phí vé máy bay theo quy định hãng)',
  'Trẻ em từ 2 – dưới 11 tuổi: 80% giá tour người lớn (có suất ăn và ghế ngồi riêng)',
  'Từ 11 tuổi trở lên: tính như người lớn',
];

const DEFAULT_PAYMENT_POLICY = [
  'Đặt cọc 50% tổng giá trị tour ngay khi đăng ký giữ chỗ',
  'Thanh toán phần còn lại trước ngày khởi hành ít nhất 07 ngày',
  'Hỗ trợ dời ngày linh hoạt nếu báo trước 10 ngày khởi hành',
];

const DEFAULT_NOTES = [
  'Quý khách mang theo CCCD bản chính còn hạn hoặc Hộ chiếu để làm thủ tục lưu trú/bay.',
  'Lịch trình có thể điều chỉnh thứ tự điểm tham quan tùy thời tiết nhưng vẫn đảm bảo đủ điểm.',
];

const SEEDS: RawTourSeed[] = [
  {
    id: 1,
    code: 'VH-001',
    title: 'Tour Phú Quốc 3N2Đ: Grand World – Cáp Treo Hòn Thơm – Lặn Ngắm San Hô',
    slug: 'tour-phu-quoc-3n2d-grand-world-hon-thom',
    category: 'trong-nuoc',
    badge: 'Bán chạy',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Phú Quốc',
    duration: '3N2Đ',
    durationDays: 3,
    startDate: 'Hàng tuần',
    transport: 'Máy bay khứ hồi + Xe du lịch',
    hotel: 'Resort 4 sao trung tâm',
    priceOld: '5.490.000₫',
    priceNew: '4.590.000₫',
    priceNumeric: 4590000,
    image: '/assets/img/phu-quoc.jpg',
    summary: 'Khám phá Đảo Ngọc Phú Quốc với cáp treo Hòn Thơm vượt biển dài nhất thế giới, Grand World và cano 4 đảo.',
    highlights: ['Cáp treo Hòn Thơm & Aquatopia', 'Grand World thành phố không ngủ', 'Cano 4 đảo & lặn ngắm san hô'],
  },
  {
    id: 2,
    code: 'VH-002',
    title: 'Tour Đà Nẵng – Hội An – Bà Nà Hills – Cầu Vàng 4N3Đ',
    slug: 'tour-da-nang-hoi-an-ba-na-hills-4n3d',
    category: 'trong-nuoc',
    badge: 'Ưu đãi',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Đà Nẵng - Hội An',
    duration: '4N3Đ',
    durationDays: 4,
    startDate: 'Hàng tuần',
    transport: 'Máy bay + Xe du lịch đời mới',
    hotel: 'Khách sạn 4 sao biển Mỹ Khê',
    priceOld: '6.290.000₫',
    priceNew: '5.390.000₫',
    priceNumeric: 5390000,
    image: '/assets/img/da-nang.jpg',
    summary: 'Check-in Cầu Vàng trên đỉnh Bà Nà Hills, dạo phố cổ Hội An lung linh đèn lồng và tắm biển Mỹ Khê.',
    highlights: ['Vé cáp treo Bà Nà Hills + Buffet 5 sao', 'Thả hoa đăng phố cổ Hội An', 'Bán đảo Sơn Trà – Chùa Linh Ứng'],
  },
  {
    id: 3,
    code: 'VH-003',
    title: 'Tour Hà Giang – Đồng Văn – Sông Nho Quế – Đèo Mã Pí Lèng 3N2Đ',
    slug: 'tour-ha-giang-dong-van-nho-que-3n2d',
    category: 'trong-nuoc',
    badge: 'Khám phá',
    startPoint: 'Hà Nội',
    destination: 'Hà Giang',
    duration: '3N2Đ',
    durationDays: 3,
    startDate: 'Hàng tuần',
    transport: 'Xe du lịch 16-29 chỗ đời mới',
    hotel: 'Khách sạn 3 sao + Homestay bản địa',
    priceOld: '3.490.000₫',
    priceNew: '2.890.000₫',
    priceNumeric: 2890000,
    image: '/assets/img/ha-giang.jpg',
    summary: 'Chinh phục tứ đại đỉnh đèo Mã Pí Lèng, đi thuyền trên sông Nho Quế xanh ngọc và thăm Cột Cờ Lũng Cú.',
    highlights: ['Thuyền sông Nho Quế – Hẻm Tu Sản', 'Cột cờ Lũng Cú – Phố cổ Đồng Văn', 'Dinh thự họ Vương – Dốc Thẩm Mã'],
  },
  {
    id: 4,
    code: 'VH-004',
    title: 'Tour Sapa – Đỉnh Fansipan – Bản Cát Cát – Moana 3N2Đ',
    slug: 'tour-sapa-fansipan-cat-cat-3n2d',
    category: 'trong-nuoc',
    badge: 'Tiết kiệm',
    startPoint: 'Hà Nội',
    destination: 'Sapa',
    duration: '3N2Đ',
    durationDays: 3,
    startDate: 'Hàng tuần',
    transport: 'Xe Cabin VIP khứ hồi',
    hotel: 'Khách sạn 4 sao view núi',
    priceOld: '3.290.000₫',
    priceNew: '2.690.000₫',
    priceNumeric: 2690000,
    image: '/assets/img/ha-giang.jpg',
    summary: 'Săn mây trên đỉnh Fansipan 3.143m, dạo bản Cát Cát yên bình và thưởng thức lẩu cá hồi Sapa.',
    highlights: ['Cáp treo chinh phục đỉnh Fansipan', 'Bản Cát Cát & Thác Bạc', 'Check-in Moana Sapa & Nhà thờ Đá'],
  },
  {
    id: 5,
    code: 'VH-005',
    title: 'Tour Hạ Long – Du Thuyền 5 Sao – Hang Sửng Sốt – Đảo Titop 2N1Đ',
    slug: 'tour-ha-long-du-thuyen-5-sao-2n1d',
    category: 'trong-nuoc',
    badge: 'Cao cấp',
    startPoint: 'Hà Nội',
    destination: 'Hạ Long',
    duration: '2N1Đ',
    durationDays: 2,
    startDate: 'Hàng tuần',
    transport: 'Xe Limousine + Du thuyền 5 sao',
    hotel: 'Cabin 5 sao trên Vịnh Hạ Long',
    priceOld: '3.990.000₫',
    priceNew: '3.290.000₫',
    priceNumeric: 3290000,
    image: '/assets/img/phu-quoc.jpg',
    summary: 'Nghỉ đêm trên du thuyền 5 sao giữa kỳ quan thiên nhiên thế giới Vịnh Hạ Long, chèo kayak và ngắm hoàng hôn.',
    highlights: ['Cabin ban công riêng trên du thuyền', 'Chèo kayak Hang Luồn – Hang Sửng Sốt', 'Tiệc trà chiều Sunset Party'],
  },
  {
    id: 6,
    code: 'VH-006',
    title: 'Tour Ninh Bình – Tràng An – Hang Múa – Chùa Bái Đính 2N1Đ',
    slug: 'tour-ninh-binh-trang-an-hang-mua-2n1d',
    category: 'trong-nuoc',
    startPoint: 'Hà Nội',
    destination: 'Ninh Bình',
    duration: '2N1Đ',
    durationDays: 2,
    startDate: 'Hàng tuần',
    transport: 'Xe Limousine cao cấp',
    hotel: 'Resort 4 sao Tam Cốc',
    priceOld: '2.490.000₫',
    priceNew: '1.990.000₫',
    priceNumeric: 1990000,
    image: '/assets/img/ha-giang.jpg',
    summary: 'Ngồi thuyền nan xuyên hang động Tràng An, leo đỉnh Ngọa Long Hang Múa và chiêm bái Chùa Bái Đính.',
    highlights: ['Thuyền nan di sản Tràng An', 'Đỉnh Ngọa Long – Hang Múa', 'Đặc sản dê núi cơm cháy Ninh Bình'],
  },
  {
    id: 7,
    code: 'VH-007',
    title: 'Tour Đà Lạt 3N2Đ: Săn Mây Cầu Đất – Puppy Farm – Thung Lũng Tình Yêu',
    slug: 'tour-da-lat-3n2d-san-may-cau-dat',
    category: 'trong-nuoc',
    badge: 'Hot',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Đà Lạt',
    duration: '3N2Đ',
    durationDays: 3,
    startDate: 'Hàng tuần',
    transport: 'Xe giường nằm Limousine',
    hotel: 'Khách sạn 3-4 sao gần chợ đêm',
    priceOld: '2.790.000₫',
    priceNew: '2.190.000₫',
    priceNumeric: 2190000,
    image: '/assets/img/phu-quoc.jpg',
    summary: 'Tận hưởng không khí se lạnh phố núi Đà Lạt, săn mây đồi chè Cầu Đất và thưởng thức buffet rau không giới hạn.',
    highlights: ['Săn mây Đồi Chè Cầu Đất', 'Quảng trường Lâm Viên – Hồ Xuân Hương', 'Buffet rau Leguda & Lẩu gà lá é'],
  },
  {
    id: 8,
    code: 'VH-008',
    title: 'Tour Nha Trang 3N3Đ: Đảo Robinson – VinWonders – Tắm Bùn Khoáng',
    slug: 'tour-nha-trang-vinwonders-3n3d',
    category: 'gia-re',
    badge: 'Giá tốt',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Nha Trang',
    duration: '3N3Đ',
    durationDays: 3,
    startDate: 'Hàng tuần',
    transport: 'Xe Limousine giường nằm',
    hotel: 'Khách sạn 4 sao đường Trần Phú',
    priceOld: '3.690.000₫',
    priceNew: '2.790.000₫',
    priceNumeric: 2790000,
    image: '/assets/img/da-nang.jpg',
    summary: 'Vui chơi thỏa thích tại VinWonders, tiệc hải sản trên đảo Robinson và thư giãn tắm bùn khoáng nóng.',
    highlights: ['Tiệc hải sản & chèo kayak đảo Robinson', 'Tháp Bà Ponagar & Tắm bùn khoáng', 'Khách sạn 4 sao sát biển Trần Phú'],
  },
  {
    id: 9,
    code: 'VH-009',
    title: 'Tour Quy Nhơn – Phú Yên 4N3Đ: Kỳ Co – Eo Gió – Gành Đá Đĩa',
    slug: 'tour-quy-nhon-phu-yen-ky-co-eo-gio-4n3d',
    category: 'trong-nuoc',
    badge: 'Biển xanh',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Quy Nhơn - Phú Yên',
    duration: '4N3Đ',
    durationDays: 4,
    startDate: 'Tháng 11',
    transport: 'Máy bay khứ hồi + Xe du lịch',
    hotel: 'Khách sạn 4 sao ven biển',
    priceOld: '5.890.000₫',
    priceNew: '4.990.000₫',
    priceNumeric: 4990000,
    image: '/assets/img/phu-quoc.jpg',
    summary: 'Khám phá xứ Nẫu bình yên với bãi biển Kỳ Co trong vắt, Eo Gió lộng gió và kỳ quan Gành Đá Đĩa.',
    highlights: ['Cano đảo Kỳ Co – Lặn san hô Bãi Dứa', 'Eo Gió – Tịnh xá Ngọc Hòa', 'Gành Đá Đĩa – Bãi Xép Hoa Vàng Cỏ Xanh'],
  },
  {
    id: 10,
    code: 'VH-010',
    title: 'Tour Huế – Quảng Bình 4N3Đ: Đại Nội – Động Phong Nha – Động Thiên Đường',
    slug: 'tour-hue-quang-binh-phong-nha-4n3d',
    category: 'trong-nuoc',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Huế - Quảng Bình',
    duration: '4N3Đ',
    durationDays: 4,
    startDate: 'Tháng 12',
    transport: 'Máy bay + Xe du lịch',
    hotel: 'Khách sạn 4 sao trung tâm',
    priceOld: '6.190.000₫',
    priceNew: '5.290.000₫',
    priceNumeric: 5290000,
    image: '/assets/img/da-nang.jpg',
    summary: 'Hành trình về miền di sản: thăm Kinh thành Huế, Chùa Thiên Mụ và hệ thống hang động kỳ vĩ tại Phong Nha – Kẻ Bàng.',
    highlights: ['Đại Nội Huế – Lăng Khải Định', 'Nghe Ca Huế trên sông Hương', 'Động Thiên Đường & Động Phong Nha'],
  },
  {
    id: 11,
    code: 'VH-011',
    title: 'Tour Phan Thiết – Mũi Né 2N1Đ: Đồi Cát Bay – Bàu Trắng – Bikini Beach',
    slug: 'tour-phan-thiet-mui-ne-2n1d',
    category: 'gia-re',
    badge: 'Cuối tuần',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Mũi Né',
    duration: '2N1Đ',
    durationDays: 2,
    startDate: 'Hàng tuần',
    transport: 'Xe du lịch cao tốc 2h',
    hotel: 'Resort 4 sao có hồ bơi & bãi biển riêng',
    priceOld: '2.190.000₫',
    priceNew: '1.690.000₫',
    priceNumeric: 1690000,
    image: '/assets/img/phu-quoc.jpg',
    summary: 'Kỳ nghỉ cuối tuần nhanh chóng chỉ 2 giờ cao tốc: trượt cát Đồi Cát Bay, đi xe jeep Bàu Trắng và nghỉ dưỡng resort.',
    highlights: ['Xe Jeep chinh phục Đồi Cát Trắng Bàu Trắng', 'Công viên biển Bikini Beach & Làng chài', 'Resort 4 sao sát biển Mũi Né'],
  },
  {
    id: 12,
    code: 'VH-012',
    title: 'Tour Côn Đảo 3N2Đ: Tâm Linh Nghĩa Trang Hàng Dương – Bãi Đầm Trầu',
    slug: 'tour-con-dao-3n2d-hang-duong-dam-trau',
    category: 'trong-nuoc',
    badge: 'Đặc biệt',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Côn Đảo',
    duration: '3N2Đ',
    durationDays: 3,
    startDate: 'Hàng tuần',
    transport: 'Máy bay khứ hồi / Tàu cao tốc',
    hotel: 'Resort 3-4 sao gần biển',
    priceOld: '6.990.000₫',
    priceNew: '5.890.000₫',
    priceNumeric: 5890000,
    image: '/assets/img/ha-giang.jpg',
    summary: 'Hành trình tri ân đầy xúc cảm tại Nghĩa trang Hàng Dương, Nhà tù Côn Đảo và thư giãn tại Bãi Đầm Trầu hoang sơ.',
    highlights: ['Viếng Nghĩa trang Hàng Dương – Mộ Cô Sáu', 'Di tích Nhà tù Côn Đảo – Miếu Bà Phi Yến', 'Tắm biển Bãi Đầm Trầu'],
  },
  {
    id: 13,
    code: 'VH-013',
    title: 'Tour Miền Tây 2N1Đ: Mỹ Tho – Bến Tre – Cần Thơ Chợ Nổi Cái Răng',
    slug: 'tour-mien-tay-2n1d-cho-noi-cai-rang',
    category: 'gia-re',
    badge: 'Giá tốt',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Cần Thơ - Miền Tây',
    duration: '2N1Đ',
    durationDays: 2,
    startDate: 'Hàng tuần',
    transport: 'Xe du lịch + Thuyền sông Mekong',
    hotel: 'Khách sạn 4 sao bến Ninh Kiều',
    priceOld: '2.090.000₫',
    priceNew: '1.590.000₫',
    priceNumeric: 1590000,
    image: '/assets/img/ha-giang.jpg',
    summary: 'Trải nghiệm văn hóa sông nước Cửu Long: chèo xuồng ba lá dưới rặng dừa Bến Tre và đi Chợ Nổi Cái Răng lúc bình minh.',
    highlights: ['Chợ nổi Cái Răng sáng sớm', 'Xuồng ba lá rạch dừa nước Bến Tre', 'Du thuyền Bến Ninh Kiều & Đờn ca tài tử'],
  },
  {
    id: 14,
    code: 'VH-014',
    title: 'Tour Tây Nguyên 3N2Đ: Buôn Ma Thuột – Hồ Tà Đùng – Thác Dray Nur',
    slug: 'tour-tay-nguyen-3n2d-buon-ma-thuot-ta-dung',
    category: 'trong-nuoc',
    badge: 'Đại ngàn',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Tây Nguyên',
    duration: '3N2Đ',
    durationDays: 3,
    startDate: 'Tháng 11',
    transport: 'Xe giường nằm / Ghế ngả cao cấp',
    hotel: 'Khách sạn 4 sao trung tâm Buôn Ma Thuột',
    priceOld: '3.690.000₫',
    priceNew: '2.990.000₫',
    priceNumeric: 2990000,
    image: '/assets/img/phu-quoc.jpg',
    summary: 'Ngắm Vịnh Hạ Long trên cao nguyên Hồ Tà Đùng, khám phá Bảo tàng Thế giới Cà phê và thác Dray Nur hùng vĩ.',
    highlights: ['Hồ Tà Đùng – Vịnh Hạ Long Tây Nguyên', 'Bảo tàng Thế giới Cà phê', 'Thác Dray Nur & Buôn Đôn'],
  },
  {
    id: 15,
    code: 'VH-015',
    title: 'Tour Măng Đen – Pleiku 3N2Đ: Biển Hồ T’Nưng – Rừng Thông – Thác Pa Sỹ',
    slug: 'tour-mang-den-pleiku-3n2d',
    category: 'trong-nuoc',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Măng Đen - Gia Lai',
    duration: '3N2Đ',
    durationDays: 3,
    startDate: 'Tháng 12',
    transport: 'Xe giường nằm Limousine',
    hotel: 'Homestay / Khách sạn giữa rừng thông',
    priceOld: '3.490.000₫',
    priceNew: '2.850.000₫',
    priceNumeric: 2850000,
    image: '/assets/img/ha-giang.jpg',
    summary: 'Tìm về "Đà Lạt thứ hai" Măng Đen yên bình giữa đại ngàn, thưởng thức gà nướng cơm lam và ngắm Biển Hồ Pleiku.',
    highlights: ['Thác Pa Sỹ & Hồ Đăk Ke Măng Đen', 'Biển Hồ T’Nưng & Hàng thông trăm tuổi', 'Ẩm thực gà nướng cơm lam chuẩn vị'],
  },
  {
    id: 16,
    code: 'VH-016',
    title: 'Tour Mộc Châu – Tà Xùa 2N1Đ: Săn Mây Sống Lưng Khủng Long – Đồi Chè',
    slug: 'tour-moc-chau-ta-xua-2n1d-san-may',
    category: 'gia-re',
    badge: 'Săn mây',
    startPoint: 'Hà Nội',
    destination: 'Mộc Châu - Sơn La',
    duration: '2N1Đ',
    durationDays: 2,
    startDate: 'Hàng tuần',
    transport: 'Xe du lịch 16-29 chỗ',
    hotel: 'Khách sạn / Homestay view thung lũng',
    priceOld: '2.290.000₫',
    priceNew: '1.790.000₫',
    priceNumeric: 1790000,
    image: '/assets/img/ha-giang.jpg',
    summary: 'Hành trình săn mây cuối tuần tại Tà Xùa, dạo đồi chè Trái Tim Mộc Châu và check-in Cầu Kính Bạch Long.',
    highlights: ['Sống lưng Khủng Long Tà Xùa', 'Đồi chè Trái Tim & Rừng thông Bản Áng', 'Thác Dải Yếm mùa nước đổ'],
  },
  {
    id: 17,
    code: 'VH-017',
    title: 'Tour Đảo Cát Bà – Vịnh Lan Hạ 2N1Đ: Chèo Kayak – Làng Chài Cái Bèo',
    slug: 'tour-cat-ba-vinh-lan-ha-2n1d',
    category: 'trong-nuoc',
    startPoint: 'Hà Nội',
    destination: 'Cát Bà - Hải Phòng',
    duration: '2N1Đ',
    durationDays: 2,
    startDate: 'Hàng tuần',
    transport: 'Xe cao tốc + Tàu tham quan vịnh',
    hotel: 'Khách sạn 4 sao trung tâm Cát Bà',
    priceOld: '2.890.000₫',
    priceNew: '2.390.000₫',
    priceNumeric: 2390000,
    image: '/assets/img/phu-quoc.jpg',
    summary: 'Khám phá Vịnh Lan Hạ tuyệt đẹp, chèo kayak qua các hang Sáng – Tối và đạp xe tại làng cổ Việt Hải.',
    highlights: ['Du ngoạn Vịnh Lan Hạ & Làng chài Cái Bèo', 'Chèo kayak Hang Sáng – Hang Tối', 'Đạp xe Làng cổ Việt Hải'],
  },
  {
    id: 18,
    code: 'VH-018',
    title: 'Tour Đảo Lý Sơn 3N2Đ: Cổng Tò Vò – Đảo Bé An Bình – Đỉnh Thới Lới',
    slug: 'tour-dao-ly-son-3n2d-cong-to-vo',
    category: 'trong-nuoc',
    startPoint: 'Đà Nẵng',
    destination: 'Lý Sơn - Quảng Ngãi',
    duration: '3N2Đ',
    durationDays: 3,
    startDate: 'Tháng 11',
    transport: 'Xe du lịch + Tàu cao tốc Sa Kỳ',
    hotel: 'Khách sạn 3 sao trung tâm đảo',
    priceOld: '3.790.000₫',
    priceNew: '3.190.000₫',
    priceNumeric: 3190000,
    image: '/assets/img/da-nang.jpg',
    summary: 'Khám phá vương quốc tỏi Lý Sơn với nước biển xanh ngọc bích tại Đảo Bé, Hang Câu và ngắm hoàng hôn Cổng Tò Vò.',
    highlights: ['Đảo Bé An Bình – Lặn ngắm san hô', 'Cổng Tò Vò & Đỉnh núi lửa Thới Lới', 'Thưởng thức cua huỳnh đế & gỏi tỏi'],
  },
  {
    id: 19,
    code: 'VH-019',
    title: 'Tour Hồ Tràm – Vũng Tàu 2N1Đ: Suối Khoáng Nóng Bình Châu – Nghỉ Dưỡng 5 Sao',
    slug: 'tour-ho-tram-vung-tau-2n1d',
    category: 'gia-re',
    badge: 'Nghỉ dưỡng',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Hồ Tràm - Vũng Tàu',
    duration: '2N1Đ',
    durationDays: 2,
    startDate: 'Hàng tuần',
    transport: 'Xe du lịch đời mới',
    hotel: 'Resort 4-5 sao Hồ Tràm',
    priceOld: '2.590.000₫',
    priceNew: '1.990.000₫',
    priceNumeric: 1990000,
    image: '/assets/img/phu-quoc.jpg',
    summary: 'Thư giãn cuối tuần tại Hồ Tràm, tắm suối khoáng nóng Bình Châu và thưởng thức hải sản tươi ngon.',
    highlights: ['Tắm khoáng nóng & luộc trứng Bình Châu', 'Cầu ngắm biển Hamptons Pier Hồ Tràm', 'Tượng Chúa Kitô & Hải sản Vũng Tàu'],
  },
  {
    id: 20,
    code: 'VH-020',
    title: 'Tour Xuyên Việt Miền Bắc 5N4Đ: Hà Nội – Hạ Long – Tràng An – Sapa Fansipan',
    slug: 'tour-mien-bac-5n4d-ha-noi-ha-long-sapa',
    category: 'trong-nuoc',
    badge: 'Trọn gói',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Hà Nội - Hạ Long - Sapa',
    duration: '5N4Đ',
    durationDays: 5,
    startDate: 'Tháng 12',
    transport: 'Máy bay khứ hồi + Xe du lịch',
    hotel: 'Khách sạn 4 sao tiêu chuẩn',
    priceOld: '8.990.000₫',
    priceNew: '7.690.000₫',
    priceNumeric: 7690000,
    image: '/assets/img/ha-giang.jpg',
    summary: 'Hành trình trọn vẹn nhất khám phá tinh hoa miền Bắc: Thủ đô Hà Nội, Vịnh Hạ Long, Tràng An và đỉnh Fansipan Sapa.',
    highlights: ['Du thuyền Vịnh Hạ Long – Hang Sửng Sốt', 'Ngồi thuyền nan Tràng An Ninh Bình', 'Chinh phục Fansipan 3.143m'],
  },
];

export const TOURS: Tour[] = SEEDS.map((s) => ({
  id: s.id,
  slug: s.slug,
  title: s.title,
  tourCode: s.code,
  category: s.category,
  categoryName: s.category === 'gia-re' ? 'Tour Giá Tốt' : 'Tour Trong Nước',
  badgeText: s.badge,
  startPoint: s.startPoint,
  destination: s.destination,
  duration: s.duration,
  durationDays: s.durationDays,
  startDate: s.startDate,
  transport: s.transport,
  hotel: s.hotel,
  priceOld: s.priceOld,
  priceNew: s.priceNew,
  priceNumeric: s.priceNumeric,
  priceChild: `${Math.round((s.priceNumeric * 0.8) / 10000) * 10000}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '₫',
  priceInfant: '450.000₫',
  image: s.image,
  gallery: [s.image, '/assets/img/ha-giang.jpg', '/assets/img/hoi-an.jpg', '/assets/img/phu-quoc.jpg'],
  summary: s.summary,
  highlights: s.highlights,
  itinerary: Array.from({ length: s.durationDays }, (_, idx) => ({
    day: `Ngày ${idx + 1}`,
    title:
      idx === 0
        ? `${s.startPoint} – Khởi hành đi ${s.destination}`
        : idx === s.durationDays - 1
          ? `Tham quan & Trở về ${s.startPoint}`
          : `Khám phá điểm nổi bật tại ${s.destination}`,
    description:
      idx === 0
        ? `Xe và hướng dẫn viên VIEHORA TRAVEL đón đoàn khởi hành đi ${s.destination}, nhận phòng khách sạn và dùng bữa tối đặc sản địa phương.`
        : idx === s.durationDays - 1
          ? `Dùng bữa sáng, tự do mua sắm đặc sản làm quà. Xe đưa đoàn trở về ${s.startPoint}, kết thúc hành trình tốt đẹp.`
          : `Tham quan các danh thắng nổi tiếng trong chương trình (${s.highlights.join(', ')}), chụp ảnh lưu niệm và thưởng thức ẩm thực bản địa.`,
  })),
  inclusions: DEFAULT_INCLUSIONS,
  exclusions: DEFAULT_EXCLUSIONS,
  childPolicy: DEFAULT_CHILD_POLICY,
  paymentPolicy: DEFAULT_PAYMENT_POLICY,
  notes: DEFAULT_NOTES,
  views: 420 + s.id * 47,
}));

export const CATEGORY_LABELS: Record<string, { title: string; subtitle: string; banner: string }> = {
  'trong-nuoc': {
    title: 'Tour Du Lịch Trong Nước',
    subtitle: 'Khám phá vẻ đẹp Việt Nam từ Bắc chí Nam — An toàn · Gần gũi · Bền vững',
    banner: '/assets/img/ha-giang.jpg',
  },
  'gia-re': {
    title: 'Tour Giá Tốt – Ưu Đãi Nội Địa',
    subtitle: 'Ưu đãi đặt sớm & săn deal cuối tuần tiết kiệm đến 30%',
    banner: '/assets/img/da-nang.jpg',
  },
  'du-lich': {
    title: 'Tất Cả Tour Du Lịch Việt Nam',
    subtitle: 'Tổng hợp các hành trình khám phá, trải nghiệm văn hóa và thiên nhiên chọn lọc từ VIEHORA TRAVEL',
    banner: '/assets/img/phu-quoc.jpg',
  },
};

export const CATEGORY_NAME_MAP: Record<TourCategorySlug, string> = {
  'trong-nuoc': 'Tour Trong Nước',
  'gia-re': 'Tour Giá Tốt',
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

const EN_TOUR_MAP: Record<string, { titleEn: string; summaryEn: string; badgeEn?: string }> = {
  'VH-001': {
    titleEn: 'Phu Quoc 3D2N: Grand World – Hon Thom Cable Car – Snorkeling',
    summaryEn: 'Discover Pearl Island Phu Quoc with the world’s longest sea-crossing cable car, Grand World, and a 4-island speedboat trip.',
    badgeEn: 'Best Seller',
  },
  'VH-002': {
    titleEn: 'Da Nang – Hoi An – Ba Na Hills – Golden Bridge 4D3N',
    summaryEn: 'Check in at the iconic Golden Bridge on Ba Na Hills, stroll lantern-lit Hoi An Ancient Town, and relax at My Khe Beach.',
    badgeEn: 'Special Offer',
  },
  'VH-003': {
    titleEn: 'Ha Giang – Dong Van – Nho Que River – Ma Pi Leng Pass 3D2N',
    summaryEn: 'Conquer majestic Ma Pi Leng Pass, cruise emerald Nho Que River through Tu San Canyon, and visit Lung Cu Flagpole.',
    badgeEn: 'Adventure',
  },
  'VH-004': {
    titleEn: 'Sapa – Fansipan Peak – Cat Cat Village – Moana 3D2N',
    summaryEn: 'Hunt clouds atop Fansipan Peak (3,143m), wander peaceful Cat Cat Village, and enjoy Sapa salmon hotpot.',
    badgeEn: 'Value Deal',
  },
  'VH-005': {
    titleEn: 'Ha Long Bay – 5-Star Cruise – Sung Sot Cave – Titop Island 2D1N',
    summaryEn: 'Overnight aboard a 5-star cruise in UNESCO-listed Ha Long Bay with kayaking and sunset tea party.',
    badgeEn: 'Luxury',
  },
  'VH-006': {
    titleEn: 'Ninh Binh – Trang An – Mua Cave – Bai Dinh Pagoda 2D1N',
    summaryEn: 'Row through Trang An heritage caves, climb Ngoa Long Peak at Mua Cave, and visit Bai Dinh Pagoda.',
  },
  'VH-007': {
    titleEn: 'Da Lat 3D2N: Cau Dat Cloud Hunting – Puppy Farm – Valley of Love',
    summaryEn: 'Enjoy Da Lat’s crisp pine-scented air, sunrise cloud hunting at Cau Dat Tea Hill, and fresh highland cuisine.',
    badgeEn: 'Hot',
  },
  'VH-008': {
    titleEn: 'Nha Trang 3D3N: Robinson Island – VinWonders – Mineral Mud Bath',
    summaryEn: 'Have fun at VinWonders, enjoy a seafood feast on Robinson Island, and unwind with warm mineral mud baths.',
    badgeEn: 'Best Deal',
  },
  'VH-009': {
    titleEn: 'Quy Nhon – Phu Yen 4D3N: Ky Co – Eo Gio – Ganh Da Dia',
    summaryEn: 'Explore peaceful Binh Dinh & Phu Yen with crystal-clear Ky Co Beach, dramatic Eo Gio cliffs, and Ganh Da Dia.',
    badgeEn: 'Coastal',
  },
  'VH-010': {
    titleEn: 'Hue – Quang Binh 4D3N: Imperial Citadel – Phong Nha & Paradise Caves',
    summaryEn: 'Journey through Central Vietnam heritage: Hue Imperial City, Perfume River folk songs, and Phong Nha – Ke Bang caves.',
  },
  'VH-011': {
    titleEn: 'Phan Thiet – Mui Ne 2D1N: Red Sand Dunes – Bau Trang – Bikini Beach',
    summaryEn: 'Quick 2-hour expressway getaway: Jeep ride over White Sand Dunes, coastal resorts, and fresh seafood.',
    badgeEn: 'Weekend',
  },
  'VH-012': {
    titleEn: 'Con Dao Island 3D2N: Hang Duong Memorial – Dam Trau Beach',
    summaryEn: 'A meaningful heritage & beach retreat to Con Dao with Hang Duong Cemetery and pristine Dam Trau Beach.',
    badgeEn: 'Special',
  },
  'VH-013': {
    titleEn: 'Mekong Delta 2D1N: My Tho – Ben Tre – Cai Rang Floating Market',
    summaryEn: 'Experience Mekong river life: sampan rides under coconut palms in Ben Tre and Cai Rang Floating Market at dawn.',
    badgeEn: 'Best Deal',
  },
  'VH-014': {
    titleEn: 'Central Highlands 3D2N: Buon Ma Thuot – Ta Dung Lake – Dray Nur Waterfall',
    summaryEn: 'Admire Ta Dung Lake, visit the World Coffee Museum, and feel the power of Dray Nur Waterfall.',
    badgeEn: 'Highlands',
  },
  'VH-015': {
    titleEn: 'Mang Den – Pleiku 3D2N: T’Nung Lake – Pine Forest – Pa Sy Waterfall',
    summaryEn: 'Retreat to serene Mang Den pine forests, enjoy bamboo-tube rice with grilled chicken, and visit Pleiku.',
  },
  'VH-016': {
    titleEn: 'Moc Chau – Ta Xua 2D1N: Dinosaur Spine Cloud Hunting – Tea Hills',
    summaryEn: 'Weekend cloud-hunting trip to Ta Xua Dinosaur Spine and Moc Chau’s heart-shaped tea plantations.',
    badgeEn: 'Cloud Hunt',
  },
  'VH-017': {
    titleEn: 'Cat Ba Island – Lan Ha Bay 2D1N: Kayaking – Cai Beo Fishing Village',
    summaryEn: 'Cruise tranquil Lan Ha Bay, kayak through Bright & Dark Caves, and cycle around Viet Hai ancient village.',
  },
  'VH-018': {
    titleEn: 'Ly Son Island 3D2N: To Vo Gate – An Binh Islet – Thoi Loi Peak',
    summaryEn: 'Discover volcanic Ly Son Island with turquoise water at Be Island, Hang Cau, and sunset at To Vo Gate.',
  },
  'VH-019': {
    titleEn: 'Ho Tram – Vung Tau 2D1N: Binh Chau Hot Springs – 5-Star Resort',
    summaryEn: 'Relaxing weekend escape in Ho Tram with natural mineral hot springs at Binh Chau and Hamptons Pier.',
    badgeEn: 'Resort',
  },
  'VH-020': {
    titleEn: 'Northern Vietnam Grand Tour 5D4N: Hanoi – Ha Long – Trang An – Sapa',
    summaryEn: 'Complete Northern Vietnam highlights: Hanoi Old Quarter, Ha Long Bay cruise, Trang An, and Fansipan Peak.',
    badgeEn: 'All-in-One',
  },
};

export function getLocalizedTour(tour: Tour, lang: 'vi' | 'en'): Tour {
  if (lang === 'vi') return tour;

  const preset = EN_TOUR_MAP[tour.tourCode];
  const translatePlace = (p: string) =>
    p
      .replace('TP. Hồ Chí Minh', 'Ho Chi Minh City')
      .replace('Hà Nội', 'Hanoi')
      .replace('Đà Nẵng', 'Da Nang')
      .replace('Cần Thơ', 'Can Tho');

  const translateDuration = (d: string) => d.replace(/N/g, 'D').replace(/Đ/g, 'N');
  const translateStartDate = (s: string) =>
    s
      .replace('Hàng tuần', 'Weekly')
      .replace('Hàng ngày', 'Daily')
      .replace('Tháng ', 'Month ');

  return {
    ...tour,
    title: tour.titleEn || preset?.titleEn || tour.title,
    categoryName: tour.category === 'gia-re' ? 'Best Deals' : 'Domestic Tours',
    badgeText: tour.badgeTextEn || preset?.badgeEn || tour.badgeText,
    startPoint: translatePlace(tour.startPoint),
    duration: translateDuration(tour.duration),
    startDate: translateStartDate(tour.startDate),
    summary: tour.summaryEn || preset?.summaryEn || tour.summary,
    inclusions: [
      'Round-trip transport (flight / modern tourist coach) per itinerary',
      'Standard 3–5 star hotel accommodation (2 guests/room)',
      'Meals & local specialties as scheduled',
      'Sightseeing entrance tickets & travel insurance',
      'Professional English/Vietnamese-speaking tour guide',
    ],
    exclusions: [
      'Personal expenses, laundry, beverages outside menu',
      'Single room supplement & VAT (if applicable)',
    ],
    childPolicy: [
      'Under 2 years old: share bed with parents (airline fee applies)',
      '2 – 11 years old: 80% of adult tour price (own seat & meal)',
      '11 years and older: full adult price',
    ],
    paymentPolicy: [
      '50% deposit upon booking confirmation',
      'Remaining balance due at least 7 days before departure',
      'Flexible date change available with 10 days prior notice',
    ],
    notes: [
      'Please bring valid ID/Passport for hotel check-in and domestic flights.',
      'Itinerary order may adjust for weather conditions while keeping all attractions.',
    ],
  };
}
