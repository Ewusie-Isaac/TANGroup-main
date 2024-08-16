import Image from 'next/image';
import React from 'react';

const UniqueFactor = () => {
  return (
    <section className="mx-1 my-3 bg-gray-90 p-4 lg:m-8">
      <h3 className="text-3xl text-gray-10">Our Unique Areas of expertise</h3>
      <ul className="valk-grid bg-gray-10">
        <li className="flexy m-3 rounded-md p-2 shadow-md">
          <Image src="/valkem/marine.jpg" width={200} height={200} alt="" />
          <h3>Best procurement services</h3>
        </li>
        <li className="flexy m-3 rounded-md p-2 shadow-md">
          <Image src="/valkem/marine.jpg" width={200} height={200} alt="" />
          <h3>24/7 Support</h3>
        </li>
        <li className="flexy m-3 rounded-md p-2 shadow-md">
          <Image src="/valkem/marine.jpg" width={200} height={200} alt="" />
          <h3>Worldwide delivery</h3>
        </li>
        <li className="flexy m-3 rounded-md p-2 shadow-md">
          <Image src="/valkem/marine.jpg" width={200} height={200} alt="" />
          <h3>Crtical machines part on Time</h3>
        </li>
      </ul>
    </section>
  );
};

export default UniqueFactor;
