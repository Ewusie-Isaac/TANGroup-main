import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Products = () => {
  return (
    <div className="my-10 lg:my-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="lg:bold-59 mx-10 text-center text-2xl font-bold text-gray-700 ">
          Freight Services for both Businesses and Individuals
        </h1>
        <p className="mt-4 px-5 text-center text-gray-600 lg:w-2/4">
          Efficient freight solutions tailored for businesses and individuals.
        </p>
      </div>
      <ul className="feature mx-10 my-10 lg:mx-20 lg:my-14">
        {/* <Link
          href="/tanservices"
          className="flex flex-col items-center justify-center bg-gray-100 shadow-lg"
        >
          <Image
            className="h-full w-full"
            alt="Tan work done"
            src="/main/pickup.jpg"
            height={300}
            width={300}
          />
          <h2 className="mt-5 p-4 pb-3 text-xl font-bold capitalize text-gray-600">
            Pick-Up & Delivery
          </h2>
        </Link> */}
        <Link
          href="/tanfreight/tanservices#landfreight"
          className="flex flex-col items-center justify-center bg-gray-100 shadow-lg"
        >
          <Image
            className="h-full w-full"
            alt="Tan work done"
            src="/freight/main/landf-2.jpg"
            height={300}
            width={300}
          />
          <h2 className="mt-5 p-4 pb-3 text-xl font-bold capitalize text-gray-600">
            Land Freight
          </h2>
        </Link>
        <Link
          href="/tanfreight/tanservices#seafreight"
          className="flex flex-col items-center justify-center bg-gray-100 shadow-lg"
        >
          <Image
            className="h-full w-full bg-center"
            alt="Tan work done"
            src="/freight/main/ship-1.jpg"
            height={300}
            width={300}
          />
          <h2 className="mt-5 p-4 pb-3 text-xl font-bold capitalize text-gray-600">
            Sea Freight
          </h2>
        </Link>
        <Link
          href="/tanfreight/tanservices#airfreight"
          className="flex flex-col items-center justify-center bg-gray-100 shadow-lg"
        >
          <Image
            className="h-full w-full"
            alt="Tan work done"
            src="/freight/main/airfreight.jpg"
            height={300}
            width={300}
          />
          <h2 className="mt-5 p-4 pb-3 text-xl font-bold capitalize text-gray-600">
            Air Freight
          </h2>
        </Link>
        <Link
          href="/tanfreight/tanservices#custom"
          className="flex flex-col items-center justify-center bg-gray-100 shadow-lg"
        >
          <Image
            className="h-full w-full"
            alt="Tan work done"
            src="/freight/main/contain.jpg"
            height={300}
            width={300}
          />
          <h2 className="mt-5 p-4 pb-3 text-xl font-bold capitalize text-gray-600">
            Custom Clearance
          </h2>
        </Link>
        <Link
          href="/tanfreight/tanservices#coldchain"
          className="flex flex-col items-center justify-center bg-gray-100 shadow-lg"
        >
          <Image
            className="h-full w-full"
            alt="Tan work done"
            src="/freight/main/cold-chain-1.jpg"
            height={300}
            width={300}
          />
          <h2 className="mt-5 p-4 pb-3 text-xl font-bold capitalize text-gray-600">
            Cold Chain Logistics
          </h2>
        </Link>
        <Link
          href="/tanfreight/tanservices#projectcargo"
          className="flex flex-col items-center justify-center bg-gray-100 shadow-lg"
        >
          <Image
            className="h-full w-full"
            alt="Tan work done"
            src="/freight/main/pcargo.jpg"
            height={300}
            width={300}
          />
          <h2 className="mt-5 p-4 pb-3 text-xl font-bold capitalize text-gray-600">
            Project cargo
          </h2>
        </Link>

        <Link
          href="/tanfreight/tanservices#warehouse"
          className="flex flex-col items-center justify-center bg-gray-100 shadow-lg"
        >
          <Image
            className="h-full w-full"
            alt="Tan work done"
            src="/freight/warehouse.jpg"
            height={300}
            width={300}
          />
          <h2 className="mt-5 p-4 pb-3 text-xl font-bold capitalize text-gray-600">
            Warehousing and Distributions
          </h2>
        </Link>
      </ul>
    </div>
  );
};

export default Products;
