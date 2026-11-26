export interface FavoriteDestination {
  name: string;
  slug: string;
  img: string;
}

export const FAVORITE_DESTINATIONS: FavoriteDestination[] = [
  { name: 'Hàn Quốc', slug: 'han-quoc', img: '/assets/img/visa-hero-bg.png' },
  { name: 'Hà Nội', slug: 'ha-noi', img: '/assets/img/flight-domestic.png' },
  { name: 'Phú Quốc', slug: 'phu-quoc', img: '/assets/img/about-hero-bg.png' },
  { name: 'Đà Nẵng', slug: 'da-nang', img: '/assets/img/flight-hero-bg.png' },
  { name: 'Nhật Bản', slug: 'nhat-ban', img: '/assets/img/flight-international.png' },
  { name: 'Trung Quốc', slug: 'trung-quoc', img: '/assets/img/visa-hero-bg.png' },
];

export interface VisaServiceItem {
  title: string;
  tag: string;
  flag: string;
  code: string;
  processingTime: string;
  fee: string;
}

export const VISA_ROW_1: VisaServiceItem[] = [
  {
    title: 'Visa Nhật Bản',
    tag: 'Du Lịch / Thăm Thân / Công Tác',
    flag: 'https://flagcdn.com/w80/jp.png',
    code: 'JP',
    processingTime: '5 - 7 ngày làm việc',
    fee: 'Từ 2.200.000₫',
  },
  {
    title: 'Visa Hàn Quốc',
    tag: 'Đơn / 5 Năm / 10 Năm',
    flag: 'https://flagcdn.com/w80/kr.png',
    code: 'KR',
    processingTime: '8 - 10 ngày làm việc',
    fee: 'Từ 2.500.000₫',
  },
  {
    title: 'Visa Trung Quốc',
    tag: 'Thủ Tục Cực Kỳ Nhanh Chóng',
    flag: 'https://flagcdn.com/w80/cn.png',
    code: 'CN',
    processingTime: '4 - 5 ngày làm việc',
    fee: 'Từ 2.600.000₫',
  },
  {
    title: 'Visa Đài Loan',
    tag: 'E-Visa Quan Hồng / Visa Giấy',
    flag: 'https://flagcdn.com/w80/tw.png',
    code: 'TW',
    processingTime: '5 - 7 ngày làm việc',
    fee: 'Từ 2.100.000₫',
  },
  {
    title: 'Visa Úc (Australia)',
    tag: 'Subclass 600 / Nộp Online',
    flag: 'https://flagcdn.com/w80/au.png',
    code: 'AU',
    processingTime: '14 - 21 ngày làm việc',
    fee: 'Từ 5.500.000₫',
  },
  {
    title: 'Visa Mỹ (Hoa Kỳ)',
    tag: 'Luyện Phỏng Vấn 1-1 Chuẩn',
    flag: 'https://flagcdn.com/w80/us.png',
    code: 'US',
    processingTime: 'Theo lịch hẹn ĐSQ',
    fee: 'Từ 5.800.000₫',
  },
];

export const VISA_ROW_2: VisaServiceItem[] = [
  {
    title: 'Visa Pháp (Schengen)',
    tag: 'Khối Châu Âu Schengen',
    flag: 'https://flagcdn.com/w80/fr.png',
    code: 'FR',
    processingTime: '15 ngày làm việc',
    fee: 'Từ 5.200.000₫',
  },
  {
    title: 'Visa Đức (Germany)',
    tag: 'Thăm Thân / Công Tác EU',
    flag: 'https://flagcdn.com/w80/de.png',
    code: 'DE',
    processingTime: '15 ngày làm việc',
    fee: 'Từ 5.200.000₫',
  },
  {
    title: 'Visa Ý (Italy)',
    tag: 'Du Lịch Châu Âu Trọn Gói',
    flag: 'https://flagcdn.com/w80/it.png',
    code: 'IT',
    processingTime: '15 ngày làm việc',
    fee: 'Từ 5.200.000₫',
  },
  {
    title: 'Visa New Zealand',
    tag: 'Nộp Online / Du Lịch',
    flag: 'https://flagcdn.com/w80/nz.png',
    code: 'NZ',
    processingTime: '15 - 20 ngày làm việc',
    fee: 'Từ 6.000.000₫',
  },
  {
    title: 'Visa Anh Quốc (UK)',
    tag: 'Du Lịch / Thăm Thân / Du Học',
    flag: 'https://flagcdn.com/w80/gb.png',
    code: 'GB',
    processingTime: '15 ngày làm việc',
    fee: 'Từ 6.200.000₫',
  },
  {
    title: 'Visa Canada',
    tag: 'Visa 10 Năm Nhập Cảnh Nhiều Lần',
    flag: 'https://flagcdn.com/w80/ca.png',
    code: 'CA',
    processingTime: '20 - 30 ngày làm việc',
    fee: 'Từ 5.900.000₫',
  },
];

export interface TestimonialItem {
  name: string;
  meta: string;
  text: string;
  initial: string;
  avatarClass: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Cô Nguyễn Thị Mai',
    meta: 'Khách tour Hành Hương Ấn Độ',
    text: '"Tôi vừa hoàn thành tour hành hương Ấn Độ cùng Viehora Travel. Dịch vụ chu đáo, hướng dẫn viên am hiểu sâu sắc về Phật giáo và hỗ trợ mọi thành viên trong đoàn cực kỳ tận tâm. Sẽ tiếp tục đồng hành!"',
    initial: 'T',
    avatarClass: 'avatar-teal',
  },
  {
    name: 'Anh Trần Vĩnh Hưng',
    meta: 'Khách dịch vụ Visa Pháp',
    text: '"Cảm ơn đội ngũ Viehora đã hỗ trợ làm Visa Schengen cực kỳ nhanh chóng. Hồ sơ của tôi thuộc dạng khó nhưng các bạn tư vấn chi tiết, chỉn chu từng giấy tờ nên đã đậu ngay lần đầu tiên."',
    initial: 'H',
    avatarClass: 'avatar-blue',
  },
  {
    name: 'Chị Lê Hoàng Quỳnh',
    meta: 'Khách tour Phú Quốc 3N2Đ',
    text: '"Gia đình tôi 12 người đi Phú Quốc hè vừa rồi rất hài lòng. Lịch trình thiết kế linh hoạt cho cả người lớn tuổi và trẻ nhỏ, xe đưa đón mới toanh và đồ ăn nhà hàng cực ngon. Giá tour lại vô cùng hợp lý."',
    initial: 'Q',
    avatarClass: 'avatar-gold',
  },
  {
    name: 'Anh Đỗ Minh Đức',
    meta: 'Đại diện Công ty TechVina',
    text: '"Công ty chúng tôi đã đặt tour Team Building tại Mũi Né của Viehora. Kịch bản trò chơi năng động, hoạt náo viên vui tính, chương trình Gala Dinner cực kỳ hoành tráng và chuyên nghiệp."',
    initial: 'D',
    avatarClass: 'avatar-rose',
  },
  {
    name: 'Chị Phạm Minh Hạnh',
    meta: 'Khách tour Nhật Bản Mùa Lá Đỏ',
    text: '"Chuyến đi Nhật Bản 6 ngày 5 đêm vừa rồi thực sự là một trải nghiệm tuyệt vời. Cảnh sắc lá đỏ Kyoto quá đẹp, hướng dẫn viên nhiệt tình, khách sạn 4 sao nằm ngay trung tâm tiện mua sắm."',
    initial: 'H',
    avatarClass: 'avatar-indigo',
  },
  {
    name: 'Anh Hoàng Quốc Bảo',
    meta: 'Khách dịch vụ Visa Úc',
    text: '"Hồ sơ của tôi từng bị từ chối 1 lần, nhưng nhờ Viehora Travel tư vấn định hướng lại cách chứng minh tài chính và công việc, tôi đã đậu Visa Úc chỉ sau 2 tuần nộp."',
    initial: 'B',
    avatarClass: 'avatar-emerald',
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
    slug: 'kinh-nghiem-xin-visa-nhat-ban-tu-tuc-va-theo-tour',
    title: 'Kinh Nghiệm Xin Visa Nhật Bản Mới Nhất 2026: Hồ Sơ & Tỷ Lệ Đậu 99%',
    excerpt:
      'Tổng hợp chi tiết các giấy tờ cần chuẩn bị khi xin visa du lịch Nhật Bản, bí quyết chứng minh tài chính và những lưu ý quan trọng.',
    content: [
      'Nhật Bản luôn là điểm đến mơ ước của du khách Việt Nam vào mỗi mùa hoa anh đào hay mùa lá đỏ. Tuy nhiên, khâu chuẩn bị hồ sơ xin Visa Nhật Bản đòi hỏi sự chính xác và đồng nhất cao.',
      'Tại Viehora Travel, đội ngũ chuyên viên visa sẽ rà soát từng loại giấy tờ từ hộ chiếu, xác nhận công việc, sao kê tài khoản ngân hàng đến lịch trình bay và đặt phòng khách sạn để đảm bảo tỷ lệ đậu lên đến 99%.',
      'Khi đăng ký tour trọn gói Nhật Bản tại Viehora Travel, quý khách được miễn hoàn toàn phí tư vấn hồ sơ và hỗ trợ nộp theo diện công ty du lịch uy tín.',
    ],
    author: 'Viehora Travel',
    date: '20/11/2026',
    category: 'cam-nang-du-lich',
    image: '/assets/img/visa-hero-bg.png',
  },
  {
    id: 502,
    slug: 'cam-nang-du-lich-phu-quoc-mua-dep-nhat',
    title: 'Cẩm Nang Du Lịch Phú Quốc Tự Túc & Trọn Gói: Đi Tháng Mấy Đẹp Nhất?',
    excerpt:
      'Thời tiết Phú Quốc từ tháng 11 đến tháng 4 năm sau là mùa khô đẹp nhất với biển êm, nắng ấm, thích hợp lặn ngắm san hô và đi cano 4 đảo.',
    content: [
      'Phú Quốc được mệnh danh là Đảo Ngọc với những bãi biển nước trong vắt như Bãi Sao, Bãi Kem và khu vui chơi giải trí đẳng cấp quốc tế tại Nam Đảo & Bắc Đảo.',
      'Khoảng thời gian lý tưởng nhất để du lịch Phú Quốc là từ tháng 11 đến tháng 4 hàng năm khi thời tiết khô ráo, sóng êm, rất thuận lợi cho các chuyến cano tham quan Hòn Móng Tay, Hòn Gầm Ghì và đi cáp treo Hòn Thơm.',
    ],
    author: 'Viehora Travel',
    date: '18/11/2026',
    category: 'cam-nang-du-lich',
    image: '/assets/img/about-hero-bg.png',
  },
  {
    id: 503,
    slug: 'checklist-hanh-ly-di-tour-han-quoc-mua-thu-dong',
    title: 'Checklist Hành Lý Chuẩn Khi Đi Tour Hàn Quốc Mùa Thu – Đông',
    excerpt:
      'Đi Hàn Quốc mùa thu đông cần mang trang phục gì, đổi tiền Won ở đâu lợi nhất và các vật dụng không thể thiếu trên máy bay.',
    content: [
      'Nhiệt độ Hàn Quốc vào mùa thu và đầu đông dao động từ 2°C đến 15°C, ban đêm có thể xuống thấp hơn. Bạn nên chuẩn bị áo giữ nhiệt, áo khoác phao nhẹ và giày thể thao chống trơn trượt.',
      'Ngoài ra, đừng quên mang theo ổ cắm chuyển đổi chuẩn 2 chấu tròn (Type C/F) và sim 4G/eSIM du lịch để giữ liên lạc xuyên suốt hành trình.',
    ],
    author: 'Viehora Travel',
    date: '15/11/2026',
    category: 'cam-nang-du-lich',
    image: '/assets/img/flight-international.png',
  },
  {
    id: 504,
    slug: 'luu-y-quan-trong-khi-di-tour-hanh-huong-an-do',
    title: 'Những Lưu Ý Quan Trọng Khi Tham Gia Tour Hành Hương Tứ Động Tâm Ấn Độ',
    excerpt:
      'Chuẩn bị sức khỏe, trang phục, tâm thế và vật dụng cá nhân cần thiết cho chuyến chiêm bái đất Phật thiêng liêng.',
    content: [
      'Hành trình chiêm bái Tứ Động Tâm tại Ấn Độ và Nepal mang ý nghĩa tâm linh sâu sắc đối với mỗi Phật tử và du khách.',
      'Quý khách nên chuẩn bị trang phục rộng rãi, thoáng mát vào ban ngày và áo khoác nhẹ vào sáng sớm hoặc tối muộn. Viehora Travel luôn bố trí bữa ăn hợp khẩu vị Việt Nam và hỗ trợ nước uống đóng chai an toàn suốt chuyến đi.',
    ],
    author: 'Viehora Travel',
    date: '10/11/2026',
    category: 'cam-nang-du-lich',
    image: '/assets/img/flight-hero-bg.png',
  },
  {
    id: 601,
    slug: 'viehora-travel-khai-truong-chuoi-tour-tet-2027',
    title: 'Viehora Travel Mở Bán Chùm Tour Tết Nguyên Đán 2027 Ưu Đãi Sớm Đến 2 Triệu',
    excerpt:
      'Đặt sớm chùm tour Tết trong nước và quốc tế nhận ngay ưu đãi giảm giá trực tiếp cùng quà tặng vali du lịch cao cấp.',
    content: [
      'Chào đón mùa lễ hội cuối năm và Tết Nguyên Đán 2027, Viehora Travel chính thức mở bán hơn 30 đường tour đặc sắc khởi hành từ TP.HCM và Hà Nội.',
      'Khách hàng đăng ký nhóm từ 4 người trở lên sẽ được giảm thêm đến 2.000.000₫/nhóm và hỗ trợ giữ chỗ linh hoạt.',
    ],
    author: 'Ban Biên Tập',
    date: '22/11/2026',
    category: 'tin-tuc',
    image: '/assets/img/flight-domestic.png',
  },
  {
    id: 602,
    slug: 'vietnam-airlines-mo-them-duong-bay-thang-den-nhat-han',
    title: 'Tăng Tần Suất Đường Bay Thẳng Từ TP.HCM Đi Nhật Bản & Hàn Quốc Cuối Năm',
    excerpt:
      'Nhiều khung giờ bay đẹp được bổ sung giúp giá tour du lịch Đông Bắc Á ổn định và thuận tiện hơn cho du khách.',
    content: [
      'Các hãng hàng không lớn đồng loạt tăng chuyến bay thẳng kết nối TP.HCM với Tokyo, Osaka và Seoul nhằm đáp ứng nhu cầu du lịch tăng cao dịp cuối năm.',
    ],
    author: 'Ban Biên Tập',
    date: '19/11/2026',
    category: 'tin-tuc',
    image: '/assets/img/flight-international.png',
  },
  {
    id: 603,
    slug: 'chinh-sach-mien-thi-thuc-va-evisa-moi-cho-du-khach-viet',
    title: 'Cập Nhật Chính Sách E-Visa & Miễn Thị Thực Mới Nhất Cho Công Dân Việt Nam',
    excerpt:
      'Thông tin cập nhật về các quốc gia miễn visa, cấp E-Visa nhanh chóng giúp hành trình du lịch quốc tế trở nên dễ dàng hơn.',
    content: [
      'Nhiều quốc gia tiếp tục đơn giản hóa thủ tục nhập cảnh thông qua hệ thống E-Visa trực tuyến, rút ngắn thời gian xét duyệt chỉ còn 3-5 ngày làm việc.',
    ],
    author: 'Ban Biên Tập',
    date: '14/11/2026',
    category: 'tin-tuc',
    image: '/assets/img/visa-hero-bg.png',
  },
  {
    id: 604,
    slug: 'le-hoi-den-long-va-mua-du-lich-cuoi-nam-tai-hoi-an',
    title: 'Phố Cổ Hội An Rực Rỡ Lễ Hội Đèn Lồng Đón Du Khách Mùa Lễ Hội',
    excerpt:
      'Trải nghiệm không gian văn hóa di sản lung linh bên dòng sông Hoài với hàng nghìn chiếc đèn lồng rực rỡ sắc màu.',
    content: [
      'Mỗi dịp cuối năm, Phố Cổ Hội An lại thu hút đông đảo du khách trong và ngoài nước với các hoạt động thả hoa đăng, hát bài chòi và thưởng thức ẩm thực phố Hội.',
    ],
    author: 'Ban Biên Tập',
    date: '08/11/2026',
    category: 'tin-tuc',
    image: '/assets/img/flight-hero-bg.png',
  },
];

export const HERO_SLIDES = [
  '/assets/img/viehora-hero-hd.jpg',
];

export const BRAND_INFO = {
  name: 'Viehora Travel',
  tagline: 'Đi cùng niềm tin – Chạm đến những hành trình đáng nhớ',
  hotline: '0931 795 135',
  hotlineTel: '0931795135',
  email: 'viehora.travel@gmail.com',
  address: '69/68 Đặng Thùy Trâm, Phường Bình Lợi Trung, TP. Hồ Chí Minh',
  zaloUrl: 'https://zalo.me/0931795135',
};
