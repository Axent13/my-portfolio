import PropTypes from "prop-types";
import Button from "./button";

const Project = ({
  isEven = false,
  name,
  description,
  demoLink,
  codeLink,
  imageSrc,
}) => {
  return (
    <div
      className={
        "mt-44 flex items-center justify-between" +
        (isEven ? " flex-row-reverse" : "")
      }
    >
      <div className="w-[50%]">
        <img className="rounded-lg" src={imageSrc} alt={name} />
      </div>
      <div className="max-w-[40%]">
        <h3 className="text-slate-300 text-4xl">{name}</h3>
        <p className="text-slate-300 text-2xl mt-4">{description}</p>
        <div className="mt-16 flex">
          {demoLink && (
            <div className="mr-4">
              <Button text="Demo" href={demoLink} isFilled={true} />
            </div>
          )}
          {codeLink && (
            <div>
              <Button text="Code" href={codeLink} withGithubIcon={true} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  isEven: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  demoLink: PropTypes.string,
  codeLink: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default Project;
