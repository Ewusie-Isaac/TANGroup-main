import Image from 'next/image';
import React from 'react';

const SocialResp = () => {
  return (
    <section className="mt-10 scroll-smooth p-5">
      <div className="relative mb-10 flex flex-col items-center marker:justify-center">
        <Image
          src="/tanlogo.png"
          alt="tan logo"
          width={50}
          height={50}
          className="absolute left-[40%] top-[-20px] w-10 lg:w-[50px]"
        />
        <h2 className="bold-20 regular-20 lg:bold-40 mb-3">Top articles</h2>
        <p className="regular-16 lg:regular-16 text-gray-30 lg:w-3/5">
          Freight and logistics are going high-tech and green! Automation, AI,
          and eco-friendly solutions like electric vehicles are speeding up
          operations while reducing environmental impact. COVID-19 has pushed
          digitalization forward, improving supply chain efficiency and
          sustainability.
        </p>
      </div>

      <div className="news">
        <div className="flex items-center justify-center gap-2 bg-green-300 p-2">
          <Image
            width={40}
            height={40}
            className="h-[120px] w-[120px]"
            src="/news/ecowas.jpg"
            alt="tan freight warehouse"
          />
          <div className="p-3 lg:p-8">
            <a
              href="/tanfreight/blogs/blog-1"
              className="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
            >
              THE ECOWAS COMMON EXTERNAL TARIFF (CET) 2022 EDITION
            </a>
            <p className="regular-16 mt-2 text-slate-600">
              The Tariff and Statistical Nomenclature (TSN) of the ECOWAS Common
              External Tariff (CET)...
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-red-300 p-2">
          <Image
            width={50}
            height={50}
            className="h-[120px] w-[120px] "
            src="/news/exportact.jpg"
            alt="tan freight warehouse"
          />
          <div className="p-3 lg:p-8">
            <a
              href="/tanfreight/blogs/blog-2"
              className="mt-1 block text-lg font-medium uppercase leading-tight text-black hover:underline"
            >
              Export and Import of good act
            </a>
            <p className="regular-16 mt-2 text-slate-600">
              Goods with export restrition can be exported, but only in certain
              quantities or according to...
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-yellow-300 p-2">
          <Image
            width={80}
            height={80}
            className="h-[120px] w-[120px]"
            src="/news/importt.jpg"
            alt="tan freight warehouse"
          />
          <div className="p-3 lg:p-8">
            <a
              href="/tanfreight/blogs/blog-3"
              className="mt-1 block text-lg font-medium uppercase leading-tight text-black hover:underline"
            >
              What are Import Tariffs in Ghana?
            </a>
            <p className="regular-16 mt-2 text-slate-600">
              Ghana currently uses the Harmonized System (HS Code) to classify
              goods. Most goods...
            </p>
          </div>
        </div>
      </div>
      {/* <section className="news ">
        <div className="mx-auto overflow-hidden rounded-xl bg-white shadow-md ">
          <div className="grid grid-cols-2">
            <div className="">
              <Image
                width={80}
                height={80}
                className=" w-full object-contain"
                src="/news/ecowas.jpg"
                alt="tan freight warehouse"
              />
            </div>
            <div className="p-2">
              <a
                href="/blog"
                className="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
              >
                THE ECOWAS COMMON EXTERNAL TARIFF (CET) 2022 EDITION
              </a>
              <p className="regular-16 mt-2 text-slate-600">
                The Tariff and Statistical Nomenclature (TSN) of the ECOWAS
                Common External Tariff (CET)...
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto  overflow-hidden rounded-xl bg-white shadow-md ">
          <div className="md:flex">
            <div className="md:shrink-0">
              <Image
                width={80}
                height={80}
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="/news/exportact.jpg"
                alt="tan freight warehouse"
              />
            </div>
            <div className="p-8">
              <a
                href="#"
                className="mt-1 block text-lg font-medium uppercase leading-tight text-black hover:underline"
              >
                Export and Import of good act
              </a>
              <p className="regular-16 mt-2 text-slate-600">
                Goods with export restrition can be exported, but only in
                certain quantities or according to certain specifications; these
                restrictions are imposed by international law or Ghana's trade
                policy. Permits or certificates are needed for all restricted
                commodities. This holds true for both traditional and non-
                traditional export goods.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto  overflow-hidden rounded-xl bg-white shadow-md ">
          <div className="md:flex">
            <div className="md:shrink-0">
              <Image
                width={80}
                height={80}
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="/news/importt.jpg"
                alt="tan freight warehouse"
              />
            </div>
            <div className="p-8">
              <a
                href="#"
                className="mt-1 block text-lg font-medium uppercase leading-tight text-black hover:underline"
              >
                What are Import Tariffs in Ghana?
              </a>
              <p className="regular-16 mt-2 text-slate-600">
                Ghana currently uses the Harmonized System (HS Code) to classify
                goods. Most goods, unless they are totally exempt from customs
                duties, are subject to an import duty, Value Added Tax (VAT),
                and certain other fees and charges. The import duty is assessed
                on the Cost Insurance Freight (CIF) value of the good. The VAT
                and other fees and charges are assessed on the sum of CIF plus
                the duty.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </section>
  );
};

export default SocialResp;
