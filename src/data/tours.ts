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

export const TOURS: Tour[] = [
  // ── TOUR TRONG NƯỚC ────────────────────────────────────────────────────────
  {
    id: 101,
    slug: 'tour-phu-quoc-3n2d-grand-world-hon-thom',
    title: 'Tour Phú Quốc 3N2Đ: Grand World – Cáp Treo Hòn Thơm – Lặn Ngắm San Hô',
    tourCode: 'VH-PQ01',
    category: 'trong-nuoc',
    categoryName: 'Tour Trong Nước',
    badgeText: 'Tiết kiệm',
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
    priceChild: '3.690.000₫',
    priceInfant: '450.000₫',
    image: '/assets/img/about-hero-bg.png',
    gallery: [
      '/assets/img/about-hero-bg.png',
      '/assets/img/flight-domestic.png',
      '/assets/img/flight-hero-bg.png',
    ],
    summary:
      'Hành trình khám phá Đảo Ngọc Phú Quốc 3 ngày 2 đêm với trải nghiệm cáp treo Hòn Thơm vượt biển dài nhất thế giới, check-in thành phố không ngủ Grand World và thưởng thức hải sản tươi sống.',
    highlights: [
      'Bay khứ hồi Vietnam Airlines / Vietjet Air giờ đẹp',
      'Trải nghiệm cáp treo 3 dây vượt biển Hòn Thơm & Công viên nước Aquatopia',
      'Tham quan Grand World – Venice thu nhỏ giữa lòng Phú Quốc',
      'Lặn ngắm san hô tại Hòn Gầm Ghì – Hòn Mây Rút',
    ],
    itinerary: [
      {
        day: 'Ngày 1',
        title: 'TP.HCM – Phú Quốc – Grand World Thành Phố Không Ngủ',
        description:
          'Xe và HDV đón đoàn tại sân bay Phú Quốc, dùng bữa trưa đặc sản gỏi cá trích. Chiều tham quan Dinh Cậu, chùa Hộ Quốc. Tối tự do khám phá Grand World, xem show Tinh Hoa Việt Nam.',
      },
      {
        day: 'Ngày 2',
        title: 'Cano 4 Đảo – Cáp Treo Hòn Thơm – Sunset Town',
        description:
          'Lên cano khám phá Hòn Móng Tay, Hòn Gầm Ghì, lặn ngắm san hô tự nhiên. Trưa dùng cơm trên đảo. Chiều đi cáp treo Hòn Thơm, check-in Cầu Hôn (Kiss Bridge) tại Thị Trấn Hoàng Hôn.',
      },
      {
        day: 'Ngày 3',
        title: 'Cơ Sở Ngọc Trai – Vườn Tiêu – Tiễn Sân Bay',
        description:
          'Dùng buffet sáng tại resort. Tham quan cơ sở nuôi cấy ngọc trai, vườn tiêu Khu Tượng, nhà thùng nước mắm truyền thống. Xe đưa đoàn ra sân bay về lại TP.HCM.',
      },
    ],
    inclusions: [
      'Vé máy bay khứ hồi + 20kg hành lý ký gửi',
      'Khách sạn/Resort 4 sao tiêu chuẩn 2 khách/phòng',
      'Các bữa ăn theo chương trình (2 bữa sáng buffet, 4 bữa chính)',
      'Vé cáp treo Hòn Thơm & cano tham quan 4 đảo',
      'Hướng dẫn viên tiếng Việt nhiệt tình suốt tuyến & Bảo hiểm du lịch 50.000.000₫',
    ],
    exclusions: [
      'Chi phí cá nhân, giặt ủi, minibar tại khách sạn',
      'Phụ thu phòng đơn (nếu đi 1 mình): 1.200.000₫',
      'Thuế VAT 8% theo quy định hiện hành',
    ],
    childPolicy: [
      'Trẻ em dưới 2 tuổi: 450.000₫ (ngủ chung giường bố mẹ, vé máy bay theo quy định hãng)',
      'Trẻ em từ 2 – dưới 11 tuổi: 80% giá tour người lớn (có suất ăn và ghế ngồi riêng, ngủ chung bố mẹ)',
      'Từ 11 tuổi trở lên: tính như người lớn',
    ],
    paymentPolicy: [
      'Đặt cọc 50% tổng giá trị tour ngay khi đăng ký giữ chỗ',
      'Thanh toán phần còn lại trước ngày khởi hành ít nhất 07 ngày',
      'Hủy tour trước 15 ngày: phí 10%; trước 7–14 ngày: phí 50%; dưới 7 ngày: 100% giá tour',
    ],
    notes: [
      'Quý khách mang theo CCCD bản chính còn hạn hoặc Hộ chiếu để làm thủ tục bay.',
      'Lịch trình có thể thay đổi thứ tự điểm tham quan tùy điều kiện thời tiết nhưng vẫn đảm bảo đủ điểm.',
    ],
    views: 1284,
  },
  {
    id: 102,
    slug: 'tour-da-nang-hoi-an-ba-na-hills-4n3d',
    title: 'Tour Đà Nẵng – Hội An – Bà Nà Hills – Cầu Vàng 4N3Đ (Trọn Gói)',
    tourCode: 'VH-DN02',
    category: 'trong-nuoc',
    categoryName: 'Tour Trong Nước',
    badgeText: 'Bán chạy',
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
    priceChild: '4.190.000₫',
    priceInfant: '500.000₫',
    image: '/assets/img/flight-hero-bg.png',
    gallery: [
      '/assets/img/flight-hero-bg.png',
      '/assets/img/flight-domestic.png',
      '/assets/img/about-hero-bg.png',
    ],
    summary:
      'Khám phá thành phố đáng sống Đà Nẵng, check-in Cầu Vàng trên đỉnh Bà Nà Hills, dạo phố cổ Hội An lung linh đèn lồng và thưởng thức ẩm thực miền Trung đậm đà.',
    highlights: [
      'Bao gồm vé cáp treo Bà Nà Hills & Buffet trưa 5 sao trên đỉnh núi Chúa',
      'Dạo phố cổ Hội An về đêm, thả hoa đăng trên sông Hoài',
      'Tham quan Ngũ Hành Sơn, Bán đảo Sơn Trà, Chùa Linh Ứng',
      'Nghỉ dưỡng khách sạn 4 sao sát biển Mỹ Khê',
    ],
    itinerary: [
      {
        day: 'Ngày 1',
        title: 'TP.HCM – Đà Nẵng – Bán Đảo Sơn Trà – Phố Cổ Hội An',
        description:
          'Đáp sân bay Đà Nẵng, nhận phòng khách sạn gần biển Mỹ Khê. Chiều viếng Chùa Linh Ứng Sơn Trà, Ngũ Hành Sơn. Tối tham quan Phố cổ Hội An và dùng cơm gà Hội An.',
      },
      {
        day: 'Ngày 2',
        title: 'Khu Du Lịch Bà Nà Hills – Cầu Vàng – Làng Pháp',
        description:
          'Lên cáp treo Bà Nà Hills, check-in Cầu Vàng nổi tiếng, Vườn Hoa Le Jardin D’Amour, Làng Pháp và vui chơi thỏa thích tại Fantasy Park. Dùng buffet trưa.',
      },
      {
        day: 'Ngày 3',
        title: 'Rừng Dừa Bảy Mẫu – Tắm Biển Mỹ Khê – Cầu Rồng',
        description:
          'Trải nghiệm thuyền thúng tại Rừng Dừa Bảy Mẫu. Chiều tự do tắm biển Mỹ Khê. Tối dạo sông Hàn, ngắm Cầu Rồng phun lửa/nước (cuối tuần).',
      },
      {
        day: 'Ngày 4',
        title: 'Chợ Hàn Mua Sắm – Tiễn Sân Bay Đà Nẵng',
        description:
          'Tự do mua sắm đặc sản miền Trung tại Chợ Hàn. Xe đưa đoàn ra sân bay về lại TP.HCM.',
      },
    ],
    inclusions: [
      'Vé máy bay khứ hồi + hành lý 20kg',
      '3 đêm khách sạn 4 sao gần biển Mỹ Khê',
      'Vé tham quan theo chương trình + Vé cáp treo Bà Nà Hills',
      'Xe du lịch máy lạnh đời mới & HDV chuyên nghiệp',
    ],
    exclusions: [
      'Chi phí cá nhân, nước uống ngoài thực đơn',
      'Vé bảo tàng tượng sáp tại Bà Nà Hills',
    ],
    childPolicy: [
      'Trẻ dưới 2 tuổi: 500.000₫',
      'Trẻ 2–10 tuổi: 78% giá người lớn',
    ],
    paymentPolicy: [
      'Đặt cọc 50% khi giữ chỗ, thanh toán đủ trước 7 ngày khởi hành.',
    ],
    notes: [
      'Mang theo giày thể thao nhẹ để thuận tiện di chuyển trên Bà Nà Hills.',
    ],
    views: 965,
  },
  {
    id: 103,
    slug: 'tour-ha-noi-ha-long-ninh-binh-sapa-5n4d',
    title: 'Tour Miền Bắc 5N4Đ: Hà Nội – Hạ Long – Tràng An – Sapa Fansipan',
    tourCode: 'VH-MB03',
    category: 'trong-nuoc',
    categoryName: 'Tour Trong Nước',
    badgeText: 'Tiết kiệm',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Hà Nội - Hạ Long - Sapa',
    duration: '5N4Đ',
    durationDays: 5,
    startDate: 'Tháng 11',
    transport: 'Máy bay + Xe giường nằm/Limousine',
    hotel: 'Khách sạn 4 sao',
    priceOld: '8.990.000₫',
    priceNew: '7.690.000₫',
    priceNumeric: 7690000,
    priceChild: '6.150.000₫',
    priceInfant: '600.000₫',
    image: '/assets/img/flight-domestic.png',
    gallery: [
      '/assets/img/flight-domestic.png',
      '/assets/img/about-hero-bg.png',
    ],
    summary:
      'Hành trình xuyên Việt khám phá di sản thiên nhiên thế giới Vịnh Hạ Long, quần thể danh thắng Tràng An – Ninh Bình và chinh phục nóc nhà Đông Dương Fansipan tại Sapa.',
    highlights: [
      'Du thuyền tham quan Vịnh Hạ Long – Hang Sửng Sốt – Đảo Titop',
      'Ngồi thuyền nan khám phá Tràng An – Chùa Bái Đính',
      'Chinh phục đỉnh Fansipan 3.143m bằng cáp treo',
      'Dạo 36 phố phường Hà Nội, thưởng thức bún chả & phở cổ truyền',
    ],
    itinerary: [
      {
        day: 'Ngày 1',
        title: 'TP.HCM – Hà Nội – 36 Phố Phường',
        description:
          'Bay ra Nội Bài, tham quan Văn Miếu Quốc Tử Giám, Hồ Hoàn Kiếm, Đền Ngọc Sơn.',
      },
      {
        day: 'Ngày 2',
        title: 'Hà Nội – Ninh Bình – Tràng An – Bái Đính',
        description:
          'Khởi hành đi Ninh Bình, viếng Chùa Bái Đính, đi đò khám phá hang động Tràng An.',
      },
      {
        day: 'Ngày 3',
        title: 'Vịnh Hạ Long – Đảo Titop – Hà Nội',
        description:
          'Lên du thuyền thăm Vịnh Hạ Long, Hang Sửng Sốt, tắm biển đảo Titop.',
      },
      {
        day: 'Ngày 4',
        title: 'Hà Nội – Sapa – Bản Cát Cát',
        description:
          'Di chuyển cao tốc lên Sapa, tham quan Bản Cát Cát, Nhà thờ Đá.',
      },
      {
        day: 'Ngày 5',
        title: 'Đỉnh Fansipan – Hà Nội – TP.HCM',
        description:
          'Chinh phục Fansipan bằng cáp treo, về Nội Bài bay lại TP.HCM.',
      },
    ],
    inclusions: [
      'Vé máy bay khứ hồi + 20kg hành lý',
      '4 đêm khách sạn 4 sao tiêu chuẩn',
      'Du thuyền Hạ Long + vé tham quan các điểm',
    ],
    exclusions: ['Vé cáp treo Fansipan khứ hồi (~800.000₫)', 'Chi phí cá nhân'],
    childPolicy: ['Trẻ em dưới 2 tuổi: 600.000₫', 'Từ 2–10 tuổi: 80% giá tour'],
    paymentPolicy: ['Đặt cọc 50% khi giữ chỗ, thanh toán đủ trước ngày đi 7 ngày.'],
    notes: ['Chuẩn bị áo ấm khi lên Sapa và Fansipan.'],
    views: 812,
  },

  // ── TOUR NƯỚC NGOÀI ────────────────────────────────────────────────────────
  {
    id: 201,
    slug: 'tour-nhat-ban-6n5d-cung-duong-vang-tokyo-kyoto-osaka',
    title: 'Tour Nhật Bản 6N5Đ: Tokyo – Núi Phú Sĩ – Kyoto – Osaka (Bay 5 Sao)',
    tourCode: 'VH-JP01',
    category: 'nuoc-ngoai',
    categoryName: 'Tour Nước Ngoài',
    badgeText: 'Cao cấp',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Nhật Bản',
    duration: '6N5Đ',
    durationDays: 6,
    startDate: 'Tháng 11',
    transport: 'Vietnam Airlines 4-5 sao',
    hotel: 'Khách sạn 4 sao + 1 đêm Onsen',
    priceOld: '32.900.000₫',
    priceNew: '28.900.000₫',
    priceNumeric: 28900000,
    priceChild: '24.500.000₫',
    priceInfant: '8.500.000₫',
    image: '/assets/img/flight-international.png',
    gallery: [
      '/assets/img/flight-international.png',
      '/assets/img/visa-hero-bg.png',
      '/assets/img/flight-hero-bg.png',
    ],
    summary:
      'Trải nghiệm Cung Đường Vàng Nhật Bản trọn vẹn: thủ đô Tokyo hiện đại, biểu tượng Núi Phú Sĩ, cố đô Kyoto cổ kính và thiên đường ẩm thực Osaka. Bao gồm trọn gói Visa Nhật Bản.',
    highlights: [
      'Đã bao gồm lệ phí & dịch vụ làm Visa Nhật Bản trọn gói',
      'Trải nghiệm tàu siêu tốc Shinkansen 300km/h',
      'Thưởng thức Bò Kobe trứ danh & Tắm khoáng nóng Onsen truyền thống',
      'Mặc thử Kimono dạo phố cổ Asakusa & Chùa Vàng Kinkaku-ji',
    ],
    itinerary: [
      {
        day: 'Ngày 1',
        title: 'TP.HCM – Tokyo (Narita)',
        description:
          'Tập trung tại sân bay Tân Sơn Nhất, đáp chuyến bay đêm Vietnam Airlines đi Tokyo.',
      },
      {
        day: 'Ngày 2',
        title: 'Tokyo – Chùa Asakusa – Tháp Tokyo Skytree – Akihabara',
        description:
          'Viếng chùa Senso-ji cổ kính, chụp ảnh Tháp Skytree, tự do mua sắm tại phố điện tử Akihabara và Ginza.',
      },
      {
        day: 'Ngày 3',
        title: 'Núi Phú Sĩ – Làng Cổ Oshino Hakkai – Tắm Onsen',
        description:
          'Tham quan trạm 5 Núi Phú Sĩ, dạo làng cổ Oshino Hakkai. Tối mặc Yukata, thưởng thức bữa tối cua tuyết và tắm Onsen.',
      },
      {
        day: 'Ngày 4',
        title: 'Trải Nghiệm Shinkansen – Cố Đô Kyoto – Chùa Vàng',
        description:
          'Đi tàu siêu tốc Shinkansen đến Kyoto, tham quan Chùa Vàng Kinkaku-ji, Rừng Tre Sagano và Đền Fushimi Inari.',
      },
      {
        day: 'Ngày 5',
        title: 'Osaka – Lâu Đài Osaka – Phố Shinsaibashi – Bò Kobe',
        description:
          'Tham quan Lâu đài Osaka, thưởng thức thịt bò Kobe nướng Teppanyaki và tự do mua sắm tại Dotonbori.',
      },
      {
        day: 'Ngày 6',
        title: 'Osaka (Kansai) – TP.HCM',
        description:
          'Dùng bữa sáng, ra sân bay Kansai làm thủ tục về lại TP.HCM.',
      },
    ],
    inclusions: [
      'Vé máy bay khứ hồi Vietnam Airlines + 46kg hành lý ký gửi',
      'Visa nhập cảnh Nhật Bản trọn gói',
      'Khách sạn 4 sao tiêu chuẩn Nhật Bản + 1 đêm Onsen',
      'Vé tàu Shinkansen, các bữa ăn đặc sản & bảo hiểm quốc tế 1 tỷ đồng',
    ],
    exclusions: [
      'Tiền tip HDV và tài xế địa phương (~42 USD/khách/trọn tour)',
      'Chi phí cá nhân, hành lý quá cước',
    ],
    childPolicy: [
      'Trẻ dưới 2 tuổi: 30% giá tour',
      'Trẻ 2–11 tuổi: 85% giá tour (ngủ chung bố mẹ)',
    ],
    paymentPolicy: [
      'Cọc 10.000.000₫ khi nộp hồ sơ xin Visa Nhật Bản',
      'Thanh toán phần còn lại ngay khi có kết quả Visa',
    ],
    notes: [
      'Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc tour.',
      'Hỗ trợ chuẩn bị hồ sơ chứng minh tài chính & công việc chuẩn xác 100%.',
    ],
    views: 2140,
  },
  {
    id: 202,
    slug: 'tour-han-quoc-5n4d-seoul-nami-everland',
    title: 'Tour Hàn Quốc 5N4Đ: Seoul – Đảo Nami – Công Viên Everland – Hanbok',
    tourCode: 'VH-KR02',
    category: 'nuoc-ngoai',
    categoryName: 'Tour Nước Ngoài',
    badgeText: 'Hot 2026',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Hàn Quốc',
    duration: '5N4Đ',
    durationDays: 5,
    startDate: 'Hàng tuần',
    transport: 'Máy bay khứ hồi',
    hotel: 'Khách sạn 4 sao trung tâm Seoul',
    priceOld: '15.900.000₫',
    priceNew: '13.490.000₫',
    priceNumeric: 13490000,
    priceChild: '11.490.000₫',
    priceInfant: '3.900.000₫',
    image: '/assets/img/visa-hero-bg.png',
    gallery: [
      '/assets/img/visa-hero-bg.png',
      '/assets/img/flight-international.png',
    ],
    summary:
      'Hành trình khám phá Xứ Sở Kim Chi: Đảo Nami lãng mạn, Cung điện Gyeongbokgung, trải nghiệm mặc Hanbok, làm Kim Chi và vui chơi tại công viên Everland.',
    highlights: [
      'Bao gồm Visa đoàn Hàn Quốc thủ tục đơn giản',
      'Check-in Đảo Nami – phim trường Bản Tình Ca Mùa Đông',
      'Vui chơi không giới hạn tại Công viên giải trí Everland',
      'Thưởng thức Gà hầm sâm, Thịt nướng BBQ Hàn Quốc chính hiệu',
    ],
    itinerary: [
      {
        day: 'Ngày 1',
        title: 'TP.HCM – Seoul (Incheon)',
        description: 'Đáp chuyến bay đêm từ Tân Sơn Nhất đến sân bay Incheon.',
      },
      {
        day: 'Ngày 2',
        title: 'Đảo Nami – Tháp Namsan Seoul',
        description:
          'Tham quan Đảo Nami thơ mộng, chiều lên Tháp Namsan ngắm toàn cảnh Seoul.',
      },
      {
        day: 'Ngày 3',
        title: 'Công Viên Everland – Trải Nghiệm Làm Kim Chi & Hanbok',
        description:
          'Vui chơi tại Everland, chiều học làm Kim Chi và chụp hình mặc Hanbok truyền thống.',
      },
      {
        day: 'Ngày 4',
        title: 'Cung Điện Gyeongbokgung – Làng Cổ Bukchon – Myeongdong',
        description:
          'Tham quan Cung điện Hoàng gia, Nhà Xanh, tự do mua sắm mỹ phẩm tại Myeongdong.',
      },
      {
        day: 'Ngày 5',
        title: 'Seoul – TP.HCM',
        description: 'Mua sắm đặc sản sâm nấm linh chi, ra sân bay về Việt Nam.',
      },
    ],
    inclusions: [
      'Vé máy bay khứ hồi + 20kg hành lý',
      'Visa Hàn Quốc trọn gói',
      'Khách sạn 4 sao + vé tham quan + HDV suốt tuyến',
    ],
    exclusions: ['Tiền tip HDV địa phương (30 USD/tour)', 'Chi phí cá nhân'],
    childPolicy: ['Trẻ dưới 2 tuổi: 3.900.000₫', 'Trẻ 2–11 tuổi: 85% giá tour'],
    paymentPolicy: ['Đặt cọc 6.000.000₫ khi đăng ký, thanh toán đủ sau khi đậu Visa.'],
    notes: ['Hỗ trợ hồ sơ hộ khẩu toàn quốc.'],
    views: 1850,
  },
  {
    id: 203,
    slug: 'tour-trung-quoc-5n4d-thuong-hai-hang-chau-o-tran',
    title: 'Tour Trung Quốc 5N4Đ: Thượng Hải – Hàng Châu – Tô Châu – Ô Trấn',
    tourCode: 'VH-CN03',
    category: 'nuoc-ngoai',
    categoryName: 'Tour Nước Ngoài',
    badgeText: 'Ưu đãi',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Trung Quốc',
    duration: '5N4Đ',
    durationDays: 5,
    startDate: 'Tháng 12',
    transport: 'Máy bay khứ hồi',
    hotel: 'Khách sạn 4-5 sao',
    priceOld: '16.500.000₫',
    priceNew: '14.290.000₫',
    priceNumeric: 14290000,
    priceChild: '12.500.000₫',
    priceInfant: '4.200.000₫',
    image: '/assets/img/flight-hero-bg.png',
    gallery: [
      '/assets/img/flight-hero-bg.png',
      '/assets/img/flight-international.png',
    ],
    summary:
      'Khám phá vùng Giang Nam cổ kính và hiện đại: Bến Thượng Hải phồn hoa, Tây Hồ Hàng Châu, Sư Tử Lâm Tô Châu và cổ trấn nghìn năm Ô Trấn.',
    highlights: [
      'Nghỉ đêm trải nghiệm không gian cổ trấn tại Ô Trấn',
      'Du thuyền thưởng ngoạn Tây Hồ – Hàng Châu',
      'Check-in Bến Thượng Hải, Tháp Truyền Hình Đông Phương Minh Châu',
      'Visa đoàn Trung Quốc siêu nhanh, không cần chứng minh tài chính',
    ],
    itinerary: [
      {
        day: 'Ngày 1',
        title: 'TP.HCM – Thượng Hải',
        description: 'Bay thẳng Thượng Hải, dạo Phố đi bộ Nam Kinh & Bến Thượng Hải.',
      },
      {
        day: 'Ngày 2',
        title: 'Thượng Hải – Tô Châu – Hàn Sơn Tự',
        description: 'Tham quan Sư Tử Lâm, Hàn Sơn Tự, phố cổ Thất Lý Sơn Đường.',
      },
      {
        day: 'Ngày 3',
        title: 'Tô Châu – Ô Trấn Tây Sách',
        description: 'Khám phá cổ trấn Ô Trấn đẹp như tranh thủy mặc về đêm.',
      },
      {
        day: 'Ngày 4',
        title: 'Ô Trấn – Hàng Châu – Tây Hồ',
        description: 'Ngồi thuyền ngắm Tây Hồ, thưởng thức Trà Long Tỉnh.',
      },
      {
        day: 'Ngày 5',
        title: 'Hàng Châu – Thượng Hải – TP.HCM',
        description: 'Tham quan Miếu Thành Hoàng, bay về TP.HCM.',
      },
    ],
    inclusions: [
      'Vé máy bay khứ hồi + Visa đoàn Trung Quốc',
      'Khách sạn 4-5 sao tiêu chuẩn địa phương',
      'Các bữa ăn & vé tham quan trọn gói',
    ],
    exclusions: ['Tip HDV 25 USD/khách', 'Show Tống Thành (tự túc)'],
    childPolicy: ['Trẻ 2–11 tuổi: 85% giá người lớn'],
    paymentPolicy: ['Cọc 5.000.000₫ khi đăng ký.'],
    notes: ['Chỉ cần ảnh hộ chiếu rõ nét, không cần chứng minh tài chính.'],
    views: 1420,
  },

  // ── TOUR HÀNH HƯƠNG ────────────────────────────────────────────────────────
  {
    id: 301,
    slug: 'tour-hanh-huong-an-do-nepal-tu-dong-tam-9n8d',
    title: 'Tour Hành Hương Ấn Độ – Nepal 9N8Đ: Tứ Động Tâm Đất Phật',
    tourCode: 'VH-HH01',
    category: 'hanh-huong',
    categoryName: 'Tour Hành Hương',
    badgeText: 'Tâm linh',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Ấn Độ - Nepal',
    duration: '9N8Đ',
    durationDays: 9,
    startDate: 'Tháng 11',
    transport: 'Máy bay + Xe du lịch cao cấp',
    hotel: 'Khách sạn 4 sao tiêu chuẩn quốc tế',
    priceOld: '36.900.000₫',
    priceNew: '32.500.000₫',
    priceNumeric: 32500000,
    priceChild: '29.000.000₫',
    image: '/assets/img/about-hero-bg.png',
    gallery: [
      '/assets/img/about-hero-bg.png',
      '/assets/img/flight-international.png',
    ],
    summary:
      'Hành trình chiêm bái Tứ Động Tâm thiêng liêng: Lâm Tỳ Ni (nơi Đức Phật đản sanh), Bồ Đề Đạo Tràng (thành đạo), Vườn Lộc Uyển (chuyển pháp luân) và Câu Thi Na (nhập Niết Bàn).',
    highlights: [
      'Chiêm bái trọn vẹn 4 thánh tích Tứ Động Tâm tại Ấn Độ & Nepal',
      'Thực đơn chay/mặn phong phú, phù hợp khẩu vị người Việt',
      'Có Quý Thầy hoặc HDV chuyên nghiệp am hiểu Phật pháp đồng hành',
      'Bao gồm E-Visa Ấn Độ & Visa Nepal trọn gói',
    ],
    itinerary: [
      {
        day: 'Ngày 1-2',
        title: 'TP.HCM – Kolkata – Bồ Đề Đạo Tràng (Bodh Gaya)',
        description:
          'Bay đến Ấn Độ, di chuyển về Bồ Đề Đạo Tràng, đảnh lễ Tháp Đại Giác & Cội Bồ Đề thiêng.',
      },
      {
        day: 'Ngày 3-4',
        title: 'Thành Vương Xá – Núi Linh Thứu – Vườn Lộc Uyển',
        description:
          'Chiêm bái Núi Linh Thứu, Đại học Nalanda, Vườn Lộc Uyển – nơi Đức Phật thuyết bài pháp đầu tiên.',
      },
      {
        day: 'Ngày 5-6',
        title: 'Câu Thi Na – Lâm Tỳ Ni (Nepal)',
        description:
          'Đảnh lễ Thánh tích nhập Niết Bàn tại Câu Thi Na, qua cửa khẩu sang Nepal viếng Vườn Lâm Tỳ Ni.',
      },
      {
        day: 'Ngày 7-9',
        title: 'Thành Xá Vệ – Kỳ Viên Tịnh Xá – Varanasi – TP.HCM',
        description:
          'Tham quan Kỳ Viên Tịnh Xá, du thuyền sông Hằng lúc bình minh, bay về Việt Nam.',
      },
    ],
    inclusions: [
      'Vé máy bay khứ hồi + Visa Ấn Độ & Nepal',
      'Khách sạn 4 sao sạch đẹp, an ninh',
      'Ăn uống đầy đủ 3 bữa/ngày, nước suối không giới hạn',
    ],
    exclusions: ['Tip HDV & tài xế 50 USD/tour', 'Chi phí cá nhân'],
    childPolicy: ['Áp dụng theo vé máy bay và tiêu chuẩn phòng khách sạn'],
    paymentPolicy: ['Đặt cọc 12.000.000₫ khi đăng ký'],
    notes: ['Chuẩn bị thuốc cá nhân thông thường; đoàn có hỗ trợ y tế cơ bản.'],
    views: 1590,
  },
  {
    id: 302,
    slug: 'tour-hanh-huong-thai-lan-chua-vang-5n4d',
    title: 'Tour Hành Hương Thái Lan 5N4Đ: Chiêm Bái Chùa Vàng – Núi Khau Chee Chan',
    tourCode: 'VH-HH02',
    category: 'hanh-huong',
    categoryName: 'Tour Hành Hương',
    badgeText: 'Tiết kiệm',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Thái Lan',
    duration: '5N4Đ',
    durationDays: 5,
    startDate: 'Hàng tuần',
    transport: 'Máy bay khứ hồi',
    hotel: 'Khách sạn 4 sao',
    priceOld: '7.990.000₫',
    priceNew: '6.890.000₫',
    priceNumeric: 6890000,
    priceChild: '5.890.000₫',
    image: '/assets/img/flight-hero-bg.png',
    gallery: [
      '/assets/img/flight-hero-bg.png',
      '/assets/img/about-hero-bg.png',
    ],
    summary:
      'Hành trình hành hương cầu bình an tại xứ sở Chùa Vàng: Chùa Phật Vàng Wat Traimit, Trân Bảo Phật Sơn, Chùa Thuyền Wat Yannawa và Chùa Bình Minh Wat Arun.',
    highlights: [
      'Không cần Visa – chỉ cần Hộ chiếu còn hạn trên 6 tháng',
      'Chiêm bái các ngôi chùa linh thiêng bậc nhất Bangkok & Pattaya',
      'Thưởng thức Buffet Baiyoke Sky 86 tầng ngắm toàn cảnh Bangkok',
    ],
    itinerary: [
      {
        day: 'Ngày 1',
        title: 'TP.HCM – Bangkok – Pattaya',
        description: 'Bay sang Bangkok, di chuyển về Pattaya, viếng Chùa Wat Phra Yai.',
      },
      {
        day: 'Ngày 2',
        title: 'Trân Bảo Phật Sơn – Đảo San Hô Coral',
        description: 'Chiêm bái tượng Phật khắc vàng trên núi Khau Chee Chan.',
      },
      {
        day: 'Ngày 3',
        title: 'Pattaya – Bangkok – Chùa Thuyền Wat Yannawa',
        description: 'Về Bangkok, viếng Chùa Thuyền nổi tiếng với xá lợi Phật.',
      },
      {
        day: 'Ngày 4',
        title: 'Chùa Phật Vàng Wat Traimit – Tượng Phật Bốn Mặt',
        description: 'Cầu bình an tại Wat Traimit và Tứ Diện Thần Erawan.',
      },
      {
        day: 'Ngày 5',
        title: 'Bangkok – TP.HCM',
        description: 'Dạo thuyền sông Chao Phraya, ra sân bay về Việt Nam.',
      },
    ],
    inclusions: [
      'Vé máy bay khứ hồi + 20kg hành lý',
      'Khách sạn 4 sao + Buffet 86 tầng',
      'HDV tiếng Việt theo đoàn suốt tuyến',
    ],
    exclusions: ['Tip HDV 20 USD/tour'],
    childPolicy: ['Trẻ 2–11 tuổi: 85% giá người lớn'],
    paymentPolicy: ['Đặt cọc 3.000.000₫ khi đăng ký'],
    notes: ['Trang phục lịch sự, kín đáo khi vào chùa tại Thái Lan.'],
    views: 1120,
  },

  // ── TOUR GIÁ RẺ / KHUYẾN MÃI ──────────────────────────────────────────────
  {
    id: 401,
    slug: 'tour-nha-trang-vinwonders-3n3d-sieu-tiet-kiem',
    title: 'Tour Nha Trang 3N3Đ: Đảo Robinson – VinWonders – Tắm Bùn Khoáng',
    tourCode: 'VH-GR01',
    category: 'gia-re',
    categoryName: 'Tour Giá Sốc',
    badgeText: 'Giá sốc',
    startPoint: 'TP. Hồ Chí Minh',
    destination: 'Nha Trang',
    duration: '3N3Đ',
    durationDays: 3,
    startDate: 'Hàng tuần',
    transport: 'Xe Limousine giường nằm cao cấp',
    hotel: 'Khách sạn 4 sao gần biển Trần Phú',
    priceOld: '3.690.000₫',
    priceNew: '2.790.000₫',
    priceNumeric: 2790000,
    priceChild: '2.190.000₫',
    image: '/assets/img/flight-domestic.png',
    gallery: [
      '/assets/img/flight-domestic.png',
      '/assets/img/about-hero-bg.png',
    ],
    summary:
      'Combo du lịch Nha Trang giá siêu tiết kiệm cuối tuần: vui chơi thả ga tại VinWonders, khám phá Vịnh Nha Trang và thư giãn tắm bùn khoáng nóng.',
    highlights: [
      'Giá trọn gói cực tốt – không phát sinh chi phí ẩn',
      'Khách sạn 4 sao ngay trung tâm đường Trần Phú',
      'Bao gồm tiệc hải sản trên đảo & vé tắm bùn khoáng',
    ],
    itinerary: [
      {
        day: 'Đêm 1',
        title: 'TP.HCM – Nha Trang',
        description: 'Xe giường nằm Limousine đón đoàn khởi hành đi Nha Trang.',
      },
      {
        day: 'Ngày 1',
        title: 'Vịnh Nha Trang – Đảo Robinson – Tiệc Hải Sản',
        description: 'Lên tàu tham quan vịnh, tắm biển, chèo kayak tại Đảo Robinson.',
      },
      {
        day: 'Ngày 2',
        title: 'Tháp Bà Ponagar – Tắm Bùn – VinWonders',
        description: 'Tham quan Tháp Bà, tắm bùn khoáng, chiều vui chơi VinWonders.',
      },
      {
        day: 'Ngày 3',
        title: 'Chợ Đầm – TP.HCM',
        description: 'Mua sắm đặc sản yến sào, nem Ninh Hòa, lên xe về TP.HCM.',
      },
    ],
    inclusions: [
      'Xe giường nằm cao cấp khứ hồi',
      '2 đêm khách sạn 4 sao',
      'Các bữa ăn & vé tham quan theo chương trình',
    ],
    exclusions: ['Vé cáp treo VinWonders (nếu chọn gói tự túc)'],
    childPolicy: ['Trẻ dưới 5 tuổi miễn phí (ngủ chung bố mẹ)'],
    paymentPolicy: ['Cọc 1.000.000₫/khách khi giữ chỗ'],
    notes: ['Khởi hành tối Thứ 5 hàng tuần.'],
    views: 980,
  },
];

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
    subtitle: 'Tổng hợp các hành trình trong nước, quốc tế và hành hương chọn lọc từ Viehora Travel',
    banner: '/assets/img/flight-hero-bg.png',
  },
};

export function getToursByCategory(slug: string): Tour[] {
  if (slug === 'du-lich' || slug === 'all') {
    return TOURS;
  }
  return TOURS.filter((t) => t.category === slug);
}

export function getTourBySlug(slug: string): Tour | undefined {
  return TOURS.find((t) => t.slug === slug);
}

export function filterTours(params: {
  q?: string;
  cat?: string;
  startPoint?: string;
  startDate?: string;
  priceRange?: string;
  durationRange?: string;
}): Tour[] {
  return TOURS.filter((tour) => {
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
