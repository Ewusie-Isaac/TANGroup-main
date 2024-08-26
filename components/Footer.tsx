import Image from 'next/image';

const Footer = () => {
  return (
    <section className="bg-slate-300 p-2 lg:p-8">
      <div className="flex flex-col justify-center gap-5 p-5 lg:flex lg:flex-row">
        <div className="lg:w-2/5">
          <Image
            className="mb-2 rounded-xl"
            src="/tangroupe.png"
            alt="tan group Logo"
            width={110}
            height={110}
          />
          <p>
            TAN Group of Companies is a diverse conglomerate operating in
            freight and logistics, sustainable agriculture (Ecofarms Africa),
            life sciences, and engineering (Valkem Engineering). Each division
            excels in its field, promoting efficiency, innovation, and
            sustainability. Together, they drive growth and development across
            multiple industries.
          </p>
        </div>
        <div className="justify-self-center">
          <h2 className="mb-3 text-3xl font-semibold">Our Services</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/tanfreight">TAN Freight and Logistics</a>
            </li>
            <li>
              <a href="/valkem">Valkem Engineering and Technology</a>
            </li>
            <li>
              <a href="https://ecofarmsafrica.com/">Ecoframs Africa</a>
            </li>
            <li>
              <a href="">TAN Lifesciences</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Industry</h2>
          <ul>
            <li>
              <a href="#">Oil and Gas Industry</a>
            </li>
            <li>
              <a href="#">Renewable Energy Petrochemical Refinery</a>
            </li>
            <li>
              <a href="#">Powership Building Marine</a>
            </li>
            <li>
              <a href="#">Mining FMCG</a>
            </li>
            <li>
              <a href="#">Pharmaceutical Industry</a>
            </li>
            <li>
              <a href="#">Food and Beverage</a>
            </li>
            <li>
              <a href="#">Manufacturing industry</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-3xl font-semibold">Contact Us</h2>
          <ul className="flex flex-col gap-3">
            <li>
              <h2 className="font-semibold">GHANA HEAD OFFICE</h2>
              <p>62, 22318 Building Boundary Rd, East Legon - Accra</p>
              <p>info@tangroupe.com</p>
              <p>+233(0)50 333 7178</p>
            </li>
          </ul>
        </div>
      </div>
      <p className="my-5 pt-5 text-center">
        &copy; {new Date().getFullYear()} all right reveseved - TAN Group of
        Company
      </p>
    </section>
  );
};

export default Footer;
