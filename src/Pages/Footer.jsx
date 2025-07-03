import { FaLocationDot } from "react-icons/fa6";
import SocialLinks from "../Components/SocialLinks";
import { navItems } from "../Utils/staticData";
import { MdMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  const services = [
    "Farmland Plots",
    "Fruit Plantation",
    "Farmhouse Construction",
    "Landscaping Services",
    "Property Management",
    "Investment Consultation",
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#1B3409] to-[#2D5016] text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-white" />
      </div>

      <div className="section-container relative text-left">
        <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="mx-auto space-y-6 px-8 lg:px-0">
            <div className="flex items-center gap-3">
              <div className="bg-white">
                <img src="./logo.png" className="h-16 w-16" />
              </div>
              <div>
                <h3 className="font-merriweather text-2xl font-bold">
                  Panchavati Farms
                </h3>
                <p className="text-nature-beige text-sm">
                  Fresh Air, Green Space, <br />
                  Endless Pease ...
                </p>
              </div>
            </div>

            <p className="text-nature-beige leading-relaxed">
              Experience sustainable living with premium farmland plots
              featuring organic fruit plantations, eco-friendly amenities, and
              the perfect harmony of nature and modern comfort.
            </p>

            <div className="rounded-xl bg-black/30 p-3">
              <SocialLinks />
            </div>
          </div>

          <div className="mx-auto">
            <h4 className="mb-3 text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="duration-300 hover:text-green-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto">
            <h4 className="mb-3 text-xl font-semibold">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="mx-auto">
            <h4 className="mb-3 text-xl font-semibold">Contact Info</h4>
            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <div className="rounded-lg bg-green-100 p-3">
                  <FaLocationDot className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-nature-beige">Panchavati Farms </p>
                  <p className="text-nature-beige">Near Hyderabad, Telangana</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="rounded-lg bg-green-100 p-3">
                  <FaPhone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="rounded-lg bg-green-100 p-3">
                  <MdMailOutline className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-nature-beige">info@panchavati.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20">
          <div className="flex flex-col items-center justify-between gap-4 py-4 lg:flex-row">
            <div className="flex flex-col items-center space-x-2 md:flex-row">
              <span>© 2025 Panchavati Farms. All rights reserved</span>
              <span className="hidden md:block">|</span>
              <span>Made with &hearts; for Nature</span>
            </div>

            <div className="text-nature-beige flex space-x-6 text-sm">
              <a href="#">Privacy Policy</a>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
