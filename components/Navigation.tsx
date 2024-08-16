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
    <header className="p-2 lg:p-5">
      <nav className="flex-between max-container relative z-30 rounded-xl bg-black p-2 px-6 lg:px-2">
        <Link href="/">
          <Image
            src="/tangroupe.png"
            alt="Tan Groupe Logo"
            width={64}
            height={22}
          />
        </Link>
        <div className="hidden h-full  gap-10 text-gray-10 lg:flex">
          <div
            // href="#"
            className="regular-16 link flexCenter relative cursor-pointer pb-1.5 transition-all duration-75 hover:font-bold"
          >
            TAN Freight
            <ul className="dropdrown flex flex-col gap-10 text-black">
              <Link className="dropdrown-list" href="/tanfreight/tanservices">
                Our Freight Services
              </Link>
              <Link className="dropdrown-list" href="/tanfreight/sdg">
                TAN Impacts
              </Link>
              <Link className="dropdrown-list" href="/tanfreight/whyTan">
                Why Choose TAN Freight
              </Link>
            </ul>
          </div>
          <div className="regular-16 link flexCenter relative cursor-pointer pb-1.5  transition-all duration-75 hover:font-bold">
            Life Sciences
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
          </div>
          <div className="regular-16 link flexCenter relative cursor-pointer pb-1.5  transition-all duration-75 hover:font-bold">
            EcoFarms
            <ul className="dropdrown flex flex-col gap-10 text-black">
              <Link className="dropdrown-list" href="#">
                001
              </Link>
              <Link className="dropdrown-list" href="#">
                002
              </Link>
              <Link className="dropdrown-list" href="#">
                003
              </Link>
            </ul>
          </div>
          <div className="regular-16 link flexCenter relative cursor-pointer pb-1.5  transition-all duration-75 hover:font-bold">
            Valkem Engineering
            <ul className="dropdrown flex flex-col gap-10 text-black">
              <Link className="dropdrown-list" href="/valkem/copper-cathode">
                Copper Cathode
              </Link>
              <Link className="dropdrown-list" href="/valkem/services">
                Valkem Services
              </Link>
              <Link className="dropdrown-list" href="/valkem/industry">
                Valkem Industries
              </Link>
            </ul>
          </div>
        </div>
        <div className="lg:flexCenter hidden">
          <Action />
        </div>
        <Image
          onClick={() => setIsOpen(!isOpen)}
          width={32}
          height={32}
          src="/menu.svg"
          alt="menu"
          className="inline-block cursor-pointer rounded-full bg-gray-100 p-1 lg:hidden"
        />
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isOpen && (
        <div
          className="z-50 h-screen w-full bg-slate-100 transition-all ease-in sm:hidden"
          id="mobile-menu"
        >
          <ul className="space-y-1 px-2 pb-3 pt-6">
            <Link
              href="/tanfreight"
              className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-50 transition-all duration-75 hover:font-bold"
            >
              TAN Freight and Logistics
            </Link>
            <Link
              href="#"
              className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-50 transition-all duration-75 hover:font-bold"
            >
              Life Sciences
            </Link>
            <Link
              href="#"
              className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-50 transition-all duration-75 hover:font-bold"
            >
              EcoFarms
            </Link>
            <Link
              href="/valkem"
              className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-50 transition-all duration-75 hover:font-bold"
            >
              Valkem Engineering
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
