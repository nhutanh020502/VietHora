import HeroSection from '@/components/home/HeroSection';
import FavoriteDestinations from '@/components/home/FavoriteDestinations';
import TourSection from '@/components/home/TourSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogAndNewsSection from '@/components/home/BlogAndNewsSection';
import WaveBackdrop from '@/components/WaveBackdrop';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Band 1: Destinations & Domestic Tours with subtle wave ribbons */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <WaveBackdrop variant="blue" />
        <main className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FavoriteDestinations />
          <TourSection
            eyebrow="KHÁM PHÁ VIỆT NAM"
            title="Tour du lịch"
            highlight="trong nước"
            categorySlug="trong-nuoc"
            categoryLink="/category/trong-nuoc"
          />
        </main>
      </div>

      <WhyChooseSection />

      {/* Band 2: Testimonials & Travel Guide with flowing wave ribbons */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <WaveBackdrop variant="blue" />
        <main className="container" style={{ position: 'relative', zIndex: 1 }}>
          <TestimonialsSection />
          <BlogAndNewsSection />
        </main>
      </div>
    </>
  );
}
