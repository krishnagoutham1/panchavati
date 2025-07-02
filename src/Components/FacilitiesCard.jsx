import PropTypes from "prop-types";

const FacilitiesCard = ({ data }) => {
  const { title, icon, description } = data;
  return (
    <div className="bg-blue-200 p-3 max-w-sm md:max-w-xs lg:max-w-2xs text-left rounded-2xl hover:-translate-y-4 duration-500 hover:shadow-2xl">
      <div className="p-3 bg-green-400 text-white inline-block text-2xl fon-bold rounded-2xl">
        {icon}
      </div>
      <h2 className="text-2xl fon-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FacilitiesCard;

FacilitiesCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    icon: PropTypes.element,
    description: PropTypes.string,
  }).isRequired,
};
