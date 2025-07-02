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
    <section id="gallery">
      <HeadingText
        name="Gallery"
        description="Take a visual tour of our agricultural plots, facilities, and thriving crops. See the quality and care that goes into every aspect of our development."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {galleryData.map(({ src, info, category }, i) => {
          return (
            <div
              key={i}
              onClick={() => setOpen(true)}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform  transition-all duration-300 animate-fade-in"
            >
              <img
                src={src}
                className="h-64 w-full hover:scale-110 duration-500 object-cover cursor-pointer"
              />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 text-left text-white">
                <h2>{category}</h2>
                <p>{info}</p>
              </div>
            </div>
          );
        })}
      </div>
      {open && (
        <div
          className="min-h-screen min-w-screen fixed z-100 bg-black/90 inset-0 flex items-center justify-center"
          onClick={handleClose}
        >
          <div
            className="max-w-4xl relative mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="object-cover"
              src="https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <div className="text-4xl text-white absolute left-0 top-1/2 bg-black/60 cursor-pointer p-2">
              <FaChevronLeft />
            </div>
            <div className="text-4xl text-white absolute right-0 top-1/2 bg-black/60 cursor-pointer p-2">
              <FaChevronRight />
            </div>
          </div>
          <div className="absolute top-5 right-5 text-white text-4xl font-extrabold cursor-pointer ">
            <IoClose />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
