import Image from 'next/image';
import Link from 'next/link';

const Industry = () => {
  return (
    <section>
      <div>
        <div>
          <ul className="grid-1-1">
            <Link
              href="/valkem/copper-cathode"
              className="flexy rounded-sm bg-gray-200 p-2 shadow-lg"
            >
              <Image
                src="/valkem/cathode-copper.jpg"
                width={500}
                height={500}
                alt=""
              />
              <h3 className="text-xl font-semibold">Copper Cathode</h3>
            </Link>
            <li className="flexy rounded-sm bg-gray-200 p-2 shadow-lg">
              <Image
                src="/valkem/s-drill.jpg"
                width={500}
                height={500}
                alt=""
              />
              <h3 className="text-xl font-semibold">
                Stainless Steel Drill Bits
              </h3>
            </li>
            <li className="flexy rounded-sm bg-gray-200 p-2 shadow-lg">
              <Image src="/valkem/fan.jpg" width={500} height={500} alt="" />
              <h3 className="text-xl font-semibold">
                Warehouse Fan & Accessories
              </h3>
            </li>

            <li className="flexy rounded-sm bg-gray-200 p-2 shadow-lg">
              <Image
                src="/valkem/valkem-4.jpg"
                width={500}
                height={500}
                alt=""
              />
              <h3 className="text-xl font-semibold">
                Control and Switch Parts
              </h3>
            </li>
            <li className="flexy rounded-sm bg-gray-200 p-2 shadow-lg">
              <Image
                src="/valkem/carburetor-parts.jpg"
                width={500}
                height={300}
                alt=""
              />
              <h3 className="text-xl font-semibold">
                Curbature Parts & Accessories
              </h3>
            </li>
            <li className="flexy rounded-sm bg-gray-200 p-2 shadow-lg">
              <Image src="/valkem/valves.jpg" width={500} height={500} alt="" />
              <h3 className="text-xl font-semibold">Steel Pipes and Valves</h3>
            </li>
            <li className="flexy rounded-sm bg-gray-200 p-2 shadow-lg">
              <Image
                src="/valkem/presure-garge.jpg"
                width={500}
                height={500}
                alt=""
              />
              <h3 className="text-xl font-semibold">
                Pressure and Temperature Gauges
              </h3>
            </li>
            <li className="flexy rounded-sm bg-gray-200 p-2 shadow-lg">
              <Image
                src="/valkem/valve-v.jpg"
                width={500}
                height={500}
                alt=""
              />
              <h3 className="text-xl font-semibold">
                Valves of Vintage Engine
              </h3>
            </li>
            <li className="flexy rounded-sm bg-gray-200 p-2 shadow-lg">
              <Image
                src="/valkem/woodwork.jpg"
                width={500}
                height={500}
                alt=""
              />
              <h3 className="text-xl font-semibold">Woodwork Tools </h3>
            </li>
            <li className="flexy rounded-sm bg-gray-200 p-2 shadow-lg">
              <Image src="/valkem/plier.jpg" width={500} height={500} alt="" />
              <h3 className="text-xl font-semibold">Plier Set </h3>
            </li>

            <li className="flexy rounded-sm bg-gray-200 p-2 shadow-lg">
              <Image src="/valkem/tunel.jpg" width={500} height={500} alt="" />
              <h3 className="text-xl font-semibold">Mining Machineries</h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Industry;
