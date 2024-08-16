import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="valkem-header relative ">
      <div className="lg:absolute lg:bottom-10 rounded-md bg-gray-200 p-5 shadow-md lg:w-2/4">
        <h1 className="mb-3 text-4xl font-bold">
          In a world where efficiency is paramount,Valkem stands as your trusted
          ally in procurement solutions
        </h1>
        <p className="text-md mb-5">
          With a commitment to excellence and a focus on streamlining processes,
          Valkem ensures your procurement needs are met with precision and
          reliability.
        </p>
        <Link
          className="mt-3 rounded-md bg-gray-600 px-10 py-3  text-gray-100
           transition-all hover:bg-gray-700"
          href="mailto:info@tanfreight.com"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Header;
