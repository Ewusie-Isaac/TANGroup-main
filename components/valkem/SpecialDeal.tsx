import Image from 'next/image';
import Link from 'next/link';

const SpecialDeal = () => {
  return (
    <section className="my-10">
      <div className=" flex flex-col lg:grid lg:grid-cols-2 ">
        <div className="flex flex-col items-center justify-center gap-5 p-5 ">
          <h2 className="text-3xl font-bold text-white">Special Deal</h2>
          <p className="text-lg ">Get 20% off your next order</p>
          <p>
            Unlock 20% off your next order and experience unparalleled savings
            with free delivery! Dive into our exclusive offer and treat yourself
            to the best deals fo your business needs today. Don't miss out—this
            discount won't last forever!
          </p>
          <Link
            href="mailto:valkemengineering@gmail.com"
            className="rounded-md bg-gray-700 px-4 py-2 text-gray-200"
          >
            Contact us Now
          </Link>
        </div>
        <Image
          className="hidden lg:block"
          src="/valkem/valkem-8.jpg"
          width={500}
          height={500}
          alt="tan Valkem products"
        />
      </div>
    </section>
  );
};

export default SpecialDeal;
