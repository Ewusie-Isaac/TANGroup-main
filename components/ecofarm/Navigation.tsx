'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Action from './Action';

const Navigation = () => {
  // let segment = useSelectedLayoutSegment();
  // let active = segment;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="w-full">
      <nav className="flex-between max-container relative z-30 bg-white/80 px-6 lg:px-2 3xl:px-0">
        <Link href="/ecofarm">
          <Image
            src="/farm/ecofarms.png"
            alt="TanFreight Logo"
            width={54}
            height={32}
          />
        </Link>
        <ul className="hidden h-full gap-10  lg:flex">
          <Link
            href="/ecofarm"
            className="regular-18 link  flexCenter relative cursor-pointer pb-1.5 text-green-700 transition-all duration-75 hover:font-bold"
          >
            Home
          </Link>
          <Link
            href="/ecofarm#categories"
            className="regular-18 link  flexCenter relative cursor-pointer pb-1.5 text-green-700 transition-all duration-75 hover:font-bold"
          >
            Services
          </Link>
          <Link
            href="/ecofarm/about"
            className="regular-18 link flexCenter relative cursor-pointer pb-1.5 text-green-700 transition-all duration-75 hover:font-bold"
          >
            About EcoFarms
          </Link>
          <Link
            href="/ecofarm/contact-us"
            className="regular-18 link flexCenter relative cursor-pointer pb-1.5 text-green-700 transition-all duration-75 hover:font-bold"
          >
            Contact Us
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
          className="z-20 inline-block cursor-pointer lg:hidden"
        />
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isOpen && (
        <div className="z-20 h-screen bg-gray-200 sm:hidden" id="mobile-menu">
          <ul className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/ecofarm"
              className="regular-18 link  flex-center relative cursor-pointer pb-1.5 text-green-700 transition-all duration-75 hover:font-bold"
            >
              Home
            </Link>
            <Link
              href="/ecofarm#categories"
              className="regular-18 link  flex-center relative cursor-pointer pb-1.5 text-green-700 transition-all duration-75 hover:font-bold"
            >
              Services
            </Link>
            <Link
              href="/ecofarm/about"
              className="regular-16 link flex-center relative cursor-pointer pb-1.5 text-gray-50 transition-all duration-75 hover:font-bold"
            >
              About EcoFarms
            </Link>
            <Link
              href="/ecofarm/contact-us"
              className="link flex-center relative cursor-pointer pb-1.5 text-lg text-gray-50 transition-all duration-75 hover:font-bold"
            >
              Contact Us
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
