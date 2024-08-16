const Subcribe = () => {
  return (
    <section
      id="contact-us"
      className=" padding max-container flex items-center justify-between gap-10
       scroll-smooth max-lg:flex-col"
    >
      <h3 className="text-2xl font-bold  lg:text-3xl ">
        Sign up for <span className="text-purple-2">Update </span> & Newsletter
      </h3>
      <div className="flex w-full items-center justify-center gap-2 rounded-full p-2 max-sm:flex-col sm:border sm:border-gray-700 lg:max-w-[40%]">
        <input
          type="text"
          placeholder="info@tanfreight.com"
          className="input max-sm:border-purple-2"
        />
        <div className="z-10 flex items-center justify-center max-sm:-mt-16 max-sm:w-full max-sm:justify-end max-sm:px-2">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-full border border-purple-2
             bg-purple-2 px-7 py-4 text-lg leading-none text-white"
          >
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subcribe;
