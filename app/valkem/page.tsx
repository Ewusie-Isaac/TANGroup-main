import Categories from '@/components/valkem/Categories';
import FeaturedProduct from '@/components/valkem/FeaturedProduct';
import Footer from '@/components/valkem/Footer';
import Header from '@/components/valkem/Header';
import Navigation from '@/components/valkem/Navigation';
import Offer from '@/components/valkem/Offer';
import Procure from '@/components/valkem/Procure';
import Products from '@/components/valkem/Products';
import SpecialDeal from '@/components/valkem/SpecialDeal';
import Value from '@/components/valkem/Value';
import WhyChoose from '@/components/valkem/WhyChoose';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Valkem Home | Valkem Procurements ',
  description: '',
};
export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <Categories />
      <Products />
      <WhyChoose />
      <Value />
      <FeaturedProduct />
      <SpecialDeal />
      <Procure />
      <Offer />
      {/* <Value /> */}

      <Footer />
    </>
  );
}
