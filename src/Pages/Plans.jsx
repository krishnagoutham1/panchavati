import HeadingText from "../Components/HeadingText";
import PlotPlanCard from "../Components/PlotPlanCard";
import { plotPlans } from "../Utils/staticData";
import { IoMdTrendingUp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";

const Plans = () => {
  return (
    <section id="plots">
      <HeadingText
        name="Choose Your Perfect Plot"
        description="Select from our carefully designed plot plans, each offering different scales of agricultural investment with guaranteed returns and professional management."
      />
      <div className="lg:flex max-w-7xl mx-auto justify-evenly gap-5">
        {plotPlans.map((plot) => (
          <PlotPlanCard key={plot.id} data={plot} />
        ))}
      </div>
      <div className="lg:flex max-w-7xl mx-auto bg-blue-300 rounded-xl space-y-6 my-16 py-4">
        <div className="flex flex-col justify-center items-center gap-3 p-8">
          <span className="bg-green-300 p-3 rounded-full">
            <IoMdTrendingUp className="text-3xl text-green-700" />
          </span>
          <h2 className="text-2xl font-bold">Guaranteed Returns</h2>
          <p className="text-gray-600">
            15-20% annual returns with our proven crop management system
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 p-8">
          <span className="bg-green-300 p-3 rounded-full">
            <FaLocationDot className="text-3xl text-green-700" />
          </span>
          <h2 className="text-2xl font-bold">Prime Locations</h2>
          <p className="text-gray-600">
            Strategic locations with excellent connectivity and market access
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 p-8">
          <span className="bg-green-300 p-3 rounded-full">
            <FaHandsHelping className="text-3xl text-green-700" />
          </span>
          <h2 className="text-2xl font-bold">Full Support</h2>
          <p className="text-gray-600">
            Complete farm management and maintenance support included
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
