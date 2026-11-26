import Link from 'next/link';

export default function CategoryShortcuts() {
  const items = [
    { href: '/tim-kiem?q=Phú+Quốc', title: 'Biển Đảo Việt Nam', desc: 'Phú Quốc, Nha Trang, Côn Đảo', symbol: '☀' },
    { href: '/tim-kiem?q=Đà+Nẵng', title: 'Di Sản Miền Trung', desc: 'Đà Nẵng, Hội An, Cố Đô Huế', symbol: '⌂' },
    { href: '/tim-kiem?q=Hà+Giang', title: 'Đông – Tây Bắc', desc: 'Hà Giang, Sapa, Hạ Long', symbol: '⛰' },
    { href: '/category/gia-re', title: 'Tour Giá Tốt', desc: 'Ưu đãi cuối tuần đến 30%', symbol: '✦' },
    { href: '/ve-may-bay', title: 'Vé Máy Bay Nội Địa', desc: 'Xuất vé nhanh 24/7', symbol: '✈' },
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
