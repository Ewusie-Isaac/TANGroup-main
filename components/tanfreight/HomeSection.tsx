import Image from 'next/image';
import Link from 'next/link';

const HomeSection = () => {
  return (
    <section className="xl:padding-l scroll-smooth bg-gray-100 p-4 lg:mt-20">
      <section
        id="home"
        className=" flex min-h-screen w-full flex-col justify-center lg:grid lg:grid-cols-2
       lg:flex-row "
      >
        <div
          className="max-xl:padding-x relative flex w-full flex-col items-start 
      justify-center "
        >
          <h3 className="text-xl text-purple-2">Our Global Possitioning.</h3>
          <h1 className="max-sm:leading-2 max-sm:text-md mt-8 text-2xl font-bold">
            <span className="z-40pr-10 relative  xl:whitespace-nowrap">
              <span
                className="relative mr-2 inline-block before:absolute before:-inset-1 before:block
             before:-skew-y-3 before:bg-purple-2"
              >
                <span className="relative text-white">Strategic</span>
              </span>
              Global Networks.
            </span>
          </h1>

          <p className="text-md mb-4 mt-6 p-2 leading-6 text-gray-600 ">
            As a member of prominent freight networks worldwide, TAN Freight
            leverages an extensive global reach to deliver unparalleled
            logistics solutions. Our partnership with these networks enhances
            our ability to provide seamless transportation services across
            international borders, ensuring efficient handling and timely
            delivery of goods to destinations worldwide.
          </p>
          <Link
            type="button"
            href="/tanservices"
            className="flex items-center justify-center gap-2  border border-purple-2
             bg-purple-2 px-7 py-4 text-lg leading-none text-white hover:bg-purple-1"
          >
            Learn more &rarr;
          </Link>
        </div>
        <div
          className=" relative flex  items-center
     justify-center bg-cover bg-center max-xl:py-5"
        >
          <Image
            className="z-8 relative rounded-md object-contain shadow-lg"
            src="/main/global-tan.png"
            alt="Tan freight packing of goods"
            width={400}
            height={300}
          />
        </div>
      </section>
    </section>
  );
};

export default HomeSection;
