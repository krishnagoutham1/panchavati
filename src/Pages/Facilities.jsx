import FacilitiesCard from "../Components/FacilitiesCard";
import HeadingText from "../Components/HeadingText";
import { FacilitiesDetails } from "../Utils/staticData";
import { GiCctvCamera } from "react-icons/gi";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaHandHoldingWater } from "react-icons/fa";

const Facilities = () => {
  return (
    <section id="facilities">
      <HeadingText
        name="World-Class Facilities"
        description="Every plot comes equipped with modern infrastructure and amenities designed to support successful agricultural operations and comfortable living."
      />
      <div className="flex flex-wrap justify-evenly gap-5 max-w-7xl mx-auto">
        {FacilitiesDetails.map((facility) => (
          <FacilitiesCard key={facility.id} data={facility} />
        ))}
      </div>
      <div className="md:flex justify-between items-center gap-5 text-left my-16 max-w-7xl mx-auto px-8">
        <div className="space-y-6 mb-8">
          <h2 className="text-3xl font-semibold">Sustainable Infrastructure</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-emerald-200 text-green-800 text-xl p-2 rounded-lg">
              <FaHandHoldingWater />
            </div>
            <div>
              <h3 className="text-xl">Water Management</h3>
              <p>Rainwater harvesting and efficient irrigation systems</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-emerald-200 text-green-800 text-xl p-2 rounded-lg">
              <MdEnergySavingsLeaf />
            </div>
            <div>
              <h3>Green Energy</h3>
              <p>Solar power systems and energy-efficient solutions</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-emerald-200 text-green-800 text-xl p-2 rounded-lg">
              <GiCctvCamera />
            </div>
            <div>
              <h3>Security Systems</h3>
              <p>24/7 monitoring with modern surveillance technology</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Modern farm facilities"
            className="rounded-2xl shadow-lg w-full max-h-80 object-cover max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Facilities;
