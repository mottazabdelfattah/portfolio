import "./About.css";
import { Typewriter } from "react-simple-typewriter";
import SkillsRadial from "./SkillsRadial";
import { useLanguage } from "../context/LanguageProvider";
import uiText from "../data/uiText";

function About() {
  const { language } = useLanguage();
  const aboutText = uiText[language].about;

  return (
    <div id="about">
      <h2 className="typewriter-heading">
        <Typewriter
          words={aboutText.typewriter}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1200}
        />
      </h2>
      <div className="about-container">
        <div className="about-text">
          <p>{aboutText.paragraph}</p>

          <SkillsRadial />
        </div>

        <div className="about-photo">
          <img src="./assets/images/my-photo.jpg" alt="Moataz Abdelaal" />
          <p className="photo-credit">{aboutText.photoCredit}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
