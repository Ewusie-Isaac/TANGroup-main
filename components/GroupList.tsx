import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GroupList = () => {
  return (
    <div>
      <div className="group-grid">
        <Link
          href="/tanfreight"
          className="flex flex-col items-center justify-center"
        >
          <Image
            src="/freight/tanlogo.png"
            className="rounded-md bg-gray-100 p-1"
            width={180}
            height={180}
            alt="TAN Group of company TAN freight and Logistics"
          />
          {/* <h3 className="mt-2 text-lg font-semibold">
            TAN Freight and Logistics
          </h3> */}
        </Link>

        <Link
          href="/valkem"
          className="flex flex-col items-center justify-center"
        >
          <Image
            src="/valkem/valkem.png"
            className="rounded-md bg-gray-100 p-3"
            width={450}
            height={550}
            alt="TAN Group of company TAN freight and Logistics"
          />
          {/* <h3 className="mt-2 text-lg font-semibold">Valkem Engineering</h3> */}
        </Link>
        <Link
          href="https://ecofarmsafrica.com/"
          className="m-1 flex flex-col items-center justify-center"
        >
          <Image
            src="/farm/logofarms.png"
            className="mx-20 rounded-md bg-gray-100 p-3"
            width={100}
            height={100}
            alt="TAN Group of company TAN freight and Logistics"
          />
          {/* <h3 className="mt-2 text-lg font-semibold">Ecofarms Africa</h3> */}
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center">
          <Image
            src="/life/Tsciences.jpg"
            className="rounded-md bg-gray-100 p-3"
            width={180}
            height={180}
            alt="TAN Group of company TAN freight and Logistics"
          />
          {/* <h3 className="mt-2 text-lg font-semibold">TAN Life Sciences</h3> */}
        </Link>
      </div>
    </div>
  );
};

export default GroupList;
