'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Action from './Action';

// import { useSelectedLayoutSegment } from 'next/navigation';

const Navigation = () => {
  // let segment = useSelectedLayoutSegment();
  // let active = segment;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="m-2">
      <nav className=" flexBetween max-container relative z-30 p-3 px-6 lg:px-2 3xl:px-0">
        <Link href="/valkem">
          <Image
            src="/valkem/valkem.png"
            alt="TanFreight Logo"
            width={80}
            height={40}
          />
        </Link>
        <ul className="hidden h-full gap-10 lg:flex">
          <Link
            href="/valkem"
            className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-900 transition-all duration-75 hover:font-bold"
          >
            Home
            {/* <ul className="dropdrown">
              <Link className="dropdrown-list" href="/lifescience">
                001
              </Link>
              <Link className="dropdrown-list" href="/lifescience">
                002
              </Link>
              <Link className="dropdrown-list" href="/lifescience">
                003
              </Link>
            </ul> */}
          </Link>
          <Link
            href="/valkem/services"
            className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-900 transition-all duration-75 hover:font-bold"
          >
            Services
            {/* <ul className="dropdrown">
              <Link className="dropdrown-list" href="#">
                001
              </Link>
              <Link className="dropdrown-list" href="#">
                002
              </Link>
              <Link className="dropdrown-list" href="#">
                003
              </Link>
            </ul> */}
          </Link>

          <Link
            href="/valkem/industry"
            className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-900 transition-all duration-75 hover:font-bold"
          >
            Our Industry
            {/* <ul className="dropdrown">
              <Link className="dropdrown-list" href="#">
                001
              </Link>
              <Link className="dropdrown-list" href="#">
                002
              </Link>
              <Link className="dropdrown-list" href="#">
                003
              </Link>
            </ul> */}
          </Link>
          <Link
            href="/valkem/copper-cathode"
            className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-900 transition-all duration-75 hover:font-bold"
          >
            Copper Cathode
          </Link>
          <Link
            href="/valkem#why"
            className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-900 transition-all duration-75 hover:font-bold"
          >
            Why Choose Valkem
            {/* <ul className="dropdrown">
              <Link className="dropdrown-list" href="#">
                001
              </Link>
              <Link className="dropdrown-list" href="#">
                002
              </Link>
              <Link className="dropdrown-list" href="#">
                003
              </Link>
            </ul> */}
          </Link>
          <Link
            href="/valkem/about"
            className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-900 transition-all duration-75 hover:font-bold"
          >
            About Us
            {/* <ul className="dropdrown">
              <Link className="dropdrown-list" href="#">
                001
              </Link>
              <Link className="dropdrown-list" href="#">
                002
              </Link>
              <Link className="dropdrown-list" href="#">
                003
              </Link>
            </ul> */}
          </Link>
        </ul>
        <div className="lg:flexCenter hidden">
          <Action />
        </div>
        <Image
          onClick={() => setIsOpen(!isOpen)}
          width={32}
          height={32}
          src="/menu.svg"
          alt="menu"
          className="inline-block cursor-pointer lg:hidden"
        />
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isOpen && (
        <div className="z-900 h-screen w-full sm:hidden" id="mobile-menu">
          <ul className="space-y-1 px-2 pb-3 pt-2">
            <Link
              onClick={() => setIsOpen(!isOpen)}
              href="/valkem"
              className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-900 transition-all duration-75 hover:font-bold"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              href="/valkem/services"
              className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-900 transition-all duration-75 hover:font-bold"
            >
              Our Services
            </Link>
            <Link
              href="/valkem/copper-cathode"
              className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-900 transition-all duration-75 hover:font-bold"
            >
              Copper Cathode
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              href="/valkem/industry"
              className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-900 transition-all duration-75 hover:font-bold"
            >
              Our Industry
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              href="/valkem#value"
              className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-900 transition-all duration-75 hover:font-bold"
            >
              Why Choose Us
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              href="/valkem/about"
              className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-900 transition-all duration-75 hover:font-bold"
            >
              About Us
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
