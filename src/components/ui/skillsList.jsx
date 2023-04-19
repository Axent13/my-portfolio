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
    <div className="flex flex-wrap justify-center lg:justify-between gap-4 md:gap-12 lg:gap-4 w-[86%] mx-auto p-8 md:p-16 bg-slate-800 rounded-xl -translate-y-[32%] lg:-translate-y-1/2 shadow-xl">
      {skills.map((skill) => (
        <div key={skill.name} className="shrink-0">
          <img
            className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 opacity-50"
            src={skill.image}
            alt={skill.name}
          />
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
