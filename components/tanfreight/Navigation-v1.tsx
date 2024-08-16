'use client';
import { NAV_LINKS } from '@/constants';
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
      <div className="-pb-4 nav-head  hidden items-center justify-end gap-2 py-2 pr-10 lg:flex">
        <Link href="mailto:info@tanfreight.com">info@tanfreight.com</Link>
        <Link className="p-2 uppercase" href="mailto:info@tanfreight.com">
          Request a quote
        </Link>
      </div>
      <nav className=" flexBetween max-container relative z-30 px-6 pb-5 lg:px-2 3xl:px-0">
        <Link href="/tanfreight">
          <Image
            src="/tanlogo.png"
            alt="TanFreight Logo"
            width={74}
            height={32}
          />
        </Link>
        <ul className="hidden h-full gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 flexCenter cursor-pointer pb-1.5 text-gray-50 transition-all hover:font-bold"
            >
              {link.label}
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
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                onClick={toggle}
                href={link.href}
                key={link.key}
                className="regular-16 flexCenter cursor-pointer pb-1.5 text-gray-50 transition-all hover:font-bold"
              >
                {link.label}
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
