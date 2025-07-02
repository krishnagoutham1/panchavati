import CropCard from "../Components/CropCard";
import HeadingText from "../Components/HeadingText";
import { CropDetails } from "../Utils/staticData";
import { LiaCertificateSolid } from "react-icons/lia";
const Crop = () => {
  return (
    <section id="crops" className="bg-cyan-50 ">
      <div className="py-5">
        <HeadingText
          name="Premium Crop Varieties"
          description="   Our carefully selected crop varieties are chosen for their high yield
          potential, market demand, and adaptability to local growing
          conditions."
        />
      </div>
      <div className="flex justify-evenly flex-wrap gap-5 max-w-7xl mx-auto">
        {CropDetails.map((crop) => {
          return <CropCard key={crop.id} data={crop} />;
        })}
      </div>
      <div className="max-w-7xl mx-auto bg-green-700 text-white py-6 my-16 rounded-2xl">
        <div className="max-w-2xl mx-auto mb-5">
          <h2 className="flex items-center justify-center my-5 text-2xl gap-4 font-bold">
            <span className="text-5xl">
              <LiaCertificateSolid />
            </span>
            Certified Organic Practices
          </h2>
          <p className="text-lg font-semibold">
            All our crops are grown using sustainable, organic farming methods
            with proper certification and regular quality monitoring.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Crop;
