import CropCard from "../Components/CropCard";
import HeadingText from "../Components/HeadingText";
import { CropDetails } from "../Utils/staticData";
import { LiaCertificateSolid } from "react-icons/lia";

const Crop = () => {
  return (
    <section id="crops" className="section-container">
      <HeadingText
        name="Premium Crop Varieties"
        description="Our carefully selected crop varieties are chosen for their high yield
          potential, market demand, and adaptability to local growing
          conditions."
      />

      <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {CropDetails.map((crop) => {
          return <CropCard key={crop.id} data={crop} />;
        })}
      </div>

      <div className="rounded-2xl bg-green-600 p-8 text-center text-white">
        <h3 className="mb-4 flex items-center justify-center gap-2 text-xl font-bold lg:gap-4 lg:text-2xl">
          <span className="text-3xl lg:text-5xl">
            <LiaCertificateSolid />
          </span>
          Certified Organic Practices
        </h3>
        <p className="text-md mx-auto mb-6 max-w-2xl opacity-90 md:text-lg">
          All our crops are grown using sustainable, organic farming methods
          with proper certification and regular quality monitoring.
        </p>
      </div>
    </section>
  );
};

export default Crop;
