import PropTypes from "prop-types";
import Project from "../common/project";

const ProjectsList = ({ projects }) => {
  return (
    <div>
      <h2>
        Last <span>Projects</span>
      </h2>
      {projects.map((project) => (
        <Project {...project} />
      ))}
    </div>
  );
};

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectsList;
