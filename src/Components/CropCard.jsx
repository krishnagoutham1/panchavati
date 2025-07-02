import PropTypes from "prop-types";
const CropCard = ({ data }) => {
  const { name, image, description, maturity, season, yield: yieldType } = data;
  console.log(name);
  return (
    <div className="max-w-sm md:max-w-xs lg:max-w-2xs bg-cyan-200 overflow-hidden rounded-2xl shadow-2xl hover:-translate-y-2 duration-400 text-left">
      <div className="relative">
        <img
          className="hover:scale-110 duration-400 h-48 object-cover w-full bg-center"
          src={image}
        />
        <div className="absolute top-4 right-4 bg-green-700 px-3 rounded-3xl text-white text-md font-semibold">
          {yieldType}
        </div>
      </div>
      <div className="p-4 space-y-3">
        <h2 className="text-2xl">{name}</h2>
        <p className="text-gray-600 text-md">{description}</p>
        <div className="flex justify-between text-md">
          <span className="text-gray-600">Maturity</span>
          <span>{maturity}</span>
        </div>
        <div className="flex justify-between text-md">
          <span className="text-gray-600">Season</span>
          <span>{season}</span>
        </div>
      </div>
    </div>
  );
};

export default CropCard;

CropCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    maturity: PropTypes.string,
    season: PropTypes.string,
    yield: PropTypes.string,
  }).isRequired,
};
