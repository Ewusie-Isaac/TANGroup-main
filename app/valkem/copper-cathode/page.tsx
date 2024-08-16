import Footer from '@/components/valkem/Footer';
import Navigation from '@/components/valkem/Navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export const metadata: Metadata = {
  title: 'Copper Cathode',
  description: 'Copper Cathode supply world-wide',
};
const CopperCathode = () => {
  return (
    <>
      <Navigation />
      <div className="p-3 lg:m-5">
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 ">
          <div className="">
            <Image
              width={550}
              height={550}
              src="/valkem/cathode-copper.jpg"
              alt=""
            />
            {/* <h4 className="mt-2 text-xl font-semibold px-2">
              Uses of Copper Cathode
            </h4> */}
            <ul className="my-4 flex gap-2 lg:px-2">
              <li className="flex flex-col items-center">
                <Image
                  className="w-auto"
                  src="/valkem/Picture2.png"
                  height={100}
                  width={100}
                  alt=""
                />
                {/* <p>Electronics</p> */}
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/valkem/Picture3.png"
                  height={120}
                  width={120}
                  alt=""
                />
                {/* <p>Electrical Wire.</p> */}
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/valkem/Picture4.png"
                  height={100}
                  width={100}
                  alt=""
                />
                {/* <p>Contructions</p> */}
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/valkem/plumb.jpg"
                  height={120}
                  width={120}
                  alt=""
                />
                {/* <p>Plumbing</p> */}
              </li>
            </ul>
          </div>
          <div>
            <h1 className="mb-3 text-3xl lg:text-5xl">Copper Cathode</h1>
            <p>
              Copper Cathode, a crucial material obtained through the meticulous
              processing of copper ores, possesses remarkable attributes that
              render it highly sought after in various industries. These
              attributes include unmatched electrical and thermal conductivity,
              exceptional malleability, and a remarkable resistance to corrosion
            </p>
            <p className="mt-3">
              Copper Cathodes are used to produce light when electric current
              flows through them. They are made from a mixture of copper and
              various other metals, such as aluminum, tin, or zinc. The copper
              cathode is placed in a vacuum chamber, and the electric current
              flows through the copper wire to the anode.
            </p>
            {/* <h3 className=" text-2xl mt-4 mb-1">Pricing :</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <span className="font-bold">
                  20% less LME for orders below 10,000 MT
                </span>
            
              </li>
              <li>
                <span className="font-bold">
                  23% less LME for orders above 10,000 MT
                </span>
           
              </li>
              <li>
                <span className="font-bold">
                  Minimum Order Quantity (MOQ): 1,000 MT
                </span>
            
              </li>
              <li>
                <span className="font-bold">
                  Maximum Supply Capacity: 500,000 MT Monthly
                </span>
       
              </li>
              <li>
                <span className="font-bold">
                  Purity: 99.99% with SGS certification at POL
                </span>
        
              </li>
            </ul> */}
            <div className="m-3   mt-4 ">
              <h3 className="text-2xl font-bold">Pricing Details:</h3>
              {/* <div className="border p-3 border-gray-500"> */}
              <div className="rounded-md bg-gray-900 p-3 text-gray-100">
                <p>
                  20% less LME for orders below:{' '}
                  <span className="ml-2 text-lg font-semibold">10,000 MT</span>{' '}
                </p>
                <p>
                  23% less LME for orders above:{' '}
                  <span className="ml-2 text-lg font-semibold">10,000 MT</span>{' '}
                </p>
                <p>
                  Minimum Order Quantity:{' '}
                  <span className="ml-2 text-lg font-semibold">1,000 MT</span>{' '}
                </p>
                <p>
                  Maximum Capacity Supply:{' '}
                  <span className="ml-2 text-lg font-semibold">
                    500,000 MT monthly
                  </span>{' '}
                </p>
                <p>
                  Purity:{' '}
                  <span className="ml-2 text-lg font-semibold">99.99%</span>{' '}
                </p>
                <p>
                  Rejection:{' '}
                  <span className="ml-2 text-lg font-semibold">
                    Below 99.97%
                  </span>{' '}
                </p>
              </div>

              {/* <div className="mt-3">
                <h3 className="text-xl font-semibold">
                  Technical Specifications
                </h3>
                <ul className="flex flex-wrap gap-8 p-3">
                  <li>
                    <span className="font-bold text-xl mb-2">Weight</span>
                    <p>Up to 1,000 kg</p>
                  </li>
                  <li>
                    <span className="font-bold text-xl mb-2">Dimensions</span>
                    <p>100 x 100 x 20 mm</p>
                  </li>
                  <li>
                    <span className="font-bold text-xl mb-2">Material</span>
                    <p>Copper</p>
                  </li>
                  <li>
                    <span className="font-bold text-xl mb-2">Power Rating</span>
                    <p>100 W</p>
                  </li>
                </ul>
              </div> */}
            </div>
            <Link
              href="mailto:valkemengineering@gmail.com"
              // className="rounded-md flex items-center justify-center lg:w-2/5 bg-gray-700 px-4 py-4 text-gray-100"
              className="mt-4 flex items-center justify-center rounded-md border border-gray-900 p-3 px-4 py-4 text-lg transition-all hover:bg-gray-900 hover:text-gray-100 lg:mt-8"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="flex m-3 my-14 flex-col lg:grid lg:grid-cols-2 gap-5"> */}
      <div className="m-3">
        <div className="rounded-md bg-gray-900 text-gray-100 shadow-md">
          <h2 className="p-2 text-3xl font-semibold">Distinct Features</h2>
          <ul className="flex flex-col flex-wrap gap-5 p-2 lg:grid lg:grid-cols-2">
            <li className="rounded-md bg-gray-100 p-3 text-gray-900 shadow-md">
              <span className="mb-2 text-xl font-bold">High Purity</span>
              <p>
                Copper Cathode boasts a high purity level, typically around
                99.99% copper. This exceptional purity is achieved through an
                electrochemical refining process, ensuring the copper is free
                from impurities and ready for industrial use
              </p>
            </li>
            <li className="rounded-md bg-gray-100 p-3 text-gray-900 shadow-md">
              <span className="mb-2 text-xl font-bold">Shapes and Forms</span>
              <p>
                Copper Cathodes are generally produced in the form of
                rectangular sheets or plates. This form factor facilitates easy
                transportation and integration into various manufacturing
                processes.
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="flex m-3 my-14 flex-col lg:grid lg:grid-cols-2 gap-5"> */}
      <div className="m-3 rounded-md bg-gray-100 p-2 shadow-md">
        <h2 className="text-3xl font-semibold">Some Uses of Copper Cathode</h2>
        {/* <ul className="mt-3 flex flex-wrap gap-2 p-3 bg-white rounded-md shadow-md"> */}
        <ul className="key-grid-small mt-3 ">
          <li className="flex-1 rounded-md bg-white p-2 shadow-md">
            <Image src="/valkem/wire.png" width={100} height={100} alt="" />
            <span className="text-md ml-2 font-semibold">
              1: Electrical Wiring:
            </span>{' '}
            Because copper is a great conductor of electricity, it's used to
            make wires.
          </li>
          <li className="flex-1 rounded-md bg-white p-2 shadow-md">
            <Image
              src="/valkem/component.jpg"
              width={100}
              height={100}
              alt=""
            />
            <span className="text-md ml-2 font-semibold">
              {' '}
              2: Electronics Components:
            </span>{' '}
            Copper is used in various electronic components, including circuit
            boards.
          </li>
          <li className="flex-1 rounded-md bg-white p-2 shadow-md">
            <Image src="/valkem/pipes.jpg" width={100} height={100} alt="" />
            <span className="text-md ml-2 font-semibold">
              3: Plumbing:
            </span>{' '}
            Copper pipes are used in plumbing because of their durability and
            resistance to corrosion.
          </li>
          <li className="flex-1 rounded-md bg-white p-2 shadow-md">
            <Image
              src="/valkem/contruction.jpg"
              width={100}
              height={100}
              alt=""
            />
            <span className="text-md ml-2 font-semibold">4: Construction:</span>{' '}
            Copper is used in building materials, like roofing and guttering.
          </li>
        </ul>
      </div>
      {/* <div className="rounded-md bg-gray-900 text-gray-100 p-2 shadow-md">
          <h2 className="text-3xl font-semibold p-2">Distinct Features</h2>
          <ul className="flex flex-wrap gap-2 p-3">
            <li className=" rounded-md shadow-md p-3">
              <span className="font-bold text-xl mb-2">High Purity</span>
              <p>
                Copper Cathode boasts a high purity level, typically around
                99.99% copper. This exceptional purity is achieved through an
                electrochemical refining process, ensuring the copper is free
                from impurities and ready for industrial use
              </p>
            </li>
            <li className=" rounded-md shadow-md p-3">
              <span className="font-bold text-xl mb-2">Shapes and Forms</span>
              <p>
                Copper Cathodes are generally produced in the form of
                rectangular sheets or plates. This form factor facilitates easy
                transportation and integration into various manufacturing
                processes.
              </p>
            </li>
          </ul>
        </div> */}
      {/* </div> */}

      <div className="m-3 my-5 flex flex-col gap-5">
        <div className="rounded-md bg-gray-100 p-2 shadow-md">
          <h2 className="p-2 text-3xl font-semibold ">
            Copper Cathode Processes and Risk Mitigation
          </h2>
          <ul className="flex flex-wrap gap-2 p-3 lg:grid lg:grid-cols-2">
            <li className=" rounded-md bg-gray-900 p-3 text-gray-100 shadow-md">
              <span className="mb-2 text-xl font-bold">
                Copper Cathode Processes
              </span>
              <ul className="mt-5">
                <li>
                  <span className="text-md ml-2 font-semibold">1: Mining:</span>{' '}
                  : Copper ore is extracted from the earth
                </li>
                <li>
                  <span className="text-md ml-2 font-semibold">
                    {' '}
                    2: Crushing and Grinding:
                  </span>{' '}
                  The ore is crushed and ground into a fine powder
                </li>
                <li>
                  <span className="text-md ml-2 font-semibold">
                    3: Concentrating:
                  </span>{' '}
                  The powder is mixed with water and chemicals to separate the
                  copper from other materials.
                </li>
                <li>
                  <span className="text-md ml-2 font-semibold">
                    4: Smelting:
                  </span>{' '}
                  The concentrated copper is heated in a furnace to produce a
                  liquid called "matte," which contains copper and other
                  impurities.
                </li>
                <li>
                  <span className="text-md ml-2 font-semibold">
                    5: Electrorefining:
                  </span>{' '}
                  The matte is poured into an electrolytic cell where an
                  electric current is passed through it. This process purifies
                  the copper, which collects on the cathode (a flat, rectangular
                  sheet).
                </li>
              </ul>
            </li>
            <li className="rounded-md bg-white p-3 shadow-md">
              <span className="mb-2 text-xl font-bold">Risk Mitigation</span>
              <p>
                To mitigate potential risks, we have established comprehensive
                strategies, including:
              </p>
              <ul className="mt-5">
                <li>
                  <span className="text-md ml-2 font-semibold">
                    1. Letter of Credit ( LC ) :
                  </span>{' '}
                  Different types of LCs available for each client's /
                  contract's requirements.
                </li>
                <li>
                  <span className="text-md ml-2 font-semibold">
                    {' '}
                    2. Quality Assurance:
                  </span>{' '}
                  Assay analysis are conducted at the product warehouse and at
                  POL to ensure product purity at 99.99% on every consignment
                </li>
                <li>
                  <span className="text-md ml-2 font-semibold">
                    3. Compliance:
                  </span>{' '}
                  At Valkem and Engineering Services, we strictly adhere to all
                  local and international logistics standards and regulatory
                  requirements.
                </li>
                <li>
                  <span className="text-md ml-2 font-semibold">
                    4. LME Rate:
                  </span>{' '}
                  Our rates are strictly bound by the LME rate.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CopperCathode;
