export interface FavoriteDestination {
  name: string;
  subtitle: string;
  slug: string;
  img: string;
}

export const FAVORITE_DESTINATIONS: FavoriteDestination[] = [
  { name: 'Hà Giang', subtitle: 'Miền đá nở hoa', slug: 'ha-giang', img: '/assets/img/ha-giang.jpg' },
  { name: 'Hội An', subtitle: 'Dấu ấn di sản', slug: 'hoi-an', img: '/assets/img/hoi-an.jpg' },
  { name: 'Phú Quốc', subtitle: 'Đảo ngọc phương Nam', slug: 'phu-quoc', img: '/assets/img/phu-quoc.jpg' },
  { name: 'Đà Nẵng', subtitle: 'Thành phố đáng sống', slug: 'da-nang', img: '/assets/img/da-nang.jpg' },
  { name: 'Đà Lạt', subtitle: 'Thành phố ngàn hoa', slug: 'da-lat', img: '/assets/img/da-lat.jpg' },
  { name: 'Tây Nguyên', subtitle: 'Gọi nắng đại ngàn', slug: 'tay-nguyen', img: '/assets/img/tay-nguyen.jpg' },
];

export interface RegionalHighlight {
  region: string;
  tagline: string;
  query: string;
  image: string;
  spots: string;
}

export const VIETNAM_REGIONS: RegionalHighlight[] = [
  {
    region: 'Miền Bắc Hùng Vĩ',
    tagline: 'Hà Giang · Sapa · Hạ Long · Ninh Bình',
    query: 'Hà',
    image: '/assets/img/ha-giang.jpg',
    spots: 'Núi non & Di sản',
  },
  {
    region: 'Miền Trung Di Sản',
    tagline: 'Đà Nẵng · Hội An · Huế · Quy Nhơn',
    query: 'Đà Nẵng',
    image: '/assets/img/hoi-an.jpg',
    spots: 'Phố cổ & Biển xanh',
  },
  {
    region: 'Tây Nguyên Đại Ngàn',
    tagline: 'Đà Lạt · Buôn Ma Thuột · Măng Đen',
    query: 'Đà Lạt',
    image: '/assets/img/tay-nguyen.jpg',
    spots: 'Cao nguyên & Thác nước',
  },
  {
    region: 'Biển Đảo Phương Nam',
    tagline: 'Phú Quốc · Nha Trang · Côn Đảo · Miền Tây',
    query: 'Phú Quốc',
    image: '/assets/img/phu-quoc.jpg',
    spots: 'Nghỉ dưỡng & Khám phá',
  },
];

export interface TestimonialItem {
  name: string;
  meta: string;
  text: string;
  initial: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Chị Lê Hoàng Quỳnh',
    meta: 'Khách tour Phú Quốc 3N2Đ',
    text: '"Gia đình tôi 12 người đi Phú Quốc hè vừa rồi rất hài lòng. Lịch trình thiết kế linh hoạt cho cả người lớn tuổi và trẻ nhỏ, xe đưa đón mới toanh và đồ ăn nhà hàng cực ngon. Giá tour lại vô cùng hợp lý."',
    initial: 'Q',
  },
  {
    name: 'Anh Đỗ Minh Đức',
    meta: 'Đại diện Công ty TechVina — Tour Mũi Né',
    text: '"Công ty chúng tôi đã đặt tour Team Building tại Mũi Né của VIEHORA TRAVEL. Kịch bản trò chơi năng động, hoạt náo viên vui tính, chương trình Gala Dinner cực kỳ hoành tráng và chuyên nghiệp."',
    initial: 'D',
  },
  {
    name: 'Cô Nguyễn Thị Mai',
    meta: 'Khách tour Đà Nẵng – Hội An 4N3Đ',
    text: '"Hành trình Đà Nẵng – Hội An – Bà Nà Hills được chuẩn bị rất chu đáo. Hướng dẫn viên am hiểu văn hóa miền Trung, nhiệt tình hỗ trợ chụp ảnh và chọn quán ăn ngon chuẩn vị địa phương."',
    initial: 'M',
  },
  {
    name: 'Anh Trần Quốc Khánh',
    meta: 'Khách tour Hà Giang – Cao Bằng 4N3Đ',
    text: '"Cung đường Đông Bắc đẹp ngoài sức tưởng tượng. Tài xế chạy đèo rất an toàn, homestay sạch đẹp ấm cúng, mọi chi phí đều minh bạch ngay từ đầu đúng như cam kết của VIEHORA."',
    initial: 'K',
  },
  {
    name: 'Chị Phạm Minh Hạnh',
    meta: 'Khách tour Tây Nguyên – Đà Lạt',
    text: '"Chuyến đi Đà Lạt và Tây Nguyên vừa rồi thực sự là trải nghiệm đáng nhớ. Không khí trong lành, lịch trình vừa phải không bị chạy show mệt mỏi, rất phù hợp để nghỉ dưỡng."',
    initial: 'H',
  },
];

export interface ArticleItem {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  category: 'cam-nang-du-lich' | 'tin-tuc';
  image: string;
}

export const ARTICLES: ArticleItem[] = [
  {
    id: 501,
    slug: 'cam-nang-du-lich-phu-quoc-mua-dep-nhat',
    title: 'Cẩm Nang Du Lịch Phú Quốc Trọn Gói: Đi Tháng Mấy Biển Đẹp Nhất?',
    excerpt:
      'Thời tiết Phú Quốc từ tháng 11 đến tháng 4 năm sau là mùa khô đẹp nhất với biển êm, nắng ấm, thích hợp lặn ngắm san hô và đi cano 4 đảo.',
    content: [
      'Phú Quốc được mệnh danh là Đảo Ngọc với những bãi biển nước trong vắt như Bãi Sao, Bãi Kem và khu vui chơi giải trí đẳng cấp tại Nam Đảo & Bắc Đảo.',
      'Khoảng thời gian lý tưởng nhất để du lịch Phú Quốc là từ tháng 11 đến tháng 4 hàng năm khi thời tiết khô ráo, sóng êm, rất thuận lợi cho các chuyến cano tham quan Hòn Móng Tay, Hòn Gầm Ghì và đi cáp treo Hòn Thơm.',
    ],
    author: 'VIEHORA TRAVEL',
    date: '20/11/2026',
    category: 'cam-nang-du-lich',
    image: '/assets/img/phu-quoc.jpg',
  },
  {
    id: 502,
    slug: 'kham-pha-ha-giang-mua-hoa-tam-giac-mach',
    title: 'Kinh Nghiệm Khám Phá Hà Giang – Miền Đá Nở Hoa An Toàn & Trọn Vẹn',
    excerpt:
      'Chinh phục đèo Mã Pí Lèng, sông Nho Quế và tìm hiểu nét văn hóa bản địa đặc sắc của đồng bào vùng cao Đông Bắc.',
    content: [
      'Hà Giang luôn mang đến cảm xúc choáng ngợp với những dãy núi đá tai mèo trùng điệp, những cung đường đèo uốn lượn và dòng sông Nho Quế xanh ngọc bích.',
      'Khi đồng hành cùng VIEHORA TRAVEL, bạn sẽ được trải nghiệm lịch trình an toàn với xe du lịch đời mới, tài xế thông thạo đường đèo và lưu trú tại các homestay chuẩn sạch đẹp.',
    ],
    author: 'VIEHORA TRAVEL',
    date: '18/11/2026',
    category: 'cam-nang-du-lich',
    image: '/assets/img/ha-giang.jpg',
  },
  {
    id: 503,
    slug: 'hoi-an-dau-an-thoi-gian-va-am-thuc-pho-co',
    title: 'Hội An – Dấu Ấn Thời Gian: Gợi Ý Lịch Trình 1 Ngày Dạo Phố Cổ & Ẩm Thực',
    excerpt:
      'Thưởng thức cao lầu, cơm gà phố Hội, thả hoa đăng trên sông Hoài và khám phá Rừng Dừa Bảy Mẫu.',
    content: [
      'Phố cổ Hội An lưu giữ vẻ đẹp trầm mặc qua từng mái ngói rêu phong, bức tường vàng đặc trưng và ánh đèn lồng rực rỡ khi đêm xuống.',
      'Đừng bỏ qua trải nghiệm ngồi thuyền thúng tại Rừng Dừa Bảy Mẫu vào buổi sáng và thưởng thức đặc sản Cao Lầu, Bánh Mì Phượng vào buổi chiều.',
    ],
    author: 'VIEHORA TRAVEL',
    date: '15/11/2026',
    category: 'cam-nang-du-lich',
    image: '/assets/img/hoi-an.jpg',
  },
  {
    id: 504,
    slug: 'tay-nguyen-goi-nang-dai-ngan-va-van-hoa-cong-chieng',
    title: 'Tây Nguyên – Gọi Nắng Đại Ngàn: Trải Nghiệm Cao Nguyên & Cà Phê Buôn Mê',
    excerpt:
      'Hòa mình vào không gian đại ngàn hùng vĩ, khám phá thác Dray Nur, hồ Tà Đùng và văn hóa cồng chiêng Tây Nguyên.',
    content: [
      'Tây Nguyên hấp dẫn du khách bởi khí hậu cao nguyên mát mẻ, những đồi cà phê bạt ngàn và văn hóa bản địa giàu bản sắc.',
      'Hành trình khám phá đại ngàn là lựa chọn tuyệt vời cho những ai muốn tìm sự bình yên và kết nối với thiên nhiên.',
    ],
    author: 'VIEHORA TRAVEL',
    date: '10/11/2026',
    category: 'cam-nang-du-lich',
    image: '/assets/img/tay-nguyen.jpg',
  },
  {
    id: 601,
    slug: 'viehora-travel-khai-truong-chuoi-tour-noi-dia-2027',
    title: 'VIEHORA TRAVEL Mở Bán Chùm Tour Nội Địa Tết 2027 Ưu Đãi Đặt Sớm',
    excerpt:
      'Đặt sớm chùm tour du lịch trong nước từ Bắc chí Nam nhận ngay ưu đãi giảm giá nhóm và quà tặng du lịch.',
    content: [
      'Chào đón mùa lễ hội cuối năm và Tết Nguyên Đán 2027, VIEHORA TRAVEL mở bán loạt hành trình nội địa đặc sắc khởi hành từ TP.HCM và Hà Nội.',
      'Khách hàng đăng ký nhóm từ 4 người trở lên được hưởng chính sách ưu đãi trực tiếp và giữ chỗ linh hoạt.',
    ],
    author: 'Ban Biên Tập',
    date: '22/11/2026',
    category: 'tin-tuc',
    image: '/assets/img/da-nang.jpg',
  },
  {
    id: 602,
    slug: 'le-hoi-den-long-va-mua-du-lich-cuoi-nam-tai-hoi-an',
    title: 'Phố Cổ Hội An Rực Rỡ Lễ Hội Đèn Lồng Đón Du Khách Mùa Lễ Hội',
    excerpt:
      'Trải nghiệm không gian văn hóa di sản lung linh bên dòng sông Hoài với hàng nghìn chiếc đèn lồng rực rỡ sắc màu.',
    content: [
      'Mỗi dịp cuối năm, Phố Cổ Hội An lại thu hút đông đảo du khách với các hoạt động thả hoa đăng, hát bài chòi và thưởng thức ẩm thực phố Hội.',
    ],
    author: 'Ban Biên Tập',
    date: '14/11/2026',
    category: 'tin-tuc',
    image: '/assets/img/hoi-an.jpg',
  },
  {
    id: 603,
    slug: 'tang-chuyen-bay-noi-dia-den-phu-quoc-da-nang-ha-noi',
    title: 'Tăng Tần Suất Chuyến Bay Nội Địa Kết Nối TP.HCM – Phú Quốc – Đà Nẵng – Hà Nội',
    excerpt:
      'Nhiều khung giờ bay đẹp được bổ sung giúp giá tour du lịch trong nước ổn định và thuận tiện hơn cho du khách.',
    content: [
      'Các hãng hàng không nội địa tăng cường chuyến bay giờ đẹp vào cuối tuần, giúp du khách dễ dàng lên kế hoạch cho các kỳ nghỉ ngắn ngày 3N2Đ hoặc 4N3Đ.',
    ],
    author: 'Ban Biên Tập',
    date: '09/11/2026',
    category: 'tin-tuc',
    image: '/assets/img/phu-quoc.jpg',
  },
  {
    id: 604,
    slug: 'du-lich-ben-vung-xu-huong-moi-tai-viet-nam',
    title: 'Du Lịch Gần Gũi & Bền Vững: Xu Hướng Trải Nghiệm Văn Hóa Bản Địa 2026',
    excerpt:
      'Du khách Việt ngày càng ưu tiên những hành trình an toàn, tôn trọng thiên nhiên và kết nối sâu sắc với cộng đồng địa phương.',
    content: [
      'Thay vì di chuyển vội vã, xu hướng du lịch chậm và bền vững giúp mỗi chuyến đi trở thành một câu chuyện đáng nhớ và giàu ý nghĩa.',
    ],
    author: 'Ban Biên Tập',
    date: '05/11/2026',
    category: 'tin-tuc',
    image: '/assets/img/da-lat.jpg',
  },
];

export const HERO_SLIDES = ['/assets/img/viehora-banner.jpg'];

export const BRAND_INFO = {
  name: 'VIEHORA TRAVEL',
  legalName: 'CÔNG TY TNHH DU LỊCH VÀ LỮ HÀNH CHÂN TRỜI VIÊN MÃN',
  tagline: 'Beyond Every Horizon – Chạm đến mọi chân trời',
  hotline: '0931 795 135',
  hotlineTel: '0931795135',
  email: 'viehora.travel@gmail.com',
  address: '69/68 Đặng Thùy Trâm, Phường Bình Lợi Trung, TP. Hồ Chí Minh',
  zaloUrl: 'https://zalo.me/0931795135',
};

export interface VisaServiceItem {
  title: string;
  tag: string;
  flag: string;
  code: string;
  processingTime: string;
  fee: string;
}

export const VISA_ROW_1: VisaServiceItem[] = [];
export const VISA_ROW_2: VisaServiceItem[] = [];
