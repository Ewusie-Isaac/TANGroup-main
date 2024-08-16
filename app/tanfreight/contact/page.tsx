import Wrapper from '@/components/tanfreight/Wrapper';
import { Metadata } from 'next';
import Image from 'next/image';
export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'For efficient and reliable air freight solutions tailored to your needs, contact TAN Freight and Logistics today',
};
const Page = () => {
  return (
    <Wrapper>
      <section className="padding padding-t max-containe px-8 pb-8 sm:px-8">
        <div className="relative mb-8">
          <Image
            src="/freight/tanlogo.png"
            alt="tan logo"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
          />
          <h2 className="bold-40 lg:bold-64">Contact us</h2>
          <p className="regular-14 lg:regular-16 text-gray-30 lg:w-3/5">
            For efficient and reliable air freight solutions tailored to your
            needs, contact TAN Freight and Logistics today.
          </p>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-10 max-lg:flex-col-reverse">
          <div className="flex flex-col items-start">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.458499833988!2d-0.14922259999999998!3d5.6466062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf836b3905ed0d%3A0x169ee39e7ea942b7!2sTAN%20Freight%20and%20Logistics%20Ltd!5e0!3m2!1sen!2sgh!4v1715772286543!5m2!1sen!2sgh"
              width="800"
              height="300"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            className="flex flex-1 flex-wrap justify-between gap-8 rounded-xl
           bg-gray-10 p-2 shadow-md lg:gap-1 lg:p-5"
          >
            <div className="rounded-xl bg-white p-3 shadow-md  lg:p-4">
              <h2 className="pb-4 text-xl">Our Head Office</h2>
              <p className="text-gray-500">
                TAN Freight and Logistics LTD, 62, 22318 Building Boundary Rd,
                East Legon - Accra
              </p>
              <div className="flex flex-col gap-2 pt-3 text-sm text-gray-500">
                <p> +233(0)50 333 7178</p>
                <p>info@tanfreight.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8">
          <h2 className="numbers m-5 text-center text-xl font-bold uppercase lg:text-3xl">
            Other offices
          </h2>

          <div className="features">
            {/* <div> */}
            <div>
              {/* <div className="m-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7950.186085833838!2d-1.77159917818829!3d4.924095586463249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe77985162289db%3A0x4dbacd6579498758!2sEffia%20Kuma%2C%20Takoradi!5e0!3m2!1sen!2sgh!4v1715772796375!5m2!1sen!2sgh"
                width="400"
                height="300"
                className="items-center"
                // style="border:0;"
                // allowfullscreen=""
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}
              <div className="rounded-xl bg-white p-4  shadow-md">
                <h2 className="pb-4 text-xl">TAKORADI BRANCH</h2>
                <p className="text-gray-500">
                  Cocoa Villa, Effiakuma No.1 Takoradi - Ghana Close To Karis
                  Medical Center
                </p>
                <div className="flex flex-col gap-2 pt-3 text-sm text-gray-500">
                  <p> +233(0)50 333 7178</p>
                  <p>info@tanfreight.com</p>
                </div>
              </div>
            </div>
            {/* </div> */}
            <div>
              {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7950.186085833838!2d-1.77159917818829!3d4.924095586463249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe77985162289db%3A0x4dbacd6579498758!2sEffia%20Kuma%2C%20Takoradi!5e0!3m2!1sen!2sgh!4v1715772796375!5m2!1sen!2sgh"
              width="400"
              height="300"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
              <div className="rounded-xl bg-white p-4 shadow-md">
                <h2 className="pb-2 text-xl">BENIN OFFICE</h2>
                <p className="text-gray-500">
                  BENIN REPUBLIC Cotonou Rue 391, Patte d'Oie, Cotounu,
                  Littoral, Benin
                </p>
                <div className="flex flex-col gap-2 pt-3 text-sm text-gray-500">
                  <p> +229 8922902001</p>
                  {/* <p> +233(0)50 333 7178</p> */}
                  <p>info@tanfreight.com</p>
                </div>
              </div>
            </div>
            <div>
              {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7950.186085833838!2d-1.77159917818829!3d4.924095586463249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe77985162289db%3A0x4dbacd6579498758!2sEffia%20Kuma%2C%20Takoradi!5e0!3m2!1sen!2sgh!4v1715772796375!5m2!1sen!2sgh"
              width="400"
              height="300"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
              <div className="rounded-xl bg-white p-4  shadow-md">
                <h2 className="pb-4 text-xl">ELUBO BRANCH</h2>
                <p className="text-gray-500">
                  WESTERN NORTH ELUBO Evelex Street, Ford Station, Elubo.
                </p>
                <div className="flex flex-col gap-2 pt-3 text-sm text-gray-500">
                  <p> +233(0)50 333 7178</p>
                  <p>info@tanfreight.com</p>
                </div>
              </div>
            </div>
            <div>
              {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7950.186085833838!2d-1.77159917818829!3d4.924095586463249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe77985162289db%3A0x4dbacd6579498758!2sEffia%20Kuma%2C%20Takoradi!5e0!3m2!1sen!2sgh!4v1715772796375!5m2!1sen!2sgh"
              width="400"
              height="300"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
              <div className="rounded-xl bg-white p-4  shadow-md">
                <h2 className="pb-4 text-xl"> IVORY COAST OFFICE</h2>
                <p className="text-gray-500">
                  IVORY COAST Abidjan Cocody Reviera Bonoumin Non Loin D'abidjan
                  Mall, Ellyka
                </p>
                <div className="flex flex-col gap-2 pt-3 text-sm text-gray-500">
                  <p> +255 2724556422 </p>
                  <p>info@tanfreight.com</p>
                </div>
              </div>
            </div>
            <div>
              {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7950.186085833838!2d-1.77159917818829!3d4.924095586463249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe77985162289db%3A0x4dbacd6579498758!2sEffia%20Kuma%2C%20Takoradi!5e0!3m2!1sen!2sgh!4v1715772796375!5m2!1sen!2sgh"
              width="400"
              height="300"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
              <div className="rounded-xl bg-white p-4  shadow-md">
                <h2 className="pb-4 text-xl">NIGERIA OFFICE</h2>
                <p className="text-purple-2">OPENNING SOON!</p>
                {/* <p className="text-gray-500">
                IVORY COAST Abidjan Cocody Reviera Bonoumin Non Loin D'abidjan
                Mall, Ellyka
              </p>
              <div className="flex flex-col gap-2 pt-3 text-sm text-gray-500">
                <p> +255 2724556422 </p>
                <p>info@tanfreight.com</p>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Page;
