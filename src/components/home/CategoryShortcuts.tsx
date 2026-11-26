import Link from 'next/link';

export default function CategoryShortcuts() {
  const items = [
    { href: '/category/gia-re', title: 'Tour Giá Sốc', desc: 'Ưu đãi đặt sớm đến 30%', symbol: '✦' },
    { href: '/category/trong-nuoc', title: 'Khám Phá Việt Nam', desc: 'Phú Quốc, Đà Nẵng, Sapa', symbol: '⌂' },
    { href: '/category/nuoc-ngoai', title: 'Tour Quốc Tế', desc: 'Nhật Bản, Hàn Quốc, Trung Quốc', symbol: '✧' },
    { href: '/category/hanh-huong', title: 'Hành Hương Tâm Linh', desc: 'Ấn Độ, Nepal, Thái Lan', symbol: '❋' },
    { href: '/ve-may-bay', title: 'Vé Máy Bay & Visa', desc: 'Xuất vé & hồ sơ 24/7', symbol: '✈' },
  ];

  return (
    <section className="vh-shortcuts-wrap">
      {items.map((item) => (
        <Link key={item.title} href={item.href} className="vh-shortcut-card">
          <div className="vh-shortcut-icon">{item.symbol}</div>
          <div className="vh-shortcut-title">{item.title}</div>
          <div className="vh-shortcut-desc">{item.desc}</div>
        </Link>
      ))}
    </section>
  );
}
