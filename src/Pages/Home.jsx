import HeroImage from "../assets/hero.jpg";
import PanchavatiPdf from "../assets/PANCHAVATI FARMS.pdf";
import { FaArrowDown } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${HeroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="z-1 max-w-4xl space-y-8 text-white">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl">
            Own Your Piece of
            <span className="block text-green-500">Paradise</span>
          </h1>
          <p className="text-md font-semibold md:text-lg lg:text-xl">
            Premium agricultural plots with established crops, modern
            facilities, and sustainable farming practices. Start your journey to
            agricultural prosperity today.
          </p>
          <div className="mx-auto flex max-w-3xs flex-col justify-center gap-5 md:max-w-2xl md:flex-row">
            <a
              href={PanchavatiPdf}
              target="_blank"
              download
              className="sm:text-md flex items-center gap-4 rounded-4xl border-3 border-green-800 bg-green-800 px-6 py-3 text-xl font-semibold"
            >
              <FaArrowDown /> Broacher
            </a>
            <a
              href={PanchavatiPdf}
              target="_blank"
              className="sm:text-md cursor-pointer rounded-4xl border-3 px-6 py-3 text-xl font-semibold transition-all duration-500 hover:border-white hover:bg-white hover:text-black"
            >
              View
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
            <MdOutlineKeyboardDoubleArrowDown className="text-4xl text-white/80" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
