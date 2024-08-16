import Link from 'next/link';
import Image from 'next/image';

const Special = () => {
  return (
    <section className="warehouse">
      {/* <ul className="offers">
        <Link className="flex w-full flex-col" href="/tanservices">
        
          <svg className=" fill-purple-1">
            <path d="M17.359 15.563v-0.063l-0.375-5c-0.016-0.281-0.266-0.5-0.531-0.5h-2.906c-0.266 0-0.516 0.219-0.531 0.5l-0.375 5v0.063c-0.016 0.25 0.219 0.438 0.453 0.438h3.813c0.234 0 0.469-0.187 0.453-0.438zM29.219 22.859c0 0.453-0.125 1.141-0.719 1.141h-11c0.266 0 0.484-0.219 0.469-0.5l-0.313-4c-0.016-0.281-0.266-0.5-0.531-0.5h-4.25c-0.266 0-0.516 0.219-0.531 0.5l-0.313 4c-0.016 0.281 0.203 0.5 0.469 0.5h-11c-0.594 0-0.719-0.688-0.719-1.141 0-0.625 0.172-1.25 0.406-1.813l6.516-16.312c0.156-0.391 0.578-0.734 1-0.734h5.297c-0.266 0-0.516 0.219-0.531 0.5l-0.234 3c-0.016 0.281 0.187 0.5 0.469 0.5h2.594c0.281 0 0.484-0.219 0.469-0.5l-0.234-3c-0.016-0.281-0.266-0.5-0.531-0.5h5.297c0.422 0 0.844 0.344 1 0.734l6.516 16.312c0.234 0.562 0.406 1.188 0.406 1.813z"></path>
          </svg>
          <h1> Pick-Up and Delivery</h1>
        </Link>
        <Link
          className="flex flex-col items-center justify-center"
          href="/tanservices"
        >
          <Image
            className="m-0 object-contain"
            src="/main/svgicons/truck.svg"
            width={70}
            height={70}
            alt="customer review star"
          />
          <h1> Pick-Up and Delivery</h1>
        </Link>
        <Link
          className="flex flex-col items-center justify-center"
          href="/tanservices"
        >
          <Image
            className="m-0 object-contain"
            src="/main/svgicons/truck.svg"
            width={70}
            height={70}
            alt="customer review star"
          />
          <h1> Pick-Up and Delivery</h1>
        </Link>
        <Link
          className="flex flex-col items-center justify-center"
          href="/tanservices"
        >
          <Image
            className="m-0 object-contain"
            src="/main/svgicons/truck.svg"
            width={70}
            height={70}
            alt="customer review star"
          />
          <h1> Pick-Up and Delivery</h1>
        </Link>
        <Link
          className="flex flex-col items-center justify-center"
          href="/tanservices"
        >
          <Image
            className="m-0 object-contain"
            src="/main/svgicons/truck.svg"
            width={70}
            height={70}
            alt="customer review star"
          />
          <h1> Pick-Up and Delivery</h1>
        </Link>
        <Link
          className="flex flex-col items-center justify-center"
          href="/tanservices"
        >
          <Image
            className="m-0 object-contain"
            src="/main/svgicons/truck.svg"
            width={70}
            height={70}
            alt="customer review star"
          />
          <h1> Pick-Up and Delivery</h1>
        </Link>
        <Link
          className="flex flex-col items-center justify-center"
          href="/tanservices"
        >
          <Image
            className="m-0 object-contain"
            src="/main/svgicons/truck.svg"
            width={70}
            height={70}
            alt="customer review star"
          />
          <h1> Pick-Up and Delivery</h1>
        </Link>
      </ul> */}
      <div className="warehouse-wrapper">
        <div className="warehouse-text ralative">
          <h1 className="warehouse-header lg:bold-59 ">
            Our Warehousing Operations.
          </h1>
          <p className="warehouse-para regular-16">
            we specialize in optimizing supply chains through secure and
            organized warehousing services, guaranteeing efficient inventory
            management and order fulfillment.
          </p>
          {/* <ul className="my-6 flex flex-wrap gap-2 bg-gray-10 px-1">
            <li className="before:regular-16 mt-5 flex gap-1">
              <Image
                className="m-0 object-contain"
                src="/star.svg"
                width={24}
                height={24}
                alt="customer review star"
              />
              <a> Pick-Up and Delivery.</a>
            </li>
            <li className="before:regular-16 mt-5 flex gap-1">
              <Image
                className="m-0 object-contain"
                src="/star.svg"
                width={24}
                height={24}
                alt="customer review star"
              />
              <a> Custom Clearance</a>
            </li>
            <li className="before:regular-16 mt-5 flex gap-1 ">
              <Image
                className="m-0 object-contain"
                src="/star.svg"
                width={24}
                height={24}
                alt="customer review star"
              />
              <a> Air Freight Services.</a>
            </li>
            <li className="before:regular-16 mt-5 flex gap-1 ">
              <Image
                className="m-0 object-contain"
                src="/star.svg"
                width={24}
                height={24}
                alt="customer review star"
              />
              <a> Sea Freight Services.</a>
            </li>

            <li className="before:regular-16 mt-5 flex gap-1 ">
              <Image
                className="m-0 object-contain"
                src="/star.svg"
                width={24}
                height={24}
                alt="customer review star"
              />
              <a>Warehouse and Distributions.</a>
            </li>
            <li className="before:regular-16 mt-5 flex gap-1 ">
              <Image
                className="m-0 object-contain"
                src="/star.svg"
                width={24}
                height={24}
                alt="customer review star"
              />
              <a>Haulage</a>
            </li>
            <li className="before:regular-16 mt-5 flex gap-1 ">
              <Image
                className="m-0 object-contain"
                src="/star.svg"
                width={24}
                height={24}
                alt="customer review star"
              />
              <a>Cargo Project Handling</a>
            </li>
            <li className="before:regular-16 mt-5 flex gap-1 ">
              <Image
                className="m-0 object-contain"
                src="/star.svg"
                width={24}
                height={24}
                alt="customer review star"
              />
              <a>Cold Chain.</a>
            </li>
          </ul> */}
          <Link className="w-button" href="/tanservices">
            {/* <Button
              type="email"
              title="Explore More of Services"
              variant="btn_purple"
            /> */}
            Explore More of Services
          </Link>
        </div>
        <div className="relative flex flex-1 items-center justify-center bg-cover md:flex md:flex-col-reverse">
          <Image
            className="md:w-full"
            src="/main/warehouse-2.jpg"
            alt="tan image"
            width={600}
            height={900}
          />
          <div className=" absolute z-50 hidden rounded-sm bg-purple-2 px-10 py-5  sm:right-2 md:top-[20rem] lg:-top-6 lg:right-24 lg:block">
            <ul className="flex gap-4 divide-x-[3px] text-lg font-bold">
              <li className="flex gap-2 text-gray-100">
                <h1>47+</h1>
                <p>Clients</p>
              </li>
              <li className="flex gap-2 pl-2 text-gray-100">
                <h1>521+</h1>
                <p>Work done</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
