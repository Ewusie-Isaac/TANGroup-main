import Link from 'next/link';

const Action = () => {
  return (
    <>
      {/* <Link href="mailto:info@tanfreight.com">info@tanfreight.com</Link> */}
      <a
        className="flex items-center justify-end rounded-lg border bg-gray-500 p-2 text-white"
        href="tel:+233 204 261 569"
      >
        +233 204 261 569
      </a>
    </>
  );
};

export default Action;
