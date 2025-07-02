import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { navItems } from "../Utils/staticData";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 
    ${scrolled ? "bg-white/90 shadow-xl backdrop-blur-md" : ""}`}
    >
      <section className="max-w-7xl mx-auto flex justify-between p-4">
        <div className="flex items-center space-x-3">
          <a href="#" className="w-10 cursor-pointer">
            <img src="/logo.png" />
          </a>
          <div className="text-2xl font-extrabold text-green-900">
            Panchavati Farms
          </div>
        </div>
        <div className="flex space-x-4 md:space-x-6 items-center">
          <nav className="lg:flex items-center space-x-6 hidden pr-3">
            {navItems.map((nav, i) => {
              return (
                <a
                  key={i}
                  href={nav.href}
                  className="cursor-pointer text-lg hover:text-green-600"
                >
                  {nav.name}
                </a>
              );
            })}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl"
          >
            {!menuOpen ? <IoMdMenu /> : <LiaTimesSolid />}
          </button>
        </div>
      </section>
      {menuOpen && (
        <div className="flex flex-col bg-amber-50 m-3 rounded-2xl p-3 lg:hidden space-y-4 text-left px-8 mb-5">
          {navItems.map((nav, i) => {
            return (
              <a
                key={i}
                href={nav.href}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-xl  "
              >
                {nav.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
