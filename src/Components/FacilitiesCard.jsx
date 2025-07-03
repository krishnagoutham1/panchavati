import PropTypes from "prop-types";

const FacilitiesCard = ({ data }) => {
  const { title, icon, description } = data;
  return (
    <div className="space-y-2 rounded-2xl bg-white p-4 text-left duration-500 hover:-translate-y-4 hover:shadow-2xl">
      <div className="inline-block rounded-2xl bg-green-400 p-3 text-xl font-bold text-white md:text-2xl">
        {icon}
      </div>
      <h2 className="text-xl font-semibold lg:text-2xl">{title}</h2>
      <p className="md:text-md text-sm">{description}</p>
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
