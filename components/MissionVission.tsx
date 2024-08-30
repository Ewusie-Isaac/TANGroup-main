import React from 'react';

const MissionVission = () => {
  return (
    <div className="m-3">
      <div className="rounded-md bg-orange-100 text-gray-100 shadow-md">
        {/* <h2 className="p-2 text-3xl font-semibold">Distinct Features</h2> */}
        <ul className="flex flex-col flex-wrap gap-5 p-2 lg:grid lg:grid-cols-2">
          <li className="rounded-md bg-gray-100 p-3 text-gray-900 shadow-md">
            <span className="mb-2 text-xl font-bold">MISSION</span>
            <p>
              To lead with innovation and excellence across a diverse range of
              industries, delivering cutting-edge solutions and transformative
              impact globally. We are dedicated to advancing sustainability,
              fostering partnerships, and driving positive change in every
              sector we engage with, from engineering and technology to
              agriculture, life sciences, and beyond.
            </p>
          </li>
          <li className="rounded-md bg-gray-100 p-3 text-gray-900 shadow-md">
            <span className="mb-2 text-xl font-bold">VISION</span>
            <p>
              To be a leading global conglomerate recognized for pioneering
              advancements and creating impactful solutions that shape the
              future of industries. We envision a world where our expertise and
              innovations set new benchmarks for quality, sustainability, and
              progress, enriching lives and empowering businesses worldwide.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MissionVission;
