import Image from 'next/image';

interface WorkProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleReviewed: string;
}
const WordDone = ({
  backgroundImage,
  title,
  subtitle,
  peopleReviewed,
}: WorkProps) => {
  return (
    <div
      className={`mb-5 h-full w-full min-w-[1100px] scroll-smooth  sm:text-sm ${backgroundImage} rounded-5xl bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter w-2/4 gap-4 rounded-5xl bg-black p-8">
          <div className="rounded-full bg-purple-2 p-4">
            <Image
              alt="Tan work done"
              src="/folded-map.svg"
              height={28}
              width={28}
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <h4 className="bold-16  text-white">{title}</h4>
            <p className=" medium-14  text-white">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Work = () => {
  return (
    <section className="2xl:max-container py:10 relative m-2 flex flex-col scroll-smooth lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar lg:h-[400px]8 flex h-[340px]  w-full items-start justify-start gap-8 overflow-x-auto xl:h-[640px]">
        <WordDone
          backgroundImage="bg-bg-img-1"
          title="Tan Freight Warehouse"
          subtitle="Our comprehensive solutions offer large-scale
              storage options for a minimum of three months, with routine
              inventory checks and reports for asset safety."
          peopleReviewed="72K reviews"
        />

        {/* <WordDone
          backgroundImage="bg-bg-img-2"
          title="Tan Freight Warehouse"
          subtitle="Some Description about Tan Freight Warehouse"
          peopleReviewed="72K reviews"
        /> */}
      </div>
      {/* <div className="flex justify-center max-md:flex-col md:w-full">
        <div className="flexEnd mt-10 px-2 ">
          <div className="relative w-full overflow-hidden rounded-3xl bg-purple-2 p-4 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-8 xl:py-10">
            <h2 className="md:regular-32 2xl:regular-32 md:bold-20 text-xl font-bold capitalize text-white">
              WAREHOUSING AND DISTRIBUTION
            </h2>
            <p className="regular-16 md:regular-18 2xl:regular-20 mt-3 text-white">
              At TAN Freight and Logistics, we specialize in optimizing supply
              chains through secure and organized warehousing services,
              guaranteeing efficient inventory management and order fulfillment.
              With strategically located warehouses and transportation
              expertise, we ensure seamless distribution of goods to their final
              destinations, including direct delivery and wholesale
              distribution. Our comprehensive solutions offer large-scale
              storage options for a minimum of three months, with routine
              inventory checks and reports for asset safety.
            </p>
          </div>
        </div>
        <div className="flexEnd mt-10 px-2 ">
          <div className="relative w-full overflow-hidden rounded-3xl bg-purple-2 p-4 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-8 xl:py-10">
            <h2 className="md:regular-14 2xl:regular-32 md:bold-20 text-xl font-bold capitalize text-white">
              DG PACKAGING AND HANDLING
            </h2>
            <p className="regular-16 md:regular-18  2xl:regular-20 mt-3 text-white">
              At TAN Freight and Logistics, safety is paramount in handling
              dangerous goods, adhering strictly to international regulatory
              standards like IATA and IMDG. Our team undergoes rigorous training
              to ensure expertise in secure packaging and meticulous handling
              procedures, minimizing risks and ensuring compliance throughout
              the transportation process. Clients trust us for peace of mind,
              knowing their hazardous materials are safely managed and compliant
              with regulations.
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Work;
