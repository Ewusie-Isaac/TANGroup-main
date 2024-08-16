import Image from 'next/image';

const Services = () => {
  return (
    <section className="p-8">
      {/* <h2>We available at</h2>
      <p className="w-2/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae
        eius, tenetur qui laboriosam dicta laudantium voluptate reprehenderit
        dignissimos, odio quos quae atque ab quia, eveniet minus voluptates
        repudiandae explicabo!
      </p> */}
      <div className="flex flex-col items-center justify-center gap-10 lg:flex lg:flex-row">
        <div>
          {/* <h2>Committed to Quality Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sit
            nesciunt explicabo voluptas dicta? Voluptate delectus rerum
            blanditiis quo. Accusamus?
          </p> */}
          <h2 className="mt-4 rounded-md bg-gray-300 p-3 text-2xl font-semibold capitalize lg:text-3xl">
            Countries We available at
          </h2>
          <p className="mt-4">
            These locations enable TAN Group to enhance its freight and
            logistics services, tap into the rich agricultural potential through
            Ecofarms Africa, advance life sciences initiatives, and drive
            engineering projects with Valkem Engineering. By operating in these
            key West African nations, the TAN Group is well-positioned to
            contribute to and benefit from the region's dynamic economic growth
            and developments.
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-3">
            <li className="flex items-center  gap-2 rounded-lg bg-gray-300 p-3 text-xl">
              <span className="text-1xl">&#9906;</span>Ghana
            </li>
            <li className="flex items-center  gap-2 rounded-lg bg-gray-300 p-3 text-xl">
              <span className="text-1xl">&#9906;</span>Ivory Coast
            </li>
            <li className="flex items-center  gap-2 rounded-lg bg-gray-300 p-3 text-xl">
              <span className="text-1xl">&#9906;</span>Nigeria
            </li>
            <li className="flex items-center  gap-2 rounded-lg bg-gray-300 p-3 text-xl">
              <span className="text-1xl">&#9906;</span>Benin Republic
            </li>
          </ul>
        </div>
        <Image
          src="/africa.png"
          width={500}
          height={500}
          alt="tan group image"
        />
      </div>
    </section>
  );
};

export default Services;
