import Link from 'next/link';
import React from 'react';

const Categories = () => {
  return (
    <div id="categories">
      <div className="grid-1">
        <Link href="/valkem/copper-cathode" className="cat-3  relative p-3">
          <h2 className="absolute bottom-10 text-xl font-semibold">
            Copper Cathode
          </h2>
        </Link>
        <div className="cat-1 relative p-3">
          <h2 className="absolute bottom-10 text-xl font-semibold">
            Electrical equipments
          </h2>
        </div>
        <div className="cat-2  relative p-3">
          <h2 className="absolute bottom-10 text-xl font-semibold">
            Mechanical equipments
          </h2>
        </div>
        {/* <div className="cat-3  relative p-3">
          <h2 className="absolute bottom-10 text-xl font-semibold">
            Intruments and Tools
          </h2>
        </div> */}
      </div>
    </div>
  );
};

export default Categories;
