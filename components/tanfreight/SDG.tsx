import Image from 'next/image';

const SDG = () => {
  return (
    <section className="lg:mx-2">
      <div>
        <div className="p-4 text-gray-600">
          <div className="mb-4 flex flex-col items-center justify-center gap-8 lg:flex lg:flex-row">
            <Image src="/main/goal-9.png" width={300} height={300} alt="tan" />
            <ul>
              <h2 className="mb-3 text-xl font-bold">
                INDUSTRY, INNOVATION AND INFRASTRUCTURE
              </h2>
              <p>
                At TAN Freight and Logistics, we play a crucial role in
                developing robust infrastructure networks by facilitating
                seamless cross-border movement of goods and providing efficient
                transportation and warehousing services. This infrastructure is
                vital for driving economic growth, job creation, and sustainable
                development in Ghana, the wider West African region and the
                world at large. Additionally, our dedication to innovation and
                technology integration aligns with SDG 9's emphasis on fostering
                innovation. By continuously improving our operations and
                leveraging technological advancements such as live tracking of
                shipments, we strive to enhance efficiency and sustainability
                while contributing to broader development objectives. TAN
                Freight and Logistics is committed to creating a more
                sustainable and prosperous future through innovative solutions
                and technological advancements.
              </p>
            </ul>
          </div>
          <div className="mb-4 flex flex-col items-center justify-center gap-8 bg-gray-200 p-3 lg:flex lg:flex-row">
            <Image src="/main/goal-13.png" width={300} height={300} alt="tan" />
            <ul>
              <h2 className="mb-3 text-xl font-bold">CLIMATE ACTION</h2>
              <p>
                In addition to our commitment to exceptional service, we take
                active steps to reduce our environmental impact and uphold our
                responsibility to the planet. At TAN Freight and Logistics, we
                are committed to making a tangible impact on Goal 13: Climate
                Action. Through our steadfast dedication to sustainability and
                environmental responsibility, we strive to lead the way in
                combating climate change, by integrating green practices into
                our operations, reducing carbon emissions, and promoting
                eco-friendly logistics solutions. We aim to be catalysts for
                positive change. With our collective efforts and unwavering
                commitment, we believe we can make a significant contribution to
                achieving Goal 13 and creating a more sustainable future for
                generations to come.
              </p>
            </ul>
          </div>
          <div className="mb-4 flex flex-col items-center justify-center gap-8 lg:flex lg:flex-row">
            <Image src="/main/goal-17.png" width={300} height={300} alt="tan" />
            <ul>
              <h2 className="mb-3 text-xl font-bold">
                PARTNERSHIPS FOR THE GOALS
              </h2>
              <p>
                At TAN Freight and Logistics, we recognize the pivotal role of
                SDG 17 in driving global sustainable development. Our commitment
                to sustainability extends beyond our operations, as we actively
                engage in collaborative efforts with stakeholders across various
                sectors. Through strategic partnerships with global freight
                forwarders, governments, NGOs, businesses, and local
                communities, we harness collective expertise and resources to
                address challenges outlined in the SDGs. By promoting
                international cooperation and knowledge exchange, we accelerate
                progress towards sustainable development goals and generate
                positive impacts in the regions we operate. At TAN Freight and
                Logistics, SDG 17 guides our endeavors, inspiring us to
                cultivate partnerships, foster collaboration, and champion
                collective action towards a more sustainable and prosperous
                future for all.
              </p>
            </ul>
          </div>
          {/* <div className="mb-4 flex flex-col items-center justify-center gap-8 lg:flex lg:flex-row">
            <Image src="/main/mains.jpg" width={400} height={400} alt="tan" />
            <ul>
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus, molestias?
              </p>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SDG;
