import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Products = () => {
  return (
    <section id="services" className="scroll-smooth">
      <div className="my-10 bg-gray-300 p-3">
        <h3 className="ml-3 text-4xl font-bold capitalize">
          Our Industrial Sector
        </h3>
        <div className="valkem-grid">
          <div className="flex flex-col justify-between rounded-md bg-gray-200 p-5 shadow-md">
            <Image
              src="/valkem/trucks.jpg"
              width={400}
              height={400}
              alt="TAN Group of company Valkem"
            />
            <div className="flex flex-col items-center justify-between">
              <h2 className=" text-xl font-bold">Mining Industry</h2>
              <p className="mb-4">high-quality mining equipments</p>
              <Link
                className=" w-full bg-gray-600 p-2 text-center text-gray-100"
                href="/valkem/industry"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-md bg-gray-200 p-5 shadow-md">
            <Image
              src="/valkem/robo.jpg"
              width={400}
              height={400}
              alt="TAN Group of company Valkem"
            />
            <div className="flex flex-col items-center justify-between">
              <h2 className="text-xl font-bold">Food Manufacturing</h2>
              <p className="mb-4">We procure food and beverage manchinery</p>
              <Link
                className="w-full bg-gray-600 p-2 text-center text-gray-100"
                href="/valkem/industry"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-md bg-gray-200 p-5 shadow-md">
            <Image
              src="/valkem/energy.jpg"
              width={400}
              height={400}
              alt="TAN Group of company Valkem"
            />
            <div className="flex flex-col items-center justify-between">
              <h2 className="text-xl font-bold">Renewable Energy</h2>
              <p className="mb-4">Offer clean energy solutions</p>
              <Link
                className="w-full bg-gray-600 p-2 text-center text-gray-100"
                href="/valkem/industry"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-md bg-gray-200 p-5 shadow-md">
            <Image
              src="/valkem/oil.jpg"
              width={400}
              height={400}
              alt="TAN Group of company Valkem"
            />
            <div className="flex flex-col items-center justify-between">
              <h2 className="mt-3 text-xl font-bold">Refinery Industry</h2>
              <p className="mb-4">Critical and just in-time machine parts</p>
              <Link
                className="w-full bg-gray-600 p-2 text-center text-gray-100"
                href="/valkem/industry"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
