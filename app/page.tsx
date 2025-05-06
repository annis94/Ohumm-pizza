import Hero from '@/components/home/Hero';
import HomeOffers from '@/components/home/HomeOffers';
import SpecialOffers from '@/components/home/SpecialOffers';
import Categories from '@/components/home/Categories';
import Delivery from '@/components/home/Delivery';
import FeaturedMenu from '@/components/home/FeaturedMenu';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedMenu />
      <HomeOffers />
      <SpecialOffers />
      <Categories />
      <Delivery />
      <CTA />
    </main>
  );
}