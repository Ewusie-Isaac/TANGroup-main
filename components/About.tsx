import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="my-4 flex flex-col gap-64 p-8 lg:grid lg:grid-cols-2 lg:gap-10">
      <div className="">
        {/* <Image
          className="absolute -left-[0.5rem] -top-10"
          src="/tangroup-1.jpg"
          width={300}
          height={300}
          alt="tan group of company image about tan group"
        />
        <Image
          className="absolute -right-[0.5rem] top-[1.5rem]"
          src="/tangroup-3.jpg"
          width={300}
          height={300}
          alt="tan group of company image about tan group"
        /> */}
        <Image
          className="rounded-md"
          src="/tangroup-4.jpg"
          width={800}
          height={800}
          alt="tan group of company image about tan group"
        />
      </div>
      <div>
        <h2 className="mb-3 text-lg font-bold capitalize lg:text-4xl">
          About TAN Group of Company
        </h2>
        <p>
          The TAN Groupe of Companies stands as a beacon of innovation and
          excellence across multiple industries in West Africa. With a robust
          portfolio that spans freight and logistics services, Ecofarms Africa,
          life sciences, and Valkem Procurements.We take pride in our ability to
          connect businesses, foster economic growth, and create a network that
          supports the thriving West African market.
        </p>
        <p className="mt-4">
          Ecofarms Africa, a subsidiary of the TAN Groupe, embodies our
          commitment to empower local farmers and contributing to the overall
          economic resilience of the region. Ecofarms Africa is not just about
          farming; it is about creating a sustainable future for generations to
          come.
        </p>
        <p className="mt-4">
          In the realm of life sciences and engineering, TAN Groupe is making
          significant strides with Valkem Procurements. Our life sciences
          division is dedicated to advancing healthcare solutions and Valkem
          Procurements, on the other hand, focuses on offering innovative
          engineering solutions that drive infrastructural development. The TAN
          Groupe of Companies is not just a business entity; it is a catalyst
          for change and development in West Africa.
        </p>
      </div>
    </section>
  );
};

export default About;
