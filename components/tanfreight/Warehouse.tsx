import Image from 'next/image';
import React from 'react';

const Warehouse = () => {
  return (
    <section
      className="grid min-h-screen grid-flow-col-dense gap-3  scroll-smooth border-2 border-red-500 
     p-6 max-lg:flex max-lg:flex-col-reverse max-lg:px-24"
    >
      <div className="text-gray-500 xl:p-10">
        <h4 className="mb-4 text-2xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          Doloribus excepturi asperiores, hic quis mollitia dicta quae tempora
          iusto dolore Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Deleniti doloribus quia eaque. Est perspiciatis nemo maxime minus hic.
          Doloribus excepturi asperiores, hic quis mollitia dicta quae tempora
          iusto dolore facilis, tenetur voluptatem minus veritatis non
          perferendis sunt ex pariatur dolorum.facilis, tenetur voluptatem minus
          veritatis non perferendis sunt ex pariatur dolorum.
        </p>
      </div>
      <Image
        className="max-lg:mb-5"
        width={910}
        height={510}
        alt="tan warehouse"
        src="/home-2.jpg"
      />
    </section>
  );
};

export default Warehouse;
