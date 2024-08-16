import Image from "next/image";

const IndustryAll = () => {
  return (
    <section>
      <div className="industry relative ">
        <h2 className="absolute bottom-[7.5rem] left-20 text-5xl  font-extrabold text-gray-100">
          Our Industries of Applications
        </h2>
      </div>
      <div className="m-5 text-center">
        <h1 className="partners text-md">Our Industries</h1>
        <h2 className="text-2xl font-extrabold lg:text-4xl">
          Explore all{" "}
          <span className="skew-x-12 font-bold text-orange-300 ">Valkem</span>{" "}
          industries here.
        </h2>
      </div>
      <div className="m-5">
        <ul className="grid-1">
          <li className="flexy shadow-lg">
            <Image
              width={500}
              height={500}
              src="/valkem/marine.jpg"
              alt="TAN Group of company Valkem"
            />

            <h3 className="p-2 text-xl font-semibold">Marine</h3>
          </li>
          <li className="flexy shadow-lg">
            <Image
              width={500}
              height={500}
              src="/valkem/min.jpg"
              alt="TAN Group of company Valkem"
            />

            <h3 className="p-2 text-xl font-semibold">Mining Industry</h3>
          </li>
          <li className="flexy shadow-lg">
            <Image
              width={500}
              height={500}
              src="/valkem/robo.jpg"
              alt="TAN Group of company Valkem"
            />

            <h3 className="p-2 text-xl font-semibold">Manufacturing</h3>
          </li>
          <li className="flexy shadow-lg">
            <Image
              width={500}
              height={500}
              src="/valkem/oil-gas.jpg"
              alt="TAN Group of company Valkem"
            />

            <h3 className="p-2 text-xl font-semibold">Refinery</h3>
          </li>

          <li className="flexy shadow-lg">
            <Image
              width={500}
              height={500}
              src="/valkem/pharma.jpg"
              alt="TAN Group of company Valkem"
            />

            <h3 className="p-2 text-xl font-semibold">Pharmacutical</h3>
          </li>
          <li className="flexy shadow-lg">
            <Image
              width={500}
              height={500}
              src="/valkem/powerplant.jpg"
              alt="TAN Group of company Valkem"
            />

            <h3 className="p-2 text-xl font-semibold">Power</h3>
          </li>
          <li className="flexy shadow-lg">
            <Image
              width={500}
              height={500}
              src="/valkem/ridge.jpg"
              alt="TAN Group of company Valkem"
            />

            <h3 className="p-2 text-xl font-semibold">Oil and Gas Industry</h3>
          </li>
          <li className="flexy shadow-lg">
            <Image
              width={500}
              height={500}
              src="/valkem/energy.jpg"
              alt="TAN Group of company Valkem"
            />

            <h3 className="p-2 text-xl font-semibold">Renewable Energy</h3>
          </li>
          <li className="flexy shadow-lg">
            <Image
              width={500}
              height={500}
              src="/valkem/petroch.jpg"
              alt="TAN Group of company Valkem"
            />

            <h3 className="p-2 text-xl font-semibold">Petrochemical</h3>
          </li>
          {/* <li>
            <Image
              width={500}
              height={500}
              src="/valkem/refinery-o.jpg"
              alt="TAN Group of company Valkem"
            />

            <h3 className="text-xl font-semibold">Mining Industry</h3>
          </li> */}
          <li className="flexy shadow-lg">
            <Image
              width={500}
              height={500}
              src="/valkem/power.jpg"
              alt="TAN Group of company Valkem"
            />

            <h3 className="p-2 text-xl font-semibold">Power</h3>
          </li>
          <li className="flexy shadow-lg">
            <Image
              width={500}
              height={500}
              src="/valkem/shipb.jpg"
              alt="TAN Group of company Valkem"
            />

            <h3 className="p-2 text-xl font-semibold">Ship Building</h3>
          </li>
          {/* <li className="flexy shadow-lg">
            <Image
              width={500}
              height={500}
              src="/valkem/robo.jpg"
              alt="TAN Group of company Valkem"
            />

            <h3 className="p-2 text-xl font-semibold">Manufacturing</h3>
          </li> */}
          <li className="flexy shadow-lg">
            <Image
              width={500}
              height={500}
              src="/valkem/food-pro.jpg"
              alt="TAN Group of company Valkem"
            />

            <h3 className="p-2 text-xl font-semibold">
              Food and Beverage Manufacturing
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IndustryAll;
