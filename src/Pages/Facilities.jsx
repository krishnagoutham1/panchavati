import FacilitiesCard from "../Components/FacilitiesCard";
import HeadingText from "../Components/HeadingText";
import { FacilitiesDetails } from "../Utils/staticData";
import { GiCctvCamera } from "react-icons/gi";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaHandHoldingWater } from "react-icons/fa";
import FarmInfraImage from "../assets/farm-infra.png";

const Facilities = () => {
  return (
    <section id="facilities">
      <div className="section-container">
        <HeadingText
          name="World-Class Facilities"
          description="Every plot comes equipped with modern infrastructure and amenities designed to support successful agricultural operations and comfortable living."
        />
        <div className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {FacilitiesDetails.map((facility) => (
            <FacilitiesCard key={facility.id} data={facility} />
          ))}
        </div>
        <div className="items-center justify-between gap-4 text-left md:flex">
          <div className="mb-12 space-y-3 lg:mb-0 lg:space-y-6">
            <h2 className="text-2xl font-semibold lg:text-3xl">
              Sustainable Infrastructure
            </h2>
            <div className="flex items-center space-x-4">
              <div className="rounded-lg bg-emerald-200 p-2 text-xl text-green-800">
                <FaHandHoldingWater />
              </div>
              <div>
                <h3 className="text-lg md:text-xl">Water Management</h3>
                <p className="text-md">
                  Rainwater harvesting and efficient irrigation systems
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="rounded-lg bg-emerald-200 p-2 text-xl text-green-800">
                <MdEnergySavingsLeaf />
              </div>
              <div>
                <h3>Green Energy</h3>
                <p>Solar power systems and energy-efficient solutions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="rounded-lg bg-emerald-200 p-2 text-xl text-green-800">
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
              src={FarmInfraImage}
              alt="Modern farm facilities"
              className="mx-auto max-h-80 w-full max-w-xs rounded-2xl object-cover shadow-lg md:max-w-sm lg:max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
