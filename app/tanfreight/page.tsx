import CustomerReviews from '@/components/tanfreight/CustomerReviews';
import HeroSection from '@/components/tanfreight/HeroSection';
import HomeSection from '@/components/tanfreight/HomeSection';
import Partners from '@/components/tanfreight/Partners';
import Process from '@/components/tanfreight/Process';
import Products from '@/components/tanfreight/Products';
import SocialResp from '@/components/tanfreight/SocialResp';
import Special from '@/components/tanfreight/Special';
import Subcribe from '@/components/tanfreight/Subcribe';
import Wrapper from '@/components/tanfreight/Wrapper';

export default function Home() {
  return (
    <>
      <Wrapper>
        <HeroSection />
        <Partners />
        <Products />
        <Special />
        <HomeSection />
        <Process />
        <CustomerReviews />
        <SocialResp />
        <Subcribe />
      </Wrapper>
    </>
  );
}
