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
      className={`fixed top-0 right-0 left-0 z-50 bg-white/30 ${scrolled ? "bg-white/90 text-green-600 shadow-2xl backdrop-blur-md" : ""}`}
    >
      <section className="section-container flex justify-between">
        <div className="flex items-center space-x-3">
          <a href="#" className="w-10 cursor-pointer">
            <img src="/logo.png" />
          </a>
          <div className="text-2xl font-extrabold text-green-900">
            Panchavati Farms
          </div>
        </div>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((nav, i) => {
            return (
              <a
                key={i}
                href={nav.href}
                className="cursor-pointer text-xl font-semibold hover:text-sky-900"
              >
                {nav.name}
              </a>
            );
          })}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl lg:hidden"
        >
          {!menuOpen ? <IoMdMenu /> : <LiaTimesSolid />}
        </button>
      </section>
      {menuOpen && (
        <div className="m-3 mb-5 flex flex-col space-y-4 rounded-2xl p-3 px-8 text-left lg:hidden">
          {navItems.map((nav, i) => {
            return (
              <a
                key={i}
                href={nav.href}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-xl"
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
