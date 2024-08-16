import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BackColor from './BackColor';

const Header = () => {
  return (
    <section className="flex flex-col gap-20 scroll-smooth py-10 pb-32  md:gap-28 lg:py-20">
      {/* <div className="hero-map " /> */}

      <div
        className="ralative flex flex-col-reverse gap-3 p-8 md:grid md:grid-cols-2 md:bg-yellow-100 lg:grid
       lg:grid-cols-2  lg:bg-green-300 xl:bg-red-300 2xl:bg-slate-400 "
      >
        {/* md:w-3/5 lg:-mt-16 lg:w-2/4 xl:-my-20 xl:w-1/2 */}

        <div className="my-11 flex flex-wrap gap-5 md:my-2 ">
          <div className="relative w-full max-w-lg">
            <div className="absolute -left-2 top-0 h-72 w-72 animate-kayb rounded-full bg-purple-2  opacity-50 mix-blend-multiply blur-xl filter"></div>
            <div className="absolute -right-4 top-0 h-72 w-72 animate-kayb rounded-full bg-green-300  opacity-50 mix-blend-multiply blur-xl filter"></div>
          </div>
          <h1 className="medium-14 bold-32 lg:bold-59  ">
            Your preferred and Authentic Partner in Freight and Logistics
          </h1>
          <p className="medium-14 mt-6 text-gray-30 md:mt-2 xl:max-w-[520px]">
            Your reliable and genuine partner for all your freight and logistics
            needs, ensuring smooth and efficient transportation solutions
            tailored to your requirements. Trust us for dependable and authentic
            services that prioritize your business's success.
          </p>
          <div className="flex w-full gap-5  max-sm:flex-col">
            <Link
              className="flex flex-col items-center justify-center bg-purple-2 px-2 py-2 font-bold text-gray-200"
              href="#"
            >
              Freight Forwarding
              <br />
              <span>001</span>
            </Link>
            <Link
              className="flex flex-col items-center justify-center bg-green-300 px-5 py-2 font-bold text-gray-200"
              href="#"
            >
              Life Sciences
              <br />
              <span>002</span>
            </Link>
            <Link
              className="flex flex-col items-center justify-center bg-gray-800 px-5 py-2 font-bold text-gray-200"
              href="#"
            >
              Seed and Grains.
              <br />
              <span>003</span>
            </Link>
          </div>
        </div>
        <div className="object-cover ">
          <Image
            className="w-full"
            src="/main/main-4.webp"
            width={500}
            height={500}
            alt="tan"
          />
          {/* <Link
            className="flex items-center justify-center bg-purple-400 px-5 py-2 font-bold text-gray-800"
            href="mailto:info@tanfreight.com"
          >
            Get A Quote
          </Link>
          <Link
            className="flex items-center justify-center gap-2 px-5 py-1 font-bold text-gray-800 hover:bg-purple-400 hover:text-white hover:transition-all"
            href="#process"
          >
            <span className="regular-32 text-purple-800">&#10560;</span>
            How we Work
          </Link> */}
        </div>
      </div>
    </section>
    // <div className="services w-full">
    //   <div className="mb-10 flex w-full justify-between">
    //     <div>
    //       <h2>Lorem ipsum dolor sit.</h2>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
    //         atque?
    //       </p>
    //     </div>
    //     <div>
    //       <Image
    //         src="/main/main-3.jpg"
    //         width={200}
    //         height={200}
    //         alt="tan image freight"
    //       />
    //     </div>
    //   </div>
    //   <br />
    //   <div className="min-md:flex mt-10 flex w-full flex-col justify-between gap-8 ">
    //     <Link
    //       className="bg-purple-2 flex flex-col items-center justify-center p-5 text-gray-200"
    //       href="/"
    //     >
    //       <h2>Freight Forwarding.</h2>
    //       <span>001</span>
    //     </Link>
    //     <Link
    //       href="/"
    //       className="flex flex-col items-center justify-center bg-green-400 p-5"
    //     >
    //       <h2>Life Science</h2>
    //       <span>002</span>
    //     </Link>
    //     <Link
    //       href="/"
    //       className="flex flex-col items-center justify-center bg-gray-800 p-5 text-gray-200"
    //     >
    //       <h2>Seeds and Grains</h2>
    //       <span>003</span>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Header;
