import PropTypes from "prop-types";
import Project from "../common/project";

const ProjectsList = ({ projects }) => {
  let isEven = true;

  return (
    <div>
      <h2 className="uppercase text-slate-300 text-5xl text-center">
        Last <span className="border-b-4 border-[#64644B]">Projects</span>
      </h2>
      <div className="max-w-[95rem] mx-auto">
        {projects.map((project) => {
          isEven = !isEven;
          return <Project key={project.name} {...project} isEven={isEven} />;
        })}
      </div>
    </div>
  );
};

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectsList;
