import Hero from '@/components/home/Hero';
import HomeOffers from '@/components/home/HomeOffers';
import SpecialOffers from '@/components/home/SpecialOffers';
import Categories from '@/components/home/Categories';
import Delivery from '@/components/home/Delivery';

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeOffers />
      <SpecialOffers />
      <Categories />
      <Delivery />
    </main>
  );
}