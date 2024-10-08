import { FEATURES } from '@/constants';
import Image from 'next/image';
import React from 'react';
import FeatureItem from './FeatureItem';

const Features = () => {
  return (
    <section className="flexCenter flex-col overflow-hidden scroll-smooth bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative flex w-full justify-end">
        {/* <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/pattern-bg.jpg"
            alt="tan service image"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div> */}
        <div className="z-20 flex w-full flex-col ">
          <div className="relative">
            <Image
              src="/tanlogo.png"
              alt="tan logo"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Service</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-3 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
