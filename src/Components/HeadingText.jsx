import PropTypes from "prop-types";

const HeadingText = ({ name, description }) => {
  return (
    <div className="max-w-3xl mx-auto px-6 my-16">
      <h2 className="text-4xl font-bold mb-5">{name}</h2>
      <p className="text-lg font-semibold text-gray-500">{description}</p>
    </div>
  );
};

export default HeadingText;

HeadingText.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};
