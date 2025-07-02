import { LuQuote } from "react-icons/lu";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineComment } from "react-icons/md";

const TestimonialCard = () => {
  return (
    <div className="bg-yellow-100 mx-auto p-5 rounded-2xl relative">
      <img
        src="/logo.png"
        className="absolute w-56 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-4 pointer-none:"
      />
      <span className="flex text-amber-400 text-2xl mb-4 ml-4">
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
      </span>
      <div className="flex gap-2">
        <div>
          <LuQuote className="opacity-20 text-4xl" />
        </div>
        <p className="text-left text-md text-gray-600">
          Investing in GreenAcres was the best decision I made. The returns have
          exceeded my expectations, and the professional management takes care
          of everything. My mango trees are thriving!
        </p>
      </div>
      <figure className="overflow-hidden flex items-center gap-3 text-left relative my-3">
        <img
          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
          className="object-cover rounded-full  w-12 h-12"
        />
        <figcaption>
          <h2 className="text-lg font-bold">Jhon deo</h2>
          <p className="text-md text-gray-400">Mumbai</p>
        </figcaption>
        <MdOutlineComment className="text-right absolute right-4 opacity-10 text-4xl" />
      </figure>
    </div>
  );
};

export default TestimonialCard;
