import Image from 'next/image';
import Link from 'next/link';

const Offer = () => {
  return (
    <div
      id="about"
      className=" mx-8 my-10 flex flex-col gap-14 scroll-smooth p-5 lg:my-20 lg:grid lg:grid-cols-2 lg:gap-5 "
    >
      <div className="flex flex-col gap-4  lg:grid lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <div className="p-4">
            <h3 className="text-2xl font-semibold">Best and Durable</h3>
            <p>
              Experience the best of quality with our products—where 'Best'
              meets 'Durable' to meet your industrial needs
            </p>
          </div>
          <Image
            src="/valkem/valkem-14.jpg"
            width={400}
            height={400}
            alt="TAN Group of Company"
          />
        </div>
        <div className="grid grid-cols-2 lg:flex lg:flex-col">
          <Image
            src="/valkem/valkem-6.jpg"
            width={400}
            height={400}
            alt="TAN Group of Company"
          />
          <Image
            src="/valkem/valkem-12.jpg"
            width={400}
            height={400}
            alt="TAN Group of Company"
          />
        </div>
      </div>
      <div className="mx-1 flex flex-col items-start justify-center gap-4 lg:mx-8 lg:items-start lg:gap-5">
        <h3 className="text-3xl lg:mb-1">Valkem Engineering and Technology</h3>
        <p>
          We specialize in streamlining the procurement process, ensuring that
          your business operates with the utmost precision and speed. At Valkem,
          we leverage cutting-edge technology and industry expertise to deliver
          tailored solutions that meet your unique needs.
        </p>
        <p className="">
          Valkem Engineering and Technology is a leading supplier of reliable
          procurement needs. Our commitment to excellence and innovation
          positions us as the partner you can rely on to drive your procurement
          strategy forward, maximizing efficiency and enhancing your competitive
          edge.
        </p>
        <Link
          className="rounded-lg bg-gray-600 p-3 uppercase text-gray-100
           transition-all hover:bg-gray-700"
          href="mailto:valkemengineering@gmail.com"
        >
          Contact us now
        </Link>
      </div>
    </div>
  );
};

export default Offer;
