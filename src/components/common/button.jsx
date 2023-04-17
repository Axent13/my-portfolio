import PropTypes from "prop-types";
import githubIcon from "../../assets/github.svg";

const Button = ({ text, href, isFilled = false, withGithubIcon = false }) => {
  return (
    <a
      className={
        "py-4 px-8 text-2xl uppercase text-gray-300 font-medium border-2 rounded flex items-center transition-colors" +
        (withGithubIcon
          ? " hover:bg-slate-500 hover:text-slate-200"
          : " hover:bg-gray-300 hover:text-black") +
        (isFilled
          ? " bg-[#64644B] border-[#64644B] hover:border-[#a7a785] hover:bg-[#50503c] hover:text-[#c7c79f]"
          : " border-gray-300")
      }
      href={href}
    >
      {withGithubIcon && (
        <img src={githubIcon} alt="Github link" className="w-8 h-8 mr-2" />
      )}
      {text}
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isFilled: PropTypes.bool,
  withGithubIcon: PropTypes.bool,
};

export default Button;
