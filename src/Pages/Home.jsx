import HeroImage from "../assets/hero.jpg";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden "
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${HeroImage})`,
          }}
        >
          {/* <div className="absolute inset-0 bg-black/0"></div> */}
        </div>

        <div className="z-1 max-w-4xl text-white space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            Own Your Piece of
            <span className="block text-green-500 ">Paradise</span>
          </h1>
          <p className="text-md md:text-lg lg:text-xl font-semibold">
            Premium agricultural plots with established crops, modern
            facilities, and sustainable farming practices. Start your journey to
            agricultural prosperity today.
          </p>
          <div className="flex justify-center  gap-5 md:flex-row flex-col md:max-w-2xl max-w-3xs mx-auto">
            <button className="bg-green-800 border-green-800 border-3 px-6 py-3 rounded-4xl font-semibold text-xl sm:text-md">
              Explore Plots
            </button>
            <button className="hover:bg-white hover:text-black transition-all duration-500 cursor-pointer sm:text-md hover:border-white border-3 px-6 py-3 rounded-4xl font-semibold text-xl">
              Schedule Visit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
