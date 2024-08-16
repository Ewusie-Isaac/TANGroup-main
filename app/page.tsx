import About from '@/components/About';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Services />
      <About />
      <Footer />
    </>
  );
}
