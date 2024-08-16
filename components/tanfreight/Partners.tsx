import Image from 'next/image';
import React from 'react';

const Partners = () => {
  return (
    <section className="mt-10 scroll-smooth">
      <div className="partners mb-2 px-10 text-lg font-bold">
        Our Global Partners
      </div>

      <div className="mx-1  bg-purple-2/20">
        <ul className="grid grid-flow-col-dense items-center justify-between gap-5 p-5">
          <li>
            <Image
              src="/freight/wiffa.png"
              height={90}
              width={90}
              alt="tan partner logo"
            />
          </li>
          <li>
            <Image
              src="/freight/giff.png"
              height={80}
              width={80}
              alt="tan partner logo"
            />
          </li>
          <li>
            <Image
              src="/freight/df.png"
              height={80}
              width={80}
              alt="tan partner logo"
            />
          </li>
          <li>
            <Image
              src="/freight/jctrans.jpg"
              height={90}
              width={90}
              alt="tan partner logo"
            />
          </li>
          <li>
            <Image
              src="/freight/legend.png"
              height={81}
              width={80}
              alt="tan partner logo"
            />
          </li>
          <li>
            <Image
              src="/freight/global.png"
              height={80}
              width={80}
              alt="tan partner logo"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Partners;
