import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';

const MainServices = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center scroll-smooth">
      {/* flex w-full flex-col items-center justify-center */}
      <div className="get-app flex flex-col  max-lg:flex-col max-md:flex-col-reverse">
        <div className="flex flex-1 flex-col justify-center">
          {/* rounded-xl bg-white shadow-md */}
          <div className="py-2">
            <h1 className="lg:bold-59 text-2xl font-bold text-gray-700 ">
              Freight Services for both Businesses and Individuals
            </h1>
            {/* <p className="mt-4 text-gray-600">
              Efficient freight solutions tailored for businesses and
              individuals, ensuring timely and secure deliveries across diverse
              needs. Simplifying logistics for all with reliable service and
              comprehensive support
            </p> */}
          </div>
          <ul className="flex gap-1 max-2xl:flex max-2xl:flex-wrap lg:gap-5">
            <Link href="/tanservices" className="service-list">
              <span className="text-sm text-purple-2 lg:text-2xl ">
                &#10004;
              </span>
              Pick-Up & Delivery
            </Link>
            <Link href="/tanservices" className="service-list">
              <span className="text-sm text-purple-2  lg:text-2xl">
                &#10004;
              </span>
              Sea Freight Services
            </Link>
            <Link href="/tanservices" className="service-list">
              <span className="text-sm text-purple-2 lg:text-2xl">
                &#10004;
              </span>
              Air Freight Services
            </Link>
            <Link href="/tanservices" className="service-list">
              <span className="text-sm text-purple-2 lg:text-2xl">
                &#10004;
              </span>
              Customs Clearance
            </Link>
            <Link href="/tanservices" className="service-list">
              <span className="text-sm text-purple-2 lg:text-2xl">
                &#10004;
              </span>
              Project Cargo
            </Link>
            <Link href="/tanservices" className="service-list">
              <span className="text-sm text-purple-2 lg:text-2xl">
                &#10004;
              </span>
              Import & Export Records
            </Link>
            <Link href="/tanservices" className="service-list">
              <span className="text-sm text-purple-2  lg:text-2xl">
                &#10004;
              </span>
              Warehousing and Distribution
            </Link>

            {/* <Link href="/tanservices" className="service-list">
              <span className="text-sm text-purple-2  lg:text-2xl">
                &#10004;
              </span>
              Warehouse and Distribution
            </Link> */}
            <Link href="/tanservices" className="service-list">
              <span className="text-sm text-purple-2  lg:text-2xl">
                &#10004;
              </span>
              Haulage
            </Link>
            {/* <Link
              href="/tanservices"
              className="mt-2 flex items-center justify-center gap-1 rounded-xl bg-white 
               px-[5px] py-3 shadow-md transition-all hover:bg-purple-1 hover:text-gray-100"
            >
              <span className="text-2xl  text-purple-2">&#10004;</span>
              Warehouse and Distribution
            </Link> */}
          </ul>
          {/* <div className="flex flex-col flex-wrap gap-5">
            <ul className="grid-rows-dense my-2 grid gap-5 px-2 max-2xl:flex max-2xl:flex-wrap">
              <Link
                href="/tanservices"
                className="mt-2 flex items-center justify-start gap-1 rounded-xl bg-white 
              p-4 shadow-md transition-all hover:bg-purple-400 hover:text-gray-100"
              >
                <Image
                  className="m-0 object-contain"
                  src="/check.svg"
                  width={24}
                  height={24}
                  alt="customer review star"
                />
                Pick-Up and Delivery
              </Link>
              <Link
                href="/tanservices"
                className="mt-2 flex items-center justify-start gap-1 rounded-xl bg-white 
              p-4 shadow-md transition-all hover:bg-purple-400 hover:text-gray-100"
              >
                <Image
                  className="m-0 object-contain"
                  src="/check.svg"
                  width={24}
                  height={24}
                  alt="customer review star"
                />
                Sea Freight Services
              </Link>
              <Link
                href="/tanservices"
                className="mt-2 flex gap-1 rounded-xl bg-white 
              p-4 shadow-md transition-all hover:bg-purple-400 hover:text-gray-100"
              >
                <Image
                  className="m-0 object-contain"
                  src="/check.svg"
                  width={24}
                  height={24}
                  alt="customer review star"
                />
                Air Freight Services
              </Link>
              <Link
                href="/tanservices"
                className="mt-2 flex gap-1 rounded-xl bg-white p-4 
              shadow-md transition-all hover:bg-purple-400 hover:text-gray-100"
              >
                <Image
                  className="m-0 object-contain"
                  src="/check.svg"
                  width={24}
                  height={24}
                  alt="customer review star"
                />
                Customs Clearance
              </Link>
              <Link
                href="/tanservices"
                className="mt-2 flex items-center justify-start gap-1 rounded-xl bg-white 
              p-4 shadow-md transition-all hover:bg-purple-400 hover:text-gray-100"
              >
                <Image
                  className="m-0 object-contain"
                  src="/check.svg"
                  width={20}
                  height={20}
                  alt="customer review star"
                />
                Warehouse and Distribution
              </Link>
              <Link
                href="/tanservices"
                className="mt-2 flex items-center justify-start gap-1 rounded-xl bg-white p-4 
              pr-24 shadow-md transition-all hover:bg-purple-400 hover:text-gray-100"
              >
                <Image
                  className="m-0 object-contain"
                  src="/check.svg"
                  width={20}
                  height={20}
                  alt="customer review star"
                />
                Haulage
              </Link>
            </ul>
            <ul className="grid-rows-dense my-2 grid gap-5 px-2 max-2xl:flex max-2xl:flex-wrap">
              <Link
                href="/tanservices"
                className="mt-2 flex items-center justify-start gap-1 rounded-xl bg-white 
              p-4 shadow-md transition-all hover:bg-purple-400 hover:text-gray-100"
              >
                <Image
                  className="m-0 object-contain"
                  src="/check.svg"
                  width={24}
                  height={24}
                  alt="customer review star"
                />
                Pick-Up and Delivery
              </Link>
              <Link
                href="/tanservices"
                className="mt-2 flex items-center justify-start gap-1 rounded-xl bg-white 
              p-4 shadow-md transition-all hover:bg-purple-400 hover:text-gray-100"
              >
                <Image
                  className="m-0 object-contain"
                  src="/check.svg"
                  width={24}
                  height={24}
                  alt="customer review star"
                />
                Sea Freight Services
              </Link>
              <Link
                href="/tanservices"
                className="mt-2 flex gap-1 rounded-xl bg-white 
              p-4 shadow-md transition-all hover:bg-purple-400 hover:text-gray-100"
              >
                <Image
                  className="m-0 object-contain"
                  src="/check.svg"
                  width={24}
                  height={24}
                  alt="customer review star"
                />
                Air Freight Services
              </Link>
              <Link
                href="/tanservices"
                className="mt-2 flex gap-1 rounded-xl bg-white p-4 
              shadow-md transition-all hover:bg-purple-400 hover:text-gray-100"
              >
                <Image
                  className="m-0 object-contain"
                  src="/check.svg"
                  width={24}
                  height={24}
                  alt="customer review star"
                />
                Customs Clearance
              </Link>
              <Link
                href="/tanservices"
                className="mt-2 flex items-center justify-start gap-1 rounded-xl bg-white 
              p-4 shadow-md transition-all hover:bg-purple-400 hover:text-gray-100"
              >
                <Image
                  className="m-0 object-contain"
                  src="/check.svg"
                  width={20}
                  height={20}
                  alt="customer review star"
                />
                Warehouse and Distribution
              </Link>
              <Link
                href="/tanservices"
                className="mt-2 flex items-center justify-start gap-1 rounded-xl bg-white p-4 
              pr-24 shadow-md transition-all hover:bg-purple-400 hover:text-gray-100"
              >
                <Image
                  className="m-0 object-contain"
                  src="/check.svg"
                  width={20}
                  height={20}
                  alt="customer review star"
                />
                Haulage
              </Link>
            </ul>
          </div> */}
          {/* <Button
            type="email"
            title="Explore More of Services"
            variant="btn_purple"
          /> */}
          <Link
            className="mt-4 flex w-full items-center justify-center bg-purple-2 p-5 text-gray-200 hover:bg-purple-3"
            type="email"
            title="Explore More of Services"
            href="/tanservices"
          >
            Explore More of Services
          </Link>
          {/* <div className="flex w-full flex-col gap-3 ">
            <Link className="inline w-full" href="/tanservices">
              <Button
                type="email"
                title="Explore More of Services"
                variant="btn_purple"
              />
            </Link>
          </div> */}
        </div>
        <div className="flex w-full flex-1 items-center justify-center bg-cover">
          <Image
            className=" w-full"
            src="/main/main-3.jpg"
            alt="tan image"
            width={700}
            height={990}
          />
        </div>
      </div>
    </section>
  );
};

export default MainServices;
