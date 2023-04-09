import html5Image from "../../assets/skillsIcons/html5.svg";
import css3Image from "../../assets/skillsIcons/css3.svg";
import sassImage from "../../assets/skillsIcons/sass.svg";
import javascriptImage from "../../assets/skillsIcons/javascript.svg";
import gitImage from "../../assets/skillsIcons/git.svg";
import reactImage from "../../assets/skillsIcons/react.svg";
import reduxImage from "../../assets/skillsIcons/redux.svg";
import pugImage from "../../assets/skillsIcons/pug.png";
import mongodbImage from "../../assets/skillsIcons/mongodb.svg";
import nodejsImage from "../../assets/skillsIcons/nodejs.svg";
import webpackImage from "../../assets/skillsIcons/webpack.svg";

const skills = [
  {
    name: "HTML5",
    image: html5Image,
  },
  {
    name: "CSS3",
    image: css3Image,
  },
  {
    name: "sass",
    image: sassImage,
  },
  {
    name: "Javscript",
    image: javascriptImage,
  },
  {
    name: "Git",
    image: gitImage,
  },
  {
    name: "React",
    image: reactImage,
  },
  {
    name: "Redux",
    image: reduxImage,
  },
  {
    name: "Pug",
    image: pugImage,
  },
  {
    name: "MongoDB",
    image: mongodbImage,
  },
  {
    name: "NodeJS",
    image: nodejsImage,
  },
  {
    name: "Webpack",
    image: webpackImage,
  },
];

const SkillsList = () => {
  return (
    <div>
      {skills.map((skill) => (
        <div key={skill.name}>
          <img src={skill.image} alt={skill.name} />
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
