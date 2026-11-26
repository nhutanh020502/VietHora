import HeroSection from '@/components/home/HeroSection';
import CategoryShortcuts from '@/components/home/CategoryShortcuts';
import FavoriteDestinations from '@/components/home/FavoriteDestinations';
import TourSection from '@/components/home/TourSection';
import VisaMarqueeSection from '@/components/home/VisaMarqueeSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogAndNewsSection from '@/components/home/BlogAndNewsSection';
import TrustAndPartnersSection from '@/components/home/TrustAndPartnersSection';
import { getToursByCategory } from '@/data/tours';

export default function HomePage() {
  const domesticTours = getToursByCategory('trong-nuoc');
  const internationalTours = getToursByCategory('nuoc-ngoai');
  const pilgrimageTours = getToursByCategory('hanh-huong');

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
          categoryLink="/category/trong-nuoc"
          tours={domesticTours}
        />
        <TourSection
          eyebrow="VƯƠN TẦM THẾ GIỚI"
          title="Tour du lịch"
          highlight="quốc tế"
          categoryLink="/category/nuoc-ngoai"
          tours={internationalTours}
        />
        <TourSection
          eyebrow="TRỌN VẸN TÂM LINH"
          title="Tour du lịch"
          highlight="hành hương"
          categoryLink="/category/hanh-huong"
          tours={pilgrimageTours}
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
