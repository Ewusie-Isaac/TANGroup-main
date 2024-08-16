import Link from 'next/link';

const Action = () => {
  return (
    <>
      {/* <Link href="mailto:info@tanfreight.com">info@tanfreight.com</Link> */}
      <a
        className="flex items-center  justify-end rounded-lg border bg-gray-10 p-2 "
        href="tel:+233 (0) 50 333 7178"
      >
        +233 (0) 50 333 7178
      </a>
    </>
  );
};

export default Action;
