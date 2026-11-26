import { notFound } from 'next/navigation';
import TourDetailClient from '@/components/TourDetailClient';
import { getTourBySlug, TOURS } from '@/data/tours';

export function generateStaticParams() {
  return TOURS.map((t) => ({ slug: t.slug }));
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const relatedTours = TOURS.filter(
    (t) => t.id !== tour.id && t.category === tour.category
  ).slice(0, 3);

  return <TourDetailClient tour={tour} relatedTours={relatedTours} />;
}
