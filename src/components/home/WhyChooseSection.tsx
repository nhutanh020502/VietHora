export default function WhyChooseSection() {
  const values = [
    {
      icon: '✧',
      title: 'An toàn',
      desc: 'Chuẩn bị chu đáo, thông tin minh bạch rõ ràng và luôn đặt sự an tâm của du khách lên hàng đầu trên mọi cung đường.',
    },
    {
      icon: '⌂',
      title: 'Gần gũi',
      desc: 'Kết nối chân thành với cộng đồng địa phương, văn hóa bản địa và những câu chuyện đáng nhớ tại mỗi vùng đất.',
    },
    {
      icon: '❋',
      title: 'Bền vững',
      desc: 'Tôn trọng thiên nhiên, gìn giữ bản sắc văn hóa và khuyến khích du lịch có trách nhiệm với thế hệ tương lai.',
    },
  ];

  return (
    <section className="vh-values-band">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
          <p className="vh-eyebrow">ĐIỀU LÀM NÊN KHÁC BIỆT</p>
          <h2 className="vh-section-title" style={{ color: '#ffffff' }}>
            Giá trị trên mỗi <em>hành trình</em>
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '14px', marginTop: '10px' }}>
            Từng trải nghiệm tại VIEHORA TRAVEL đều được xây dựng từ sự tận tâm, uy tín và trách nhiệm.
          </p>
        </div>

        <div className="vh-values-grid">
          {values.map((v) => (
            <article key={v.title} className="vh-value-card">
              <div className="vh-value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
