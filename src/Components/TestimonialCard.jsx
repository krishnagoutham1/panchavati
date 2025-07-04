import { LuQuote } from "react-icons/lu";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineComment } from "react-icons/md";
import Avatar from "../assets/avatar.png";

const TestimonialCard = () => {
  return (
    <div className="relative rounded-2xl bg-amber-100 p-5">
      <img
        src="/logo.png"
        className="absolute top-1/2 left-1/2 w-56 -translate-x-1/2 -translate-y-1/2 transform opacity-4"
      />
      <span className="mb-4 ml-4 flex text-2xl text-amber-400">
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
      </span>
      <div className="flex gap-2">
        <div>
          <LuQuote className="text-4xl opacity-20" />
        </div>
        <p className="text-md text-left text-gray-600">
          Investing in Panchavati Farms was the best decision I made. The
          returns have exceeded my expectations, and the professional management
          takes care of everything. My mango trees are thriving!
        </p>
      </div>
      <figure className="relative my-3 flex items-center gap-3 overflow-hidden text-left">
        <img
          src={Avatar}
          className="h-12 w-12 rounded-full bg-white object-cover"
        />
        <figcaption>
          <h2 className="text-lg font-bold">Jhon </h2>
          <p className="text-md text-gray-400">Hyderabad</p>
        </figcaption>
        <MdOutlineComment className="absolute right-4 text-right text-4xl opacity-10" />
      </figure>
    </div>
  );
};

export default TestimonialCard;
