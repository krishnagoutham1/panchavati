import PropTypes from "prop-types";

const HeadingText = ({ name, description }) => {
  return (
    <div className="mx-auto my-8 max-w-3xl md:my-16">
      <h2 className="mb-4 text-3xl font-bold lg:text-4xl">{name}</h2>
      <p className="text-md font-semibold text-gray-500 lg:text-lg">
        {description}
      </p>
    </div>
  );
};

export default HeadingText;

HeadingText.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};
