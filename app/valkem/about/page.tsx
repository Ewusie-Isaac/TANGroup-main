import Footer from "@/components/valkem/Footer";
import Navigation from "@/components/valkem/Navigation";
// import UniqueFactor from "@/components/valkem/UniqueFactor";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
export const metadata: Metadata = {
  title: "About Valkem",
  description: "",
};
const page = () => {
  return (
    <section>
      <Navigation />
      <div className="about relative ">
        <h2 className="absolute bottom-[7.5rem] left-20 text-6xl  font-extrabold text-gray-100">
          About us
        </h2>
      </div>
      <div className="grid-1-1 p-5">
        <div>
          <h1 className="text-6xl mb-5 font-bold">About Us</h1>
          {/* <p className="mb-3 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p> */}
          <p className="mb-4">
            Welcome to Valkem Engineering and Technology Services, your go-to
            provider of procurement solutions for industries globally. Our
            mission is to be your trusted partner, delivering top-notch products
            and customized solutions across Mechanical, Electrical,
            Instrumentation, and Control sectors. We prioritize quality,
            innovation, and client satisfaction to ensure operational efficiency
            and dependability in every project. With our dedicated team and
            commitment to excellence, we drive success and build partnerships
            founded on trust and mutual advancement.
          </p>
          <p>
            Our goal at Valkem Engineering and Technology Services is to be the
            premier global procurement services provider. Our dedication to
            quality, innovation, and client satisfaction sets us apart. We
            continuously enhance our offerings and capabilities to surpass
            client expectations across diverse industries. By setting the
            standard for procurement excellence, we aspire to shape the future
            of the industry and deliver unparalleled value to our clients
            worldwide. We invite you to join us on this journey of achieving
            unprecedented success together.
          </p>
        </div>
        <div className="relative hidden lg:block">
          <Image
            className="absolute top-0"
            src="/valkem/marine.jpg"
            width={450}
            height={450}
            alt=""
          />
          <Image
            className="absolute -bottom-4 -right-1"
            src="/valkem/about-2.jpg"
            width={450}
            height={450}
            alt=""
          />
        </div>
      </div>
      {/* <UniqueFactor /> */}
      <Footer />
    </section>
  );
};

export default page;
