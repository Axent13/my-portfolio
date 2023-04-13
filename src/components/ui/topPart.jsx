import AboutMe from "./aboutMe";
import SkillsList from "./skillsList";

const TopPart = () => {
  return (
    <div className="px-44 py-36 bg-[url('src/assets/top-background.png')] bg-no-repeat bg-cover h-[45rem]">
      <AboutMe />
      <div>
        <SkillsList />
      </div>
    </div>
  );
};

export default TopPart;
