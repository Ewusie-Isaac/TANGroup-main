import Image from 'next/image';
import React from 'react';

const Process = () => {
  return (
    <section id="process" className="flex scroll-smooth px-2">
      <div className="mt-10 w-full pb-24 lg:px-20">
        {/* <Image
          src="/tanlogo.png"
          alt="tan freight logo"
          width={50}
          height={50}
        /> */}
        {/* <p className="regular-18 mx-auto -mt-1 mb-10 pl-4">
          REAL-TIME PACKAGE TRACKING
        </p> */}
        <div className=" flex flex-col-reverse gap-3 max-md:mx-5 md:grid md:grid-cols-2 lg:gap-5">
          {/* <div className="relative flex justify-center">
            <div className="relative flex flex-col gap-8 rounded-3xl bg-black px-7 py-8  max-md:mb-5 ">
              <div className="flex flex-col">
                <div className="flexBetween">
                  <p className="regular-16 text-gray-20"> Location</p>
                  <Image src="/close.svg" alt="close" width={24} height={24} />
                </div>
                <p className="bold-20 text-white">United Kingdom</p>
              </div>
              <div className="flexBetween gap-32">
                <div className="flex flex-col">
                  <p className="regular-16 block text-gray-20">Distance</p>
                  <p className="bold-20 text-white">201 Mil</p>
                </div>
                <div className="flex flex-col">
                  <p className="regular-16 block text-gray-20">
                    Estimated Days
                  </p>
                  <p className="bold-20 text-white">24hrs</p>
                </div>
              </div>
            </div>
          </div> */}
          <div className=" py-5 text-center ">
            {' '}
            <h2 className="bold-40 lg:bold-64 max-md:mt-5 xl:max-w-[390px]">
              <span className="relative mr-3 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-purple-2">
                <span className="relative text-white">Tan</span>
              </span>
              Freight Processes
            </h2>
            <p
              className="regular-16 mt-5 text-gray-30 first-letter:float-left first-letter:mr-3
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
   first-line:tracking-widest max-md:mt-5 xl:max-w-[520px]"
            >
              At TAN Freight and Logistics company ltd, we kickstart our
              operations by carefully listening to our clients' needs, followed
              by the seamless collection and processing of shipments. We
              maintain constant monitoring and tracking throughout the journey
              to ensure everything stays on track. Finally, we guarantee the
              safe and punctual delivery of goods to their preferred
              destinations, confirming the successful completion of our
              services.
            </p>
          </div>
          <div className=" pt-5 font-bold text-gray-700">
            <ul className=" process flex gap-10 px-8 py-3">
              <li className="process-item">
                <h1 className="text-xl font-bold lg:text-2xl">01</h1>
                <p className="font-bold">We Listen to clients needs</p>
              </li>
              <li>
                <h1 className="text-xl font-bold lg:text-2xl">02</h1>
                <p>We Collect & Process shipments</p>
              </li>
              {/* <li>
                <h1 className="text-xl font-bold lg:text-2xl">03</h1>
                <p>We Process Shipment</p>
              </li> */}
              <li>
                <h1 className="text-xl font-bold lg:text-2xl">03</h1>
                <p>We Monitor and Track</p>
              </li>
              <li>
                <h1 className="text-xl font-bold lg:text-2xl">04</h1>
                <p>We deliver to preferred destination</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
