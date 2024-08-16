import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedProduct = () => {
  return (
    <section id="featured" className="scroll-smooth">
      <div className="bg-gray-600 p-5">
        <h3 className="ml-3 text-4xl font-bold capitalize text-gray-100">
          What we Procure
        </h3>
        <div className="valkem-grid">
          <div className="flex flex-col justify-between rounded-md bg-gray-200 p-5 shadow-md">
            <Image
              src="/valkem/stainless.h.jpg"
              width={400}
              height={400}
              alt="TAN Group of company Valkem"
            />
            <div className="flex flex-col items-center justify-between">
              <h2 className="font-bold">Stainless Steel Drill Head</h2>
              <p>
                With a Titanium Nitride tip to help reduce friction and heat.
              </p>
              <Link
                className="w-full bg-gray-600 p-2 text-center text-gray-100"
                href="/valkem/services"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-md bg-gray-200 p-5 shadow-md">
            <Image
              src="/valkem/valkem-4.jpg"
              width={400}
              height={400}
              alt="TAN Group of company Valkem"
            />
            <div className="flex flex-col items-center justify-between">
              <h2 className="font-bold">Control and Switch Parts</h2>
              <p>Components:Terminals, Housing, Actuator and switch families</p>
              <Link
                className="w-full bg-gray-600 p-2 text-center text-gray-100"
                href="/valkem/services"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-md bg-gray-200 p-5 shadow-md">
            <Image
              src="/valkem/ind-fan.jpg"
              width={400}
              height={400}
              alt="TAN Group of company Valkem"
            />
            <div className="flex flex-col items-center justify-between">
              <h2 className="font-bold">Industrial Exhaust Fans</h2>
              <p>
                For pressurization, cooling, combustion air, and ventilation.
              </p>
              <Link
                className="w-full bg-gray-600 p-2 text-center text-gray-100"
                href="/valkem/services"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-md bg-gray-200 p-5 shadow-md">
            <Image
              src="/valkem/ultrasound.jpg"
              width={400}
              height={400}
              alt="TAN Group of company Valkem"
            />
            <div className="flex flex-col items-center justify-between">
              <h2 className="font-bold">Ultrasound Testing</h2>
              <p>2D scanning, 3D Ultrasound, Computer images and Analysis</p>
              <Link
                className="w-full bg-gray-600 p-2 text-center text-gray-100"
                href="/valkem/services"
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

export default FeaturedProduct;
