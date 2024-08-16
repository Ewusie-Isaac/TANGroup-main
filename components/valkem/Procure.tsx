import Link from "next/link";

const Procure = () => {
  return (
    <section
      id="procure"
      className="m-5 flex flex-col gap-5 p-5 md:grid md:grid-cols-2"
    >
      <div className="flex flex-col items-start justify-between gap-5 bg-gray-300 p-3">
        <h1 className="text-2xl capitalize">Are you considering to Procure?</h1>
        <p>
          Procurement of raw materials, machinery, and equipment for your
          organisation and wondering how and where to get them?.
        </p>
        {/* <Link className="rounded-md bg-slate-100 p-2" href="">
          Get Started <span className="bg-red-300 text-6xl">&#9756;</span>
        </Link> */}
        <div className="flex gap-10">
          <Link
            className="rounded-md bg-gray-500 p-2 text-gray-100"
            href="mailto:valkemengineering@gmail.com"
          >
            Get Started
          </Link>
          <span className=" text-4xl">&#9756;</span>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-5 bg-gray-500 p-3">
        <h1 className="text-2xl capitalize text-gray-100">
          you want us to Procure for you?
        </h1>
        <p className="text-gray-100">
          Procurement of raw materials, machinery, and equipment for all
          industrial needs.
        </p>
        <div className="flex gap-10">
          <Link
            className="rounded-md bg-slate-100 p-2"
            href="mailto:valkemengineering@gmail.com"
          >
            Get Started
          </Link>
          <span className="text-4xl text-gray-100">&#9756;</span>
        </div>
      </div>
    </section>
  );
};

export default Procure;
