import HeroSection from '@/components/home/HeroSection';
import CategoryShortcuts from '@/components/home/CategoryShortcuts';
import FavoriteDestinations from '@/components/home/FavoriteDestinations';
import TourSection from '@/components/home/TourSection';
import VisaMarqueeSection from '@/components/home/VisaMarqueeSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogAndNewsSection from '@/components/home/BlogAndNewsSection';
import TrustAndPartnersSection from '@/components/home/TrustAndPartnersSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <main className="container">
        <CategoryShortcuts />
        <FavoriteDestinations />
        <TourSection
          eyebrow="KHÁM PHÁ VIỆT NAM"
          title="Tour du lịch"
          highlight="trong nước"
          categorySlug="trong-nuoc"
          categoryLink="/category/trong-nuoc"
        />
        <TourSection
          eyebrow="VƯƠN TẦM THẾ GIỚI"
          title="Tour du lịch"
          highlight="quốc tế"
          categorySlug="nuoc-ngoai"
          categoryLink="/category/nuoc-ngoai"
        />
        <TourSection
          eyebrow="TRỌN VẸN TÂM LINH"
          title="Tour du lịch"
          highlight="hành hương"
          categorySlug="hanh-huong"
          categoryLink="/category/hanh-huong"
        />
        <VisaMarqueeSection />
      </main>

      <WhyChooseSection />

      <main className="container">
        <TestimonialsSection />
        <BlogAndNewsSection />
        <TrustAndPartnersSection />
      </main>
    </>
  );
}
