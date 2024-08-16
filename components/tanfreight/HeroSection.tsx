'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="mx-5 flex flex-col scroll-smooth pb-24 md:flex lg:grid lg:grid-cols-2 ">
      {/* <div className="hero-map hidden lg:block" /> */}

      <div
        className="ralative z-50 mt-8  flex w-full flex-1 flex-col bg-gradient-to-r from-white via-white to-white p-2 sm:bg-slate-500
        md:bg-purple-2 lg:mt-3 xl:mt-8"
      >
        <motion.h1
          className=" bold-32 xl:bold-40 lg:bold-32 text-purple-2"
          initial={{ x: '-80vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Your preferred and Authentic Partner in Freight and Logistics
        </motion.h1>
        <p className=" regular-16 mt-6 text-gray-30">
          Your reliable and genuine partner for all your freight and logistics
          needs, ensuring smooth and efficient transportation solutions tailored
          to your requirements. Trust us for dependable and authentic services
          that prioritize your business's success.
        </p>
        <div className="animate-2 mt-8 flex  w-full flex-col gap-3 sm:flex-row">
          <Link
            className="flex flex-col items-center justify-center bg-purple-2 px-5 py-2 font-bold text-white"
            href="/tanservices"
          >
            Freight Services
            <br />
            <span
              className="grid grid-cols-3 items-center justify-center gap-2 before:h-1
              before:bg-white  after:h-1
              after:bg-white"
            >
              001
            </span>
          </Link>
          {/* <Link
            className="flex flex-col items-center justify-center bg-green-400 px-5 py-2 font-bold text-gray-800"
            href="#"
          >
            Seeds and Grains
            <br />
            <span
              className="grid grid-cols-3 items-center justify-center gap-2 before:h-1
              before:bg-gray-800 after:h-1
              after:bg-gray-800"
            >
              002
            </span>
          </Link> */}
          <Link
            className="flex flex-col items-center  justify-center bg-gray-800 px-5 py-2 font-bold text-white"
            href="mailto:info@tanfreight.com"
          >
            Request a Quote
            <br />
            <span
              className="grid grid-cols-3 items-center justify-center gap-2 before:h-1
              before:bg-white after:h-1
              after:bg-white"
            >
              002
            </span>
          </Link>
        </div>
      </div>
      <div>
        <Image
          src="/main/mains.jpg"
          width={900}
          height={900}
          alt="hero-map"
          className="mt-8 hidden bg-cover bg-center lg:block"
        />
      </div>
    </section>
    // <section
    //   className="max-container padding-container flex flex-col
    //   scroll-smooth py-10 pb-32  "
    // >
    //   <div className="hero-map hidden lg:block" />

    //   <div
    //     className="ralative z-50 flex flex-1 flex-col bg-gradient-to-r
    //     from-white via-white to-white p-2 md:w-3/5  lg:w-2/4
    //     xl:w-1/2"
    //   >
    //     <h1 className="bold-32 lg:bold-40 text-purple-2">
    //       Your preferred and Authentic Partner in Freight and Logistics
    //     </h1>
    //     <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
    //       Your reliable and genuine partner for all your freight and logistics
    //       needs, ensuring smooth and efficient transportation solutions tailored
    //       to your requirements. Trust us for dependable and authentic services
    //       that prioritize your business's success.
    //     </p>
    //     {/* <div className="my-11 flex flex-wrap gap-5">
    //       <div className="flex items-center gap-2">
    //         {Array(5)
    //           .fill(1)
    //           .map((_, i) => (
    //             <Image
    //               src="/star.svg"
    //               key={i}
    //               alt="star"
    //               width={24}
    //               height={24}
    //             />
    //           ))}
    //       </div>
    //       <p className="bold-16 lg:bold-20 text-blue-70">
    //         <span className="regular-16 lg:regular-20 ml-1">
    //           Excellent Reviews
    //         </span>
    //       </p>
    //     </div> */}
    //     <div className="mt-8 flex  w-full flex-col gap-3 sm:flex-row">
    //       <Link
    //         className="flex flex-col items-center justify-center bg-purple-2 px-5 py-2 font-bold text-white"
    //         href="/tanservices"
    //       >
    //         Freight Services
    //         <br />
    //         <span
    //           className="grid grid-cols-3 items-center justify-center gap-2 before:h-1
    //           before:bg-white  after:h-1
    //           after:bg-white"
    //         >
    //           001
    //         </span>
    //       </Link>
    //       <Link
    //         className="flex flex-col items-center justify-center bg-green-400 px-5 py-2 font-bold text-gray-800"
    //         href="/seedandgrains"
    //       >
    //         Seeds and Grains
    //         <br />
    //         <span
    //           className="grid grid-cols-3 items-center justify-center gap-2 before:h-1
    //           before:bg-gray-800 after:h-1
    //           after:bg-gray-800"
    //         >
    //           002
    //         </span>
    //       </Link>
    //       <Link
    //         className="flex flex-col items-center  justify-center bg-gray-800 px-5 py-2 font-bold text-white"
    //         href="/tanlifescience"
    //       >
    //         Life Sciences
    //         <br />
    //         <span
    //           className="grid grid-cols-3 items-center justify-center gap-2 before:h-1
    //           before:bg-white after:h-1
    //           after:bg-white"
    //         >
    //           003
    //         </span>
    //       </Link>
    //       {/* <Link
    //         className="flex items-center justify-center gap-2 px-5 py-1 font-bold text-gray-800 hover:bg-purple-400 hover:text-white hover:transition-all"
    //         href="#process"
    //       >
    //         <span className="regular-32 text-purple-800">&#10560;</span>
    //         How we Work
    //       </Link> */}
    //       {/* <Button
    //         link="#process"
    //         type="button"
    //         title="How we Work?"
    //         icon="/play.svg"
    //         variant="btn_white_text"
    //       /> */}
    //     </div>
    //   </div>

    // </section>
  );
};

export default HeroSection;
