import AboutMe from "./aboutMe";
const TopPart = () => {
  return (
    <div className="px-12 sm:px-20 md:px-[6.5rem] lg:px-44 py-36 bg-[url('src/assets/top-background.png')] bg-no-repeat bg-cover md:h-[45rem]">
      <AboutMe />
    </div>
  );
};

export default TopPart;
