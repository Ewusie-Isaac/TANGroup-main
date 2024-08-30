import About from '@/components/About';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import MissionVission from '@/components/MissionVission';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <About />
      <MissionVission />
      <Services />

      <Footer />
    </>
  );
}
