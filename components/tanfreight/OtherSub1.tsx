import Image from 'next/image';
import React from 'react';

const OtherSub = () => {
  return (
    <div className="bg-gray-300 p-[1px] lg:hidden ">
      <ul className="flex items-center justify-center gap-5 p-2">
        <li className="flex flex-col items-center justify-center rounded-sm bg-slate-100 px-3 py-[3px] lg:flex-row">
          <Image src="/ecofarms.png" width={40} height={40} alt="" />
          <h2 className="">Ecofarms Africa</h2>
        </li>
        <li className="flex flex-col items-center justify-center  rounded-sm bg-slate-100 p-2 lg:flex-row">
          <Image src="/valkem.png" width={80} height={80} alt="" />
          <h2 className="">Valkem Engineering and Technology</h2>
        </li>
        {/* <li className="flex flex-col items-center justify-center gap-3 rounded-sm bg-slate-100 p-1 lg:flex-row">
          <Image src="/tanlogo.png" width={80} height={80} alt="" />
          <Image src="/tanlifescience.png" width={80} height={80} alt="" />
          <h2>TAN Life Sciences</h2>
        </li> */}
      </ul>
    </div>
  );
};

export default OtherSub;
