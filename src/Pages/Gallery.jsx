import HeadingText from "../Components/HeadingText";
import { galleryData } from "../Utils/staticData";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { useState } from "react";

const Gallery = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <section id="gallery" className="section-container">
      <HeadingText
        name="Gallery"
        description="Take a visual tour of our agricultural plots, facilities, and thriving crops. See the quality and care that goes into every aspect of our development."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleryData.map(({ src, info, category }, i) => {
          return (
            <div
              key={i}
              onClick={() => setOpen(true)}
              className="group animate-fade-in relative transform cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-400"
            >
              <img
                src={src}
                className="h-64 w-full object-cover duration-500 hover:scale-110"
              />
              <div className="absolute right-0 bottom-0 left-0 bg-black/15 p-4 text-left text-white opacity-80 group-hover:opacity-100 lg:opacity-0">
                <h2 className="inline rounded-2xl bg-green-500 px-2 py-1">
                  {category}
                </h2>
                <p>{info}</p>
              </div>
            </div>
          );
        })}
      </div>
      {open && (
        <div
          className="fixed inset-0 z-100 flex min-h-screen min-w-screen items-center justify-center bg-black/90"
          onClick={handleClose}
        >
          <div
            className="relative mx-auto max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="object-cover"
              src="https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <div className="absolute top-1/2 left-0 cursor-pointer bg-black/60 p-2 text-4xl text-white">
              <FaChevronLeft />
            </div>
            <div className="absolute top-1/2 right-0 cursor-pointer bg-black/60 p-2 text-4xl text-white">
              <FaChevronRight />
            </div>
          </div>
          <div className="absolute top-5 right-5 cursor-pointer text-4xl font-extrabold text-white">
            <IoClose />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
