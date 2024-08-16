import { valkemfooterLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="padding padding-x padding-t max-container scroll-smooth bg-gray-200 pb-8 ">
      <div className="flex flex-wrap items-start justify-around gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/valkem">
            <Image
              className=""
              src="/valkem/valkem.png"
              width={150}
              height={46}
              alt="tan company logo"
            />
          </a>
          <p className="font-regular text-md mt-6 leading-5 text-gray-600  sm:max-w-sm">
            Welcome to Valkem Engineering and Technology Services, your go-to
            expert for innovative procurement solutions. We specialize in
            optimizing your supply chain with top-quality materials and
            cutting-edge technology. Partner with us to elevate your procurement
            process and achieve unparalleled success. Discover the future of
            procurement with Valkem Engineering and Technology Services.
          </p>
          {/* <div className="mt-8 flex items-center gap-2">
            {socialMedia.map((icon) => (
              <Link
                href={icon.href}
                key={icon.src}
                className="flex h-12 w-12 items-center justify-center"
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </Link>
            ))}
          </div> */}
        </div>
        <div className="flex flex-wrap gap-20  text-gray-600  lg:gap-40">
          {valkemfooterLinks.map((section) => (
            <div key={section.title}>
              <h4
                key={section.title}
                className="mb-6 text-lg font-bold leading-normal 
               "
              >
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <Link
                    href={link.link}
                    key={link.name}
                    className="text-md mt-3 flex cursor-pointer leading-normal  hover:text-gray-800"
                  >
                    {link.name}
                    {/* <a href="mailto:info@tanfrieght.com"> {link.name}</a> */}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className="mt-24 flex items-center justify-around text-gray-600 
      max-sm:flex-col max-sm:items-center"
      >
        <p className="max-sm:w-18 text-center">
          Copyright &copy; {new Date().getFullYear()} Valkem Engineering and
          Technology. All rights reversed.
        </p>
        <p className="max-sm:mt-5">Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
