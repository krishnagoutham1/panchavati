import PropTypes from "prop-types";
import { FiCheckCircle } from "react-icons/fi";
import { LuRuler } from "react-icons/lu";

const PlotPlanCard = ({ data }) => {
  const { name, size, price, features, popular, image } = data;
  return (
    <div
      className={`bg-cyan-200 max-w-sm mb-8 mx-auto lg:w-90 rounded overflow-hidden shadow-lg flex flex-col ${
        popular ? "scale-105" : ""
      }`}
    >
      <div className="relative text-left">
        <img src={image} alt={name} className="w-full h-52 object-cover" />
        <div className="absolute bottom-0 bg-opacity-50 w-full text-white p-3">
          <p className="text-lg flex items-center gap-2 font-semibold">
            <LuRuler className="text-2xl font-extrabold" />
            {size}
          </p>
          <p className="font-bold text-xl">{name}</p>
        </div>
        {popular && (
          <div className="absolute top-2 right-2 text-white bg-green-800 px-3 py-1 rounded-2xl">
            Popular
          </div>
        )}
      </div>
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold">{price}</h2>
          <p className="mb-4">One-time investment</p>
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-lg">
                <FiCheckCircle className="text-green-700 font-semibold" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <button className="bg-green-600 text-white rounded-xl w-full py-2 hover:bg-green-700 transition">
            Select This Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlotPlanCard;

PlotPlanCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    size: PropTypes.string,
    price: PropTypes.string,
    features: PropTypes.array,
    popular: PropTypes.bool,
    image: PropTypes.string,
  }).isRequired,
};
