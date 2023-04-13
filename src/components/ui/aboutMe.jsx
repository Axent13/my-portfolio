import Button from "../common/button";
import githubIcon from "../../assets/github.svg";
import telegramIcon from "../../assets/telegram.svg";

const AboutMe = () => {
  const handleClick = () => {
    console.log("Go to Contact block");
  };

  return (
    <div>
      <p className="text-8xl text-gray-300">Mihail Silaev</p>
      <p className="text-5xl my-4 text-gray-300">Frontend web developer</p>
      <p className="text-2xl text-gray-300 max-w-5xl">
        Hello! Glad to see you here! My name is Mihail. I create user
        interfaces, websites and Fullstack Web Apps with React and NodeJS.
      </p>
      <div className="mt-8 flex items-center">
        <Button text="Contact me" onClickFunction={handleClick} />
        <a href="https://github.com/Axent13" className="ml-6">
          <img src={githubIcon} alt="Github link" className="w-20 h-20" />
        </a>
        <a href="https://t.me/Axent1398" className="ml-3">
          <img src={telegramIcon} alt="Telegram link" className="w-14 h-14" />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
