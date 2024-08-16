import ManagementTeam from '@/components/tanfreight/ManagementTeam';
import Wrapper from '@/components/tanfreight/Wrapper';
import { Metadata } from 'next';
import Image from 'next/image';
export const metadata: Metadata = {
  title: 'About Us',
  description:
    'TAN Freight and Logistics is a Ghanaian-owned enterprise specializing in comprehensive freight and logistics solutions.',
};
const AboutUs = () => {
  return (
    <Wrapper>
      <section className="max-containe pb-2 pt-4">
        <div className="relative mb-4 p-8">
          <Image
            src="/tanlogo.png"
            alt="tan logo"
            width={50}
            height={50}
            className="absolute left-[23px] top-[18px] w-10 lg:w-[50px]"
          />
          <h2 className="bold-40 lg:bold-64">About us</h2>
          <div className=" flex flex-col-reverse gap-5 lg:grid lg:grid-cols-2">
            <div>
              <p className="regular-16 lg:regular-16 mb-8 text-gray-30">
                TAN Freight and Logistics Limited is a Ghanaian-owned enterprise
                specializing in comprehensive freight and logistics solutions.
                Renowned for our steadfast reliability and operational
                efficiency, we provide an extensive array of services, including
                International Freight Forwarding, Consultancy, Project Cargo,
                Cold-chain logistics, Cross-border trade, Pick up and
                Door-to-Door delivery, Haulage and Inland Transportation,
                Warehousing and Distribution. With full registration and
                licensing from relevant authorities such as the Registrar
                General’s Department, Customs Excise and Preventive Service
                (CEPS), and the Chamber of Commerce and Industry of Ivory Coast
                (Guichet Unique du Commerce Extérieur - Côte d'Ivoire -GUCE).
              </p>
              <p className="regular-16 lg:regular-16 mb-20 text-gray-30">
                We strictly uphold strict compliance with industry standards,
                ensuring our clients receive services of the highest quality and
                reliability providing them with peace of mind. Operating across
                multiple locations, our footprint spans Accra (head office),
                Takoradi, and Elubo in Ghana, as well as Abidjan in Ivory Coast.
                Looking ahead, we are poised to expand our operations into
                Nigeria by June 2024. At TAN Freight and Logistics Limited, our
                unwavering commitment to excellence and continuous expansion
                underscores our dedication to meeting the evolving needs of our
                clients across the West African region and globally. Through
                strategic alliances and network partners in 195 countries across
                all continents, we strive to deliver unparalleled service and
                value to our clients worldwide.
              </p>
            </div>
            <div className="w-full">
              <Image
                width={500}
                height={500}
                alt="tan freight"
                className="w-full"
                src="/freight/managements/about-1.jpeg"
              />
            </div>
          </div>
        </div>
        <ManagementTeam />
      </section>
    </Wrapper>
  );
};

export default AboutUs;
