import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ManagementTeam = () => {
  return (
    <section className="bg-gray-100">
      <div className="flex flex-col items-center justify-center">
        <div className=" partners mb-2 mt-5 px-10 text-xl font-bold uppercase">
          Partners
        </div>
        <div className="flex w-full flex-wrap justify-evenly gap-5 p-10">
          <ul className="flex flex-col">
            <Link href="">
              <Image
                src="/main/about.jpg"
                width={400}
                height={400}
                alt="tan stuff"
              />
            </Link>
            <ul className="grid grid-cols-2">
              <Link href="" className="email">
                Role:
              </Link>
              <Link href="" className="email">
                Email:
              </Link>
              <Link href="" className="email">
                Linkedin:
              </Link>
              <Link href="" className="email">
                Mobile Number:
              </Link>
            </ul>
          </ul>
          <ul className="flex flex-col">
            <Link href="">
              <Image
                src="/main/about.jpg"
                width={400}
                height={400}
                alt="tan stuff"
              />
            </Link>
            <ul className="grid grid-cols-2">
              <Link href="" className="email">
                Role:
              </Link>
              <Link href="" className="email">
                Email:
              </Link>
              <Link href="" className="email">
                Linkedin:
              </Link>
              <Link href="" className="email">
                Mobile Number:
              </Link>
            </ul>
          </ul>
        </div>
      </div>
      <div className="p-10">
        <h2 className="partners px-10 text-center text-xl font-bold uppercase">
          Other managements team
        </h2>
        <ul className="f_first">
          <Link href="">
            <Link href="">
              <Image
                src="/main/about.jpg"
                width={600}
                height={600}
                alt="tan stuff"
              />
            </Link>
            <ul className="grid grid-cols-2">
              <Link href="" className="email">
                Role:
              </Link>
              <Link href="" className="email">
                Email:
              </Link>
              <Link href="" className="email">
                Linkedin:
              </Link>
              <Link href="" className="email">
                Mobile Number:
              </Link>
            </ul>
          </Link>
          <Link href="">
            <Link href="">
              <Image
                src="/main/about.jpg"
                width={600}
                height={600}
                alt="tan stuff"
              />
            </Link>
            <ul className="grid grid-cols-2">
              <Link href="" className="email">
                Role:
              </Link>
              <Link href="" className="email">
                Email:
              </Link>
              <Link href="" className="email">
                Linkedin:
              </Link>
              <Link href="" className="email">
                Mobile Number:
              </Link>
            </ul>
          </Link>
        </ul>
        <ul className="staffs ">
          {/* <Link href="">
            <Link href="">
              <Image
                src="/main/about.jpg"
                width={400}
                height={400}
                alt="tan stuff"
              />
            </Link>
            <ul className="grid grid-cols-2">
              <Link href="" className="email">
                Role:
              </Link>
              <Link href="" className="email">
                Email:
              </Link>
              <Link href="" className="email">
                Linkedin:
              </Link>
              <Link href="" className="email">
                Mobile Number:
              </Link>
            </ul>
          </Link>
          <Link href="">
            <Link href="">
              <Image
                src="/main/about.jpg"
                width={400}
                height={400}
                alt="tan stuff"
              />
            </Link>
            <ul className="grid grid-cols-2">
              <Link href="" className="email">
                Role:
              </Link>
              <Link href="" className="email">
                Email:
              </Link>
              <Link href="" className="email">
                Linkedin:
              </Link>
              <Link href="" className="email">
                Mobile Number:
              </Link>
            </ul>
          </Link>
          <Link href="">
            <Link href="">
              <Image
                src="/main/about.jpg"
                width={400}
                height={400}
                alt="tan stuff"
              />
            </Link>
            <ul className="grid grid-cols-2">
              <Link href="" className="email">
                Role:
              </Link>
              <Link href="" className="email">
                Email:
              </Link>
              <Link href="" className="email">
                Linkedin:
              </Link>
              <Link href="" className="email">
                Mobile Number:
              </Link>
            </ul>
          </Link> */}
          <Link href="">
            <Link href="">
              <Image
                src="/main/about.jpg"
                width={400}
                height={400}
                alt="tan stuff"
              />
            </Link>
            <ul className="grid grid-cols-2">
              <Link href="" className="email">
                Role:
              </Link>
              <Link href="" className="email">
                Email:
              </Link>
              <Link href="" className="email">
                Linkedin:
              </Link>
              <Link href="" className="email">
                Mobile Number:
              </Link>
            </ul>
          </Link>
          <Link href="">
            <Link href="">
              <Image
                src="/main/about.jpg"
                width={400}
                height={400}
                alt="tan stuff"
              />
            </Link>
            <ul className="grid grid-cols-2">
              <Link href="" className="email">
                Role:
              </Link>
              <Link href="" className="email">
                Email:
              </Link>
              <Link href="" className="email">
                Linkedin:
              </Link>
              <Link href="" className="email">
                Mobile Number:
              </Link>
            </ul>
          </Link>
          <Link href="">
            <Link href="">
              <Image
                src="/main/about.jpg"
                width={400}
                height={400}
                alt="tan stuff"
              />
            </Link>
            <ul className="grid grid-cols-2">
              <Link href="" className="email">
                Role:
              </Link>
              <Link href="" className="email">
                Email:
              </Link>
              <Link href="" className="email">
                Linkedin:
              </Link>
              <Link href="" className="email">
                Mobile Number:
              </Link>
            </ul>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default ManagementTeam;
