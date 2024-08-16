import Image from 'next/image';
import Navigation from './Navigation';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <>
      <Navigation />
      <section className="tanfarm ">
        <div
          className="mb-2 mt-20 flex items-center justify-center gap-2
         text-gray-700 lg:mb-6 lg:grid lg:grid-cols-2"
        >
          <div className="">
            <h2 className="pb-3 text-xl font-bold uppercase text-green-700 lg:text-3xl">
              Fresh Organic products from farm
            </h2>
            <p className="pb-5 text-xl lg:pb-10">
              With our fresh, organic produce, which is picked right off the
              farm and delivered to your table, you may indulge in the essence
              of nature. Experience the rich tastes and healthful pleasures that
              come from only real, farm-fresh ingredients and the knowledge that
              it is entirely organic and responsibly cultivated specifically for
              you.
            </p>
            <Link
              href="/ecofarm/about"
              className="rounded-md bg-green-700 px-4 py-2 text-white hover:bg-green-800"
            >
              Read More
            </Link>{' '}
            <Link
              href="mailto:info@tanfreight.com"
              className="rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-green-800  hover:text-gray-100"
            >
              Contact Us
            </Link>
          </div>
          <div className="hidden lg:block">
            <Image
              width={600}
              height={300}
              alt="tan ecofarms"
              src="/farm/farm-11.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
