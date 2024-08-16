import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Wrapper from '@/components/tanfreight/Wrapper';
import Partners from '@/components/tanfreight/Partners';
import TanServices from '@/components/tanfreight/Services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Air Freight | Sea Freight | Land Freight | Customs Clearance | Warehousing | Project cargo | Consolidation | Ship goods | ship conatainer | From china to Ghana | from USA to Ghana | shipping',
};
const Services = () => {
  return (
    <Wrapper>
      <section className="flex flex-col items-center justify-center overflow-hidden scroll-smooth  py-24 lg:p-20 ">
        <div className="padding-container relative mx-auto flex w-full max-w-full justify-end">
          <div className="z-20 flex w-full flex-col ">
            <div className="relative  rounded-xl bg-gray-10/80 p-5">
              <Image
                src="/tanlogo.png"
                alt="tan logo"
                width={50}
                height={50}
                className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
              />
              <h2 className="bold-40 lg:bold-64">Our Services</h2>
              <p className="regular-14 lg:regular-16 text-gray-50 lg:w-3/5">
                Our services at TAN Freight and Logistics encompass secure and
                complete handling of dangerous goods, efficient warehousing and
                distribution solutions, and customer-centric operations that
                prioritize safety and satisfaction.
              </p>
              <ul className="mt-4 grid gap-10 md:grid-cols-3 lg:mt-10 lg:gap-20">
                <Link
                  className="rounded-xl bg-purple-2 p-3  text-gray-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-purple-3"
                  href="/whyTan"
                >
                  <p>Clearing air shipments within 24 hours</p>
                </Link>
                <Link
                  className="rounded-xl bg-purple-2 p-3  text-gray-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-purple-3"
                  href="/tanservices#custom"
                >
                  <p>
                    Custom Clearance of Full Container Load (FCL) sea shipments
                    within 48 hours
                  </p>
                </Link>
                <Link
                  className="rounded-xl bg-purple-2 p-3  text-gray-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-purple-3"
                  href="/whyTan"
                >
                  <p>
                    Custom Clearance of Less Container Load (LCL) sea shipments
                    within 72 hours
                  </p>
                </Link>
              </ul>
            </div>
            <Partners />
          </div>
        </div>
        <TanServices />
      </section>
    </Wrapper>
  );
};

export default Services;
