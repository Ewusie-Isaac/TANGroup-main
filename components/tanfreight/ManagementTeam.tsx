import Image from 'next/image';
import Link from 'next/link';

const ManagementTeam = () => {
  return (
    <section className="bg-gray-100">
      {/* <div className="flex flex-col items-center justify-center">
        <div className="partners mb-2 mt-5 px-10 text-xl font-bold uppercase">
          Founding Partners
        </div>
        <div className="flex w-full flex-col justify-evenly gap-14 p-8 lg:gap-20 lg:p-20">
          <div className="flex flex-col-reverse gap-5 lg:grid lg:grid-cols-2">
            <div className="">
              <div>
                <h3 className="mb-3 rounded-md bg-purple-2 p-2 text-xl text-gray-200">
                  Raphael Teffutor - CEO
                </h3>
                <p className="mb-3">
                  Raphael is a serial entrepreneur and a visionary. He is the
                  Consequuntur quo quidem, ea voluptates hic debitis quibusdam!
                </p>
                <ul className="mb-3 flex items-center gap-3 text-3xl">
                  <Link
                    href="mailto:raphael.teffutor@tanfreight.com"
                    className="email"
                  >
                    <span>&#9993;</span>
                  </Link>
                  <Link href="https://www.linkedin.com/in/raphael-teffutor-368104136?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACEeiQABocZ9K9ELmQ7qh8Cx370IrJ0Vg5U&lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BZsrooM54R%2B2Jc6bejOV0Mw%3D%3D">
                    <Image src="/link.jpg" alt="" width={24} height={24} />
                  </Link>
                  <Link href="">
                    <Image src="/ig.png" alt="" width={24} height={24} />
                  </Link>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 rounded-md bg-purple-2 p-2 text-xl text-gray-200">
                  Raphael Teffutor - Experience
                </h3>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque dolorem cumque, dolorum tempora natus aliquam vel
                </p>
                <ul className="mb-3 flex flex-col">
                  <Link href="" className="email">
                    <span className="mr-1 text-xl text-purple-2">&#10004;</span>{' '}
                    10 years in dolorum tempora natus aliquam vel
                  </Link>
                  <Link href="" className="email">
                    <span className="mr-1 text-xl text-purple-2">&#10004;</span>{' '}
                    10 years in Eaque dolorem cumque,
                  </Link>
                  <Link href="" className="email">
                    <span className="mr-1 text-xl text-purple-2">&#10004;</span>{' '}
                    10 years in dolorum tempora natus aliquam vel
                  </Link>
                </ul>
              </div>
            </div>
            <Image
              src="/managements/RT.jpg"
              width={800}
              height={800}
              alt="tan stuff"
            />
          </div>
          <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2">
            <Image
              src="/managements/RN.jpg"
              width={800}
              height={800}
              alt="tan stuff"
            />
            <div className="">
              <div>
                <h3 className="mb-3 rounded-md bg-purple-2 p-2 text-xl text-gray-200">
                  Raphael Nyarkoh - COO
                </h3>
                <p className="mb-3">
                  Raphael is a serial entrepreneur and a visionary. He is the
                  Consequuntur quo quidem, ea voluptates hic debitis quibusdam!
                </p>
                <ul className="mb-3 flex items-center gap-3 text-3xl">
                  <Link
                    href="mailto:raphael.nyarkoh@tanfreight.com"
                    className="email"
                  >
                    <span>&#9993;</span>
                  </Link>
                  <Link href="https://www.linkedin.com/in/raphael-nyarkoh-0704522b5?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEu04tQB7kzKpw3EJ-4esSfYpij1sWXfu0c&lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BZsrooM54R%2B2Jc6bejOV0Mw%3D%3D">
                    <Image src="/link.jpg" alt="" width={24} height={24} />
                  </Link>
                  <Link href="" className="email">
                    <Image src="/ig.png" alt="" width={24} height={24} />
                  </Link>
            
                </ul>
              </div>
              <div>
                <h3 className="mb-3 rounded-md bg-purple-2 p-2 text-xl text-gray-200">
                  Raphael Nyarko - Experience
                </h3>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque dolorem cumque, dolorum tempora natus aliquam vel
                </p>
                <ul className="mb-3 flex flex-col">
                  <Link href="" className="email">
                    <span className="mr-1 text-xl text-purple-2">&#10004;</span>{' '}
                    10 years in dolorum tempora natus aliquam vel
                  </Link>
                  <Link href="" className="email">
                    <span className="mr-1 text-xl text-purple-2">&#10004;</span>{' '}
                    10 years in Eaque dolorem cumque,
                  </Link>
                  <Link href="" className="email">
                    <span className="mr-1 text-xl text-purple-2">&#10004;</span>{' '}
                    10 years in dolorum tempora natus aliquam vel
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="p-10">
        <h2 className="partners mb-8 px-10 text-center text-xl font-bold uppercase">
          TAN management team
        </h2>

        <ul className="staffs">
          <div className="flex flex-col items-center justify-center bg-purple-2 p-5 text-gray-200">
            <div>
              <h2 className="mb-3 text-xl font-semibold capitalize lg:text-2xl">
                Meet our Management team
              </h2>
              <p className="mb-5">
                These people work to make our services, the best!
              </p>
            </div>
            <Link
              className="rounded-lg bg-gray-200 p-3 text-purple-1 transition-all hover:bg-gray-300
               hover:text-lg "
              href="mailto:info@tanfreight.com"
            >
              Contact us now
            </Link>
          </div>
          <div className="rounded-md bg-purple-2 text-gray-200">
            <Image
              className="w-full bg-cover bg-center"
              src="/freight/managements/RT-1-2.jpg"
              width={400}
              height={400}
              alt="tan stuff"
            />
            <div className="flex items-start justify-between p-3">
              <div>
                <h3 className="text-xl font-semibold">Raphael Teffutor</h3>
                <p>Chief Executive Officer</p>
              </div>
              <div className="flex items-center justify-center gap-3 align-baseline">
                {/* <Link
                  href="mailto:raphael.teffutor@tanfreight.com"
                  className="email"
                >
                  <span className="text-4xl">&#9993;</span>
                </Link> */}
                <Link href="https://www.linkedin.com/in/raphael-teffutor-368104136?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACEeiQABocZ9K9ELmQ7qh8Cx370IrJ0Vg5U&lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BZsrooM54R%2B2Jc6bejOV0Mw%3D%3D">
                  <Image
                    src="/freight/managements/linkedin.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </Link>
                {/* <Link href="">
                  <Image src="/ig.png" alt="" width={24} height={24} />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="rounded-md bg-purple-2 text-gray-200">
            <Image
              src="/freight/managements/RN-1-2.jpg"
              width={400}
              height={400}
              alt="tan stuff"
            />
            <div className="flex items-start justify-between p-3">
              <div>
                <h3 className="text-xl font-semibold">Raphael Nyarko</h3>
                <p>Chief Operating Officer</p>
              </div>
              <div className="flex items-center justify-center gap-3 align-baseline">
                {/* <Link
                  href="mailto:raphael.nyarkoh@tanfreight.com"
                  className="email"
                >
                  <span className="text-4xl">&#9993;</span>
                </Link> */}
                <Link href="https://www.linkedin.com/in/raphael-nyarkoh-0704522b5?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEu04tQB7kzKpw3EJ-4esSfYpij1sWXfu0c&lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BZsrooM54R%2B2Jc6bejOV0Mw%3D%3D">
                  <Image
                    src="/freight/managements/linkedin.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </Link>
                {/* <Link href="" className="email">
                  <Image src="/ig.png" alt="" width={24} height={24} />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="rounded-md bg-purple-2 text-gray-200">
            <Link href="">
              <Image
                src="/freight/managements/IS-2.jpg"
                width={400}
                height={400}
                alt="tan stuff"
              />
            </Link>
            <div className="flex items-start justify-between p-3">
              <div>
                <h3 className="text-xl font-semibold">Isaac Obiri Sakyiamah</h3>
                <p>Chief Finance Officer</p>
              </div>
              <div className="flex items-center justify-center gap-3 align-baseline">
                {/* <Link href="mailto:isaac.sakyiamah@tanfreight.com">
                  <span className="text-4xl">&#9993;</span>
                </Link> */}
                <Link href="https://www.linkedin.com/in/isaac-networks-2a5a9a183?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACtoxh0Bit5tAkmnrUQfyXbFBWpyd5snEMY&lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BZsrooM54R%2B2Jc6bejOV0Mw%3D%3D">
                  <Image
                    src="/freight/managements/linkedin.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-purple-2 text-gray-200">
            <Link href="">
              <Image
                src="/freight/managements/HR-2.jpg"
                width={400}
                height={400}
                alt="tan stuff"
              />
            </Link>
            <div className="flex items-start justify-between p-3">
              <div>
                <h3 className="text-xl font-semibold">Juliana Opoku Mensah</h3>
                <p>Director of Human Resources</p>
              </div>
              <div className="flex items-center justify-center gap-3 align-baseline">
                {/* <Link
                  href="mailto:julienne.opokumensah@tanfreight.com"
                  className="email"
                >
                  <span className="text-4xl">&#9993;</span>
                </Link> */}
                <Link href="" className="email">
                  <Image
                    src="/freight/managements/linkedin.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </Link>
                {/* <Link href="" className="email">
                  <Image src="/ig.png" alt="" width={24} height={24} />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="rounded-md bg-purple-2 text-gray-200">
            <Link href="">
              <Image
                src="/freight/managements/EB-2.JPG"
                width={400}
                height={400}
                alt="Esthere Bampoh tan stuff"
              />
            </Link>
            <div className="flex items-start justify-between p-3">
              <div>
                <h3 className="text-xl font-semibold">Esther Ajaaka Bampoh</h3>
                <p>Director of Marketing & Bus. Development</p>
              </div>
              <div className="flex items-center justify-center gap-3 align-baseline">
                {/* <Link
                  href="mailto:esther.bampoh@tanfreight.com"
                  className="email"
                >
                  <span className="text-4xl">&#9993;</span>
                </Link> */}
                <Link href="https://www.linkedin.com/in/esther-nanaama-bampoh-53a2331a1?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC8ysj4BR37_DvcCFnwICXifPV7Gci4Q-MM&lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BZsrooM54R%2B2Jc6bejOV0Mw%3D%3D">
                  <Image
                    src="/freight/managements/linkedin.png"
                    alt=""
                    width={38}
                    height={38}
                  />
                </Link>
                {/* <Link href="">
                  <Image src="/ig.png" alt="" width={30} height={30} />
                </Link> */}
              </div>
            </div>
          </div>
          {/* <div className="rounded-md bg-purple-2 text-gray-200">
            <Link href="">
              <Image
                src="/managements/IS-2.jpg"
                width={400}
                height={400}
                alt="tan stuff"
              />
            </Link>
            <div className="flex items-start justify-between p-3">
              <div>
                <h3 className="text-xl font-semibold">Isaac Obiri Sakyiamah</h3>
                <p>Chief Finance Officer</p>
              </div>
              <div className="flex items-center justify-center gap-3 align-baseline">
                <Link href="mailto:isaac.sakyiamah@tanfreight.com">
                  <span className="text-4xl">&#9993;</span>
                </Link>
                <Link href="https://www.linkedin.com/in/isaac-networks-2a5a9a183?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACtoxh0Bit5tAkmnrUQfyXbFBWpyd5snEMY&lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BZsrooM54R%2B2Jc6bejOV0Mw%3D%3D">
                  <Image
                    src="/managements/linkedin.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            </div>
          </div> */}
        </ul>
      </div>
    </section>
  );
};

export default ManagementTeam;
