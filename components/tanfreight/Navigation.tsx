'use client';
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Action from './Action';
import OtherSub1 from './OtherSub1';
import OtherSub from './OtherSub';
import { usePathname } from 'next/navigation';
// import { useSelectedLayoutSegment } from 'next/navigation';

const Navigation = () => {
  // let segment = useSelectedLayoutSegment();
  // let active = segment;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const path = usePathname();
  return (
    <header className="lg:mb-10">
      {/* <OtherSub /> */}
      <div className="hidden  items-center justify-between gap-2 py-2 pr-10 lg:flex lg:bg-gray-10">
        <OtherSub />
        <div className="flex items-center justify-end rounded-lg bg-purple-2 p-3 text-gray-10">
          <Link href="mailto:info@tanfreight.com">info@tanfreight.com</Link>
          {/* <Link className="p-2 uppercase" href="mailto:info@tanfreight.com">
            Request a quote
          </Link> */}
        </div>
      </div>
      <OtherSub1 />
      <nav className="flexBetween max-container relative z-30 bg-purple-2 p-3  lg:px-2 3xl:px-0">
        <Link href="/">
          <Image
            src="/tanlogo.png"
            alt="TanFreight Logo"
            width={84}
            height={42}
          />
        </Link>
        <ul className="hidden h-full  gap-10 text-gray-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 flexCenter cursor-pointer pb-1.5  transition-all hover:font-bold"
            >
              <span
                className={`${link.href === path ? 'rounded-md border-2 border-gray-100  px-5 py-1' : ''}`}
              >
                {' '}
                {link.label}
              </span>
            </Link>
          ))}
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
        <div
          className="z-50 h-screen w-full transition-all ease-in sm:hidden"
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                onClick={toggle}
                href={link.href}
                key={link.key}
                className="regular-16 flexCenter cursor-pointer pb-1.5 text-gray-50 transition-all hover:font-bold"
              >
                <span
                  className={`${link.href === path ? 'rounded-md border-2 border-purple-1  px-5 py-1' : ''}`}
                >
                  {' '}
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* <div>
        <Image
          width={32}
          height={32}
          src="/menu.svg"
          alt="menu"
          className="inline-block cursor-pointer lg:hidden"
        />
      </div> */}
    </header>
  );
};

export default Navigation;
