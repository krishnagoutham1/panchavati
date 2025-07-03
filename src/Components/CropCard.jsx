import PropTypes from "prop-types";
const CropCard = ({ data }) => {
  const { name, image, description, maturity, season, yield: yieldType } = data;

  return (
    <div className="group mx-auto mb-8 overflow-hidden rounded-2xl bg-white text-left shadow-2xl duration-400 hover:-translate-y-2 md:max-w-xs lg:mb-12 lg:max-w-2xs">
      <div className="relative">
        <img
          className="h-48 w-full bg-center object-cover duration-400 group-hover:scale-110"
          src={image}
        />
        <div className="text-md absolute top-4 right-4 rounded-3xl bg-green-700 px-3 font-semibold text-white">
          {yieldType}
        </div>
      </div>
      <div className="space-y-2 p-4 lg:space-y-3">
        <h2 className="text-2xl">{name}</h2>
        <p className="text-md text-gray-600">{description}</p>
        <div className="text-md flex justify-between">
          <span className="text-gray-600">Maturity</span>
          <span>{maturity}</span>
        </div>
        <div className="text-md flex justify-between">
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
