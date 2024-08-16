import Image from "next/image";
import React from "react";

const Value = () => {
  return (
    <section id="value" className="scroll-smooth">
      <div className=" mx-4 my-10 flex flex-col lg:mx-10 lg:my-20 lg:grid lg:grid-cols-2">
        <div className="relative">
          <Image src="/valkem/valkem-14.jpg" width={500} height={500} alt="" />
          {/* <Image
            className="absolute bottom-4 right-10 z-10"
            src="/valkem/valkem-15.jpg"
            width={300}
            height={300}
            alt=""
          /> */}
          <div className="absolute -right-3 bottom-10 z-10 w-2/4 bg-gray-400 p-5 lg:bottom-4 lg:right-10 lg:w-2/6">
            <h3 className=" text-2xl font-bold">
              Higly Durable, Quality and Effiency
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-evenly bg-gray-100 p-5">
          <h3 className="text-3xl font-semibold">
            Highly Durable Quality and Efficiency: Elevating Standards at Valkem
          </h3>
          <p>
            Experience the pinnacle of procurement excellence with Valkem, where
            highly durable products meet unmatched quality and efficiency. Our
            commitment ensures your operations run smoothly and reliably, every
            time.
          </p>

          <div className="flex items-center justify-between gap-5 p-5">
            <div className="flex flex-col items-center justify-center gap-1 font-semibold">
              <h3 className="text-md">Countries Served</h3>
              <p className="text-3xl">
                <span>8</span>+
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 font-semibold">
              <h3 className="text-md">Industry Served</h3>
              <p className="text-3xl">
                <span>83</span>+
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
