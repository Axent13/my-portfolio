import PropTypes from "prop-types";

const Button = ({
  text,
  onClickFunction,
  isFilled = false,
  withGithubIcon = false,
}) => {
  return (
    <button
      className="py-4 px-5 text-2xl uppercase text-gray-300 font-medium border-2 border-gray-300 rounded"
      onClick={() => {
        onClickFunction();
      }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func.isRequired,
  isFilled: PropTypes.bool,
  withGithubIcon: PropTypes.bool,
};

export default Button;
