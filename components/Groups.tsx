import Link from 'next/link';

const Groups = () => {
  return (
    // <ul className="tangroup-list">
    <ul className="flex flex-col gap-2 lg:flex lg:flex-row">
      <div className="flex gap-3">
        <Link href="/tanfreight" className="bg-gray-100 p-4 text-purple-2">
          <h2 className="pb-3 text-3xl font-semibold">TAN Freight</h2>
          <p>
            TAN Life Sciences is dedicated to pioneering advancements in the
            field of healthcare through innovative research, cutting-edge
            technology, and a commitment to improving global well-being.
          </p>
        </Link>
        <Link href="/ecofarm" className="bg-green-500  p-4 ">
          <h2 className="pb-3 text-3xl font-semibold">TAN EcoFarms</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            voluptatibus nisi, optio reprehenderit sint exercitationem non
            quibusdam sapiente, veritatis magni vitae obcaecati minima quae!
            Consequuntur.
          </p>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link href="/lifescience" className="bg-gray-900 p-4 text-gray-100">
          <h2 className="pb-3 text-3xl font-semibold">TAN Life Sciences</h2>
          <p>
            TAN Life Sciences is dedicated to pioneering advancements in the
            field of healthcare through innovative research, cutting-edge
            technology, and a commitment to improving global well-being.
          </p>
        </Link>
        {/* <Link href="/ecofarm" className="bg-green-500  p-4 ">
        <h2 className="pb-3 text-3xl font-semibold">TAN EcoFarms</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          voluptatibus nisi, optio reprehenderit sint exercitationem non
          quibusdam sapiente, veritatis magni vitae obcaecati minima quae!
          Consequuntur.
        </p>
      </Link> */}
        <Link href="/valkem" className="bg-gray-700  p-4 text-gray-100">
          <h2 className="pb-3 text-3xl font-semibold">Valkem Engineering</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            voluptatibus nisi, optio reprehenderit sint exercitationem non
            quibusdam sapiente,
          </p>
        </Link>
      </div>
    </ul>
  );
};

export default Groups;
