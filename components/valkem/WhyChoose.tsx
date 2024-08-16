const WhyChoose = () => {
  return (
    <section id="why" className="bg-gray-200 p-5 scroll-smooth">
      <div className="m-4 flex flex-col gap-10 p-5 lg:flex lg:flex-row  lg:gap-32">
        <div className="">
          <h3>Why Choose us</h3>
          <h1 className="text-xl capitalize lg:text-3xl">
            Customers satisfaction is our primary focus
          </h1>
        </div>
        <p className="lg:w-2/3">
          At Valkem, customer satisfaction is our top priority. We specialize in
          providing seamless procurement services tailored to meet the unique
          needs of each company. We offer smooth and efficient procurement
          process, delivering high-quality products and services for our
          cherished customers. Trust Valkem to handle your procurement needs
          with precision and care, so you can focus on what matters most—growing
          your business.
        </p>
      </div>
      <div className="why">
        <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-gray-100 p-2 shadow-md lg:p-4">
          <span className="text-6xl text-gray-500">&#9997;</span>
          <h2>1. Best Service</h2>
          <p>
            Experience the best services with Valkem, where excellence meets
            every procurement need.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-gray-100 p-4 shadow-md">
          <span className="text-5xl text-gray-500">&#10084;</span>
          <h2>2. Expertise</h2>
          <p>
            Harness the power of our unparalleled expertise to elevate your
            procurement process and achieve exceptional results.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-gray-100 p-4 shadow-md">
          <span className="text-5xl text-gray-500">&#10004;</span>
          <h2>3. High Quality</h2>
          <p>
            Valkem delivers high-quality procurement services that exceed
            expectations, ensuring excellence in every transaction.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-gray-100 p-4 shadow-md">
          <span className="text-5xl text-gray-500">&#10032;</span>
          <h2>4. Dedicated Team</h2>
          <p>
            Our dedicated team at Valkem is committed to providing exceptional
            procurement services that exceed your expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
