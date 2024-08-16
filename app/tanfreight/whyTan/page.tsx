import BackColor from '@/components/tanfreight/BackColor';
import FeatureItem from '@/components/tanfreight/FeatureItem';
import Wrapper from '@/components/tanfreight/Wrapper';
import { WHYTAN } from '@/constants';
import { Metadata } from 'next';
import Image from 'next/image';
export const metadata: Metadata = {
  title: 'Why Choose TAN',
  description:
    'Reliable | Cost-effective | Pre-finance | Global reach | ship global | ship freeze | Air Freight | Sea Freight | Land Freight | Customs Clearance | Warehousing | Project cargo | Consolidation | Ship goods | ship conatainer | From china to Ghana | from USA to Ghana | shipping',
};
const WhyTan = () => {
  return (
    <Wrapper>
      <div className="mt-8 p-5">
        <BackColor />

        <div className="relative p-5">
          <Image
            src="/freight/tanlogo.png"
            alt="tan logo"
            width={50}
            height={50}
            className="absolute left-[-1px] top-[-3px] w-10 lg:w-[50px]"
          />
          <h2 className="bold-40 ">Why Choose TAN</h2>
        </div>
        {/* <ul className="px-10">
        {MANTRA.map((mantra) => (
          <li
          className="mb-5 flex flex-col gap-5 p-5  md:grid
          md:grid-cols-2"
          key={mantra.title}
          >
          <span>
          <h3 className="bold-18 mb-1">{mantra.title}</h3>
          <p className="mb-5">{mantra.description}</p>
          </span>
          <Image
          className=" grid content-center justify-center xl:w-2/3"
          src={mantra.src}
          width={500}
          height={500}
          alt="tan"
          />
          </li>
          ))}
          </ul> */}
        <ul className="mt-10 grid gap-10 md:grid-cols-3 lg:mt-20 lg:gap-10">
          {WHYTAN.map((whytan) => (
            <FeatureItem
              key={whytan.title}
              title={whytan.title}
              icon={whytan.src}
              description={whytan.description}
            />
          ))}
        </ul>
        {/* <Header /> */}
      </div>
    </Wrapper>
  );
};

export default WhyTan;
