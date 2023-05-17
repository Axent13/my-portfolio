import PropTypes from "prop-types";
import githubIcon from "../../assets/github.svg";

const Button = ({
  text,
  href,
  isFilled = false,
  withGithubIcon = false,
  isExternalLink = false,
}) => {
  return (
    <a
      className={
        "py-4 px-8 text-2xl uppercase shrink-0 text-gray-300 font-medium border-2 rounded flex items-center transition-colors" +
        (isFilled
          ? " bg-[#64644B] border-[#64644B] hover:border-[#a7a785] hover:bg-[#50503c] hover:text-[#c7c79f]"
          : " border-gray-300 hover:bg-slate-600 hover:text-slate-50 ")
      }
      href={href}
      target={isExternalLink ? "_blank" : ""}
      rel="noreferrer noopener"
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
  href: PropTypes.string,
  isFilled: PropTypes.bool,
  withGithubIcon: PropTypes.bool,
  isExternalLink: PropTypes.bool,
};

export default Button;
