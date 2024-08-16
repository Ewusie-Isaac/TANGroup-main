import Image from 'next/image';

const Footer = () => {
  return (
    <section className="bg-slate-300 p-2 lg:p-8">
      <div className="flex flex-col gap-5 p-5 lg:flex lg:flex-row">
        <div className="lg:w-2/5">
          <Image
            src="/tanlogo.png"
            alt="TanFreight Logo"
            width={180}
            height={180}
          />
          <p>
            TAN Group of Companies is a diverse conglomerate operating in
            freight and logistics, sustainable agriculture (Ecofarms Africa),
            life sciences, and engineering (Valkem Engineering). Each division
            excels in its field, promoting efficiency, innovation, and
            sustainability. Together, they drive growth and development across
            multiple industries.
          </p>
          {/* <div>
            <h2 className="mb-2 text-3xl font-semibold">Contact Us</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <h2 className="font-semibold">GHANA HEAD OFFICE</h2>
                <p>62, 22318 Building Boundary Rd, East Legon - Accra</p>
                <p>+233(0)50 333 7178</p>
              </li>
              <li>
                <h2 className="font-semibold">IVORY COAST OFFICE</h2>
                <p>
                  Abidjan Cocody Reviera Bonoumin Non Loin D'abidjan Mall,
                  Ellyka
                </p>
              </li>
              <li>
                <h2 className="font-semibold">BENIN OFFICE</h2>
                <p>Cotonou Rue 391, Patte d'Oie, Cotounu, Littoral, Benin</p>
              </li>
              <li>
                <h2 className="font-semibold">TOGO OFFICE</h2>
                <p>
                  23318 62 Boundary Road,East legon opposite America House
                  Building
                </p>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-semibold">Our Services</h2>
          <div className="flex gap-3">
            <ul className="">
              <li>
                <a href="">Sea Freight</a>
              </li>
              <li>
                <a href="">Custom Clearance</a>
              </li>
              <li>
                <a href="">Air Freight</a>
              </li>
              <li>
                <a href="">Project Cargo</a>
              </li>
              <li>
                <a href="">Haulage</a>
              </li>
              <li>
                <a href="">Warehousing</a>
              </li>
              <li>
                <a href="">Cashew Nuts</a>
              </li>
              <li>
                <a href="">Peanuts</a>
              </li>
              <li>
                <a href="">Wheat</a>
              </li>
              <li>
                <a href="">Rice</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Almond</a>
              </li>
              <li>
                <a href="">Maize</a>
              </li>
              <li>
                <a href="#">Pipe Tubing</a>
              </li>
              <li>
                <a href="#">Compressor</a>
              </li>
              <li>
                <a href="#">Lifting Equipment Filters</a>
              </li>
              <li>
                <a href="#">Bearing and Lubrication</a>
              </li>
              <li>
                <a href="#">Sealing & Polymers</a>
              </li>
              <li>
                <a href="#">Valves Pumps</a>
              </li>
              <li>
                <a href="#">Fluid power Transfer and Control</a>
              </li>
              <li>
                <a href="#">Mechanical & Electrical Control Meters</a>
              </li>
            </ul>
          </div>
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
              <p>+233(0)50 333 7178</p>
            </li>
            <li>
              <h2 className="font-semibold">IVORY COAST OFFICE</h2>
              <p>
                Abidjan Cocody Reviera Bonoumin Non Loin D'abidjan Mall, Ellyka
              </p>
            </li>
            <li>
              <h2 className="font-semibold">BENIN OFFICE</h2>
              <p>Cotonou Rue 391, Patte d'Oie, Cotounu, Littoral, Benin</p>
            </li>
            <li>
              <h2 className="font-semibold">TOGO OFFICE</h2>
              <p>
                23318 62 Boundary Road,East legon opposite America House
                Building
              </p>
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
