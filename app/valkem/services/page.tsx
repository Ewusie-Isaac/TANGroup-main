import Footer from "@/components/valkem/Footer";
import Industry from "@/components/valkem/Industry";
import Navigation from "@/components/valkem/Navigation";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Services",
  description: "",
};
const page = () => {
  return (
    <section>
      <Navigation />
      <div className="services relative ">
        <h2 className="absolute bottom-[7.5rem] left-10 text-6xl font-extrabold  text-gray-100 lg:left-20">
          Our Products
        </h2>
      </div>
      <div className="bg-gray-100 p-5">
        {/* <h1>Hello, TANGroups!</h1>
        <p>Welcome to our new website!</p> */}
        <div>
          <Industry />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
