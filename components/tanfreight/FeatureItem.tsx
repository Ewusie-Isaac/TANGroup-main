import Image from 'next/image';
import React from 'react';
type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};
const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start scroll-smooth rounded-xl ">
      <div className="w-full p-4 lg:p-7">
        <Image
          className="h-52"
          alt="Tan work done"
          src={icon}
          height={500}
          width={500}
        />
      </div>
      <div className="w-full p-5">
        <h2 className="bold-20 lg:bold-32 mt-1 pb-3 capitalize text-gray-600">
          {title}
        </h2>
        <p className="regular-14 lg:regular-16 text-gray-700 ">{description}</p>
      </div>
    </li>
  );
};

export default FeatureItem;
